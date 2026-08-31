// src/data/exercise.js

// ================= WEIGHTS DATA =================
export const weightsData = {
  days: [
    {
      name: "Sun", full: "Sunday", label: "Arms + Shoulders — strength", type: "s",
      note: "Strength compounds first. Hypertrophy finishers after for stretched-position stimulus.",
      focus: "Biceps · Triceps · Brachialis · Shoulders",
      sections: [
        { t: "Warmup", k: "w", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Arm circles (forward + backward)", r: "15 each", s: "1", w: "" },
          { n: "Band shoulder dislocations", r: "12", s: "1", w: "" },
          { n: "Wrist rotations + finger extensions", r: "20 each dir.", s: "1", w: "" }
        ], note: "5 min cardio + shoulder + wrist prep" },
        { t: "Strength compounds", k: "s", note: "4–7 reps — 3–4 min rest between sets", ex: [
          { n: "Seated overhead barbell press", r: "4–6", s: "5 ×", w: "40 kg", sub: "Anterior + lateral delt — primary shoulder strength" },
          { n: "Barbell curl", r: "5–7", s: "4 ×", w: "25 kg", sub: "Bicep strength — heaviest curl of the week" },
          { n: "Close-grip bench press", r: "5–7", s: "4 ×", w: "50 kg", sub: "Tricep + inner chest — best tricep strength builder" }
        ]},
        { t: "Hypertrophy finishers", k: "n", note: "10–12 reps at 7/10 effort — stretched position stimulus", ex: [
          { n: "Overhead cable tricep extension", r: "10–12", s: "2 ×", w: "12.5 kg", sub: "Tricep long head at full stretch" },
          { n: "Preacher curl (EZ-bar)", r: "10–12", s: "2 ×", w: "17.5 kg", sub: "Bicep short head at stretch" }
        ]},
        { t: "Isolation", k: "i", note: "12–15 reps — chase the contraction", ex: [
          { n: "Cable lateral raise (seated, one arm)", r: "15", s: "3 ×", w: "7.5 kg", sub: "Lateral delt — seated eliminates all cheat" },
          { n: "Hammer curl", r: "12", s: "2 ×", w: "10 kg each", sub: "Brachialis + brachioradialis", add: true },
          { n: "Barbell reverse curl", r: "12", s: "2 ×", w: "15 kg", sub: "Wrist extensors — forearm balance" }
        ]},
        { t: "Structural balance", k: "b", note: "Rotator cuff + forearm — never skip", ex: [
          { n: "Face pulls", r: "15", s: "2 ×", w: "12.5 kg", sub: "Rear delt + external rotators" },
          { n: "Band external rotation (elbow at 90°)", r: "15/side", s: "1 ×", w: "Light band", sub: "Rotator cuff prehab" },
          { n: "Wrist curls + reverse (superset)", r: "20 each", s: "1 ×", w: "Light bar", sub: "Forearm flexor/extensor balance" }
        ]}
      ]
    },
    {
      name: "Mon", full: "Monday", label: "Chest + Back — strength", type: "s",
      note: "Heaviest pressing and pulling of the week.",
      focus: "Chest · Lats · Upper Back",
      sections: [
        { t: "Warmup", k: "w", note: "5 min cardio + thoracic + scapular prep", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Arm swings across body", r: "15/side", s: "1", w: "" },
          { n: "Cat-cow flow", r: "12", s: "1", w: "" },
          { n: "Scapular wall slides", r: "10", s: "1", w: "" }
        ]},
        { t: "Strength compounds", k: "s", note: "4–6 reps — 3–4 min rest", ex: [
          { n: "Barbell bench press", r: "4–6", s: "5 ×", w: "60 kg", sub: "Primary chest + front delt + tricep" },
          { n: "Weighted pull-ups (wide grip)", r: "4–6", s: "5 ×", w: "BW +5 kg", sub: "Primary lat + upper back + bicep" },
          { n: "Barbell bent-over row", r: "5–7", s: "4 ×", w: "60 kg", sub: "Upper back thickness — rhomboids + traps" }
        ]},
        { t: "Isolation", k: "i", note: "12–15 reps — full range, controlled", ex: [
          { n: "Chest-supported Y-raise (DB)", r: "15", s: "2 ×", w: "5 kg each", sub: "Lower trap — critical for shoulder health" },
          { n: "Rear delt reverse fly (cables)", r: "15", s: "2 ×", w: "8 kg/side", sub: "Posterior delt balance" }
        ]},
        { t: "Structural balance", k: "b", note: "Scapular integrity — counterbalances heavy pressing", ex: [
          { n: "Band pull-aparts", r: "20", s: "2 ×", w: "Light band", sub: "Mid-trap + scapular retraction" },
          { n: "Scapular push-ups", r: "12", s: "1 ×", w: "Bodyweight", sub: "Serratus anterior activation" },
          { n: "Doorway pec stretch", r: "30 sec/side", s: "1 ×", w: "", sub: "Chest mobility — prevents rounded shoulders" }
        ]}
      ]
    },
    {
      name: "Tue", full: "Tuesday", label: "Legs — strength", type: "l",
      note: "Squat before deadlift always. Hip hinge drill mandatory.",
      focus: "Quads · Full Posterior Chain · Deadlift · Calves",
      sections: [
        { t: "Warmup", k: "w", note: "Hip hinge drill is mandatory before deadlift", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Forward + side leg swings", r: "15/leg", s: "1", w: "" },
          { n: "Hip circles (standing)", r: "10 each dir.", s: "1", w: "" },
          { n: "Hip hinge drill (dowel rod)", r: "10", s: "1", w: "", sub: "Grooves deadlift pattern" }
        ]},
        { t: "Strength compounds", k: "s", note: "Squat ALWAYS before deadlift. 3–4 min rest.", ex: [
          { n: "Back squat", r: "4–6", s: "5 ×", w: "65 kg", sub: "Quad + glute" },
          { n: "Conventional deadlift", r: "3–5", s: "4 ×", w: "80 kg", sub: "Full posterior chain" },
          { n: "Standing calf raise (heavy)", r: "8–10", s: "4 ×", w: "40 kg bar", sub: "Gastrocnemius strength" }
        ]},
        { t: "Structural balance", k: "b", note: "The exercises most people skip", ex: [
          { n: "Nordic hamstring curl", r: "5–8", s: "2 ×", w: "Bodyweight", sub: "Hamstring eccentric" },
          { n: "Hip abduction machine", r: "15", s: "2 ×", w: "Light", sub: "Glute medius" },
          { n: "Tibialis raise (wall-assisted)", r: "20", s: "2 ×", w: "Bodyweight", sub: "Shin + ankle balance" }
        ]},
        { t: "Core", k: "i", note: "After all loaded spinal work", ex: [
          { n: "Bird-dog", r: "8/side", s: "2 ×", w: "Bodyweight", sub: "Deep spinal stabilisers" },
          { n: "Dead bug", r: "10/side", s: "2 ×", w: "Bodyweight", sub: "Anti-extension bracing" },
          { n: "Pallof press (cable)", r: "10 sec hold/side", s: "2 ×", w: "Light", sub: "Anti-rotation" }
        ]}
      ]
    },
    {
      name: "Wed", full: "Wednesday", label: "Arms + Shoulders — hypertrophy", type: "h",
      note: "Full hypertrophy session — 9 working exercises.",
      focus: "Bicep · Tricep · Lateral Delt · Rear Delt · Forearms",
      sections: [
        { t: "Warmup", k: "w", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Arm circles", r: "15 each", s: "1", w: "" },
          { n: "Band shoulder dislocations", r: "12", s: "1", w: "" }
        ]},
        { t: "Hypertrophy compounds", k: "h", note: "10–12 reps — 2 sec down", ex: [
          { n: "Arnold press", r: "10–12", s: "4 ×", w: "14 kg each", sub: "All three delt heads" },
          { n: "Incline dumbbell curl", r: "10–12", s: "3 ×", w: "10 kg each", sub: "Bicep long head" },
          { n: "Overhead cable tricep extension", r: "10–12", s: "3 ×", w: "12.5 kg", sub: "Tricep long head" }
        ]},
        { t: "Isolation", k: "i", note: "12–20 reps — pump", ex: [
          { n: "Preacher curl (EZ-bar)", r: "10–12", s: "3 ×", w: "17.5 kg", sub: "Bicep short head" },
          { n: "Tricep pushdown (rope)", r: "12–15", s: "3 ×", w: "15 kg", sub: "Lateral + medial head" },
          { n: "Cable lateral raise", r: "15–20", s: "3 ×", w: "7.5 kg", sub: "Lateral delt" }
        ]},
        { t: "Structural balance", k: "b", ex: [
          { n: "Face pulls", r: "15", s: "2 ×", w: "12.5 kg", sub: "Rear delt" },
          { n: "Band external rotation", r: "15/side", s: "1 ×", w: "Light band", sub: "Rotator cuff", add: true },
          { n: "Wrist curls + reverse", r: "20 each", s: "1 ×", w: "Light bar", sub: "Forearms", add: true }
        ]}
      ]
    },
    {
      name: "Thu", full: "Thursday", label: "Chest + Back — hypertrophy", type: "h",
      note: "Different angles to Monday throughout.",
      focus: "Upper Chest · Lat Width · Upper Back Detail",
      sections: [
        { t: "Warmup", k: "w", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Arm swings", r: "15/side", s: "1", w: "" }
        ]},
        { t: "Hypertrophy compounds", k: "h", ex: [
          { n: "Incline dumbbell press", r: "8–12", s: "4 ×", w: "17.5 kg each", sub: "Upper chest" },
          { n: "Single-arm dumbbell row", r: "10–12", s: "4 ×", w: "20 kg", sub: "Lat + rhomboid" },
          { n: "Seated cable row", r: "10–12", s: "3 ×", w: "50 kg", sub: "Upper back", chg: true }
        ]},
        { t: "Isolation", k: "i", ex: [
          { n: "Cable chest fly", r: "12–15", s: "3 ×", w: "10 kg/side", sub: "Chest stretch" },
          { n: "Lat pulldown", r: "10–12", s: "3 ×", w: "45 kg", sub: "Lower lat" },
          { n: "Rear delt cable fly", r: "15", s: "2 ×", w: "8 kg/side", sub: "Posterior delt" }
        ]},
        { t: "Structural balance", k: "b", ex: [
          { n: "Scapular wall slides", r: "12", s: "2 ×", w: "Bodyweight", sub: "Lower trap" },
          { n: "Band pull-aparts", r: "20", s: "2 ×", w: "Light band" }
        ]}
      ]
    },
    {
      name: "Fri", full: "Friday", label: "Legs — hypertrophy", type: "l",
      note: "No heavy deadlift — RDL is lighter and controlled.",
      focus: "Quad Detail · Glute · Hamstring · RDL · Calf Volume",
      sections: [
        { t: "Warmup", k: "w", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "90/90 hip switches", r: "8/side", s: "1", w: "" }
        ]},
        { t: "Hypertrophy compounds", k: "h", ex: [
          { n: "Leg press", r: "10–12", s: "4 ×", w: "140 kg", sub: "Quad + glute" },
          { n: "Romanian deadlift", r: "10–12", s: "3 ×", w: "55 kg", sub: "Hamstring stretch" },
          { n: "Walking lunges", r: "12/leg", s: "3 ×", w: "12.5 kg each" }
        ]},
        { t: "Isolation", k: "i", ex: [
          { n: "Leg extension", r: "15–20", s: "3 ×", w: "20 kg", sub: "Quad isolation" },
          { n: "Seated leg curl", r: "12–15", s: "3 ×", w: "25 kg", sub: "Hamstring" },
          { n: "Seated calf raise", r: "20", s: "3 ×", w: "30 kg", sub: "Soleus" }
        ]},
        { t: "Structural balance", k: "b", ex: [
          { n: "Hip abduction machine", r: "15", s: "2 ×", w: "Light" },
          { n: "Tibialis raise", r: "20", s: "2 ×", w: "Bodyweight" }
        ]},
        { t: "Core", k: "i", ex: [
          { n: "Weighted cable crunch", r: "15", s: "2 ×", w: "20 kg" },
          { n: "Hanging leg raise", r: "12", s: "2 ×", w: "Bodyweight" },
          { n: "Weighted Russian twists", r: "20", s: "1 ×", w: "10 kg plate" }
        ]}
      ]
    },
    {
      name: "Sat", full: "Saturday", label: "Active recovery", type: "r",
      note: "Muscle is built during recovery, not during training.",
      focus: "Mobility · Foam rolling · Weekly review",
      sections: [
        { t: "Active movement", k: "w", ex: [
          { n: "Light walk or easy cycling", r: "20 min", s: "", w: "" },
          { n: "Full-body foam rolling", r: "10 min", s: "", w: "" }
        ]},
        { t: "Mobility circuit", k: "i", ex: [
          { n: "Deep lunge with rotation", r: "8/side", s: "1 ×", w: "" },
          { n: "Thread-the-needle", r: "10/side", s: "1 ×", w: "" },
          { n: "Couch stretch", r: "45 sec/side", s: "1 ×", w: "" }
        ]},
        { t: "Weekly review", k: "b", ex: [
          { n: "Log all weights + reps", r: "", s: "", w: "" },
          { n: "Pick one lift to push next week", r: "", s: "", w: "" }
        ]}
      ]
    }
  ]
};

