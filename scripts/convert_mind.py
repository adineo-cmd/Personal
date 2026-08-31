#!/usr/bin/env python3
"""
convert_mind.py — parse raw (syntax-broken) mind*.js databases into clean
per-domain Astro data files: src/data/omnimind/domains/<slug>.js

Usage:
    python3 scripts/convert_mind.py --clean        # parse raw/mind*.js, wipe & rewrite
    python3 scripts/convert_mind.py a.js b.js      # explicit files (merged)
    python3 scripts/convert_mind.py --clean --no-check   # skip sanity check

A sanity check runs automatically after every conversion and exits non-zero
on failure, so you can wire it into CI if you want.
"""
import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

DIFF = {"beginner": "d-beg", "intermediate": "d-int", "advanced": "d-adv", "mastery": "d-mas"}

# key -> (label, icon, color, group). Unknown keys fall back to prettify().
META = {
    "cognitiveFoundation":   ("Cognitive Foundation", "🧬", "#5a80a8", "Core"),
    "mentalResilience":      ("Mental Resilience", "🔥", "#d86848", "Core"),
    "acceleratedLearning":   ("Accelerated Learning", "⚡", "#e0aa40", "Core"),
    "visualization":         ("Visualization & Neural Priming", "🌀", "#9070a0", "Performance"),
    "meditation":            ("Meditation & Mindfulness", "🧘", "#409898", "Core"),
    "strategicThinking":     ("Strategic Thinking", "♟️", "#5a80a8", "Cognition"),
    "flowState":             ("Flow State", "🌊", "#5a9870", "Performance"),
    "neuroOptimization":     ("Neuro-Biological Optimization", "💊", "#d09030", "Foundation"),
    "hyperMemory":           ("Hyper-Memory Systems", "🗝️", "#c06080", "Domains"),
    "speedProcessing":       ("Speed Reading & Info Processing", "🚀", "#409898", "Domains"),
    "emotionalIntelligence": ("Emotional Intelligence", "❤️", "#c06080", "Core"),
    "metaLearning":          ("Meta-Learning Architecture", "🔬", "#3090a8", "Domains"),
    "timeMastery":           ("Time Perception & Temporal Mastery", "⏱️", "#3090a8", "Domains"),
    "socialIntelligence":    ("Social Intelligence & Influence", "🎭", "#7060c0", "Social"),
    "identityEngineering":   ("Identity & Belief Architecture", "⚙️", "#9070a0", "Domains"),
    "existentialResilience": ("Existential Resilience", "🌌", "#5a80a8", "Foundation"),
    "sleepOptimization":     ("Lucid Dreaming & Sleep Optimization", "🌙", "#7060c0", "Foundation"),
    "integration":           ("Integration & Synthesis", "🌐", "#7060c0", "Foundation"),
    "metrics":               ("Metrics & Tracking", "📊", "#d09030", "Foundation"),
    "linguisticMastery":     ("Linguistic & Verbal Mastery", "🗣️", "#d86848", "Social"),
    "spatialIntelligence":   ("Spatial & Environmental Intelligence", "🗺️", "#5a9870", "Cognition"),
    "digitalArchitecture":   ("Digital & Data Architecture", "🖥️", "#3090a8", "Domains"),
    "strategicDominance":    ("Strategic Dominance", "👑", "#e0aa40", "Cognition"),
    "groupDynamics":         ("Leadership & Group Dynamics", "👥", "#d09030", "Social"),
    "resourceStrategy":      ("Resource & Strategic Leverage", "💡", "#d09030", "Cognition"),
    "integrationPractices":  ("Integration Practices", "🔄", "#7060c0", "Foundation"),
    "rapidComprehension":    ("Rapid Comprehension", "🎯", "#409898", "Domains"),
    "humanReading":          ("Human Reading", "👁️", "#7060c0", "Social"),
    "academicMastery":       ("Academic Mastery", "🎓", "#3090a8", "Domains"),
    "situationalControl":    ("Situational Control", "🧭", "#5a9870", "Cognition"),
}

# A subdomain key: quoted ("...") or bare (camelCase, may contain spaces / & ).
KEY = r'(?:"([^"]+)"|([A-Za-z_][\w]*(?:[ \t]+[\w&-]+)*))'
# Field boundary inside a technique object (survives nested quotes in values).
SPLIT = re.compile(r'",\s*(?=(?:id|name|mechanics|timing|recovery|difficulty|example)\s*:\s*")')


def clean_key(m):
    return (m.group(1) or m.group(2)).strip()


def prettify(s):
    s = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", s.strip())
    return " ".join(w[:1].upper() + w[1:] for w in s.split())


