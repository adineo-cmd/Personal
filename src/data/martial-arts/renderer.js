// src/data/martial-arts/renderer.js
import { difficultyLevels } from './index.js';

// 🛡️ Case-insensitive difficulty lookup
function getDifficulty(item) {
  const key = (item.difficulty || 'beginner').toString().toLowerCase();
  return difficultyLevels[key] || difficultyLevels.beginner;
}

function formatTitle(str) {
  if (!str) return '';
  let result = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += ' ' + char;
    } else {
      result += char;
    }
  }
  return result;
}

function parseCommaList(val) {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  return val.split(',').map(s => s.trim());
}

function parseArrowList(val) {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  return val.split('→').map(s => s.trim());
}

function renderTechniqueCard(item) {
  const diff = getDifficulty(item);
  const anatomyArr = parseCommaList(item.anatomy);
  const progArr = parseArrowList(item.progression);
  const focusText = item.focus || item.focusCues || item.focus_cues;
  
  // Universal Tactical Data Block (Handles both camelCase and snake_case)
  const tactical = [];
  if (item.stance) tactical.push(`<span class="text-[#a89e92] font-bold">Stance:</span> ${item.stance}`);
  if (item.lineOfAttack || item.line_of_attack) tactical.push(`<span class="text-[#a89e92] font-bold">Line:</span> ${item.lineOfAttack || item.line_of_attack}`);
  if (item.strikingSurface || item.striking_surface) tactical.push(`<span class="text-[#a89e92] font-bold">Surface:</span> ${item.strikingSurface || item.striking_surface}`);
  if (item.weightShift || item.weight_shift) tactical.push(`<span class="text-[#a89e92] font-bold">Weight:</span> ${item.weightShift || item.weight_shift}`);
  if (item.weightDistribution || item.weight_distribution) tactical.push(`<span class="text-[#a89e92] font-bold">Weight Dist:</span> ${item.weightDistribution || item.weight_distribution}`);
  if (item.stanceShift || item.stance_shifts) tactical.push(`<span class="text-[#a89e92] font-bold">Shift:</span> ${item.stanceShift || item.stance_shifts}`);
  if (item.timing) tactical.push(`<span class="text-[#a89e92] font-bold">Timing:</span> ${item.timing}`);
  if (item.recovery) tactical.push(`<span class="text-[#a89e92] font-bold">Recovery:</span> ${item.recovery}`);
  if (item.retraction) tactical.push(`<span class="text-[#a89e92] font-bold">Retract:</span> ${item.retraction}`);
  if (item.advances) tactical.push(`<span class="text-[#a89e92] font-bold">Advances:</span> ${item.advances}`);
  if (item.retreats) tactical.push(`<span class="text-[#a89e92] font-bold">Retreats:</span> ${item.retreats}`);
  if (item.angles) tactical.push(`<span class="text-[#a89e92] font-bold">Angles:</span> ${item.angles}`);
  if (item.pivots) tactical.push(`<span class="text-[#a89e92] font-bold">Pivots:</span> ${item.pivots}`);
  
  const defenseText = item.defenseAgainst || item.defense_against;
  if (defenseText && defenseText !== 'N/A') tactical.push(`<span class="text-[#a89e92] font-bold">Defends:</span> ${defenseText}`);
  
  const counterText = item.counterSetup || item.counter_setup;
  if (counterText) tactical.push(`<span class="text-[#a89e92] font-bold">Sets up:</span> ${counterText}`);

  const leverText = item.leveragePoints || item.leverage_points;

  return `
    <div class="border border-[#2a2a2e] rounded-lg p-4 bg-[#0e0e10]/30 hover:bg-[#121214] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ddd6cc] leading-tight">${item.name} ${item.leftRightVariant ? '<span class="text-[10px] text-[#6a6260] ml-1">(L/R)</span>' : ''}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.mechanics ? `<p class="text-[12px] text-[#a89e92] mb-2 italic">⚙️ ${item.mechanics}</p>` : ''}
      
      ${item.grips || leverText || item.finish || item.positions ? `
        <div class="mb-3 grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-[#6a6260] bg-[#1e1e22]/50 p-2 rounded border border-[#2a2a2e]/30">
          ${item.grips ? `<div><span class="text-[#a89e92] font-bold">Grips:</span> ${item.grips}</div>` : ''}
          ${item.positions ? `<div><span class="text-[#a89e92] font-bold">Pos:</span> ${item.positions}</div>` : ''}
          ${leverText ? `<div><span class="text-[#a89e92] font-bold">Lever:</span> ${leverText}</div>` : ''}
          ${item.finish ? `<div><span class="text-[#a89e92] font-bold">Finish:</span> ${item.finish}</div>` : ''}
        </div>
      ` : ''}

      ${tactical.length > 0 ? `
        <div class="mb-3 text-[11px] text-[#6a6260] space-y-1 bg-[#1e1e22]/30 p-2 rounded border border-[#2a2a2e]/20">
          ${tactical.map(t => `<div>${t}</div>`).join('')}
        </div>
      ` : ''}

      ${anatomyArr.length ? `
        <div class="mb-3">
          <div class="text-[10px] text-[#6a6260] mb-1">Anatomy:</div>
          <div class="flex flex-wrap gap-1">
            ${anatomyArr.map(a => `<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#1e1e22] text-[#a89e92] border border-[#2a2a2e]/50">${a}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <div class="mt-auto pt-3 border-t border-[#2a2a2e]/50 space-y-1.5 text-[11px] text-[#6a6260]">
        ${focusText ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89e92]">${focusText}</span></div>` : ''}
        ${progArr.length ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89e92]">${progArr.join(' → ')}</span></div>` : ''}
        ${item.transitions ? `<div class="flex gap-2"><span>🔀</span> <span class="text-[#a89e92]">Transitions: ${item.transitions}</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#e0aa40]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderPhysicalCard(item) {
  const diff = getDifficulty(item);
  const progArr = parseArrowList(item.progression);
  const mechanicsText = item.mechanics || item.description;
  const focusText = item.focus || item.focusCues || item.focus_cues;
  
  return `
    <div class="border border-[#2a2a2e] rounded-lg p-4 bg-[#0e0e10]/30 hover:bg-[#121214] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ddd6cc] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.type ? `<p class="text-[11px] text-[#a89e92] mb-1 font-bold uppercase tracking-wide">${item.type}</p>` : ''}
      ${mechanicsText ? `<p class="text-[12px] text-[#a89e92] mb-3 italic">⚙️ ${mechanicsText}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#2a2a2e]/50 space-y-1.5 text-[11px] text-[#6a6260]">
        ${focusText ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89e92]">${focusText}</span></div>` : ''}
        ${progArr.length ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89e92]">${progArr.join(' → ')}</span></div>` : ''}
        ${item.roundStructure || item.structure ? `<div class="flex gap-2"><span>⏱️</span> <span class="text-[#a89e92]">Rounds: ${item.roundStructure || item.structure}</span></div>` : ''}
        ${item.duration ? `<div class="flex gap-2"><span>⏱️</span> <span class="text-[#a89e92]">Duration: ${item.duration}</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#e0aa40]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderKnowledgeCard(item) {
  return `
    <div class="bg-[#0e0e10]/30 p-4 rounded border border-[#2a2a2e] hover:bg-[#121214] transition-colors h-full">
      <h4 class="text-[13px] font-medium text-[#ddd6cc] mb-2">${item.name}</h4>
      ${item.description ? `<p class="text-[12px] text-[#a89e92] leading-relaxed">${item.description}</p>` : ''}
    </div>
  `;
}

function renderEquipmentCard(item) {
  const usageText = item.usage || item.holding_usage;
  return `
    <div class="bg-[#0e0e10]/30 p-4 rounded border border-[#2a2a2e] hover:bg-[#121214] transition-colors h-full relative">
      ${item.mandatory === true ? `<span class="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 uppercase font-bold">Required</span>` : ''}
      ${item.mandatory === false ? `<span class="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-zinc-500/20 text-zinc-400 border border-zinc-500/30 uppercase font-bold">Optional</span>` : ''}
      <h4 class="text-[13px] font-medium text-[#ddd6cc] mb-2 pr-16">🛡️ ${item.name}</h4>
      ${item.purpose ? `<p class="text-[12px] text-[#a89e92] mb-1"><span class="text-[#6a6260] font-bold">Purpose:</span> ${item.purpose}</p>` : ''}
      ${usageText ? `<p class="text-[12px] text-[#a89e92]"><span class="text-[#6a6260] font-bold">Usage:</span> ${usageText}</p>` : ''}
    </div>
  `;
}

function renderDrillCard(item) {
  const diff = getDifficulty(item);
  const chainText = item.chain || item.sequence || item.combo;
  
  return `
    <div class="border border-[#2a2a2e] rounded-lg p-4 bg-[#0e0e10]/30 hover:bg-[#121214] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ddd6cc] leading-tight">${item.name}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${item.description ? `<p class="text-[11px] text-[#a89e92] mb-2">${item.description}</p>` : ''}
      ${chainText ? `<p class="text-[12px] text-[#a89e92] mb-1 font-mono bg-[#1e1e22] px-2 py-1 rounded border border-[#2a2a2e]/50">🔗 ${chainText}</p>` : ''}
      ${item.structure ? `<p class="text-[11px] text-[#6a6260] mb-2 italic">⏱️ ${item.structure}</p>` : ''}
      ${item.mechanics ? `<p class="text-[11px] text-[#6a6260] mb-2 italic">${item.mechanics}</p>` : ''}
      ${item.purpose ? `<p class="text-[11px] text-[#6a6260] mb-2"><span class="font-bold text-[#a89e92]">Purpose:</span> ${item.purpose}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#2a2a2e]/50 space-y-1.5 text-[11px] text-[#6a6260]">
        ${item.reps ? `<div class="flex gap-2"><span>🔄</span> <span class="text-[#a89e92]">Reps/Time: ${item.reps}</span></div>` : ''}
        ${item.focus ? `<div class="flex gap-2"><span>🎯</span> <span class="text-[#a89e92]">${item.focus}</span></div>` : ''}
        ${item.progression ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89e92]">Prog: ${item.progression}</span></div>` : ''}
        ${item.safety ? `<div class="flex gap-2 text-[#e0aa40]/80"><span>⚠️</span> <span>${item.safety}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderTipCard(item) {
  const diff = getDifficulty(item);
  const title = item.name || item.problem || item.error || 'Common Issue';
  const errorText = item.error || item.problem;
  
  return `
    <div class="border border-[#2a2a2e] rounded-lg p-4 bg-[#0e0e10]/30 hover:bg-[#121214] transition-colors flex flex-col h-full">
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-[14px] font-medium text-[#ddd6cc] leading-tight">❌ ${title}</h4>
        <span class="text-[10px] px-2 py-0.5 rounded-full border ${diff.border} ${diff.bg} ${diff.text} whitespace-nowrap ml-2">${diff.label}</span>
      </div>
      ${errorText ? `<p class="text-[12px] text-[#d86848] mb-2"><span class="font-bold">Issue:</span> ${errorText}</p>` : ''}
      ${item.fix ? `<p class="text-[12px] text-[#4ade80] mb-2"><span class="font-bold">Fix:</span> ${item.fix}</p>` : ''}
      
      <div class="mt-auto pt-3 border-t border-[#2a2a2e]/50 text-[11px] text-[#6a6260]">
        ${(item.progression || item.drill) ? `<div class="flex gap-2"><span>📈</span> <span class="text-[#a89e92]">Drill: ${item.progression || item.drill}</span></div>` : ''}
      </div>
    </div>
  `;
}

function renderTrainingDrillCard(name, item) {
  const formattedName = formatTitle(name);
  return `
    <div class="bg-[#0e0e10]/30 p-4 rounded border border-[#2a2a2e] hover:bg-[#121214] transition-colors h-full">
      <h4 class="text-[13px] font-medium text-[#ddd6cc] mb-2">🏃 ${formattedName}</h4>
      ${item.description ? `<p class="text-[12px] text-[#a89e92] leading-relaxed">${item.description}</p>` : ''}
    </div>
  `;
}

export function renderStylePage(styleData) {
  const { curriculum, keyPrinciples, color } = styleData;
  const html = { principles: '', toc: '', techniques: '', physical: '', knowledge: '', equipment: '', drills: '', tips: '' };

  if (keyPrinciples && keyPrinciples.length > 0) {
    let str = '<div class="mt-6 pt-4 border-t border-[#2a2a2e]"><div class="text-[11px] font-medium text-[#a89e92] mb-2">Core Principles</div><div class="flex flex-wrap gap-2">';
    keyPrinciples.forEach(p => { str += `<span class="text-[10px] px-2.5 py-1 rounded-full border ${color}">${p}</span>`; });
    html.principles = str + '</div></div>';
  }

  const tocItems = [];
  if (curriculum?.techniques && Object.values(curriculum.techniques).some(arr => arr?.length)) tocItems.push({ id: 'techniques', label: 'Techniques', icon: '🥋' });
  if (curriculum?.physicalTraining && Object.values(curriculum.physicalTraining).some(arr => arr?.length)) tocItems.push({ id: 'physical', label: 'Physical', icon: '🏋️' });
  if (curriculum?.knowledge && Object.values(curriculum.knowledge).some(arr => arr?.length)) tocItems.push({ id: 'knowledge', label: 'Knowledge', icon: '📖' });
  if (curriculum?.equipment && Object.values(curriculum.equipment).some(arr => arr?.length)) tocItems.push({ id: 'equipment', label: 'Equipment', icon: '🥊' });
  if (curriculum?.trainingDrills || curriculum?.enduranceDrills?.length || curriculum?.combinationDrills?.length) tocItems.push({ id: 'drills', label: 'Drills', icon: '🔁' });
  if (curriculum?.problemAreaTips?.length) tocItems.push({ id: 'tips', label: 'Troubleshooting', icon: '🛠️' });

  if (tocItems.length > 0) {
    let str = '<nav class="sticky top-24 z-30 bg-[#08080a]/90 backdrop-blur border-b border-[#2a2a2e] mb-8"><div class="max-w-7xl mx-auto px-6 py-3"><div class="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide">';
    tocItems.forEach(item => { str += `<a href="#${item.id}" class="toc-link px-3 py-1.5 text-xs rounded-full border border-[#2a2a2e] bg-transparent text-[#6a6260] hover:bg-[#121214] hover:text-[#ddd6cc] transition-colors whitespace-nowrap">${item.icon} ${item.label}</a>`; });
    html.toc = str + '</div></div></nav>';
  }

  if (curriculum?.techniques) {
    const entries = Object.entries(curriculum.techniques).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="techniques" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2e]"><span class="text-2xl">🥋</span><h2 class="text-2xl font-medium text-[#ddd6cc]">Techniques</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderTechniqueCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.techniques = str + '</section>';
    }
  }

  if (curriculum?.physicalTraining) {
    const entries = Object.entries(curriculum.physicalTraining).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="physical" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2e]"><span class="text-2xl">🏋️</span><h2 class="text-2xl font-medium text-[#ddd6cc]">Physical Training</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderPhysicalCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.physical = str + '</section>';
    }
  }

  if (curriculum?.knowledge) {
    const entries = Object.entries(curriculum.knowledge).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="knowledge" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2e]"><span class="text-2xl">📖</span><h2 class="text-2xl font-medium text-[#ddd6cc]">Essential Knowledge</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2">`;
        entry[1].forEach(item => { str += `<div>${renderKnowledgeCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.knowledge = str + '</section>';
    }
  }

  if (curriculum?.equipment) {
    const entries = Object.entries(curriculum.equipment).filter(e => e[1] && e[1].length);
    if (entries.length > 0) {
      let str = '<section id="equipment" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2e]"><span class="text-2xl">🥊</span><h2 class="text-2xl font-medium text-[#ddd6cc]">Equipment & Gear</h2></div>';
      entries.forEach(entry => {
        str += `<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4 capitalize">${formatTitle(entry[0])}</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">`;
        entry[1].forEach(item => { str += `<div>${renderEquipmentCard(item)}</div>`; });
        str += '</div></div>';
      });
      html.equipment = str + '</section>';
    }
  }

  const hasDrills = curriculum?.trainingDrills || curriculum?.enduranceDrills?.length || curriculum?.combinationDrills?.length;
  if (hasDrills) {
    let str = '<section id="drills" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2e]"><span class="text-2xl">🔁</span><h2 class="text-2xl font-medium text-[#ddd6cc]">Drills & Combinations</h2></div>';
    if (curriculum?.trainingDrills) {
      str += '<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4">Core Training Drills</h3><div class="grid gap-4 md:grid-cols-2">';
      Object.entries(curriculum.trainingDrills).forEach(entry => { str += `<div>${renderTrainingDrillCard(entry[0], entry[1])}</div>`; });
      str += '</div></div>';
    }
    if (curriculum?.enduranceDrills?.length > 0) {
      str += '<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4">Endurance & Conditioning</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      curriculum.enduranceDrills.forEach(item => { str += `<div>${renderDrillCard(item)}</div>`; });
      str += '</div></div>';
    }
    if (curriculum?.combinationDrills?.length > 0) {
      str += '<div class="mb-8"><h3 class="text-lg font-medium text-[#ddd6cc] mb-4">Combination Chains</h3><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
      curriculum.combinationDrills.forEach(item => { str += `<div>${renderDrillCard(item)}</div>`; });
      str += '</div></div>';
    }
    html.drills = str + '</section>';
  }

  if (curriculum?.problemAreaTips?.length > 0) {
    let str = '<section id="tips" class="scroll-mt-32"><div class="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2e]"><span class="text-2xl">🛠️</span><h2 class="text-2xl font-medium text-[#ddd6cc]">Troubleshooting & Problem Areas</h2></div><div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">';
    curriculum.problemAreaTips.forEach(item => { str += `<div>${renderTipCard(item)}</div>`; });
    html.tips = str + '</div></section>';
  }

  return { html };
}