// ================= CALISTHENICS DATA =================
export const calisthenicsData = {
  views: [
    { id: "overview", label: "How it works" },
    { id: "sun", label: "Sun" },
    { id: "mon", label: "Mon" },
    { id: "tue", label: "Tue" },
    { id: "wed", label: "Wed" },
    { id: "thu", label: "Thu" },
    { id: "fri", label: "Fri" },
    { id: "sat", label: "Sat — skill day" },
    { id: "phases", label: "Phases" }
  ],
  days: {
    sun: {
      label: "Arms + Shoulders — strength + skill", type: "s",
      note: "Skill work added at the very start before any lifting.",
      focus: "Biceps · Triceps · Shoulders + Planche & HSPU progressions",
      sections: [
        { t: "Skill work — planche + HSPU", k: "k", note: "Always first — 8 min total, rest 90 sec", ex: [
          { n: "Planche lean (straight body, lean forward)", r: "3 × 10 sec", s: "", w: "Skill", sub: "Protracted scapula, posterior pelvic tilt", cal: true },
          { n: "Pike push-ups (feet elevated on bench)", r: "3 × 6–8", s: "", w: "Skill", sub: "Vertical torso, touch head to floor — HSPU progression", cal: true },
          { n: "Wall handstand hold", r: "2 × 20 sec", s: "", w: "Skill", sub: "Chest to wall, hollow body, push through shoulders", cal: true }
        ]},
        { t: "Strength compounds", k: "s", note: "4–7 reps — heaviest arm and shoulder work. 3–4 min rest.", ex: [
          { n: "Seated overhead barbell press", r: "4–6", s: "5 ×", w: "40 kg", sub: "Anterior + lateral delt strength" },
          { n: "Barbell curl", r: "5–7", s: "4 ×", w: "25 kg", sub: "Bicep strength — heaviest curl of the week" },
          { n: "Close-grip bench press", r: "5–7", s: "4 ×", w: "50 kg", sub: "Tricep + inner chest strength" }
        ]},
        { t: "Hypertrophy finishers", k: "n", note: "10–12 reps at 7/10 effort", ex: [
          { n: "Overhead cable tricep extension", r: "10–12", s: "2 ×", w: "12.5 kg", sub: "Tricep long head at full stretch" },
          { n: "Preacher curl (EZ-bar)", r: "10–12", s: "2 ×", w: "17.5 kg", sub: "Bicep short head at stretch" }
        ]},
        { t: "Isolation", k: "i", note: "12–15 reps", ex: [
          { n: "Cable lateral raise (seated, one arm)", r: "15", s: "3 ×", w: "7.5 kg", sub: "Lateral delt — seated eliminates all cheat" },
          { n: "Barbell reverse curl", r: "12", s: "2 ×", w: "15 kg", sub: "Brachioradialis + wrist extensors" }
        ]},
        { t: "Structural balance", k: "b", note: "Always last", ex: [
          { n: "Face pulls", r: "15", s: "2 ×", w: "12.5 kg", sub: "Rear delt + external rotators" },
          { n: "Band external rotation (elbow at 90°)", r: "15/side", s: "1 ×", w: "Light band", sub: "Rotator cuff prehab" },
          { n: "Wrist curls + reverse (superset)", r: "20 each", s: "1 ×", w: "Light bar", sub: "Forearm balance" }
        ]}
      ]
    },
    mon: {
      label: "Chest + Back — strength + skill", type: "s",
      note: "Pull-ups replaced with weighted pull-ups AND a front lever skill block.",
      focus: "Chest · Lats · Upper Back + Front lever & Muscle-up progressions",
      sections: [
        { t: "Skill work — front lever + muscle-up", k: "k", note: "Always first — 8 min total", ex: [
          { n: "Tuck front lever hold", r: "4 × 5–8 sec", s: "", w: "Skill", sub: "Arms straight, hips tucked, body parallel", cal: true },
          { n: "Explosive pull-ups (bar to chest)", r: "4 × 3–5", s: "", w: "Skill", sub: "Bar must reach sternum — prerequisite for muscle-up", cal: true },
          { n: "Muscle-up transition drill (jump to support)", r: "3 × 3", s: "", w: "Skill", sub: "Practice the turning point — hardest part", cal: true }
        ]},
        { t: "Strength compounds", k: "s", note: "4–6 reps — 3–4 min rest.", ex: [
          { n: "Barbell bench press", r: "4–6", s: "5 ×", w: "60 kg", sub: "Primary chest + front delt + tricep" },
          { n: "Weighted pull-ups (wide grip)", r: "4–6", s: "5 ×", w: "BW +5 kg", sub: "Lat + upper back" },
          { n: "Barbell bent-over row", r: "5–7", s: "4 ×", w: "60 kg", sub: "Upper back thickness" }
        ]},
        { t: "Isolation", k: "i", note: "12–15 reps", ex: [
          { n: "Chest-supported Y-raise (DB)", r: "15", s: "2 ×", w: "5 kg each", sub: "Lower trap" },
          { n: "Rear delt reverse fly (cables)", r: "15", s: "2 ×", w: "8 kg/side", sub: "Posterior delt balance" }
        ]},
        { t: "Structural balance", k: "b", note: "Scapular integrity", ex: [
          { n: "Band pull-aparts", r: "20", s: "2 ×", w: "Light band", sub: "Mid-trap" },
          { n: "Scapular push-ups", r: "12", s: "1 ×", w: "Bodyweight", sub: "Serratus anterior", cal: true },
          { n: "Skin the cat (rings or bar)", r: "3 × 3", s: "", w: "Bodyweight", sub: "Best shoulder mobility movement", cal: true }
        ]}
      ]
    },
    tue: {
      label: "Legs — strength", type: "l",
      note: "No calisthenics skill work on leg day. Pistol squat progression is added as warmup activation.",
      focus: "Quads · Full Posterior Chain · Deadlift · Pistol squat progression",
      sections: [
        { t: "Warmup + pistol squat skill", k: "k", note: "Pistol squat here serves dual purpose", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Hip hinge drill (dowel rod)", r: "10", s: "1", w: "", sub: "Deadlift pattern" },
          { n: "Assisted pistol squat (TRX or ring)", r: "5/leg", s: "3 ×", w: "Skill", sub: "Single-leg squat to full depth", cal: true },
          { n: "Forward + side leg swings", r: "15/leg", s: "1", w: "" },
          { n: "90/90 hip switches", r: "8/side", s: "1", w: "" }
        ]},
        { t: "Strength compounds", k: "s", note: "Squat ALWAYS before deadlift.", ex: [
          { n: "Back squat", r: "4–6", s: "5 ×", w: "65 kg", sub: "Quad + glute" },
          { n: "Conventional deadlift", r: "3–5", s: "4 ×", w: "80 kg", sub: "Full posterior chain" },
          { n: "Standing calf raise (heavy)", r: "8–10", s: "4 ×", w: "40 kg bar", sub: "Gastrocnemius strength" }
        ]},
        { t: "Structural balance", k: "b", note: "Knee health · hip stability", ex: [
          { n: "Nordic hamstring curl", r: "5–8", s: "2 ×", w: "Bodyweight", sub: "Hamstring eccentric", cal: true },
          { n: "Hip abduction machine", r: "15", s: "2 ×", w: "Light", sub: "Glute medius" },
          { n: "Tibialis raise (wall-assisted)", r: "20", s: "2 ×", w: "Bodyweight", sub: "Shin + ankle balance", cal: true }
        ]},
        { t: "Core", k: "i", note: "After all loaded spinal work", ex: [
          { n: "Dragon flag negatives (slow lower)", r: "3–5 slow reps", s: "3 ×", w: "Bodyweight", sub: "Best abs exercise in existence", cal: true },
          { n: "Dead bug", r: "10/side", s: "2 ×", w: "Bodyweight", sub: "Anti-extension bracing" },
          { n: "Pallof press (cable)", r: "10 sec hold/side", s: "2 ×", w: "Light", sub: "Anti-rotation" }
        ]}
      ]
    },
    wed: {
      label: "Arms + Shoulders — hypertrophy", type: "h",
      note: "Pure hypertrophy day — no heavy skill work, just light maintenance holds.",
      focus: "Bicep Peak · Tricep Long Head · Full Shoulder + Skill maintenance",
      sections: [
        { t: "Skill maintenance — 4 min only", k: "k", note: "Not training — just keeping the neural pattern alive", ex: [
          { n: "Planche lean hold", r: "2 × 10 sec", s: "", w: "Maintenance", sub: "Keep the pattern warm", cal: true },
          { n: "Handstand wall hold", r: "2 × 20 sec", s: "", w: "Maintenance", sub: "Shoulder activation before volume work", cal: true }
        ]},
        { t: "Hypertrophy compounds", k: "h", note: "10–12 reps — 2 sec down", ex: [
          { n: "Arnold press", r: "10–12", s: "4 ×", w: "14 kg each", sub: "All three delt heads" },
          { n: "Incline dumbbell curl", r: "10–12", s: "3 ×", w: "10 kg each", sub: "Bicep long head" },
          { n: "Overhead cable tricep extension", r: "10–12", s: "3 ×", w: "12.5 kg", sub: "Tricep long head" }
        ]},
        { t: "Isolation", k: "i", note: "12–20 reps — pump", ex: [
          { n: "Preacher curl (EZ-bar)", r: "10–12", s: "3 ×", w: "17.5 kg", sub: "Bicep short head" },
          { n: "Tricep pushdown (rope)", r: "12–15", s: "3 ×", w: "15 kg", sub: "Lateral + medial head" },
          { n: "Hammer curl", r: "12", s: "2 ×", w: "10 kg each", sub: "Brachialis" },
          { n: "Cable lateral raise", r: "15–20", s: "3 ×", w: "7.5 kg", sub: "Lateral delt" }
        ]},
        { t: "Structural balance", k: "b", note: "Always last", ex: [
          { n: "Face pulls", r: "15", s: "2 ×", w: "12.5 kg", sub: "Rear delt" },
          { n: "DB pullover (serratus focus)", r: "15", s: "2 ×", w: "15 kg", sub: "Serratus anterior" },
          { n: "Band external rotation", r: "15/side", s: "1 ×", w: "Light band", sub: "Rotator cuff" },
          { n: "Wrist curls + reverse", r: "20 each", s: "1 ×", w: "Light bar", sub: "Forearm balance" }
        ]}
      ]
    },
    thu: {
      label: "Chest + Back — hypertrophy + skill", type: "h",
      note: "Archer pull-ups replace one set of lat pulldown.",
      focus: "Upper Chest · Lat Width · Upper Back + Archer pull-up & Pseudo planche",
      sections: [
        { t: "Skill maintenance — 4 min only", k: "k", note: "Tuck front lever and muscle-up pattern", ex: [
          { n: "Tuck front lever hold", r: "2 × 5 sec", s: "", w: "Maintenance", sub: "Neural pattern", cal: true },
          { n: "Explosive pull-up (bar to chest)", r: "3 × 3", s: "", w: "Maintenance", sub: "Muscle-up pattern", cal: true }
        ]},
        { t: "Hypertrophy compounds", k: "h", note: "8–12 reps — controlled tempo", ex: [
          { n: "Pseudo planche push-ups", r: "8–10", s: "3 ×", w: "Bodyweight", sub: "Fingers back, shoulders over hands", cal: true },
          { n: "Incline dumbbell press", r: "8–12", s: "3 ×", w: "17.5 kg each", sub: "Upper chest" },
          { n: "Single-arm dumbbell row", r: "10–12", s: "4 ×", w: "20 kg", sub: "Lat + rhomboid" },
          { n: "Chest-supported T-bar row", r: "10–12", s: "3 ×", w: "40 kg", sub: "Upper back thickness" }
        ]},
        { t: "Calisthenics isolation", k: "k", note: "Archer pull-ups — single best lat width builder", ex: [
          { n: "Archer pull-ups", r: "4–6/side", s: "3 ×", w: "Bodyweight", sub: "One arm pulls, other extended", cal: true },
          { n: "Australian rows (feet elevated)", r: "12–15", s: "3 ×", w: "Bodyweight", sub: "Horizontal pull", cal: true }
        ]},
        { t: "Isolation", k: "i", note: "12–15 reps", ex: [
          { n: "Cable chest fly", r: "12–15", s: "3 ×", w: "10 kg/side", sub: "Chest stretch" },
          { n: "Rear delt cable fly", r: "15", s: "2 ×", w: "8 kg/side", sub: "Posterior delt" }
        ]},
        { t: "Structural balance", k: "b", note: "Scapular function", ex: [
          { n: "Scapular wall slides", r: "12", s: "2 ×", w: "Bodyweight", sub: "Lower trap" },
          { n: "Band pull-aparts", r: "20", s: "2 ×", w: "Light band", sub: "Horizontal pull balance" },
          { n: "Dead hang", r: "2 × 30 sec", s: "", w: "Bodyweight", sub: "Spinal decompression + grip", cal: true }
        ]}
      ]
    },
    fri: {
      label: "Legs — hypertrophy + skill", type: "l",
      note: "Dragon flag negatives replace Russian twists. L-sit progression added.",
      focus: "Quad · Glute · Hamstring · L-sit progression · Dragon flag",
      sections: [
        { t: "Warmup + skill activation", k: "k", note: "Pistol squat maintenance + hip activation", ex: [
          { n: "Treadmill / bike", r: "5 min", s: "", w: "" },
          { n: "Assisted pistol squat", r: "3/leg", s: "2 ×", w: "Maintenance", sub: "Keeps the pattern sharp", cal: true },
          { n: "90/90 hip switches", r: "8/side", s: "1", w: "", sub: "Deep hip rotators" },
          { n: "Banded clamshells", r: "15/side", s: "1", w: "" }
        ]},
        { t: "Hypertrophy compounds", k: "h", note: "10–15 reps — squeeze glutes at top", ex: [
          { n: "Leg press", r: "10–12", s: "4 ×", w: "140 kg", sub: "Quad + glute" },
          { n: "Romanian deadlift", r: "10–12", s: "3 ×", w: "55 kg", sub: "Hamstring at stretch" },
          { n: "Walking lunges", r: "12/leg", s: "3 ×", w: "12.5 kg each", sub: "Unilateral quad + glute" }
        ]},
        { t: "Isolation", k: "i", note: "12–20 reps — slow eccentric", ex: [
          { n: "Leg extension", r: "15–20", s: "3 ×", w: "20 kg", sub: "Quad isolation" },
          { n: "Seated leg curl", r: "12–15", s: "3 ×", w: "25 kg", sub: "Hamstring" },
          { n: "Seated calf raise", r: "20", s: "3 ×", w: "30 kg", sub: "Soleus" }
        ]},
        { t: "Structural balance", k: "b", note: "Hip stability + ankle health", ex: [
          { n: "Hip abduction machine", r: "15", s: "2 ×", w: "Light", sub: "Glute medius" },
          { n: "Tibialis raise", r: "20", s: "2 ×", w: "Bodyweight", sub: "Shin strengthening", cal: true }
        ]},
        { t: "Core — L-sit + dragon flag", k: "k", note: "Calisthenics core finisher", ex: [
          { n: "Tuck L-sit hold", r: "4 × 8–10 sec", s: "", w: "Skill", sub: "Arms locked, hips up", cal: true },
          { n: "Dragon flag negatives", r: "3–5 slow reps", s: "3 ×", w: "Bodyweight", sub: "5 sec down minimum", cal: true },
          { n: "Weighted cable crunch", r: "15", s: "2 ×", w: "20 kg", sub: "Upper abs" },
          { n: "Hanging leg raise", r: "12", s: "2 ×", w: "Bodyweight", sub: "Lower abs + hip flexors", cal: true }
        ]}
      ]
    },
    sat: {
      label: "Skill day — calisthenics only", type: "k",
      note: "Saturday transforms from passive recovery to an active skill day.",
      focus: "Muscle-up · Human flag · Planche · Front lever · Mobility",
      sections: [
        { t: "Skill practice — 30–40 min total", k: "k", note: "Never go to failure. Stop 2 seconds before form breaks.", ex: [
          { n: "Muscle-up progression", r: "5 × 3–5", s: "", w: "Skill", sub: "Full movement pattern", cal: true },
          { n: "Planche progression (tuck attempt)", r: "4 × 5 sec hold", s: "", w: "Skill", sub: "Pick up from Sunday", cal: true },
          { n: "Front lever progression (tuck hold)", r: "4 × 6–8 sec", s: "", w: "Skill", sub: "Pick up from Monday", cal: true },
          { n: "Human flag (tuck or clutch)", r: "3 × 5 sec/side", s: "", w: "Skill", sub: "Lateral chain", cal: true },
          { n: "L-sit progression", r: "4 × max hold", s: "", w: "Skill", sub: "Pick up from Friday", cal: true }
        ]},
        { t: "Mobility + recovery", k: "b", note: "Never skip this", ex: [
          { n: "Full-body foam rolling", r: "10 min", s: "", w: "" },
          { n: "Deep lunge with rotation", r: "8/side", s: "1 ×", w: "" },
          { n: "Thread-the-needle", r: "10/side", s: "1 ×", w: "" },
          { n: "Couch stretch", r: "45 sec/side", s: "1 ×", w: "" },
          { n: "Wrist flexor + extensor stretch", r: "45 sec each", s: "1 ×", w: "", sub: "Bar work accumulates strain" },
          { n: "Dead hang (passive)", r: "2 × 45 sec", s: "", w: "", sub: "Spinal decompression", cal: true }
        ]},
        { t: "Weekly review", k: "i", note: "5 minutes of planning beats a wasted week", ex: [
          { n: "Log weights + reps + skill progress", r: "", s: "", w: "" },
          { n: "Pick one lift and one skill to push next week", r: "", s: "", w: "" }
        ]}
      ]
    }
  },
  overview: {
    rules: [
      { c: "purple", la: "THE CORE PRINCIPLE", t: "Skill work always first, weights second, isolation last", s: "CNS is sharpest at the start. Planche and front lever demand maximum neural focus. Order is non-negotiable: skill → compounds → isolation → structural balance." },
      { c: "green", la: "WHAT CHANGES FROM YOUR CURRENT PROGRAM", t: "8 changes across the 6 days — nothing else moves", s: "Sun: +8 min skill block. Mon: +8 min skill block + skin the cat. Tue: pistol squat warmup + dragon flag. Wed: 4 min maintenance. Thu: pseudo planche + archer pull-ups. Fri: L-sit + dragon flag. Sat: active skill day." },
      { c: "amber", la: "FATIGUE IMPACT", t: "Skill blocks add 8–10 min to Mon and Sun — sessions stay under 80 min", s: "Skill work at the start costs almost no muscular fatigue. CNS cost is real but small. Wednesday/Thursday maintenance adds only 4 minutes. Saturday replaces passive recovery." },
      { c: "blue", la: "HOW FAST WILL SKILLS DEVELOP", t: "With this frequency each skill gets 2–3 practice sessions per week", s: "Planche: 3x/wk. Front lever: 3x/wk. Muscle-up: 3x/wk. Pistol squat: 2x/wk. L-sit: 2x/wk. Most see measurable progress every 2–3 weeks." },
      { c: "red", la: "THE ONE RULE THAT DETERMINES EVERYTHING", t: "Never practice a skill when fatigued from the previous exercise", s: "Especially on Saturday. If beat up, reduce to 20 min easy holds. Practicing with a fatigued CNS builds bad patterns. A missed session is better than poor form." }
    ]
  },
  phases: [
    { badge: "Phase 1 — weeks 1–8", bc: "bg-emerald-500/10 text-emerald-400", title: "Foundation", desc: "Follow the hybrid exactly as written. Focus on learning positions correctly. Do not rush harder progressions. Every session should end feeling like you could have done one more set.", goal: "Goal: 20 sec tuck front lever, consistent planche lean, 10 sec tuck L-sit, 5 muscle-up transition drills clean." },
    { badge: "Phase 2 — weeks 9–20", bc: "bg-sky-500/10 text-sky-400", title: "Progression", desc: "Advance each skill one step. Advanced tuck front lever, straddle planche lean, one-leg L-sit, band-assisted muscle-up. Weighted compounds should also progress.", goal: "Goal: First band-assisted muscle-up, 15 sec advanced tuck front lever, consistent L-sit on parallel bars." },
    { badge: "Phase 3 — weeks 21+", bc: "bg-indigo-500/10 text-indigo-400", title: "Mastery", desc: "Full muscle-up attempts, straddle front lever, full L-sit, planche push-up attempts. Calisthenics work starts visibly transforming physique — chest, back and shoulder density unlike either system alone.", goal: "Goal: Clean muscle-up, 10 sec straddle front lever, full L-sit 15 sec, pseudo planche push-ups 15 reps." }
  ]
};

