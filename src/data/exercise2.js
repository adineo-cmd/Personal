// exercise2.js - Comprehensive Science-Based Exercise Library
// Organized from smallest to largest muscle groups

export const exerciseLibrary = {
  lastUpdated: "2026-02-04",
  totalExercises: 450,
  
  categories: [
    {
      muscle: "Calves",
      icon: "🦵",
      size: "small",
      scienceNote: "Calves are predominantly slow-twitch fibers (Type I), requiring higher reps and frequency for optimal growth",
      exercises: [
        {
          name: "Standing Calf Raise (Bodyweight)",
          categories: ["freehand", "isolation", "calisthenics"],
          difficulty: "Beginner",
          machine: "None",
          scienceNote: "Targets gastrocnemius through plantar flexion",
          instructions: [
            "Stand tall with feet hip-width apart",
            "Rise up onto your toes as high as possible",
            "Squeeze calves hard at the top for 1 second",
            "Lower heels below starting level for full stretch",
            "Keep knees straight throughout movement"
          ]
        },
        {
          name: "Seated Calf Raise",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Seated Calf Raise Machine",
          scienceNote: "Emphasizes soleus muscle (deep calf) with knees bent at 90 degrees",
          instructions: [
            "Sit on machine with pads resting on thighs",
            "Place balls of feet on platform",
            "Lower heels as far as possible for stretch",
            "Raise up onto toes, pushing through balls of feet",
            "Hold contraction briefly, then lower slowly"
          ]
        },
        {
          name: "Donkey Calf Raise",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Donkey Calf Raise Machine or Partner",
          scienceNote: "Stretches gastrocnemius at lengthened position for maximum activation",
          instructions: [
            "Bend forward at hips, resting on support",
            "Place balls of feet on raised platform",
            "Have partner sit on lower back or use machine pad",
            "Lower heels below platform for deep stretch",
            "Explode up onto toes, pause at top"
          ]
        },
        {
          name: "Single-Leg Calf Raise",
          categories: ["freehand", "isolation", "calisthenics"],
          difficulty: "Intermediate",
          machine: "None (can hold dumbbell)",
          scienceNote: "Unilateral training corrects imbalances, increases stabilizer activation",
          instructions: [
            "Stand on one foot, other leg bent behind you",
            "Hold wall or support for balance if needed",
            "Rise up onto toe of working leg",
            "Lower slowly with control",
            "Complete all reps before switching legs"
          ]
        },
        {
          name: "Farmer's Walk on Toes",
          categories: ["weights", "compound", "functional"],
          difficulty: "Intermediate",
          machine: "Dumbbells or Kettlebells",
          scienceNote: "Combines calf endurance with grip strength and core stability",
          instructions: [
            "Hold heavy dumbbells at your sides",
            "Rise up onto your toes",
            "Walk forward maintaining toe position",
            "Keep calves contracted throughout",
            "Take small, controlled steps"
          ]
        },
        {
          name: "Jump Rope",
          categories: ["freehand", "compound", "calisthenics", "plyometric"],
          difficulty: "Beginner",
          machine: "Jump Rope",
          scienceNote: "Plyometric calf training improves power and elastic energy storage",
          instructions: [
            "Hold rope handles at hip level",
            "Stay on balls of feet throughout",
            "Jump just high enough to clear rope",
            "Land softly on toes, not heels",
            "Maintain quick, rhythmic bouncing"
          ]
        },
        {
          name: "Box Jumps",
          categories: ["weights", "compound", "plyometric"],
          difficulty: "Advanced",
          machine: "Plyometric Box",
          scienceNote: "Develops explosive power through stretch-shortening cycle",
          instructions: [
            "Stand facing box, feet shoulder-width apart",
            "Dip down slightly, swing arms back",
            "Explode up, driving through toes",
            "Land softly on box with knees bent",
            "Step down (don't jump down)"
          ]
        },
        {
          name: "Calf Raise on Leg Press",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Leg Press Machine",
          scienceNote: "Allows heavy loading with spinal support",
          instructions: [
            "Sit in leg press, place only balls of feet on bottom of platform",
            "Extend legs but don't lock knees",
            "Lower platform by dropping heels",
            "Press through toes to extend ankles",
            "Keep knees stable throughout"
          ]
        },
        {
          name: "Tibialis Raises",
          categories: ["freehand", "isolation"],
          difficulty: "Beginner",
          machine: "None or Tibialis Bar",
          scienceNote: "Strengthens anterior tibialis for knee health and shin splint prevention",
          instructions: [
            "Stand with back against wall, feet forward",
            "Keep heels on ground",
            "Lift toes and front of feet toward shins",
            "Lower back down with control",
            "Can add weight on thighs for progression"
          ]
        },
        {
          name: "Seal Jacks",
          categories: ["freehand", "compound", "calisthenics", "plyometric"],
          difficulty: "Intermediate",
          machine: "None",
          scienceNote: "Combines calf work with cardiovascular conditioning",
          instructions: [
            "Start in plank position on hands",
            "Jump feet wide apart onto toes",
            "Jump feet back together",
            "Stay on balls of feet throughout",
            "Maintain plank position with core tight"
          ]
        }
      ]
    },
    
    {
      muscle: "Forearms",
      icon: "💪",
      size: "small",
      scienceNote: "Forearms contain multiple muscles for grip, wrist flexion/extension, and pronation/supination",
      exercises: [
        {
          name: "Dead Hang",
          categories: ["freehand", "isolation", "calisthenics"],
          difficulty: "Beginner",
          machine: "Pull-up Bar",
          scienceNote: "Isometric grip training builds crushing strength and forearm endurance",
          instructions: [
            "Grip pull-up bar with overhand grip",
            "Hang with arms fully extended",
            "Keep shoulders slightly engaged",
            "Hold as long as possible",
            "Breathe steadily throughout"
          ]
        },
        {
          name: "Wrist Curls",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbell or Barbell",
          scienceNote: "Targets wrist flexors (flexor carpi radialis/ulnaris)",
          instructions: [
            "Sit on bench, forearms resting on thighs",
            "Hold weight with palms facing up",
            "Lower weight by extending wrists",
            "Curl weight up by flexing wrists",
            "Keep forearms stationary"
          ]
        },
        {
          name: "Reverse Wrist Curls",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbell or Barbell",
          scienceNote: "Strengthens wrist extensors for balanced forearm development",
          instructions: [
            "Sit with forearms on thighs, palms down",
            "Hold weight with overhand grip",
            "Lower weight by flexing wrists down",
            "Extend wrists to lift weight up",
            "Control the movement both ways"
          ]
        },
        {
          name: "Farmer's Walk",
          categories: ["weights", "compound", "functional"],
          difficulty: "Intermediate",
          machine: "Dumbbells, Kettlebells, or Farmer's Walk Handles",
          scienceNote: "Builds grip endurance and forearm strength under load",
          instructions: [
            "Hold heavy weights at your sides",
            "Stand tall with shoulders back",
            "Walk forward with controlled steps",
            "Grip as hard as possible throughout",
            "Don't let weights swing"
          ]
        },
        {
          name: "Plate Pinch",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Weight Plates",
          scienceNote: "Develops pinch grip strength using thumb opposition",
          instructions: [
            "Pinch two smooth plates together",
            "Use fingertips and thumb only",
            "Hold for time or walk short distance",
            "Keep plates parallel to ground",
            "Don't let fingers wrap around edges"
          ]
        },
        {
          name: "Hammer Curls",
          categories: ["weights", "compound"],
          difficulty: "Beginner",
          machine: "Dumbbells",
          scienceNote: "Neutral grip emphasizes brachialis and brachioradialis",
          instructions: [
            "Stand holding dumbbells, palms facing body",
            "Keep elbows at your sides",
            "Curl weights up toward shoulders",
            "Maintain neutral wrist position",
            "Lower with control"
          ]
        },
        {
          name: "Towel Pull-ups",
          categories: ["calisthenics", "compound"],
          difficulty: "Advanced",
          machine: "Pull-up Bar + Towels",
          scienceNote: "Thick grip increases forearm activation by 30-50%",
          instructions: [
            "Drape towels over pull-up bar",
            "Grip ends of towels firmly",
            "Perform pull-up motion",
            "Squeeze towels hard throughout",
            "Harder than regular pull-ups"
          ]
        },
        {
          name: "Reverse Curls",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Barbell or EZ Bar",
          scienceNote: "Overhand grip targets brachioradialis and forearm extensors",
          instructions: [
            "Stand holding bar with overhand grip",
            "Hands shoulder-width apart",
            "Keep elbows stationary at sides",
            "Curl bar up toward chest",
            "Lower slowly, don't swing"
          ]
        },
        {
          name: "Rice Bucket Training",
          categories: ["freehand", "isolation"],
          difficulty: "Beginner",
          machine: "Bucket of Rice",
          scienceNote: "Provides variable resistance for all hand muscles",
          instructions: [
            "Plunge hands deep into rice",
            "Open and close hands repeatedly",
            "Rotate wrists in all directions",
            "Make fists, then spread fingers wide",
            "Continue for 30-60 seconds"
          ]
        },
        {
          name: "Wrist Roller",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Wrist Roller Device",
          scienceNote: "Continuous tension through full range builds forearm endurance",
          instructions: [
            "Hold roller with both hands",
            "Arms extended in front of you",
            "Roll weight up by flexing wrists",
            "Roll back down with control",
            "Keep elbows slightly bent"
          ]
        }
      ]
    },
    
    {
      muscle: "Biceps",
      icon: "💪",
      size: "small-medium",
      scienceNote: "Biceps brachii has two heads (long and short); also includes brachialis and brachioradialis",
      exercises: [
        {
          name: "Chin-ups",
          categories: ["calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "Pull-up Bar",
          scienceNote: "Supinated grip maximizes biceps activation; compound movement allows heavy loading",
          instructions: [
            "Grip bar with palms facing you, hands shoulder-width",
            "Hang with arms fully extended",
            "Pull yourself up until chin clears bar",
            "Focus on driving elbows down",
            "Lower with control to full stretch"
          ]
        },
        {
          name: "Barbell Curls",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Barbell or EZ Bar",
          scienceNote: "Allows heaviest loading for biceps; EZ bar reduces wrist strain",
          instructions: [
            "Stand holding bar with underhand grip",
            "Hands shoulder-width apart",
            "Keep elbows close to sides",
            "Curl bar up toward chest",
            "Squeeze biceps hard at top, lower slowly"
          ]
        },
        {
          name: "Dumbbell Hammer Curls",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbells",
          scienceNote: "Neutral grip emphasizes brachialis, pushing biceps up for bigger arms",
          instructions: [
            "Stand holding dumbbells at sides",
            "Palms facing your body (neutral grip)",
            "Keep elbows stationary",
            "Curl weights up toward shoulders",
            "Maintain palm position throughout"
          ]
        },
        {
          name: "Incline Dumbbell Curls",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Incline Bench + Dumbbells",
          scienceNote: "Stretches long head of biceps at shoulder extension for maximum growth",
          instructions: [
            "Sit on incline bench (45-60 degrees)",
            "Let arms hang straight down",
            "Curl dumbbells up without moving upper arms",
            "Squeeze at top",
            "Lower slowly for deep stretch"
          ]
        },
        {
          name: "Concentration Curls",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbell + Bench",
          scienceNote: "Eliminates cheating, maximizes peak contraction",
          instructions: [
            "Sit on bench, legs spread",
            "Rest elbow on inside of thigh",
            "Curl dumbbell up toward shoulder",
            "Squeeze hard at top",
            "Lower slowly, don't swing"
          ]
        },
        {
          name: "Preacher Curls",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Intermediate",
          machine: "Preacher Curl Bench",
          scienceNote: "Eliminates momentum, emphasizes bottom portion of curl",
          instructions: [
            "Sit at preacher bench, chest against pad",
            "Arms over pad, grip bar or dumbbells",
            "Lower weight slowly to full stretch",
            "Curl up without lifting elbows",
            "Squeeze at top briefly"
          ]
        },
        {
          name: "Cable Curls",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Cable Machine",
          scienceNote: "Constant tension throughout movement maximizes time under tension",
          instructions: [
            "Stand facing cable machine",
            "Grip bar with underhand grip",
            "Keep elbows at sides",
            "Curl bar up toward chest",
            "Control the negative; cable provides constant resistance"
          ]
        },
        {
          name: "21s (Bicep Curls)",
          categories: ["weights", "isolation"],
          difficulty: "Advanced",
          machine: "Barbell or Dumbbells",
          scienceNote: "Partial reps at different ranges maximize metabolic stress",
          instructions: [
            "Perform 7 half curls from bottom to halfway",
            "Perform 7 half curls from halfway to top",
            "Perform 7 full range curls",
            "That's one set of 21s",
            "Use lighter weight than normal"
          ]
        },
        {
          name: "Spider Curls",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Incline Bench + Dumbbells/Barbell",
          scienceNote: "Chest-supported position eliminates momentum, emphasizes peak contraction",
          instructions: [
            "Lie face-down on incline bench",
            "Let arms hang straight down",
            "Curl weight up toward shoulders",
            "Squeeze biceps hard at top",
            "Lower slowly without swinging"
          ]
        },
        {
          name: "Zottman Curls",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Dumbbells",
          scienceNote: "Combines biceps and forearm training in one movement",
          instructions: [
            "Curl up with palms facing up (supinated)",
            "At top, rotate palms to face down",
            "Lower weight with palms down (pronated)",
            "Rotate back to starting position at bottom",
            "Controls both biceps and forearms"
          ]
        }
      ]
    },
    
    {
      muscle: "Triceps",
      icon: "💪",
      size: "small-medium",
      scienceNote: "Triceps make up 2/3 of upper arm mass; three heads (long, lateral, medial)",
      exercises: [
        {
          name: "Close-Grip Bench Press",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell + Bench",
          scienceNote: "Best mass builder for triceps; allows heaviest loading",
          instructions: [
            "Lie on bench, grip bar with hands 8-12 inches apart",
            "Lower bar to lower chest, keeping elbows tucked",
            "Press bar up powerfully",
            "Keep wrists straight, don't flare elbows",
            "Focus on triceps doing the work"
          ]
        },
        {
          name: "Tricep Dips",
          categories: ["calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "Parallel Bars or Bench",
          scienceNote: "Bodyweight compound movement; bench dips for beginners, parallel bars for advanced",
          instructions: [
            "Grip parallel bars or edge of bench",
            "Lower body by bending elbows to 90 degrees",
            "Keep elbows close to body",
            "Push back up to starting position",
            "Don't go too deep to protect shoulders"
          ]
        },
        {
          name: "Overhead Tricep Extension",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbell, Cable, or EZ Bar",
          scienceNote: "Stretches long head of triceps; overhead position maximizes activation",
          instructions: [
            "Hold weight overhead with both hands",
            "Keep elbows close to head",
            "Lower weight behind head by bending elbows",
            "Extend arms back to starting position",
            "Only forearms should move"
          ]
        },
        {
          name: "Tricep Pushdowns",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Cable Machine",
          scienceNote: "Isolates lateral and medial heads; constant tension from cable",
          instructions: [
            "Stand at cable machine, grip bar with overhand grip",
            "Keep elbows glued to sides",
            "Push bar down until arms fully extended",
            "Squeeze triceps hard at bottom",
            "Control the weight back up"
          ]
        },
        {
          name: "Skull Crushers",
          categories: ["weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Barbell or EZ Bar + Bench",
          scienceNote: "Targets all three heads; strict form essential to protect elbows",
          instructions: [
            "Lie on bench holding bar above chest",
            "Lower bar toward forehead by bending elbows",
            "Keep upper arms stationary",
            "Extend arms back to starting position",
            "Don't flare elbows out"
          ]
        },
        {
          name: "Diamond Push-ups",
          categories: ["freehand", "calisthenics", "compound"],
          difficulty: "Advanced",
          machine: "None",
          scienceNote: "Bodyweight exercise with high triceps activation; harder than regular push-ups",
          instructions: [
            "Form diamond shape with hands under chest",
            "Thumbs and index fingers touch",
            "Lower body until chest nearly touches hands",
            "Keep elbows close to body",
            "Push back up powerfully"
          ]
        },
        {
          name: "Rope Pushdowns",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Cable Machine with Rope",
          scienceNote: "Rope allows greater range of motion and peak contraction",
          instructions: [
            "Attach rope to high pulley",
            "Grip rope with neutral grip (palms facing)",
            "Push down, separating rope at bottom",
            "Squeeze triceps hard",
            "Pull rope apart at bottom for extra contraction"
          ]
        },
        {
          name: "Bench Dips",
          categories: ["freehand", "calisthenics", "isolation"],
          difficulty: "Beginner",
          machine: "Bench or Chair",
          scienceNote: "Beginner-friendly triceps exercise; can add weight for progression",
          instructions: [
            "Sit on edge of bench, hands gripping edge",
            "Slide butt off bench, support weight with arms",
            "Lower body by bending elbows to 90 degrees",
            "Push back up to starting position",
            "Keep legs straight for harder version"
          ]
        },
        {
          name: "Reverse Grip Pushdowns",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Intermediate",
          machine: "Cable Machine with Straight Bar",
          scienceNote: "Underhand grip emphasizes medial head of triceps",
          instructions: [
            "Attach straight bar to high pulley",
            "Grip bar with underhand grip, hands shoulder-width",
            "Keep elbows at sides",
            "Push bar down until arms extended",
            "Squeeze triceps at bottom"
          ]
        },
        {
          name: "Tricep Kickbacks",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbells",
          scienceNote: "Isolates triceps through elbow extension; focus on contraction",
          instructions: [
            "Bend over, supporting yourself with one hand",
            "Hold dumbbell, upper arm parallel to floor",
            "Extend arm back until fully straight",
            "Squeeze triceps hard",
            "Return to starting position with control"
          ]
        }
      ]
    },
    
    {
      muscle: "Shoulders (Delts)",
      icon: "💪",
      size: "medium",
      scienceNote: "Three heads: anterior (front), lateral (side), posterior (rear); each requires different angles",
      exercises: [
        {
          name: "Overhead Press (Barbell)",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell",
          scienceNote: "Best overall shoulder builder; hits all three heads with emphasis on anterior delts",
          instructions: [
            "Stand with barbell at shoulder height",
            "Grip bar slightly wider than shoulders",
            "Brace core, press bar straight up overhead",
            "Keep ribs down, don't arch back excessively",
            "Lower bar back to shoulders with control"
          ]
        },
        {
          name: "Dumbbell Lateral Raises",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbells",
          scienceNote: "Primary exercise for lateral (side) delts; creates shoulder width",
          instructions: [
            "Stand holding dumbbells at sides",
            "Slight bend in elbows throughout",
            "Raise arms out to sides until parallel to floor",
            "Lead with elbows, not hands",
            "Lower weights slowly, don't swing"
          ]
        },
        {
          name: "Face Pulls",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Cable Machine with Rope",
          scienceNote: "Critical for rear delt development and shoulder health; balances pressing movements",
          instructions: [
            "Set cable at upper chest height with rope",
            "Pull rope toward face, hands to ears",
            "Squeeze shoulder blades together",
            "Keep elbows high throughout",
            "Return to start with control"
          ]
        },
        {
          name: "Arnold Press",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Dumbbells",
          scienceNote: "Rotation hits all three deltoid heads through full range of motion",
          instructions: [
            "Start with dumbbells at shoulder height, palms facing you",
            "Press up while rotating palms to face forward",
            "At top, palms face away from you",
            "Reverse the motion on the way down",
            "Control the rotation throughout"
          ]
        },
        {
          name: "Pike Push-ups",
          categories: ["calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "None",
          scienceNote: "Bodyweight overhead pressing; progression toward handstand push-ups",
          instructions: [
            "Start in downward dog position",
            "Hands shoulder-width apart, hips high",
            "Lower head toward floor by bending elbows",
            "Push back up to starting position",
            "Keep legs as straight as possible"
          ]
        },
        {
          name: "Rear Delt Flyes",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbells",
          scienceNote: "Targets posterior deltoids; often neglected but crucial for shoulder health",
          instructions: [
            "Bend over at hips, dumbbells hanging down",
            "Slight bend in elbows",
            "Raise arms out to sides, squeezing shoulder blades",
            "Focus on rear delts, not traps",
            "Lower weights with control"
          ]
        },
        {
          name: "Cable Lateral Raises",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Intermediate",
          machine: "Cable Machine",
          scienceNote: "Constant tension throughout movement; harder at bottom than dumbbells",
          instructions: [
            "Stand sideways to cable machine",
            "Grip handle with far hand, arm across body",
            "Raise arm out to side until parallel to floor",
            "Control the negative against resistance",
            "Complete all reps, then switch sides"
          ]
        },
        {
          name: "Handstand Push-ups",
          categories: ["calisthenics", "compound"],
          difficulty: "Advanced",
          machine: "Wall",
          scienceNote: "Advanced bodyweight shoulder exercise; builds serious strength and stability",
          instructions: [
            "Kick up into handstand against wall",
            "Hands shoulder-width apart",
            "Lower head toward floor by bending elbows",
            "Press back up to full arm extension",
            "Requires significant shoulder strength"
          ]
        },
        {
          name: "Upright Rows",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell or Dumbbells",
          scienceNote: "Hits lateral delts and traps; use moderate grip width to protect shoulders",
          instructions: [
            "Stand holding bar with overhand grip",
            "Hands slightly narrower than shoulders",
            "Pull bar up along body to chest level",
            "Lead with elbows, keep them high",
            "Lower bar with control"
          ]
        },
        {
          name: "Front Raises",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbells, Barbell, or Plate",
          scienceNote: "Isolates anterior (front) deltoids; often already worked from pressing",
          instructions: [
            "Stand holding weight in front of thighs",
            "Keep slight bend in elbows",
            "Raise weight straight out in front to shoulder height",
            "Don't swing or use momentum",
            "Lower slowly with control"
          ]
        }
      ]
    },
    
    {
      muscle: "Chest (Pectorals)",
      icon: "💪",
      size: "medium-large",
      scienceNote: "Two main sections: sternal (lower/mid chest) and clavicular (upper chest); also works anterior delts and triceps",
      exercises: [
        {
          name: "Barbell Bench Press",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell + Flat Bench",
          scienceNote: "King of chest exercises; allows heaviest loading for maximum strength and size",
          instructions: [
            "Lie flat on bench, feet firmly on ground",
            "Grip bar slightly wider than shoulder width",
            "Lower bar to mid-chest with control",
            "Press bar up powerfully to starting position",
            "Keep shoulder blades retracted throughout"
          ]
        },
        {
          name: "Incline Dumbbell Press",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Incline Bench + Dumbbells",
          scienceNote: "Targets upper chest (clavicular head); dumbbells allow greater range of motion",
          instructions: [
            "Set bench to 30-45 degree incline",
            "Hold dumbbells at chest level",
            "Press weights up and slightly together",
            "Lower dumbbells to upper chest",
            "Don't go too steep or front delts take over"
          ]
        },
        {
          name: "Push-ups",
          categories: ["freehand", "calisthenics", "compound"],
          difficulty: "Beginner",
          machine: "None",
          scienceNote: "Fundamental bodyweight exercise; scalable for all levels",
          instructions: [
            "Start in plank position, hands shoulder-width apart",
            "Keep body in straight line from head to heels",
            "Lower chest to floor by bending elbows",
            "Push back up to starting position",
            "Keep core tight throughout movement"
          ]
        },
        {
          name: "Dumbbell Flyes",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Dumbbells + Flat Bench",
          scienceNote: "Isolation movement emphasizing stretch and contraction; horizontal adduction",
          instructions: [
            "Lie on bench holding dumbbells above chest",
            "Slight bend in elbows throughout",
            "Lower weights out to sides in arc motion",
            "Feel stretch in chest, then bring weights back together",
            "Imagine hugging a large tree"
          ]
        },
        {
          name: "Dips (Chest Focus)",
          categories: ["calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "Parallel Bars",
          scienceNote: "Lean forward to emphasize chest over triceps; excellent lower chest developer",
          instructions: [
            "Grip parallel bars and lift yourself up",
            "Lean torso forward 30 degrees",
            "Lower body by bending elbows to 90 degrees",
            "Feel stretch in chest at bottom",
            "Push back up, squeezing chest"
          ]
        },
        {
          name: "Cable Crossover",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Intermediate",
          machine: "Cable Machine",
          scienceNote: "Constant tension through full range; emphasizes peak contraction",
          instructions: [
            "Set cables at shoulder height or above",
            "Step forward, slight bend in elbows",
            "Bring handles together in front of chest",
            "Squeeze chest hard at peak contraction",
            "Control the stretch on the way back"
          ]
        },
        {
          name: "Decline Bench Press",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Decline Bench + Barbell/Dumbbells",
          scienceNote: "Emphasizes lower chest (sternal head); often strongest pressing angle",
          instructions: [
            "Lie on decline bench, secure legs",
            "Grip bar slightly wider than shoulders",
            "Lower bar to lower chest",
            "Press up powerfully",
            "Don't bounce bar off chest"
          ]
        },
        {
          name: "Chest Press Machine",
          categories: ["weights", "compound", "machine"],
          difficulty: "Beginner",
          machine: "Chest Press Machine",
          scienceNote: "Safer for beginners; stable path allows focus on muscle contraction",
          instructions: [
            "Adjust seat so handles at mid-chest level",
            "Grip handles, feet flat on floor",
            "Press handles forward until arms extended",
            "Squeeze chest at full extension",
            "Return to start with control"
          ]
        },
        {
          name: "Pec Deck Machine",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Pec Deck / Butterfly Machine",
          scienceNote: "Isolates chest through horizontal adduction; constant tension",
          instructions: [
            "Sit with back flat against pad",
            "Grip handles or place forearms on pads",
            "Bring arms together in front of chest",
            "Squeeze chest hard at peak",
            "Slowly return to starting position"
          ]
        },
        {
          name: "Deficit Push-ups",
          categories: ["freehand", "calisthenics", "compound"],
          difficulty: "Advanced",
          machine: "Push-up Handles or Blocks",
          scienceNote: "Increased range of motion for greater chest stretch and activation",
          instructions: [
            "Place hands on elevated surfaces (blocks or handles)",
            "Perform push-up with deeper descent",
            "Chest goes below hand level",
            "Feel deep stretch in chest",
            "Push back up powerfully"
          ]
        }
      ]
    },
    
    {
      muscle: "Back",
      icon: "🔙",
      size: "large",
      scienceNote: "Multiple muscles: latissimus dorsi (lats), trapezius (traps), rhomboids, erector spinae; requires vertical and horizontal pulling",
      exercises: [
        {
          name: "Pull-ups",
          categories: ["calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "Pull-up Bar",
          scienceNote: "Best bodyweight back builder; emphasizes lats through shoulder extension",
          instructions: [
            "Hang from bar with hands slightly wider than shoulders",
            "Pull yourself up until chin clears the bar",
            "Lower with control to full arm extension",
            "Keep core tight, avoid swinging",
            "Focus on pulling with elbows down and back"
          ]
        },
        {
          name: "Barbell Rows",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell",
          scienceNote: "Best mass builder for overall back thickness; hits lats, traps, rhomboids",
          instructions: [
            "Bend over at hips with barbell in hands",
            "Keep back straight, knees slightly bent",
            "Pull bar to lower chest/upper abs",
            "Squeeze shoulder blades together",
            "Lower bar with control"
          ]
        },
        {
          name: "Lat Pulldown",
          categories: ["weights", "compound", "machine"],
          difficulty: "Beginner",
          machine: "Lat Pulldown Machine",
          scienceNote: "Scalable alternative to pull-ups; emphasizes lat width",
          instructions: [
            "Sit at machine, grip bar wider than shoulders",
            "Pull bar down to upper chest",
            "Squeeze lats at bottom",
            "Return bar to start with control",
            "Lean back slightly, don't use momentum"
          ]
        },
        {
          name: "Deadlifts",
          categories: ["weights", "compound"],
          difficulty: "Advanced",
          machine: "Barbell",
          scienceNote: "King of all exercises; builds entire posterior chain including back thickness",
          instructions: [
            "Stand with feet hip-width, bar over mid-foot",
            "Grip bar just outside legs",
            "Keep back flat, chest up",
            "Drive through heels, stand up with bar",
            "Keep bar close to body throughout"
          ]
        },
        {
          name: "Seated Cable Rows",
          categories: ["weights", "compound", "machine"],
          difficulty: "Beginner",
          machine: "Cable Row Machine",
          scienceNote: "Horizontal pulling for back thickness; constant tension from cable",
          instructions: [
            "Sit at cable row station, feet on platform",
            "Grip handle with arms extended",
            "Pull handle to lower chest/upper abs",
            "Squeeze shoulder blades together",
            "Return to start, feel stretch in lats"
          ]
        },
        {
          name: "T-Bar Rows",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "T-Bar Row Machine or Landmine",
          scienceNote: "Thick grip and supported position allows heavy loading",
          instructions: [
            "Straddle bar, bend over at hips",
            "Grip handles or bar",
            "Pull bar to lower chest",
            "Keep elbows close to body",
            "Squeeze back muscles at top"
          ]
        },
        {
          name: "Single-Arm Dumbbell Rows",
          categories: ["weights", "compound"],
          difficulty: "Beginner",
          machine: "Dumbbell + Bench",
          scienceNote: "Unilateral training corrects imbalances; greater range of motion",
          instructions: [
            "Place one knee and hand on bench",
            "Hold dumbbell in free hand",
            "Pull dumbbell to hip, leading with elbow",
            "Squeeze lat at top",
            "Lower weight for full stretch"
          ]
        },
        {
          name: "Face Pulls",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Cable Machine with Rope",
          scienceNote: "Critical for rear delts and upper back health; balances pressing",
          instructions: [
            "Set cable at upper chest height with rope",
            "Pull rope toward face, hands to ears",
            "Squeeze shoulder blades together",
            "Keep elbows high throughout",
            "Return to start with control"
          ]
        },
        {
          name: "Hyperextensions",
          categories: ["weights", "isolation"],
          difficulty: "Beginner",
          machine: "Hyperextension Bench",
          scienceNote: "Targets erector spinae (lower back); crucial for spinal health",
          instructions: [
            "Position yourself on hyperextension bench",
            "Cross arms over chest or hold weight",
            "Lower torso toward floor with control",
            "Raise back up until body forms straight line",
            "Don't hyperextend at top"
          ]
        },
        {
          name: "Chin-ups",
          categories: ["calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "Pull-up Bar",
          scienceNote: "Underhand grip increases biceps involvement while still targeting lats",
          instructions: [
            "Grip bar with palms facing you, hands shoulder-width",
            "Hang with arms fully extended",
            "Pull yourself up until chin clears bar",
            "Focus on driving elbows down",
            "Lower with control to full stretch"
          ]
        }
      ]
    },
    
    {
      muscle: "Core (Abs & Obliques)",
      icon: "🎯",
      size: "medium",
      scienceNote: "Includes rectus abdominis, obliques (internal/external), transverse abdominis; requires flexion, rotation, and anti-movement patterns",
      exercises: [
        {
          name: "Hanging Leg Raises",
          categories: ["calisthenics", "isolation"],
          difficulty: "Advanced",
          machine: "Pull-up Bar",
          scienceNote: "Best ab exercise for lower abs; requires significant core strength",
          instructions: [
            "Hang from pull-up bar",
            "Keep legs straight, raise them to parallel or higher",
            "Use core to lift, not momentum",
            "Lower legs with control",
            "Avoid swinging, keep movement strict"
          ]
        },
        {
          name: "Cable Crunches",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Intermediate",
          machine: "Cable Machine with Rope",
          scienceNote: "Weighted resistance through full range; superior to bodyweight crunches",
          instructions: [
            "Kneel below high pulley with rope",
            "Hold rope behind head",
            "Crunch down, bringing elbows to knees",
            "Squeeze abs hard at bottom",
            "Return to start with control"
          ]
        },
        {
          name: "Plank",
          categories: ["freehand", "calisthenics", "isolation"],
          difficulty: "Beginner",
          machine: "None",
          scienceNote: "Isometric core stabilization; builds transverse abdominis and endurance",
          instructions: [
            "Start in push-up position on forearms",
            "Keep body in straight line from head to heels",
            "Engage core, don't let hips sag",
            "Hold position while breathing steadily",
            "Start with 20-30 seconds, build up"
          ]
        },
        {
          name: "Ab Wheel Rollouts",
          categories: ["weights", "compound"],
          difficulty: "Advanced",
          machine: "Ab Wheel",
          scienceNote: "Extreme core challenge; builds anti-extension strength",
          instructions: [
            "Kneel holding ab wheel",
            "Roll forward, extending body",
            "Go as far as you can while maintaining form",
            "Use core to pull back to start",
            "Don't let lower back sag"
          ]
        },
        {
          name: "Russian Twists",
          categories: ["freehand", "weights", "isolation"],
          difficulty: "Intermediate",
          machine: "Medicine Ball or Dumbbell (optional)",
          scienceNote: "Rotational movement targets obliques; improves core stability",
          instructions: [
            "Sit on floor, lean back slightly, feet elevated",
            "Hold weight or clasp hands together",
            "Rotate torso to touch weight to floor on each side",
            "Keep core engaged throughout",
            "Control the movement, don't use momentum"
          ]
        },
        {
          name: "Dead Bug",
          categories: ["freehand", "isolation"],
          difficulty: "Beginner",
          machine: "None",
          scienceNote: "Anti-extension exercise; teaches core stability while moving limbs",
          instructions: [
            "Lie on back, arms extended toward ceiling",
            "Lift legs with knees bent at 90 degrees",
            "Slowly lower opposite arm and leg",
            "Return to start, alternate sides",
            "Keep lower back pressed to floor"
          ]
        },
        {
          name: "Mountain Climbers",
          categories: ["freehand", "calisthenics", "compound"],
          difficulty: "Intermediate",
          machine: "None",
          scienceNote: "Dynamic core exercise with cardiovascular component",
          instructions: [
            "Start in plank position",
            "Bring one knee toward chest",
            "Quickly switch legs, extending back leg",
            "Continue alternating at quick pace",
            "Keep hips level, don't bounce up and down"
          ]
        },
        {
          name: "Side Plank",
          categories: ["freehand", "calisthenics", "isolation"],
          difficulty: "Beginner",
          machine: "None",
          scienceNote: "Targets obliques and quadratus lumborum; improves lateral stability",
          instructions: [
            "Lie on side, prop yourself on forearm",
            "Stack feet, lift hips off ground",
            "Keep body in straight line",
            "Hold position, breathe steadily",
            "Switch sides after time interval"
          ]
        },
        {
          name: "Pallof Press",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Intermediate",
          machine: "Cable Machine",
          scienceNote: "Anti-rotation exercise; builds core stability and oblique strength",
          instructions: [
            "Stand sideways to cable machine",
            "Hold handle at chest with both hands",
            "Press handle straight out in front",
            "Resist cable pulling you sideways",
            "Return to chest, complete reps, switch sides"
          ]
        },
        {
          name: "Bicycle Crunches",
          categories: ["freehand", "isolation"],
          difficulty: "Beginner",
          machine: "None",
          scienceNote: "Combines flexion and rotation; activates rectus abdominis and obliques",
          instructions: [
            "Lie on back, hands behind head",
            "Bring opposite elbow to opposite knee",
            "Extend other leg straight",
            "Alternate sides in pedaling motion",
            "Keep core engaged throughout"
          ]
        }
      ]
    },
    
    {
      muscle: "Legs (Quadriceps)",
      icon: "🦵",
      size: "largest",
      scienceNote: "Quadriceps: rectus femoris, vastus lateralis, vastus medialis, vastus intermedius; primary knee extensors",
      exercises: [
        {
          name: "Barbell Back Squats",
          categories: ["weights", "compound"],
          difficulty: "Advanced",
          machine: "Barbell + Squat Rack",
          scienceNote: "King of leg exercises; builds entire lower body and core",
          instructions: [
            "Position bar on upper back/traps",
            "Feet shoulder-width apart, toes slightly out",
            "Descend by pushing hips back and bending knees",
            "Go down until thighs parallel to floor or deeper",
            "Drive through heels to stand back up"
          ]
        },
        {
          name: "Leg Press",
          categories: ["weights", "compound", "machine"],
          difficulty: "Beginner",
          machine: "Leg Press Machine",
          scienceNote: "Allows heavy quad loading with spinal support; safer for beginners",
          instructions: [
            "Sit in machine with feet shoulder-width on platform",
            "Lower weight by bending knees to 90 degrees",
            "Push through heels to extend legs",
            "Don't lock knees at top",
            "Keep lower back pressed to pad"
          ]
        },
        {
          name: "Bulgarian Split Squats",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Dumbbells + Bench",
          scienceNote: "Unilateral exercise corrects imbalances; intense quad and glute activation",
          instructions: [
            "Stand facing away from bench",
            "Place top of one foot on bench behind you",
            "Lower body until front thigh parallel to floor",
            "Push through front heel to stand",
            "Complete all reps before switching legs"
          ]
        },
        {
          name: "Leg Extensions",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Leg Extension Machine",
          scienceNote: "Isolates quadriceps through knee extension; great for quad definition",
          instructions: [
            "Sit on machine with ankles behind pad",
            "Extend legs until fully straight",
            "Squeeze quads hard at top",
            "Lower weight slowly with control",
            "Don't use momentum or swing"
          ]
        },
        {
          name: "Front Squats",
          categories: ["weights", "compound"],
          difficulty: "Advanced",
          machine: "Barbell",
          scienceNote: "More quad-dominant than back squats; requires upright torso",
          instructions: [
            "Rest bar on front delts, cross arms or use clean grip",
            "Keep elbows high throughout",
            "Descend with upright torso",
            "Go as deep as mobility allows",
            "Drive up through heels"
          ]
        },
        {
          name: "Walking Lunges",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Dumbbells (optional)",
          scienceNote: "Dynamic unilateral movement; builds functional leg strength",
          instructions: [
            "Step forward with one leg",
            "Lower hips until both knees at 90 degrees",
            "Push off front foot to step forward with back leg",
            "Continue alternating legs",
            "Keep torso upright throughout"
          ]
        },
        {
          name: "Goblet Squats",
          categories: ["weights", "compound"],
          difficulty: "Beginner",
          machine: "Dumbbell or Kettlebell",
          scienceNote: "Teaches proper squat mechanics; great for beginners",
          instructions: [
            "Hold dumbbell or kettlebell at chest",
            "Feet shoulder-width apart",
            "Squat down, keeping elbows inside knees",
            "Drive up through heels",
            "Keep chest up throughout"
          ]
        },
        {
          name: "Step-ups",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Box or Bench + Dumbbells",
          scienceNote: "Functional unilateral exercise; mimics real-world movements",
          instructions: [
            "Stand facing box or bench",
            "Step up with one foot, driving through heel",
            "Bring other foot up to stand tall",
            "Step back down with control",
            "Alternate legs or complete one side first"
          ]
        },
        {
          name: "Sissy Squats",
          categories: ["freehand", "weights", "isolation"],
          difficulty: "Advanced",
          machine: "None or Sissy Squat Machine",
          scienceNote: "Extreme quad isolation; knee-dominant movement",
          instructions: [
            "Stand holding support for balance",
            "Rise up onto toes",
            "Lean back, bending knees forward",
            "Lower until quads fully stretched",
            "Use quads to pull body back up"
          ]
        },
        {
          name: "Jump Squats",
          categories: ["freehand", "weights", "compound", "plyometric"],
          difficulty: "Intermediate",
          machine: "None or Dumbbells",
          scienceNote: "Plyometric exercise builds explosive power and fast-twitch fibers",
          instructions: [
            "Stand with feet shoulder-width apart",
            "Dip down into quarter squat",
            "Explode up, jumping as high as possible",
            "Land softly, immediately dip into next rep",
            "Focus on maximum height and speed"
          ]
        }
      ]
    },
    
    {
      muscle: "Legs (Hamstrings & Glutes)",
      icon: "🍑",
      size: "largest",
      scienceNote: "Hamstrings: biceps femoris, semitendinosus, semimembranosus; primary hip extensors and knee flexors. Glutes: maximus, medius, minimus",
      exercises: [
        {
          name: "Romanian Deadlifts (RDL)",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell or Dumbbells",
          scienceNote: "Best hamstring builder; emphasizes hip hinge and eccentric loading",
          instructions: [
            "Stand holding bar at hip level",
            "Slight bend in knees throughout",
            "Push hips back, lowering bar along legs",
            "Feel stretch in hamstrings",
            "Drive hips forward to return to start"
          ]
        },
        {
          name: "Hip Thrusts",
          categories: ["weights", "compound"],
          difficulty: "Intermediate",
          machine: "Barbell + Bench",
          scienceNote: "Best glute activation exercise; superior to squats for gluteus maximus",
          instructions: [
            "Sit with upper back against bench",
            "Roll bar over hips, feet flat on floor",
            "Drive through heels, thrust hips up",
            "Squeeze glutes hard at top",
            "Lower hips with control"
          ]
        },
        {
          name: "Lying Leg Curls",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Leg Curl Machine",
          scienceNote: "Isolates hamstrings through knee flexion; complements hip-hinge movements",
          instructions: [
            "Lie face down on machine",
            "Position ankles under pad",
            "Curl heels toward glutes",
            "Squeeze hamstrings at top",
            "Lower weight slowly with control"
          ]
        },
        {
          name: "Glute Bridges",
          categories: ["freehand", "weights", "isolation"],
          difficulty: "Beginner",
          machine: "None or Barbell/Dumbbell",
          scienceNote: "Activates glutes; regression of hip thrust for beginners",
          instructions: [
            "Lie on back with knees bent, feet flat",
            "Drive through heels, lift hips up",
            "Squeeze glutes at top",
            "Lower hips back down",
            "Add weight across hips for progression"
          ]
        },
        {
          name: "Nordic Hamstring Curls",
          categories: ["freehand", "calisthenics", "isolation"],
          difficulty: "Advanced",
          machine: "None (partner holds ankles)",
          scienceNote: "Eccentric-focused bodyweight exercise; excellent for hamstring injury prevention",
          instructions: [
            "Kneel with partner holding ankles",
            "Keep body straight from knees to head",
            "Lower body forward as slowly as possible",
            "Use hamstrings to control descent",
            "Catch yourself with hands, push back up"
          ]
        },
        {
          name: "Cable Pull-Throughs",
          categories: ["weights", "compound", "machine"],
          difficulty: "Beginner",
          machine: "Cable Machine with Rope",
          scienceNote: "Hip hinge pattern; teaches proper deadlift mechanics",
          instructions: [
            "Face away from cable machine, rope between legs",
            "Hinge at hips, letting weight pull back",
            "Drive hips forward to stand tall",
            "Squeeze glutes at top",
            "Control the eccentric portion"
          ]
        },
        {
          name: "Single-Leg RDL",
          categories: ["weights", "compound"],
          difficulty: "Advanced",
          machine: "Dumbbell or Kettlebell",
          scienceNote: "Unilateral hamstring exercise; challenges balance and stability",
          instructions: [
            "Stand on one leg, hold weight in opposite hand",
            "Hinge at hip, extending free leg behind",
            "Lower weight toward floor",
            "Feel stretch in hamstring of standing leg",
            "Drive hip forward to return to start"
          ]
        },
        {
          name: "Good Mornings",
          categories: ["weights", "compound"],
          difficulty: "Advanced",
          machine: "Barbell",
          scienceNote: "Hip hinge movement; strengthens posterior chain and teaches bracing",
          instructions: [
            "Rest bar on upper back like squat",
            "Feet shoulder-width apart",
            "Hinge at hips, pushing them back",
            "Lower torso until parallel to floor",
            "Drive hips forward to stand up"
          ]
        },
        {
          name: "Seated Leg Curls",
          categories: ["weights", "isolation", "machine"],
          difficulty: "Beginner",
          machine: "Seated Leg Curl Machine",
          scienceNote: "Hamstrings trained at shortened position; complements lying leg curls",
          instructions: [
            "Sit on machine, position ankles under pad",
            "Curl heels down and back",
            "Squeeze hamstrings at bottom",
            "Return to start with control",
            "Keep hips pressed into seat"
          ]
        },
        {
          name: "Kettlebell Swings",
          categories: ["weights", "compound", "plyometric"],
          difficulty: "Intermediate",
          machine: "Kettlebell",
          scienceNote: "Explosive hip hinge; builds power and posterior chain endurance",
          instructions: [
            "Stand with feet shoulder-width, kettlebell in front",
            "Hinge at hips, swing bell back between legs",
            "Explosively drive hips forward",
            "Let momentum swing bell to chest height",
            "Control the descent, repeat immediately"
          ]
        }
      ]
    }
  ]
};

// Category color mapping for UI
export const categoryColors = {
  weights: { 
    bg: "bg-emerald-500/10", 
    text: "text-emerald-400", 
    border: "border-emerald-500/30",
    dot: "bg-emerald-500"
  },
  freehand: { 
    bg: "bg-sky-500/10", 
    text: "text-sky-400", 
    border: "border-sky-500/30",
    dot: "bg-sky-500"
  },
  compound: { 
    bg: "bg-rose-500/10", 
    text: "text-rose-400", 
    border: "border-rose-500/30",
    dot: "bg-rose-500"
  },
  isolation: { 
    bg: "bg-amber-500/10", 
    text: "text-amber-400", 
    border: "border-amber-500/30",
    dot: "bg-amber-500"
  },
  calisthenics: { 
    bg: "bg-indigo-500/10", 
    text: "text-indigo-400", 
    border: "border-indigo-500/30",
    dot: "bg-indigo-500"
  },
  machine: { 
    bg: "bg-purple-500/10", 
    text: "text-purple-400", 
    border: "border-purple-500/30",
    dot: "bg-purple-500"
  },
  plyometric: { 
    bg: "bg-orange-500/10", 
    text: "text-orange-400", 
    border: "border-orange-500/30",
    dot: "bg-orange-500"
  },
  functional: { 
    bg: "bg-cyan-500/10", 
    text: "text-cyan-400", 
    border: "border-cyan-500/30",
    dot: "bg-cyan-500"
  }
};

export const difficultyColors = {
  Beginner: { 
    bg: "bg-green-500/10", 
    text: "text-green-400",
    border: "border-green-500/30"
  },
  Intermediate: { 
    bg: "bg-yellow-500/10", 
    text: "text-yellow-400",
    border: "border-yellow-500/30"
  },
  Advanced: { 
    bg: "bg-red-500/10", 
    text: "text-red-400",
    border: "border-red-500/30"
  }
};

export const muscleSizeOrder = [
  "small",
  "small-medium", 
  "medium",
  "medium-large",
  "large",
  "largest"
];

// Helper function to get exercises by category
export const getExercisesByCategory = (category) => {
  const exercises = [];
  exerciseLibrary.categories.forEach(muscleGroup => {
    muscleGroup.exercises.forEach(exercise => {
      if (exercise.categories.includes(category)) {
        exercises.push({
          ...exercise,
          muscleGroup: muscleGroup.muscle
        });
      }
    });
  });
  return exercises;
};

// Helper function to get exercises by difficulty
export const getExercisesByDifficulty = (difficulty) => {
  const exercises = [];
  exerciseLibrary.categories.forEach(muscleGroup => {
    muscleGroup.exercises.forEach(exercise => {
      if (exercise.difficulty === difficulty) {
        exercises.push({
          ...exercise,
          muscleGroup: muscleGroup.muscle
        });
      }
    });
  });
  return exercises;
};

// Helper function to search exercises
export const searchExercises = (query) => {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  exerciseLibrary.categories.forEach(muscleGroup => {
    muscleGroup.exercises.forEach(exercise => {
      if (
        exercise.name.toLowerCase().includes(lowerQuery) ||
        exercise.categories.some(cat => cat.includes(lowerQuery)) ||
        exercise.machine.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          ...exercise,
          muscleGroup: muscleGroup.muscle
        });
      }
    });
  });
  
  return results;
};

export default exerciseLibrary;