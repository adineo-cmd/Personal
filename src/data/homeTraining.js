// homeTraining.js - Progressive Home Training Database
// Calisthenics • Martial Arts • Mobility & Stretching
// All exercises require minimal/no equipment

export const homeTrainingDB = {
  lastUpdated: "2026-02-04",
  version: "1.0",
  
  // ==================== CALISTHENICS SKILL TREE ====================
  calisthenics: {
    description: "Bodyweight strength and skill progression system",
    equipment: ["Pull-up bar (optional)", "Parallettes (optional)", "Resistance bands (optional)"],
    
    foundations: {
      level: 0,
      name: "Foundation Phase",
      description: "Build base strength, joint health, and movement patterns",
      prerequisites: "None",
      masteryGoal: "Complete all foundational movements with perfect form",
      skills: [
        {
          name: "Wall Push-ups",
          difficulty: "Beginner",
          targetReps: "3x20",
          muscles: ["Chest", "Shoulders", "Triceps"],
          instructions: [
            "Stand arm's length from wall",
            "Place palms on wall at shoulder height",
            "Lean in, bending elbows to bring chest toward wall",
            "Push back to start",
            "Keep body straight, don't arch back"
          ],
          progression: "Incline Push-ups → Knee Push-ups → Full Push-ups",
          scienceNote: "Teaches proper pushing mechanics with minimal load"
        },
        {
          name: "Assisted Squats",
          difficulty: "Beginner",
          targetReps: "3x15",
          muscles: ["Quadriceps", "Glutes", "Hamstrings"],
          instructions: [
            "Hold doorframe or sturdy surface for support",
            "Feet shoulder-width apart",
            "Lower hips back and down as if sitting",
            "Go as deep as comfortable",
            "Drive through heels to stand"
          ],
          progression: "Bodyweight Squats → Split Squats → Pistol Squat Progressions",
          scienceNote: "Builds squat pattern while reducing load on joints"
        },
        {
          name: "Dead Hang",
          difficulty: "Beginner",
          targetTime: "3x20 seconds",
          muscles: ["Forearms", "Lats", "Shoulders"],
          instructions: [
            "Grip pull-up bar or sturdy overhead surface",
            "Let body hang with arms fully extended",
            "Relax shoulders slightly, engage grip",
            "Breathe steadily",
            "Don't swing or kipping"
          ],
          progression: "Active Hang → Scapular Pulls → Negative Pull-ups → Pull-ups",
          scienceNote: "Decompresses spine, builds grip strength, prepares for pulling"
        },
        {
          name: "Plank",
          difficulty: "Beginner",
          targetTime: "3x30 seconds",
          muscles: ["Core", "Shoulders", "Glutes"],
          instructions: [
            "Start on forearms and toes",
            "Keep body in straight line head to heels",
            "Engage core, squeeze glutes",
            "Don't let hips sag or pike up",
            "Breathe steadily"
          ],
          progression: "Side Plank → Hollow Body Hold → L-Sit Progressions",
          scienceNote: "Builds anti-extension core stability essential for all skills"
        },
        {
          name: "Glute Bridge",
          difficulty: "Beginner",
          targetReps: "3x15",
          muscles: ["Glutes", "Hamstrings", "Lower Back"],
          instructions: [
            "Lie on back, knees bent, feet flat",
            "Drive through heels, lift hips up",
            "Squeeze glutes hard at top",
            "Lower with control",
            "Keep ribs down, don't over-arch"
          ],
          progression: "Single-Leg Bridge → Hip Thrust → Nordic Curl Negatives",
          scienceNote: "Activates posterior chain, counteracts sitting posture"
        }
      ]
    },
    
    level1: {
      level: 1,
      name: "Novice Phase",
      description: "Develop basic strength and control",
      prerequisites: "Master all Foundation skills",
      masteryGoal: "Perform 10+ strict reps of basic movements",
      skills: [
        {
          name: "Push-ups",
          difficulty: "Beginner",
          targetReps: "3x10-15",
          muscles: ["Chest", "Shoulders", "Triceps", "Core"],
          instructions: [
            "Start in plank, hands shoulder-width",
            "Lower chest to floor, elbows at 45°",
            "Keep body rigid, no sagging",
            "Push up to full arm extension",
            "Squeeze chest at top"
          ],
          progression: "Diamond Push-ups → Archer Push-ups → One-Arm Push-up Progressions",
          scienceNote: "Compound pushing pattern; builds upper body strength foundation"
        },
        {
          name: "Bodyweight Squats",
          difficulty: "Beginner",
          targetReps: "3x20",
          muscles: ["Quadriceps", "Glutes", "Calves"],
          instructions: [
            "Feet shoulder-width, toes slightly out",
            "Push hips back, bend knees",
            "Keep chest up, knees tracking over toes",
            "Descend to parallel or deeper",
            "Drive through heels to stand"
          ],
          progression: "Jump Squats → Shrimp Squats → Pistol Squat Progressions",
          scienceNote: "Fundamental lower body pattern; builds leg strength and mobility"
        },
        {
          name: "Australian Pull-ups (Bodyweight Rows)",
          difficulty: "Beginner",
          targetReps: "3x10",
          muscles: ["Back", "Biceps", "Rear Delts"],
          instructions: [
            "Set bar at waist height (or use table)",
            "Lie underneath, grip bar shoulder-width",
            "Keep body straight, heels on ground",
            "Pull chest to bar, squeezing shoulder blades",
            "Lower with control"
          ],
          progression: "Feet-Elevated Rows → Archer Rows → Pull-up Negatives",
          scienceNote: "Horizontal pulling builds back strength before vertical pulling"
        },
        {
          name: "Lunges",
          difficulty: "Beginner",
          targetReps: "3x10 each leg",
          muscles: ["Quadriceps", "Glutes", "Hamstrings"],
          instructions: [
            "Step forward with one leg",
            "Lower hips until both knees at 90°",
            "Front knee stays over ankle",
            "Push off front foot to return",
            "Keep torso upright"
          ],
          progression: "Walking Lunges → Bulgarian Split Squats → Shrimp Squats",
          scienceNote: "Unilateral training corrects imbalances, builds functional strength"
        },
        {
          name: "Hollow Body Hold",
          difficulty: "Intermediate",
          targetTime: "3x20 seconds",
          muscles: ["Core", "Hip Flexors"],
          instructions: [
            "Lie on back, arms overhead",
            "Press lower back into floor",
            "Lift shoulders and legs slightly",
            "Create 'banana' shape with body",
            "Hold while breathing steadily"
          ],
          progression: "Hollow Rock → Tuck L-Sit → Full L-Sit",
          scienceNote: "Teaches full-body tension essential for advanced skills"
        }
      ]
    },
    
    level2: {
      level: 2,
      name: "Intermediate Phase",
      description: "Build strength endurance and introduce skill work",
      prerequisites: "Master all Novice skills",
      masteryGoal: "Perform skill progressions with control",
      skills: [
        {
          name: "Pull-ups",
          difficulty: "Intermediate",
          targetReps: "3x5-8",
          muscles: ["Lats", "Biceps", "Rear Delts", "Core"],
          instructions: [
            "Grip bar slightly wider than shoulders",
            "Hang with arms fully extended",
            "Pull elbows down and back",
            "Bring chin over bar",
            "Lower with control to full hang"
          ],
          progression: "Weighted Pull-ups → Archer Pull-ups → One-Arm Pull-up Progressions",
          scienceNote: "Primary vertical pull; builds lat width and pulling strength"
        },
        {
          name: "Dips",
          difficulty: "Intermediate",
          targetReps: "3x8",
          muscles: ["Triceps", "Chest", "Front Delts"],
          instructions: [
            "Support body on parallel bars or chairs",
            "Lower by bending elbows to 90°",
            "Keep elbows close to body",
            "Push back up to full extension",
            "Don't go too deep to protect shoulders"
          ],
          progression: "Ring Dips → Weighted Dips → Straight Bar Dips",
          scienceNote: "Compound pushing movement; builds triceps and chest strength"
        },
        {
          name: "Pike Push-ups",
          difficulty: "Intermediate",
          targetReps: "3x8",
          muscles: ["Shoulders", "Triceps", "Upper Chest"],
          instructions: [
            "Start in downward dog position",
            "Hands shoulder-width, hips high",
            "Lower head toward floor by bending elbows",
            "Push back up to start",
            "Keep legs as straight as possible"
          ],
          progression: "Elevated Pike Push-ups → Wall Handstand Hold → Handstand Push-ups",
          scienceNote: "Vertical pressing pattern; progression toward handstand strength"
        },
        {
          name: "Single-Leg Glute Bridge",
          difficulty: "Intermediate",
          targetReps: "3x10 each leg",
          muscles: ["Glutes", "Hamstrings", "Core"],
          instructions: [
            "Lie on back, one knee bent, other leg extended",
            "Drive through heel of bent leg",
            "Lift hips until body forms straight line",
            "Squeeze glute at top",
            "Lower with control"
          ],
          progression: "Single-Leg RDL → Nordic Curl Negatives → Full Nordic Curls",
          scienceNote: "Unilateral posterior chain work; builds hamstring strength"
        },
        {
          name: "Tuck L-Sit",
          difficulty: "Intermediate",
          targetTime: "3x15 seconds",
          muscles: ["Core", "Hip Flexors", "Shoulders"],
          instructions: [
            "Sit on floor, hands beside hips",
            "Press into hands, lift hips off ground",
            "Bring knees to chest, hold tuck position",
            "Keep legs together, toes pointed",
            "Don't shrug shoulders"
          ],
          progression: "Advanced Tuck L-Sit → One-Leg Extended L-Sit → Full L-Sit",
          scienceNote: "Builds core compression strength and shoulder stability"
        }
      ]
    },
    
    level3: {
      level: 3,
      name: "Advanced Phase",
      description: "Master static holds and dynamic skills",
      prerequisites: "Master all Intermediate skills",
      masteryGoal: "Perform advanced static holds and transitions",
      skills: [
        {
          name: "Handstand",
          difficulty: "Advanced",
          targetTime: "3x20 seconds",
          muscles: ["Shoulders", "Core", "Wrists"],
          instructions: [
            "Start in wall-facing handstand",
            "Kick up with control",
            "Stack wrists, elbows, shoulders, hips",
            "Squeeze glutes, point toes",
            "Look at hands, breathe steadily"
          ],
          progression: "Freestanding Handstand → Handstand Walk → Handstand Push-ups",
          scienceNote: "Ultimate upper body skill; builds shoulder stability and body awareness"
        },
        {
          name: "Muscle-up",
          difficulty: "Advanced",
          targetReps: "3x3",
          muscles: ["Lats", "Chest", "Triceps", "Core"],
          instructions: [
            "Start with explosive pull-up",
            "Pull chest to bar, transition elbows over",
            "Press body up into dip position",
            "Finish with arms locked out",
            "Lower with control"
          ],
          progression: "Weighted Muscle-ups → Ring Muscle-ups → One-Arm Muscle-up Progressions",
          scienceNote: "Combines pulling and pressing; demonstrates full upper body power"
        },
        {
          name: "Front Lever",
          difficulty: "Advanced",
          targetTime: "3x10 seconds",
          muscles: ["Lats", "Core", "Shoulders"],
          instructions: [
            "Hang from bar with overhand grip",
            "Engage lats, pull shoulders down",
            "Lift legs and torso to horizontal",
            "Keep body straight, arms straight",
            "Hold while breathing"
          ],
          progression: "Tuck Front Lever → Advanced Tuck → Straddle → Full Front Lever",
          scienceNote: "Extreme anti-extension core and lat strength demonstration"
        },
        {
          name: "Pistol Squat",
          difficulty: "Advanced",
          targetReps: "3x5 each leg",
          muscles: ["Quadriceps", "Glutes", "Calves", "Core"],
          instructions: [
            "Stand on one leg, other leg extended forward",
            "Lower into single-leg squat",
            "Keep extended leg off ground",
            "Descend as deep as mobility allows",
            "Drive through heel to stand"
          ],
          progression: "Weighted Pistol Squats → Jumping Pistol Squats → Assisted One-Leg Box Jumps",
          scienceNote: "Ultimate unilateral leg strength test; requires mobility and balance"
        },
        {
          name: "Planche Progression",
          difficulty: "Advanced",
          targetTime: "3x10 seconds (tuck)",
          muscles: ["Shoulders", "Chest", "Core", "Wrists"],
          instructions: [
            "Start in plank, lean shoulders forward",
            "Lift feet off ground, hold tuck position",
            "Keep arms straight, protract shoulder blades",
            "Don't let hips sag",
            "Build up lean gradually"
          ],
          progression: "Advanced Tuck Planche → Straddle Planche → Full Planche",
          scienceNote: "Extreme anterior chain and shoulder strength; requires dedicated progression"
        }
      ]
    },
    
    level4: {
      level: 4,
      name: "Elite Phase",
      description: "Master elite skills and combinations",
      prerequisites: "Master all Advanced skills",
      masteryGoal: "Perform elite-level static and dynamic skills",
      skills: [
        {
          name: "One-Arm Pull-up",
          difficulty: "Elite",
          targetReps: "1-3 each arm",
          muscles: ["Lats", "Biceps", "Core", "Grip"],
          instructions: [
            "Grip bar with one hand, other hand holds wrist",
            "Engage lats, pull body up",
            "Keep body straight, no swinging",
            "Bring chin to bar",
            "Lower with control"
          ],
          progression: "Assisted One-Arm → Weighted One-Arm → Full One-Arm Pull-up",
          scienceNote: "Peak unilateral pulling strength; requires years of dedicated training"
        },
        {
          name: "Handstand Push-up",
          difficulty: "Elite",
          targetReps: "3x5",
          muscles: ["Shoulders", "Triceps", "Core"],
          instructions: [
            "Kick up to freestanding handstand",
            "Lower head toward floor by bending elbows",
            "Keep body rigid, no arching",
            "Press back up to full extension",
            "Control the descent"
          ],
          progression: "Deficit HSPU → One-Arm HSPU Progressions → Freestanding HSPU",
          scienceNote: "Ultimate vertical pressing skill; combines strength and balance"
        },
        {
          name: "Full Planche",
          difficulty: "Elite",
          targetTime: "3x5 seconds",
          muscles: ["Shoulders", "Chest", "Core", "Wrists"],
          instructions: [
            "Start in plank position",
            "Lean shoulders far forward",
            "Lift entire body off ground",
            "Keep arms straight, body horizontal",
            "Hold with perfect form"
          ],
          progression: "Planche Push-ups → Maltese → Iron Cross",
          scienceNote: "Peak anterior chain strength; one of the hardest bodyweight skills"
        },
        {
          name: "Human Flag",
          difficulty: "Elite",
          targetTime: "3x5 seconds",
          muscles: ["Lats", "Obliques", "Shoulders", "Grip"],
          instructions: [
            "Grip vertical pole with both hands",
            "Bottom hand pushes, top hand pulls",
            "Lift body to horizontal position",
            "Keep body straight, legs together",
            "Engage core and lats to hold"
          ],
          progression: "Tuck Human Flag → Straddle Flag → Full Human Flag",
          scienceNote: "Extreme lateral core and grip strength demonstration"
        },
        {
          name: "Back Lever",
          difficulty: "Elite",
          targetTime: "3x10 seconds",
          muscles: ["Lats", "Rear Delts", "Core", "Biceps"],
          instructions: [
            "Hang from bar, pull knees to chest",
            "Roll backward, extending body",
            "Lower to horizontal position facing down",
            "Keep arms straight, body rigid",
            "Hold while breathing steadily"
          ],
          progression: "Tuck Back Lever → Advanced Tuck → Straddle → Full Back Lever",
          scienceNote: "Extreme shoulder extension strength; balances front lever training"
        }
      ]
    }
  },
  
  // ==================== MARTIAL ARTS SKILL TREE ====================
  martialArts: {
    description: "Striking, grappling, and self-defense fundamentals for home practice",
    equipment: ["Mirror (for form check)", "Heavy bag (optional)", "Resistance bands (optional)"],
    
    foundations: {
      level: 0,
      name: "Foundation Phase",
      description: "Learn stance, balance, and basic movement patterns",
      prerequisites: "None",
      masteryGoal: "Move with balance and control in all directions",
      skills: [
        {
          name: "Fighter Stance",
          difficulty: "Beginner",
          targetPractice: "5 minutes daily",
          muscles: ["Legs", "Core", "Shoulders"],
          instructions: [
            "Stand with feet shoulder-width apart",
            "Step dominant foot back 45 degrees",
            "Bend knees slightly, stay on balls of feet",
            "Hands up protecting face, elbows tucked",
            "Chin down, eyes forward"
          ],
          progression: "Stance → Footwork → Basic Strikes",
          scienceNote: "Proper stance maximizes balance, power generation, and defense"
        },
        {
          name: "Basic Footwork",
          difficulty: "Beginner",
          targetPractice: "3x2 minutes",
          muscles: ["Calves", "Quadriceps", "Core"],
          instructions: [
            "From fighter stance, step forward with lead foot",
            "Follow with rear foot, maintain stance",
            "Practice backward, lateral, and diagonal steps",
            "Stay light on toes, never cross feet",
            "Keep hands up while moving"
          ],
          progression: "Shuffle Steps → Pivot Steps → Angle Changes",
          scienceNote: "Footwork creates distance, angles, and positioning advantages"
        },
        {
          name: "Hip Rotation Drill",
          difficulty: "Beginner",
          targetPractice: "3x10 each side",
          muscles: ["Obliques", "Glutes", "Core"],
          instructions: [
            "Stand in fighter stance, hands at chest",
            "Rotate hips sharply to throw imaginary punch",
            "Pivot rear foot, transfer weight forward",
            "Return to stance, repeat other side",
            "Focus on hip drive, not arm swing"
          ],
          progression: "Shadow Boxing → Heavy Bag → Partner Drills",
          scienceNote: "Power comes from hips and ground, not arms alone"
        },
        {
          name: "Basic Fall/Breakfall",
          difficulty: "Beginner",
          targetPractice: "3x5 each direction",
          muscles: ["Core", "Shoulders", "Reflexes"],
          instructions: [
            "From kneeling, practice rolling to side",
            "Slap floor with arm to dissipate force",
            "Tuck chin to protect head",
            "Roll over shoulder, not neck",
            "Practice forward, backward, and side falls"
          ],
          progression: "Controlled Falls → Throw Defense → Grappling Basics",
          scienceNote: "Learning to fall safely prevents injury in all physical activities"
        },
        {
          name: "Breathing Under Tension",
          difficulty: "Beginner",
          targetPractice: "5 minutes daily",
          muscles: ["Diaphragm", "Core", "Nervous System"],
          instructions: [
            "Stand in stance, hands up",
            "Inhale deeply through nose",
            "Exhale sharply through mouth on imaginary strike",
            "Keep core engaged throughout",
            "Practice rhythmic breathing during movement"
          ],
          progression: "Shadow Boxing → Pad Work → Sparring",
          scienceNote: "Proper breathing maintains power, reduces fatigue, controls nerves"
        }
      ]
    },
    
    level1: {
      level: 1,
      name: "Novice Phase",
      description: "Learn fundamental strikes and blocks",
      prerequisites: "Master Foundation skills",
      masteryGoal: "Execute basic techniques with proper form and power",
      skills: [
        {
          name: "Jab",
          difficulty: "Beginner",
          targetPractice: "3x20 each side",
          muscles: ["Shoulders", "Triceps", "Core"],
          instructions: [
            "From stance, extend lead hand straight forward",
            "Rotate fist palm-down at extension",
            "Retract quickly to guard position",
            "Keep rear hand protecting face",
            "Exhale sharply on extension"
          ],
          progression: "Double Jab → Jab-Cross → Jab to Body",
          scienceNote: "Fastest strike; sets up combinations and controls distance"
        },
        {
          name: "Cross (Rear Straight)",
          difficulty: "Beginner",
          targetPractice: "3x15 each side",
          muscles: ["Rear Shoulder", "Lats", "Obliques", "Glutes"],
          instructions: [
            "From stance, rotate rear hip forward",
            "Extend rear hand straight through target",
            "Pivot rear foot, transfer weight",
            "Retract hand quickly to guard",
            "Keep lead hand up protecting face"
          ],
          progression: "Cross → Cross-Hook → Cross to Body",
          scienceNote: "Power strike using full body rotation and ground force"
        },
        {
          name: "Lead Hook",
          difficulty: "Beginner",
          targetPractice: "3x15 each side",
          muscles: ["Obliques", "Shoulders", "Lats"],
          instructions: [
            "From stance, rotate lead hip and shoulder",
            "Bend elbow to 90°, swing fist horizontally",
            "Keep elbow at shoulder height",
            "Pivot lead foot, transfer weight",
            "Retract to guard immediately"
          ],
          progression: "Lead Hook → Rear Hook → Hook to Body",
          scienceNote: "Angular strike effective at close range; targets jaw and liver"
        },
        {
          name: "Front Kick",
          difficulty: "Beginner",
          targetPractice: "3x10 each leg",
          muscles: ["Quadriceps", "Hip Flexors", "Core"],
          instructions: [
            "From stance, lift knee toward chest",
            "Extend leg forward, striking with ball of foot",
            "Keep hands up protecting face",
            "Retract leg quickly to stance",
            "Don't lean back; stay balanced"
          ],
          progression: "Front Kick → Push Kick → Jumping Front Kick",
          scienceNote: "Versatile kick for distance control and stopping advances"
        },
        {
          name: "Basic Parry/Block",
          difficulty: "Beginner",
          targetPractice: "3x20 each direction",
          muscles: ["Forearms", "Shoulders", "Reflexes"],
          instructions: [
            "From guard, practice deflecting imaginary strikes",
            "Use forearm to redirect incoming attack",
            "Minimal movement, efficient defense",
            "Return to guard immediately after",
            "Practice against jab, cross, and hook angles"
          ],
          progression: "Parry → Slip → Counter-Strike",
          scienceNote: "Defense first; blocking creates openings for counters"
        }
      ]
    },
    
    level2: {
      level: 2,
      name: "Intermediate Phase",
      description: "Combine techniques and add defensive movement",
      prerequisites: "Master Novice skills",
      masteryGoal: "Execute combinations with fluidity and defense",
      skills: [
        {
          name: "Jab-Cross Combination",
          difficulty: "Intermediate",
          targetPractice: "3x15 combos",
          muscles: ["Full Upper Body", "Core", "Legs"],
          instructions: [
            "Throw jab, fully extend and retract",
            "Immediately follow with cross",
            "Rotate hips for cross power",
            "Keep hands up between strikes",
            "Return to stance after combo"
          ],
          progression: "1-2 → 1-2-3 → 1-2 to Body-Head",
          scienceNote: "Foundation of boxing; jab sets up power cross"
        },
        {
          name: "Slip and Counter",
          difficulty: "Intermediate",
          targetPractice: "3x10 each side",
          muscles: ["Obliques", "Legs", "Reflexes"],
          instructions: [
            "From stance, imagine incoming cross",
            "Rotate upper body slightly off centerline",
            "Keep eyes on 'opponent', hands up",
            "Counter with cross or hook immediately",
            "Return to stance after counter"
          ],
          progression: "Slip → Slip-Counter → Slip-Counter-Combo",
          scienceNote: "Evasion plus counter is more effective than blocking alone"
        },
        {
          name: "Roundhouse Kick",
          difficulty: "Intermediate",
          targetPractice: "3x10 each leg",
          muscles: ["Glutes", "Obliques", "Hip Flexors"],
          instructions: [
            "Pivot lead foot, rotate hip forward",
            "Swing leg in arc, strike with shin or instep",
            "Keep hands up protecting head",
            "Retract leg quickly to stance",
            "Chamber knee before extending for power"
          ],
          progression: "Low Roundhouse → Body Roundhouse → Head Kick",
          scienceNote: "Powerful angular kick; targets legs, body, or head"
        },
        {
          name: "Sprawl (Takedown Defense)",
          difficulty: "Intermediate",
          targetPractice: "3x10",
          muscles: ["Core", "Glutes", "Quadriceps"],
          instructions: [
            "From stance, imagine opponent shooting for takedown",
            "Jump feet back, drop hips to floor",
            "Keep chest up, arms ready to frame",
            "Drive hips forward to stand back up",
            "Practice quick recovery to stance"
          ],
          progression: "Sprawl → Sprawl-and-Strike → Takedown Defense Drills",
          scienceNote: "Essential defense against wrestling-style takedowns"
        },
        {
          name: "Basic Clinch",
          difficulty: "Intermediate",
          targetPractice: "3x30 seconds",
          muscles: ["Neck", "Shoulders", "Core"],
          instructions: [
            "From stance, step in close to 'opponent'",
            "Place hands behind neck, elbows in",
            "Control head position, keep posture",
            "Practice knee strikes and off-balancing",
            "Don't lean on opponent; stay active"
          ],
          progression: "Clinch Control → Knee Strikes → Clinch Takedowns",
          scienceNote: "Close-range control; neutralizes striking and sets up offense"
        }
      ]
    },
    
    level3: {
      level: 3,
      name: "Advanced Phase",
      description: "Master combinations, counters, and situational awareness",
      prerequisites: "Master Intermediate skills",
      masteryGoal: "Flow between offense and defense instinctively",
      skills: [
        {
          name: "3-Strike Combination",
          difficulty: "Advanced",
          targetPractice: "3x10 combos",
          muscles: ["Full Body", "Cardiovascular"],
          instructions: [
            "Example: Jab-Cross-Lead Hook",
            "Execute each strike with proper form",
            "Maintain balance throughout combo",
            "Keep defense up between strikes",
            "Practice variations: high-low-high patterns"
          ],
          progression: "4-Strike Combos → Feint-Combo → Adaptive Combinations",
          scienceNote: "Combinations overwhelm defense; variety prevents prediction"
        },
        {
          name: "Counter-Striking",
          difficulty: "Advanced",
          targetPractice: "3x15 reps",
          muscles: ["Reflexes", "Core", "Full Body"],
          instructions: [
            "Practice slipping jab, countering with cross",
            "Parry hook, counter with uppercut",
            "Check kick, counter with straight",
            "Focus on timing, not just speed",
            "Stay relaxed, react not anticipate"
          ],
          progression: "Single Counter → Double Counter → Counter-Combo",
          scienceNote: "Counters exploit opponent's commitment; highest percentage offense"
        },
        {
          name: "Spinning Back Kick",
          difficulty: "Advanced",
          targetPractice: "3x5 each leg",
          muscles: ["Glutes", "Core", "Balance"],
          instructions: [
            "From stance, look over rear shoulder",
            "Pivot lead foot, spin body 180°",
            "Extend rear leg straight back",
            "Strike with heel, chamber knee first",
            "Spot target, return to stance quickly"
          ],
          progression: "Spinning Kick → Spinning Back Fist → Spinning Elbow",
          scienceNote: "Surprise technique; requires balance and spatial awareness"
        },
        {
          name: "Takedown Defense to Strike",
          difficulty: "Advanced",
          targetPractice: "3x10",
          muscles: ["Full Body", "Reflexes"],
          instructions: [
            "Sprawl to defend takedown attempt",
            "Immediately create distance or clinch",
            "Deliver knees or strikes to 'opponent'",
            "Disengage to safe distance",
            "Reset to fighting stance"
          ],
          progression: "Defense-to-Offense → Ground-and-Pound Basics → Submission Defense",
          scienceNote: "Transitions between ranges are critical in real scenarios"
        },
        {
          name: "Footwork Angles",
          difficulty: "Advanced",
          targetPractice: "5 minutes",
          muscles: ["Legs", "Core", "Proprioception"],
          instructions: [
            "Practice stepping off centerline at 45°",
            "Create angles while maintaining guard",
            "Cut off imaginary opponent's retreat",
            "Combine with strikes at angles",
            "Stay balanced, never cross feet"
          ],
          progression: "Angle Striking → Ring Generalship → Pressure Fighting",
          scienceNote: "Angles create openings and reduce opponent's options"
        }
      ]
    },
    
    level4: {
      level: 4,
      name: "Elite Phase",
      description: "Master adaptive fighting and advanced techniques",
      prerequisites: "Master Advanced skills",
      masteryGoal: "Adapt technique to any situation instinctively",
      skills: [
        {
          name: "Adaptive Sparring Drills",
          difficulty: "Elite",
          targetPractice: "3x3 minutes",
          muscles: ["Full Body", "Mental", "Cardiovascular"],
          instructions: [
            "Shadow spar with imaginary opponent",
            "React to imagined attacks with appropriate defense",
            "Counter with situationally appropriate strikes",
            "Vary range, tempo, and techniques",
            "Focus on flow, not predetermined patterns"
          ],
          progression: "Partner Drills → Light Sparring → Full Application",
          scienceNote: "Adaptability is the highest martial skill; patterns break under pressure"
        },
        {
          name: "Advanced Kicks",
          difficulty: "Elite",
          targetPractice: "3x5 each technique",
          muscles: ["Full Lower Body", "Core", "Balance"],
          instructions: [
            "Practice: Jumping Switch Kick, Axe Kick, Tornado Kick",
            "Focus on control, not just height",
            "Chamber properly for power and safety",
            "Land in balanced stance ready for next action",
            "Only attempt when foundational kicks are mastered"
          ],
          progression: "Kick Combinations → Kick Counters → Flying Techniques",
          scienceNote: "Advanced kicks are high-risk/high-reward; use strategically"
        },
        {
          name: "Ground Defense Basics",
          difficulty: "Elite",
          targetPractice: "3x2 minutes",
          muscles: ["Core", "Hips", "Problem-Solving"],
          instructions: [
            "Practice technical stand-up from seated",
            "Frame against imaginary opponent",
            "Create space to return to feet",
            "Protect head and vital areas",
            "Prioritize getting up over engaging on ground"
          ],
          progression: "Guard Basics → Submission Escapes → Ground Striking",
          scienceNote: "In self-defense, standing is almost always advantageous"
        },
        {
          name: "Multiple Opponent Awareness",
          difficulty: "Elite",
          targetPractice: "Scenario drills",
          muscles: ["Peripheral Vision", "Decision-Making", "Cardio"],
          instructions: [
            "Practice scanning environment while in stance",
            "Move to avoid being surrounded",
            "Use obstacles for cover",
            "Prioritize escape over engagement",
            "Stay mobile, never get pinned"
          ],
          progression: "Environmental Awareness → De-escalation → Escape Strategies",
          scienceNote: "Real-world scenarios require awareness beyond one-on-one fighting"
        },
        {
          name: "Pressure Testing",
          difficulty: "Elite",
          targetPractice: "Controlled scenarios",
          muscles: ["Mental Resilience", "Full Body", "Adaptability"],
          instructions: [
            "Practice techniques under fatigue",
            "Add distractions or time pressure",
            "Wear protective gear for light contact",
            "Focus on maintaining form under stress",
            "Debrief and refine after each session"
          ],
          progression: "Controlled Sparring → Scenario Training → Real-World Application",
          scienceNote: "Technique under pressure is the only technique that matters"
        }
      ]
    }
  },
  
  // ==================== MOBILITY & STRETCHING SKILL TREE ====================
  mobility: {
    description: "Joint health, flexibility, and movement quality progression",
    equipment: ["Yoga mat", "Foam roller (optional)", "Resistance bands (optional)", "Wall"],
    
    foundations: {
      level: 0,
      name: "Foundation Phase",
      description: "Establish baseline mobility and body awareness",
      prerequisites: "None",
      masteryGoal: "Move through basic ranges pain-free",
      skills: [
        {
          name: "Cat-Cow Stretch",
          difficulty: "Beginner",
          targetPractice: "2x10 reps",
          muscles: ["Spine", "Core", "Shoulders"],
          instructions: [
            "Start on hands and knees",
            "Arch back, look up (Cow)",
            "Round spine, tuck chin (Cat)",
            "Move slowly with breath",
            "Focus on segmental spinal movement"
          ],
          progression: "Cat-Cow → Thread the Needle → Spinal Waves",
          scienceNote: "Mobilizes entire spine; improves posture and reduces back tension"
        },
        {
          name: "World's Greatest Stretch",
          difficulty: "Beginner",
          targetPractice: "2x5 each side",
          muscles: ["Hips", "Hamstrings", "Thoracic Spine"],
          instructions: [
            "Step into deep lunge, back knee down",
            "Place same-side elbow inside front foot",
            "Rotate torso, reaching arm to ceiling",
            "Return to lunge, straighten front leg for hamstring stretch",
            "Step back, repeat other side"
          ],
          progression: "Add Rotation → Add Reach → Flow Sequence",
          scienceNote: "Multi-joint dynamic stretch; prepares body for movement"
        },
        {
          name: "Shoulder Dislocates (with band/towel)",
          difficulty: "Beginner",
          targetPractice: "2x10 reps",
          muscles: ["Shoulders", "Chest", "Upper Back"],
          instructions: [
            "Hold band/towel with wide grip",
            "Keep arms straight, raise overhead",
            "Continue behind back as far as comfortable",
            "Return to front with control",
            "Gradually narrow grip as mobility improves"
          ],
          progression: "Narrower Grip → One-Arm Variations → Wall Slides",
          scienceNote: "Improves shoulder flexion and thoracic extension; crucial for overhead movements"
        },
        {
          name: "90/90 Hip Stretch",
          difficulty: "Beginner",
          targetPractice: "2x30 seconds each side",
          muscles: ["Hips", "Glutes", "Adductors"],
          instructions: [
            "Sit with one leg bent in front at 90°",
            "Other leg bent behind at 90°",
            "Keep torso upright, don't lean",
            "Feel stretch in front leg's hip",
            "Switch legs, repeat"
          ],
          progression: "Add Lean → Add Rotation → Pigeon Pose",
          scienceNote: "Addresses internal/external hip rotation; foundational for squat depth"
        },
        {
          name: "Ankle Mobility Drill",
          difficulty: "Beginner",
          targetPractice: "2x10 each ankle",
          muscles: ["Calves", "Ankles", "Tibialis"],
          instructions: [
            "Kneel with foot flat, knee over toes",
            "Drive knee forward over toes, keep heel down",
            "Feel stretch in calf/Achilles",
            "Return to start, repeat",
            "Can use wall for support"
          ],
          progression: "Add Weight → Single-Leg → Dynamic Ankle Circles",
          scienceNote: "Ankle dorsiflexion is critical for squat depth and running mechanics"
        }
      ]
    },
    
    level1: {
      level: 1,
      name: "Novice Phase",
      description: "Develop active flexibility and control",
      prerequisites: "Master Foundation skills",
      masteryGoal: "Control end ranges with strength",
      skills: [
        {
          name: "Pancake Stretch",
          difficulty: "Beginner",
          targetPractice: "3x30 seconds",
          muscles: ["Hamstrings", "Adductors", "Lower Back"],
          instructions: [
            "Sit with legs wide apart",
            "Keep knees straight, toes up",
            "Hinge at hips, reach hands forward",
            "Keep back straight, don't round",
            "Feel stretch in inner thighs and hamstrings"
          ],
          progression: "Add Reach → Add Rotation → Straddle Press",
          scienceNote: "Improves hip abduction and hamstring flexibility; foundational for splits"
        },
        {
          name: "Couch Stretch",
          difficulty: "Beginner",
          targetPractice: "2x30 seconds each leg",
          muscles: ["Hip Flexors", "Quadriceps"],
          instructions: [
            "Kneel with back knee against wall/couch",
            "Front foot flat, knee at 90°",
            "Squeeze glute of back leg",
            "Tuck pelvis slightly, feel front hip stretch",
            "Keep torso upright, don't lean forward"
          ],
          progression: "Add Reach → Add Rotation → Active Knee Drive",
          scienceNote: "Counters sitting posture; critical for hip extension and squat depth"
        },
        {
          name: "Thoracic Extension over Foam Roller",
          difficulty: "Beginner",
          targetPractice: "2x10 reps",
          muscles: ["Upper Back", "Lats", "Shoulders"],
          instructions: [
            "Place foam roller under upper back",
            "Hands behind head, elbows wide",
            "Extend back over roller, opening chest",
            "Return to neutral, repeat",
            "Move roller to different thoracic segments"
          ],
          progression: "Add Rotation → Add Reach → Wall Angels",
          scienceNote: "Improves thoracic mobility; essential for overhead pressing and posture"
        },
        {
          name: "Active Straight Leg Raise",
          difficulty: "Intermediate",
          targetPractice: "2x8 each leg",
          muscles: ["Hamstrings", "Hip Flexors", "Core"],
          instructions: [
            "Lie on back, one leg straight on floor",
            "Lift other leg straight up as high as possible",
            "Keep lower back pressed to floor",
            "Point toes, engage quad",
            "Lower with control, don't let leg fall"
          ],
          progression: "Add Band Resistance → Add Hold → Straddle Lifts",
          scienceNote: "Tests and develops active hamstring flexibility; crucial for kicks"
        },
        {
          name: "Wrist Mobility Flow",
          difficulty: "Beginner",
          targetPractice: "2x10 each direction",
          muscles: ["Wrists", "Forearms"],
          instructions: [
            "On hands and knees, gently rock forward/back",
            "Rotate wrists in circles both directions",
            "Practice prayer stretch, reverse prayer",
            "Finger extensions and fist clenches",
            "Keep movements pain-free, gradual"
          ],
          progression: "Add Weight Bearing → Wrist Push-ups → Handstand Prep",
          scienceNote: "Wrist health is critical for calisthenics and martial arts"
        }
      ]
    },
    
    level2: {
      level: 2,
      name: "Intermediate Phase",
      description: "Build strength at end ranges",
      prerequisites: "Master Novice skills",
      masteryGoal: "Express flexibility under load",
      skills: [
        {
          name: "Pigeon Pose",
          difficulty: "Intermediate",
          targetPractice: "2x45 seconds each side",
          muscles: ["Glutes", "Hip Rotators", "Piriformis"],
          instructions: [
            "From downward dog, bring one knee forward",
            "Place shin at angle, foot toward opposite hip",
            "Extend back leg straight",
            "Fold forward over front leg if comfortable",
            "Keep hips square, don't let one side rise"
          ],
          progression: "Add Reach → Add Active Engagement → Mermaid Stretch",
          scienceNote: "Deep hip external rotation; releases tension from sitting and running"
        },
        {
          name: "Cossack Squat",
          difficulty: "Intermediate",
          targetPractice: "3x8 each side",
          muscles: ["Adductors", "Quadriceps", "Ankles"],
          instructions: [
            "Stand with feet wide, toes slightly out",
            "Shift weight to one side, bending that knee",
            "Keep other leg straight, foot flat",
            "Descend as deep as mobility allows",
            "Push through heel to return to center"
          ],
          progression: "Add Reach → Add Pause → Weighted Cossack",
          scienceNote: "Dynamic adductor stretch with strength; improves lateral movement"
        },
        {
          name: "Bridge (Wheel Pose)",
          difficulty: "Intermediate",
          targetPractice: "3x20 seconds",
          muscles: ["Spine", "Shoulders", "Hip Flexors"],
          instructions: [
            "Lie on back, knees bent, feet flat",
            "Place hands by ears, fingers toward shoulders",
            "Press through hands and feet to lift hips",
            "Straighten arms and legs as able",
            "Lower with control, vertebra by vertebra"
          ],
          progression: "Add Hold → Add Rocking → One-Leg Bridge",
          scienceNote: "Full spinal extension; counteracts forward posture and sitting"
        },
        {
          name: "Oversplit Progression",
          difficulty: "Intermediate",
          targetPractice: "2x20 seconds each position",
          muscles: ["Hamstrings", "Adductors", "Hip Flexors"],
          instructions: [
            "For front split: place front foot on elevated surface",
            "Lower into split position with control",
            "Keep hips square, don't twist",
            "Feel deeper stretch, don't force",
            "Use blocks/props for support as needed"
          ],
          progression: "Active Oversplits → Weighted Oversplits → Full Splits",
          scienceNote: "Progressive overload for flexibility; requires patience and consistency"
        },
        {
          name: "Shoulder CARs (Controlled Articular Rotations)",
          difficulty: "Intermediate",
          targetPractice: "2x5 each direction",
          muscles: ["Shoulders", "Scapular Stabilizers"],
          instructions: [
            "Stand tall, arm at side",
            "Slowly rotate arm in largest circle possible",
            "Keep torso still, isolate shoulder movement",
            "Move through full pain-free range",
            "Reverse direction, repeat"
          ],
          progression: "Add Resistance Band → Add Weight → Handstand Shoulder CARs",
          scienceNote: "Improves shoulder joint health and active range of motion"
        }
      ]
    },
    
    level3: {
      level: 3,
      name: "Advanced Phase",
      description: "Master extreme ranges with control",
      prerequisites: "Master Intermediate skills",
      masteryGoal: "Express flexibility dynamically and under load",
      skills: [
        {
          name: "Full Front Split",
          difficulty: "Advanced",
          targetPractice: "3x30 seconds each leg",
          muscles: ["Hamstrings", "Hip Flexors", "Adductors"],
          instructions: [
            "Start in lunge position",
            "Slide front foot forward, back foot back",
            "Keep hips square, don't let one side rise",
            "Lower gently, use hands for support",
            "Breathe into stretch, don't bounce"
          ],
          progression: "Active Split Holds → Split Strength Drills → Split Leaps",
          scienceNote: "Peak hamstring and hip flexor flexibility; requires months of consistent work"
        },
        {
          name: "Full Side Split (Straddle)",
          difficulty: "Advanced",
          targetPractice: "3x30 seconds",
          muscles: ["Adductors", "Hamstrings", "Hip Abductors"],
          instructions: [
            "Sit with legs wide apart",
            "Keep knees straight, toes up",
            "Hinge at hips, walk hands forward",
            "Lower torso toward floor as able",
            "Use elbows or chest for support if needed"
          ],
          progression: "Active Straddle Holds → Straddle Press → Straddle Jumps",
          scienceNote: "Extreme hip abduction; foundational for martial arts kicks"
        },
        {
          name: "Deep Squat Hold (Malasana)",
          difficulty: "Advanced",
          targetPractice: "3x60 seconds",
          muscles: ["Ankles", "Hips", "Spine"],
          instructions: [
            "Stand with feet shoulder-width, toes out",
            "Descend into deepest squat possible",
            "Keep heels down, chest up",
            "Use elbows to press knees out if helpful",
            "Breathe deeply, relax into position"
          ],
          progression: "Add Movement → Add Weight → One-Leg Squat Mobility",
          scienceNote: "Full lower body mobility; natural resting position for humans"
        },
        {
          name: "Scorpion Reach",
          difficulty: "Advanced",
          targetPractice: "2x8 each side",
          muscles: ["Thoracic Spine", "Shoulders", "Obliques"],
          instructions: [
            "Lie face down, arms out to sides",
            "Lift one leg, rotate to tap foot to opposite hand",
            "Keep shoulders on ground, rotate through spine",
            "Return to start, repeat other side",
            "Move slowly, focus on control"
          ],
          progression: "Add Reach → Add Hold → Dynamic Scorpion Flow",
          scienceNote: "Advanced thoracic rotation; improves golf swings, throws, and strikes"
        },
        {
          name: "Active Flexibility Drills",
          difficulty: "Advanced",
          targetPractice: "3x10 each movement",
          muscles: ["Full Body", "Proprioception"],
          instructions: [
            "Practice leg swings front/back, side/side",
            "Control end range with muscle, not momentum",
            "Gradually increase range over time",
            "Keep core engaged throughout",
            "Focus on smooth, controlled movement"
          ],
          progression: "Weighted Swings → Plyometric Flexibility → Sport-Specific Drills",
          scienceNote: "Active flexibility transfers to performance; passive does not"
        }
      ]
    },
    
    level4: {
      level: 4,
      name: "Elite Phase",
      description: "Express mobility in dynamic, sport-specific patterns",
      prerequisites: "Master Advanced skills",
      masteryGoal: "Move with freedom, power, and grace in any position",
      skills: [
        {
          name: "Dynamic Split Leaps",
          difficulty: "Elite",
          targetPractice: "3x5 each leg",
          muscles: ["Full Lower Body", "Power", "Coordination"],
          instructions: [
            "Start in lunge position",
            "Explosively jump, switching legs in air",
            "Land softly in opposite lunge",
            "Keep torso upright, arms for balance",
            "Focus on height and control, not speed"
          ],
          progression: "Add Distance → Add Rotation → Sport-Specific Applications",
          scienceNote: "Combines flexibility with power; essential for martial arts and dance"
        },
        {
          name: "Handstand Mobility Flow",
          difficulty: "Elite",
          targetPractice: "5 minutes",
          muscles: ["Shoulders", "Wrists", "Core", "Balance"],
          instructions: [
            "Kick up to handstand against wall",
            "Practice shoulder shrugs, pikes, arches",
            "Shift weight side to side, forward/back",
            "Explore end ranges with control",
            "Focus on awareness, not just strength"
          ],
          progression: "Freestanding Handstand Flow → Handstand Transitions → Skill Integration",
          scienceNote: "Shoulder mobility under load; peak expression of upper body control"
        },
        {
          name: "Spinal Wave Flow",
          difficulty: "Elite",
          targetPractice: "3x10 reps",
          muscles: ["Full Spine", "Core", "Breathing"],
          instructions: [
            "Start standing, feet hip-width",
            "Drop chin, round upper back, then mid, then lower",
            "Reverse: lift tailbone, then mid-back, then chest, then head",
            "Move like a wave through entire spine",
            "Coordinate with breath: exhale rounding, inhale arching"
          ],
          progression: "Add Speed → Add Rotation → Integrate with Movement Patterns",
          scienceNote: "Full spinal articulation; improves posture, power transfer, and injury resilience"
        },
        {
          name: "Integrated Movement Flow",
          difficulty: "Elite",
          targetPractice: "10 minutes",
          muscles: ["Full Body", "Nervous System", "Creativity"],
          instructions: [
            "Combine mobility drills into seamless flow",
            "Transition smoothly between positions",
            "Include calisthenics and martial arts elements",
            "Move with intention, not just repetition",
            "Listen to body, adjust intensity as needed"
          ],
          progression: "Choreographed Flows → Improvisational Movement → Performance Application",
          scienceNote: "Movement literacy is the ultimate goal; body as instrument"
        },
        {
          name: "Recovery & Regeneration Protocol",
          difficulty: "Elite",
          targetPractice: "Daily",
          muscles: ["Full Body", "Nervous System"],
          instructions: [
            "Morning: Dynamic mobility flow (5-10 min)",
            "Post-training: Static stretching for worked areas",
            "Evening: Restorative poses, breathwork",
            "Weekly: Foam rolling, contrast therapy",
            "Listen to body; adjust based on fatigue"
          ],
          progression: "Personalize protocol → Track recovery metrics → Optimize for goals",
          scienceNote: "Recovery is where adaptation happens; mobility maintenance prevents regression"
        }
      ]
    }
  },
  
  // ==================== PROGRESSION TRACKING & METRICS ====================
  progressionSystem: {
    // How to know when you're ready to progress
    masteryCriteria: {
      form: "Can perform movement with perfect technique for all reps",
      consistency: "Can complete target reps/sets 3 consecutive sessions",
      control: "Can pause at hardest point of movement for 2 seconds",
      recovery: "No pain or excessive soreness 24-48 hours post-session"
    },
    
    // Deload and recovery guidance
    recoveryProtocol: {
      deloadFrequency: "Every 4-6 weeks, reduce volume by 50% for one week",
      restDays: "At least 1 full rest day per week; active recovery on others",
      sleep: "7-9 hours nightly for optimal adaptation",
      nutrition: "Adequate protein (1.6-2.2g/kg) and calories for goals"
    },
    
    // Common plateaus and solutions
    troubleshooting: {
      strengthPlateau: [
        "Add variety: change grip, tempo, or range of motion",
        "Add resistance: weighted vest, bands, or backpack",
        "Deload: reduce volume for a week, then rebuild",
        "Check recovery: sleep, nutrition, stress management"
      ],
      flexibilityPlateau: [
        "Add active flexibility work at end ranges",
        "Increase frequency: short daily sessions > infrequent long ones",
        "Add PNF stretching: contract-relax techniques",
        "Address strength imbalances limiting range"
      ],
      skillPlateau: [
        "Break skill into smaller progressions",
        "Film yourself to identify form issues",
        "Add preparatory drills for weak links",
        "Practice skills fresh, not fatigued"
      ]
    }
  },
  
  // ==================== HELPER FUNCTIONS ====================
  
  // Get all skills for a category and level
  getSkills: (category, level) => {
    const db = homeTrainingDB[category];
    if (!db || !db[level]) return [];
    return db[level].skills || [];
  },
  
  // Get progression path for a specific skill
  getProgressionPath: (category, skillName) => {
    let path = [];
    Object.values(homeTrainingDB[category]).forEach(level => {
      if (level.skills) {
        level.skills.forEach(skill => {
          if (skill.name === skillName) {
            path.push({
              level: level.level,
              levelName: level.name,
              skill: skill
            });
          }
        });
      }
    });
    return path;
  },
  
  // Search skills by name or muscle
  searchSkills: (category, query) => {
    const results = [];
    const lowerQuery = query.toLowerCase();
    
    Object.values(homeTrainingDB[category]).forEach(level => {
      if (level.skills) {
        level.skills.forEach(skill => {
          if (
            skill.name.toLowerCase().includes(lowerQuery) ||
            skill.muscles?.some(m => m.toLowerCase().includes(lowerQuery)) ||
            skill.instructions?.some(i => i.toLowerCase().includes(lowerQuery))
          ) {
            results.push({
              ...skill,
              level: level.level,
              levelName: level.name,
              category
            });
          }
        });
      }
    });
    
    return results;
  },
  
  // Get recommended next skill after mastering current
  getNextSkill: (category, currentSkillName) => {
    let found = false;
    let nextSkill = null;
    
    // Search through levels in order
    const levels = Object.values(homeTrainingDB[category]).sort((a, b) => a.level - b.level);
    
    for (let level of levels) {
      if (level.skills) {
        for (let skill of level.skills) {
          if (found && !nextSkill) {
            nextSkill = {
              ...skill,
              level: level.level,
              levelName: level.name,
              category
            };
            break;
          }
          if (skill.name === currentSkillName) {
            found = true;
          }
        }
        if (nextSkill) break;
      }
    }
    
    return nextSkill || { message: "You've reached the highest level! Focus on mastery and variation." };
  }
};

export default homeTrainingDB;