// ================= GUIDE DATA =================
export const guideViews = [
  { id: "order", label: "Exercise order" },
  { id: "prog", label: "How to progress weight" },
  { id: "rules", label: "Golden rules" }
];

export const orderDays = [
  { day: "Sun — Arms + Shoulders (strength)", color: "s", steps: [
    { n: "Warmup — cardio + arm circles + band dislocations", why: "Raises core temp, lubricates shoulder joint before any load", tag: "w" },
    { n: "1. Seated overhead barbell press", why: "Heaviest shoulder compound first — central nervous system is completely fresh. Never do this after bench or curls.", tag: "s" },
    { n: "2. Barbell curl", why: "Bicep strength compound while CNS still sharp. Arms have zero prior fatigue at this point.", tag: "s" },
    { n: "3. Close-grip bench press", why: "Tricep strength compound. Slightly after curl is fine — triceps weren't used in curls.", tag: "s" },
    { n: "4. Cable lateral raise", why: "Isolation after compounds — delts already warm from OHP, now pump the lateral head.", tag: "h" },
    { n: "5. Barbell reverse curl", why: "Forearm/wrist extensor balance — low CNS demand, perfect as a finisher.", tag: "h" },
    { n: "6. Face pulls", why: "Rear delt + external rotators — always after pressing, never before.", tag: "b" },
    { n: "7. Band external rotation", why: "Rotator cuff prehab — lightest work, zero fatigue impact, done last.", tag: "b" },
    { n: "8. Wrist curls + reverse superset", why: "Forearm flush — lowest demand exercise in the session, ideal final movement.", tag: "b" }
  ]},
  { day: "Mon — Chest + Back (strength)", color: "s", steps: [
    { n: "Warmup — cardio + arm swings + cat-cow + wall slides", why: "Thoracic spine and scapular prep essential before heavy pressing and rowing", tag: "w" },
    { n: "1. Barbell bench press", why: "Primary chest compound — highest CNS demand. Always the very first loaded exercise.", tag: "s" },
    { n: "2. Weighted pull-ups", why: "Antagonist to bench press. Training chest then back alternately reduces overall fatigue vs doing all chest then all back.", tag: "s" },
    { n: "3. Barbell bent-over row", why: "Second back compound while posterior chain is still strong. Spinal erectors are fresh.", tag: "s" },
    { n: "4. Chest-supported Y-raise", why: "Lower trap isolation — low load, done after compounds when muscle is warm.", tag: "h" },
    { n: "5. Rear delt reverse fly (cables)", why: "Posterior delt isolation — finishes the back work without spinal load.", tag: "h" },
    { n: "6. Band pull-aparts", why: "Scapular health — no fatigue cost, correct to do post-session.", tag: "b" },
    { n: "7. Scapular push-ups", why: "Serratus activation — bodyweight, zero joint stress.", tag: "b" },
    { n: "8. Doorway pec stretch", why: "Chest mobility — always stretch after pressing, never before.", tag: "b" }
  ]},
  { day: "Tue — Legs (strength)", color: "l", steps: [
    { n: "Warmup — cardio + leg swings + hip circles + hip hinge drill", why: "Hip hinge drill specifically grooves the deadlift pattern before any load. Never skip this.", tag: "w" },
    { n: "1. Back squat", why: "Quad-dominant compound first. Spinal erectors are completely fresh — critical for safe squatting.", tag: "s" },
    { n: "2. Conventional deadlift", why: "Hip hinge compound second. Some quad fatigue from squat is acceptable — spinal erectors are still strong enough for safe deadlifting.", tag: "s" },
    { n: "3. Standing calf raise (heavy)", why: "Isolated lower leg — not affected by squat or deadlift fatigue. Can go anywhere after the big two.", tag: "s" },
    { n: "4. Nordic hamstring curl", why: "Eccentric-focused — best done while hamstrings are warm but not fully fatigued. After deadlift is ideal.", tag: "b" },
    { n: "5. Hip abduction machine", why: "Glute medius isolation — seated, no spinal load. Fine late in session.", tag: "b" },
    { n: "6. Tibialis raise", why: "Shin/ankle work — completely isolated movement, zero competition with anything else.", tag: "b" },
    { n: "7. Bird-dog", why: "Deep spinal stabilisers — do this AFTER all loaded spinal work, never before squats or deadlifts.", tag: "b" },
    { n: "8. Dead bug", why: "Anti-extension core — same rule as bird-dog, post-loading only.", tag: "b" },
    { n: "9. Pallof press", why: "Anti-rotation — lightest demand in the session, correct as the final movement.", tag: "b" }
  ]},
  { day: "Wed — Arms + Shoulders (hypertrophy)", color: "h", steps: [
    { n: "Warmup — cardio + arm circles + band dislocations", why: "Same shoulder prep as Sunday — always needed before overhead work", tag: "w" },
    { n: "1. Arnold press", why: "Full shoulder compound first — most demanding overhead movement of the hypertrophy session.", tag: "h" },
    { n: "2. Incline dumbbell curl", why: "Bicep long head at stretch — best done early while you can feel the full range without fatigue compensation.", tag: "h" },
    { n: "3. Overhead cable tricep extension", why: "Tricep long head at stretch — do before pushdowns so long head gets quality reps, not fatigued ones.", tag: "h" },
    { n: "4. Preacher curl", why: "Short head isolation — after incline curl so both bicep heads are trained. Order within bicep work doesn't matter much.", tag: "h" },
    { n: "5. Tricep pushdown (rope)", why: "Lateral + medial head pump — lighter than overhead extension, correct as second tricep movement.", tag: "h" },
    { n: "6. Hammer curl", why: "Brachialis finisher — low skill demand, good late in session.", tag: "h" },
    { n: "7. Cable lateral raise", why: "Lateral delt pump — isolation finisher after the Arnold press has done the compound work.", tag: "h" },
    { n: "8. Face pulls + DB pullover + band rotation + wrist superset", why: "All structural balance work goes last — lightest demand, done when everything is warm.", tag: "b" }
  ]},
  { day: "Thu — Chest + Back (hypertrophy)", color: "h", steps: [
    { n: "Warmup — cardio + arm swings + cat-cow + wall slides", why: "Thoracic and scapular prep — same as Monday", tag: "w" },
    { n: "1. Incline dumbbell press", why: "Upper chest compound first — different angle to Monday's flat bench, still needs fresh CNS for quality reps.", tag: "h" },
    { n: "2. Single-arm dumbbell row", why: "Primary lat movement — antagonist pairing with press reduces overall fatigue.", tag: "h" },
    { n: "3. Chest-supported T-bar row", why: "Upper back compound — second back movement while upper back is still strong.", tag: "h" },
    { n: "4. Cable chest fly (low to high)", why: "Chest stretch isolation — after pressing when pec is warm and pumped.", tag: "h" },
    { n: "5. Lat pulldown (close supinated grip)", why: "Lower lat isolation — after rows when lats are warm.", tag: "h" },
    { n: "6. Rear delt cable fly", why: "Posterior delt detail — low load isolation, fine late in session.", tag: "h" },
    { n: "7. Scapular wall slides + band pull-aparts + pec stretch", why: "All structural balance last — same rule as every session.", tag: "b" }
  ]},
  { day: "Fri — Legs (hypertrophy)", color: "l", steps: [
    { n: "Warmup — cardio + leg swings + 90/90 hip switches + banded clamshells", why: "90/90 active hold opens deep hip rotators — more important on hypertrophy leg day since lunges and leg press demand hip mobility", tag: "w" },
    { n: "1. Leg press", why: "Highest load compound first — bilateral, no spinal load, sets the quad stimulus.", tag: "h" },
    { n: "2. Romanian deadlift", why: "Hamstring hinge second — lighter than Tuesday's conventional deadlift, done here for stretch-position hypertrophy.", tag: "h" },
    { n: "3. Walking lunges", why: "Unilateral compound third — by this point quads and glutes are warm, which is when lunges feel best and produce the best pump.", tag: "h" },
    { n: "4. Leg extension (single leg)", why: "Quad isolation — always after compound leg work, never before.", tag: "h" },
    { n: "5. Seated leg curl", why: "Hamstring isolation — after RDL when hamstrings are already warm.", tag: "h" },
    { n: "6. Seated calf raise", why: "Soleus isolation — completely independent, fine anywhere after warmup.", tag: "h" },
    { n: "7. Hip abduction + tibialis raise", why: "Structural balance — same rule, always last.", tag: "b" },
    { n: "8. Cable crunch + hanging leg raise + Russian twists", why: "Core finisher — spinal loading exercises always after all other lower body work.", tag: "b" }
  ]}
];