def parse_technique_objs(line):
    """Extract every { ... } object from a line (handles 2 objects per line)."""
    techs = []
    for m in re.finditer(r"\{[^{}]*\}", line):
        inner = m.group(0).strip()
        if inner.startswith("{"): inner = inner[1:]
        if inner.endswith("}"): inner = inner[:-1]
        t = {}
        for part in SPLIT.split(inner):
            km = re.match(r'\s*(\w+)\s*:\s*"(.*)$', part, flags=re.S)
            if not km: continue
            v = km.group(2)
            if v.endswith('"'): v = v[:-1]      # real terminator; inner quotes stay raw
            t[km.group(1)] = v.strip()
        if t.get("name"):
            techs.append(t)
    return techs


def to_out(t):
    d = (t.get("difficulty") or "").strip().lower()
    return {
        "id": (t.get("id") or "").strip(),
        "name": (t.get("name") or "").strip(),
        "desc": (t.get("mechanics") or "").strip(),
        "timing": (t.get("timing") or "").strip(),
        "recovery": (t.get("recovery") or "").strip(),
        "example": (t.get("example") or "").strip(),
        "tags": [d] if d else [],
        "diff": DIFF.get(d, "d-int"),
    }


def parse_file(path, warnings):
    meta, principles, domains, ids = {}, [], {}, {}
    mode = "root"
    dkey = skey = pending = None

    for lineno, rawline in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        line = rawline.strip()
        if not line: continue

        if mode == "root":
            if line.startswith("export"): continue
            if line.startswith("keyPrinciples"): mode = "principles"; continue
            if line == "domains: {": mode = "domains"; continue
            m = re.match(r'^(\w+)\s*:\s*"(.*)",?$', line)
            if m: meta[m.group(1)] = m.group(2).strip()
            continue

        if mode == "principles":
            if line in ("]", "],"): mode = "root"; continue
            if line.startswith('"'): principles.append(line.rstrip(",").strip('"').strip())
            continue

        # ── domains mode ──────────────────────────────────────────────
        if line.startswith("{ id:"):
            if pending is not None:                      # `coreExtraction` case: key had no '['
                skey = prettify(pending); pending = None
                domains[dkey]["subs"].setdefault(skey, [])
            if dkey and skey:
                for t in parse_technique_objs(line):
                    domains[dkey]["subs"][skey].append(t)
                    ids.setdefault(dkey, []).append(t.get("id"))
            else:
                warnings.append(f"{path.name}:{lineno} technique outside subdomain")
            continue

        if line in ("[", "[,"):                          # bracket on its own line
            if pending is not None:
                skey = prettify(pending); pending = None
                domains[dkey]["subs"].setdefault(skey, [])
            continue

        if line in ("]", "],"):
            skey, pending = None, None
            continue

        if line in ("}", "},", "};"):
            continue

        m = re.match(r"^([A-Za-z_]\w*)\s*:\s*\{$", line)          # domain start
        if m:
            dkey, skey, pending = m.group(1), None, None
            domains.setdefault(dkey, {"subs": {}})
            continue

        m = re.match(rf"^{KEY}\s*:?\s*\[$", line)                # `focus [` same line
        if m:
            skey = prettify(clean_key(m)); pending = None
            domains[dkey]["subs"].setdefault(skey, [])
            continue

        m = re.match(rf"^\],?\s*{KEY}$", line)                   # `], neuralPriming`
        if m:
            skey = None
            pending = clean_key(m)
            continue

        m = re.match(rf"^{KEY}$", line)                          # bare key, bracket next line
        if m:
            pending = clean_key(m)
            continue

        warnings.append(f"{path.name}:{lineno} unparsed: {line[:60]}")

    return meta, principles, domains, ids


