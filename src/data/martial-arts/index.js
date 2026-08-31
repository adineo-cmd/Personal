// src/data/martial-arts/index.js
// Auto-discovers all style files + validates schema

const styleModules = import.meta.glob('./*.js', { eager: true, import: 'styleData' });

export const martialArtsRegistry = Object.values(styleModules)
  .filter(data => data?.id && data?.curriculum)
  .sort((a, b) => a.name.localeCompare(b.name));

// sectionConfig has been REMOVED as it is no longer used in the new dynamic UI.

export const difficultyLevels = {
  // Updated to split 'color' into 'bg', 'text', and 'border' for the new UI cards
  beginner: { label: "Beginner", bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  intermediate: { label: "Intermediate", bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
  advanced: { label: "Advanced", bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30" },
  expert: { label: "Expert", bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  master: { label: "Master", bg: "bg-zinc-500/10", text: "text-zinc-300", border: "border-zinc-500/30" }
};

// Dev-time validation for anatomy & progression
if (process.env.NODE_ENV === 'development') {
  martialArtsRegistry.forEach(style => {
    const allItems = [];
    const sectionsToValidate = ['techniques', 'physicalTraining'];
    
    sectionsToValidate.forEach(sectionKey => {
      const section = style.curriculum?.[sectionKey];
      if (!section) return;

      if (Array.isArray(section)) allItems.push(...section);
      else if (typeof section === 'object') Object.values(section).forEach(arr => Array.isArray(arr) && allItems.push(...arr));
    });
    
    allItems.forEach(item => {
      const hasAnatomyOrProg = item.anatomy?.length || item.progression?.length;
      const hasGrapplingData = item.grips || item.leveragePoints || item.mechanics;
      
      // Only warn if it's missing BOTH striking/physical data AND grappling data
      if (!hasAnatomyOrProg && !hasGrapplingData && item.id !== 'placeholder') {
        console.warn(`⚠️ ${style.id}: "${item.name}" missing anatomy, progression, or grappling data.`);
      }
    });
  });
  console.log(`✅ Loaded ${martialArtsRegistry.length} martial arts with curriculum data.`);
}