export const progData = [
  { lift: "Back squat", current: "65 kg", target: "100 kg", increment: "2.5 kg per session", when: "When you complete all 5 sets at the top of the rep range (6 reps) with good form", method: "Linear progression — add weight every session until it stalls, then move to weekly" },
  { lift: "Conventional deadlift", current: "80 kg (start)", target: "120 kg", increment: "2.5–5 kg per session", when: "When all 4 sets hit 5 clean reps. Deadlift progresses fastest of all the big lifts.", method: "Linear progression. Once stalled, use 5/3/1 wave loading (Week 1: 5 reps, Week 2: 3 reps, Week 3: 1 heavy rep, deload)" },
  { lift: "Barbell bench press", current: "60 kg", target: "80 kg", increment: "1.25–2.5 kg per session", when: "All 5 sets complete at 6 reps with full range — no half reps to hit the number", method: "Linear until stall, then add a 6th set before adding weight (volume progression)" },
  { lift: "Weighted pull-ups", current: "BW +5 kg", target: "15 BW reps", increment: "+2.5 kg belt when hitting 6 reps across all 5 sets", when: "Form is perfect — full dead hang at bottom, chin clearly over bar at top", method: "Add belt weight for strength. For the 15-rep bodyweight goal, drop belt and do max-rep sets once per week on Thursday" },
  { lift: "Overhead press", current: "40 kg", target: "60 kg", increment: "1.25 kg per session", when: "All 5 sets complete at 6 reps. OHP progresses slowest — be patient.", method: "Smallest increments possible. 1.25 kg plates are essential. Stalling is normal — use a micro-loading system" },
  { lift: "Barbell curl", current: "25 kg", target: "40 kg", increment: "1.25–2.5 kg per session", when: "All 4 sets hit 7 reps with strict form — no body swing", method: "Linear. When stalled, add a back-off set (drop 10% weight, do 12 reps) to add volume before retrying heavier" }
];