def sanity_check(out_dir, merged, principles, site_meta, warnings, raw_total, all_ids):
    print("\n── sanity check ─────────────────────────────────")
    problems = []

    if warnings:
        problems.append(f"{len(warnings)} unparsed line(s) during parse")

    dupes = [i for i, n in Counter(all_ids).items() if n > 1 and i]
    if dupes:
        problems.append(f"duplicate technique ids: {dupes[:5]}")

    written_total = 0
    for key, d in merged.items():
        p = out_dir / "domains" / f"{key.lower()}.js"
        if not p.exists():
            problems.append(f"missing generated file for {key}"); continue
        text = p.read_text(encoding="utf-8")
        if not text.startswith("export default {") or not text.rstrip().endswith("};"):
            problems.append(f"{key}: bad file wrapper")
        body = text[len("export default "):text.rindex("}") + 1]
        try:
            obj = json.loads(body)
        except json.JSONDecodeError as e:
            problems.append(f"{key}: generated file is not valid JSON ({e})"); continue
        n = sum(len(sd["techniques"]) for sd in obj["subdomains"])
        written_total += n
        raw_n = sum(len(ts) for ts in d["subs"].values())
        if n != raw_n:
            problems.append(f"{key}: file has {n} techniques, parser saw {raw_n}")
        for sd in obj["subdomains"]:
            if not sd["techniques"]:
                problems.append(f"{key}: empty subdomain '{sd['name']}'")
            for t in sd["techniques"]:
                if not t.get("name") or not t.get("desc"):
                    problems.append(f"{key}/{sd['name']}: technique with empty name/desc")
                if t.get("diff") not in DIFF.values():
                    problems.append(f"{key}/{sd['name']}: bad diff {t.get('diff')!r}")

    if written_total != raw_total:
        problems.append(f"count mismatch: raw has {raw_total} objects, wrote {written_total}")
    if not principles:
        problems.append("no principles extracted")
    if not site_meta.get("name"):
        problems.append("no site meta (name) extracted")

    nsubs = sum(len(d["subs"]) for d in merged.values())
    print(f"   domains:    {len(merged)}")
    print(f"   subdomains: {nsubs}")
    print(f"   techniques: {written_total} (raw objects: {raw_total})")
    print(f"   principles: {len(principles)}")
    print(f"   warnings:   {len(warnings)}")

    if problems:
        print("\n   FAIL:")
        for p in problems[:20]: print("   ✗", p)
        return 1
    print("\n   PASS ✓ all generated files valid, counts match raw source")
    return 0


def main():
    ap = argparse.ArgumentParser(description="Convert raw mind*.js databases into Astro domain files.")
    ap.add_argument("files", nargs="*", help="raw files (default: src/data/omnimind/raw/mind*.js)")
    ap.add_argument("--out", default="src/data/omnimind")
    ap.add_argument("--clean", action="store_true", help="wipe domains/ before writing")
    ap.add_argument("--no-check", action="store_true", help="skip the sanity check")
    args = ap.parse_args()

    files = [Path(f) for f in args.files] or sorted(Path("src/data/omnimind/raw").glob("mind*.js"))
    if not files:
        sys.exit("no raw mind*.js files found (put them in src/data/omnimind/raw/)")

    out = Path(args.out)
    (out / "domains").mkdir(parents=True, exist_ok=True)
    if args.clean:
        for f in (out / "domains").glob("*.js"): f.unlink()

    merged, principles, site_meta, warnings, all_ids = {}, [], {}, [], []
    raw_total = 0

    for path in files:
        if not path.exists(): sys.exit(f"missing: {path}")
        raw = path.read_text(encoding="utf-8")
        raw_total += len(re.findall(r'\{\s*id:\s*"', raw))       # independent object count
        meta, pr, domains, ids = parse_file(path, warnings)
        site_meta.update(meta); principles = pr or principles
        for v in ids.values(): all_ids.extend(v)
        n = 0
        for key, d in domains.items():
            tgt = merged.setdefault(key, {"subs": {}})
            for sub, techs in d["subs"].items():
                tgt["subs"].setdefault(sub, []).extend(techs); n += len(techs)
        print(f"{path.name:14} → {len(domains)} domains, {n} techniques")

    for key, d in merged.items():
        label, icon, color, group = META.get(key, (prettify(key), "🧠", "#e0aa40", "Domains"))
        subs = [{"name": n, "techniques": [to_out(t) for t in ts]} for n, ts in d["subs"].items()]
        obj = {"label": label, "icon": icon, "color": color, "group": group,
               "sub": ", ".join(s["name"] for s in subs[:3]), "subdomains": subs}
        (out / "domains" / f"{key.lower()}.js").write_text(
            "export default " + json.dumps(obj, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")

    fmt = lambda p: (lambda i: f"**{p[:i]}:**{p[i+1:]}" if i > -1 else p)(p.find(":"))
    (out / "principles.js").write_text("export const principles = " + json.dumps(
        [{"text": fmt(p)} for p in principles], ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    (out / "meta.js").write_text("export const siteMeta = " + json.dumps(
        {k: site_meta[k] for k in ("name", "icon", "origin", "description") if k in site_meta},
        ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")

    total = sum(len(ts) for d in merged.values() for ts in d["subs"].values())
    print(f"\nwrote {len(merged)} domain files + principles.js + meta.js → {out}/  ({total} techniques total)")
    if warnings:
        print(f"\n⚠ {len(warnings)} unparsed lines:")
        for w in warnings[:10]: print("  ", w)

    if args.no_check:
        return 0
    return sanity_check(out, merged, principles, site_meta, warnings, raw_total, all_ids)


if __name__ == "__main__":
    sys.exit(main())