export const rules = [
  { color: "amber", label: "Rest between strength sets", title: "3–4 minutes between every strength compound set", sub: "This is non-negotiable. 90 seconds feels like enough but CNS recovery requires at least 3 minutes to reproduce maximal force. Cutting rest periods on strength days is the #1 reason people stall." },
  { color: "green", label: "Rep target system", title: "Always work within a rep range, not a fixed number", sub: "If your target is 4–6 reps and you hit 6 on all 5 sets — add weight next session. If you hit 4 on the last set — keep the same weight. Never add weight until you own the top of the range." },
  { color: "blue", label: "Form before weight", title: "A smaller weight lifted correctly builds more muscle than a bigger weight lifted badly", sub: "For deadlift and squat specifically: if your lower back rounds, your hips shoot up, or your knees cave — the weight is too heavy. Drop 10% and rebuild. One bad rep pattern practiced 1000 times becomes injury." },
  { color: "red", label: "Deload every 6–8 weeks", title: "Drop all weights by 40–50% for one full week", sub: "Not optional, not weakness. Your tendons, ligaments, and nervous system accumulate fatigue that sleep alone cannot clear. A deload week lets you come back stronger. Skipping deloads is why most people plateau after 3 months." },
  { color: "amber", label: "The stall protocol", title: "When a weight stops moving for 2 sessions in a row", sub: "Step 1: Check sleep and food — if either is poor, fix those first. Step 2: Drop weight by 10%, build back up. Step 3: If stalling again at same weight, switch rep scheme (e.g. 5×5 → 6×3). Step 4: Add one accessory exercise targeting the weak point in that lift." },
  { color: "green", label: "Micro plates", title: "Buy 1.25 kg plates — they are the most important equipment you can own", sub: "Most gyms only have 2.5 kg increments. For bench press and overhead press, 2.5 kg jumps are often too large to sustain weekly. 1.25 kg plates let you add 2.5 kg total per week instead of 5 kg — this doubles your progression runway." }
];

// ================= RENDERER FUNCTION =================
export function renderGuideContent(viewId) {
  if (viewId === 'order') {
    let h = '';
    orderDays.forEach(d => {
      h += `<div class="text-[14px] font-medium text-zinc-200 mb-3 mt-5 first:mt-0">${d.day}</div>`;
      h += `<div class="border border-zinc-800 rounded-lg p-2.5 mb-3 bg-zinc-900/30">`;
      d.steps.forEach((s, i) => {
        const numClass = s.tag === 's' ? 'bg-emerald-500/10 text-emerald-400' : s.tag === 'h' ? 'bg-sky-500/10 text-sky-400' : s.tag === 'b' ? 'bg-rose-500/10 text-rose-400' : 'bg-zinc-700 text-zinc-400';
        const tagClass = s.tag === 's' ? 'bg-emerald-500/10 text-emerald-400' : s.tag === 'h' ? 'bg-sky-500/10 text-sky-400' : s.tag === 'b' ? 'bg-rose-500/10 text-rose-400' : 'bg-zinc-700 text-zinc-400';
        const tagText = s.tag === 's' ? 'strength compound' : s.tag === 'h' ? 'hypertrophy / isolation' : s.tag === 'b' ? 'structural balance' : 'warmup';
        h += `<div class="flex gap-2.5 items-start py-2 border-b border-zinc-800/50 last:border-0"><div class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${numClass}">${i + 1}</div><div class="flex-1"><div class="text-[13px] font-medium text-zinc-200">${s.n}</div><div class="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">${s.why}</div><span class="text-[9px] px-1.5 py-0.5 rounded-full inline-block mt-1 ${tagClass}">${tagText}</span></div></div>`;
      });
      h += `</div>`;
    });
    return h;
  }
  if (viewId === 'prog') {
    let h = `<div class="text-[14px] font-medium text-zinc-200 mb-3">Strength day progression — lift by lift</div>`;
    h += `<div class="border border-zinc-800 rounded-lg p-2.5 bg-zinc-900/30 overflow-x-auto"><table class="w-full border-collapse text-[12px] min-w-[500px]"><thead><tr class="border-b border-zinc-800/50"><th class="text-[11px] font-medium text-zinc-500 text-left py-2 px-3">Lift</th><th class="text-[11px] font-medium text-zinc-500 text-left py-2 px-3">Add weight when</th><th class="text-[11px] font-medium text-zinc-500 text-left py-2 px-3">Increment</th><th class="text-[11px] font-medium text-zinc-500 text-left py-2 px-3">Method</th></tr></thead><tbody>`;
    progData.forEach(p => {
      h += `<tr class="border-b border-zinc-800/50 last:border-0"><td class="py-2.5 px-3 font-medium whitespace-nowrap text-zinc-400 text-[11px] align-top">${p.lift}<br><span class="font-normal text-[10px] text-zinc-600">${p.current} → ${p.target}</span></td><td class="py-2.5 px-3 text-zinc-200 text-[11px] align-top">${p.when}</td><td class="py-2.5 px-3 text-zinc-200 text-[11px] align-top">${p.increment}</td><td class="py-2.5 px-3 text-zinc-200 text-[11px] align-top">${p.method}</td></tr>`;
    });
    h += `</tbody></table></div><div class="bg-zinc-900/30 border border-zinc-800 rounded-lg p-3 text-[12px] text-zinc-400 leading-relaxed mt-3"><strong class="text-zinc-200 font-medium">The single rule that covers everything:</strong> hit the top of your rep range on every set → add weight. Miss the bottom of your rep range on any set → keep the weight. Never guess — the rep range tells you exactly what to do.</div>`;
    return h;
  }
  let h = `<div class="text-[14px] font-medium text-zinc-200 mb-3">Non-negotiable rules for progression</div>`;
  rules.forEach(r => {
    const borderClass = r.color === 'amber' ? 'border-l-amber-500/50' : r.color === 'green' ? 'border-l-emerald-500/50' : r.color === 'blue' ? 'border-l-sky-500/50' : 'border-l-rose-500/50';
    const textClass = r.color === 'amber' ? 'text-amber-400' : r.color === 'green' ? 'text-emerald-400' : r.color === 'blue' ? 'text-sky-400' : 'text-rose-400';
    h += `<div class="border border-zinc-800 rounded-lg p-2.5 mb-2 bg-zinc-900/30 ${borderClass} border-l-2"><div class="text-[10px] font-medium mb-1 ${textClass}">${r.label.toUpperCase()}</div><div class="text-[13px] text-zinc-200 leading-relaxed">${r.title}</div><div class="text-[11px] text-zinc-500 mt-1">${r.sub}</div></div>`;
  });
  return h;
}