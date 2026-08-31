export const styleData = {
  id: "boxing",
  name: "Boxing",
  icon: "🥊",
  origin: "England / United Kingdom",
  description: "A striking martial art and combat sport using only the fists, emphasizing footwork, head movement, and precise punching combinations. Developed from bare-knuckle fighting into a regulated Olympic sport with strict rules and scoring systems.",
  keyPrinciples: ["Hit and Don't Get Hit", "Footwork Controls Distance", "Defense Creates Offense", "Economy of Motion"],
  color: "bg-red-500/10 text-red-400 border-red-500/30",
  
  curriculum: {
    techniques: {
      striking: [
        // BASIC PUNCHES - BEGINNER
        { name: "Jab (Lead Straight)", difficulty: "Beginner", mechanics: "Extend lead arm straight forward with slight shoulder rotation, palm down at impact, retract immediately to guard position", anatomy: "Anterior deltoid, triceps, pectoralis minor", progression: "Shadow boxing → Light bag → Heavy bag → Partner drills", safety: "Keep rear hand at chin, don't overextend shoulder", focusCues: "Snap punch, quick retraction, maintain balance", stance: "Orthodox/Southpaw", weightShift: "Slight forward weight transfer (60/40)", lineOfAttack: "Straight line to opponent's head/body", strikingSurface: "First two knuckles (index and middle)", retraction: "Faster than extension, return to guard", defenseAgainst: "Parry, slip, block, pull back", counterSetup: "Sets up cross, creates distance, measures range", youtube: null },
        
        { name: "Cross (Rear Straight)", difficulty: "Beginner", mechanics: "Rotate rear hip and shoulder forward, extend rear arm straight, pivot rear foot, palm down at impact", anatomy: "Posterior chain, rear deltoid, triceps, latissimus dorsi", progression: "Shadow boxing → Double-end bag → Heavy bag → Sparring", safety: "Don't drop rear hand, maintain chin tuck", focusCues: "Hip rotation, foot pivot, full extension", stance: "Orthodox/Southpaw", weightShift: "Full weight transfer (40/60 to 60/40)", lineOfAttack: "Straight line through center", strikingSurface: "First two knuckles", retraction: "Immediate return, rotate hips back", defenseAgainst: "Slip outside, parry, counter jab", counterSetup: "Follow jab, counter to body", youtube: null },
        
        { name: "Lead Hook (Left Hook in Orthodox)", difficulty: "Beginner", mechanics: "Rotate lead foot inward 45°, pivot hips, bend elbow 90°, swing arm horizontally with shoulder height", anatomy: "Obliques, rear deltoid, pectoralis major", progression: "Slow shadow → Speed bag → Heavy bag → Partner mitts", safety: "Don't telegraph, keep rear hand high", focusCues: "Pivot foot, rotate hips, elbow at 90°", stance: "Orthodox/Southpaw", weightShift: "Weight shifts to lead leg (70/30)", lineOfAttack: "Horizontal arc to side of head/body", strikingSurface: "First two knuckles, palm facing you", retraction: "Return along same path to guard", defenseAgainst: "Block, slip inside, roll under", counterSetup: "After jab-cross, body-head combinations", youtube: null },
        
        { name: "Rear Hook (Right Hook in Orthodox)", difficulty: "Intermediate", mechanics: "Pivot rear foot 90°, rotate hips violently, bend elbow 90°, swing arm horizontally", anatomy: "Core rotators, rear deltoid, latissimus", progression: "Technical shadow → Heavy bag → Sparring drills", safety: "Don't drop guard, maintain balance", focusCues: "Full hip rotation, tight arc, pivot", stance: "Orthodox/Southpaw", weightShift: "Weight transfer to lead leg", lineOfAttack: "Horizontal arc from rear side", strikingSurface: "First two knuckles", retraction: "Quick return to chin", defenseAgainst: "Slip inside, block, counter cross", counterSetup: "Counter to lead hook, combination finisher", youtube: null },
        
        { name: "Lead Uppercut (Left Uppercut in Orthodox)", difficulty: "Intermediate", mechanics: "Drop lead shoulder slightly, bend knees, drive upward with legs, rotate hip, punch vertically with palm facing you", anatomy: "Quadriceps, glutes, pectoralis, anterior deltoid", progression: "Bodyweight → Light bag → Heavy bag → Partner drills", safety: "Don't lean back, keep elbow close to body", focusCues: "Leg drive, hip rotation, vertical path", stance: "Orthodox/Southpaw", weightShift: "Drive upward from rear to lead", lineOfAttack: "Vertical upward trajectory", strikingSurface: "Knuckles, palm facing you", retraction: "Return to guard position", defenseAgainst: "Slip outside, lean back, counter hook", counterSetup: "After body hook, close range attack", youtube: null },
        
        { name: "Rear Uppercut (Right Uppercut in Orthodox)", difficulty: "Intermediate", mechanics: "Drop rear shoulder, bend knees, explode upward, rotate rear hip forward, punch vertically", anatomy: "Rear leg drive, core, pectoralis, deltoid", progression: "Technical work → Bag → Partner mitts → Sparring", safety: "Maintain balance, don't overcommit", focusCues: "Explosive legs, hip drive, tight arc", stance: "Orthodox/Southpaw", weightShift: "Upward drive with weight transfer", lineOfAttack: "Vertical upward through center", strikingSurface: "Knuckles, palm facing you", retraction: "Quick return to chin", defenseAgainst: "Slip, lean back, clinch", counterSetup: "Counter to body attack, combination punch", youtube: null },
        
        // BODY PUNCHES - BEGINNER/INTERMEDIATE
        { name: "Jab to Body", difficulty: "Beginner", mechanics: "Bend knees to lower level, extend jab downward at 45° angle to solar plexus/ribs", anatomy: "Core, shoulder, triceps", progression: "Shadow → Body bag → Partner drills", safety: "Don't drop head, keep guard high", focusCues: "Lower level, snap punch, protect head", stance: "Orthodox/Southpaw", weightShift: "Slight forward dip", lineOfAttack: "Downward diagonal", strikingSurface: "First two knuckles", retraction: "Quick return to high guard", defenseAgainst: "Elbow block, step back", counterSetup: "Level change setup, body-head combos", youtube: null },
        
        { name: "Cross to Body", difficulty: "Beginner", mechanics: "Rotate hips, bend knees, drive rear hand downward at angle to midsection", anatomy: "Core, rear shoulder, latissimus", progression: "Technical → Heavy bag → Sparring", safety: "Maintain chin protection", focusCues: "Hip rotation, downward angle, power", stance: "Orthodox/Southpaw", weightShift: "Forward and down", lineOfAttack: "Diagonal downward", strikingSurface: "Knuckles", retraction: "Return to guard", defenseAgainst: "Elbow block, parry down", counterSetup: "After head jab, body attack", youtube: null },
        
        { name: "Lead Hook to Body", difficulty: "Intermediate", mechanics: "Drop level significantly, pivot lead foot, rotate hips, swing hook horizontally to ribs/liver", anatomy: "Obliques, lead leg, shoulder", progression: "Slow technical → Bag → Partner work", safety: "Don't expose head, maintain balance", focusCues: "Drop level, pivot, horizontal arc", stance: "Orthodox/Southpaw", weightShift: "Weight to lead leg, lower center", lineOfAttack: "Horizontal to midsection", strikingSurface: "Knuckles", retraction: "Return to high guard", defenseAgainst: "Elbow block, step back", counterSetup: "Body-head hook combinations", youtube: null },
        
        { name: "Rear Hook to Body", difficulty: "Intermediate", mechanics: "Pivot rear foot, drop level, rotate hips, swing rear hook to body", anatomy: "Core rotators, rear leg, shoulder", progression: "Technical → Heavy bag → Sparring", safety: "Keep lead hand high", focusCues: "Pivot, drop, rotate", stance: "Orthodox/Southpaw", weightShift: "Transfer to lead leg", lineOfAttack: "Horizontal arc to body", strikingSurface: "Knuckles", retraction: "Quick return", defenseAgainst: "Elbow block, lean away", counterSetup: "Finisher in combinations", youtube: null },
        
        { name: "Lead Uppercut to Body", difficulty: "Advanced", mechanics: "Deep knee bend, drive upward at close range to solar plexus", anatomy: "Legs, glutes, chest", progression: "Close range drills → Bag → Sparring", safety: "Maintain balance at close range", focusCues: "Leg drive, close range, upward", stance: "Orthodox/Southpaw", weightShift: "Upward explosion", lineOfAttack: "Vertical upward to body", strikingSurface: "Knuckles", retraction: "Return to guard", defenseAgainst: "Clinch, lean back", counterSetup: "Infighting weapon", youtube: null },
        
        { name: "Rear Uppercut to Body", difficulty: "Advanced", mechanics: "Drop level, explode upward with rear hand to midsection", anatomy: "Rear leg, core, chest", progression: "Technical → Partner drills → Sparring", safety: "Don't overcommit", focusCues: "Explosive legs, tight arc", stance: "Orthodox/Southpaw", weightShift: "Upward drive", lineOfAttack: "Vertical to body", strikingSurface: "Knuckles", retraction: "Quick return", defenseAgainst: "Clinch, step back", counterSetup: "Counter uppercut", youtube: null },
        
        // ADVANCED PUNCHES
        { name: "Overhand Right (Overhand Rear)", difficulty: "Advanced", mechanics: "Slight lean back, loop rear hand over opponent's guard in semi-circular arc, rotate hips", anatomy: "Rear shoulder, latissimus, core", progression: "Technical shadow → Heavy bag → Sparring", safety: "Don't telegraph, maintain balance", focusCues: "Loop over guard, hip rotation, downward angle", stance: "Orthodox/Southpaw", weightShift: "Forward with rotation", lineOfAttack: "Over-the-top arc", strikingSurface: "Knuckles", retraction: "Return to guard", defenseAgainst: "Slip inside, counter hook", counterSetup: "Counter to jab, looping punch", youtube: null },
        
        { name: "Corkscrew Punch", difficulty: "Advanced", mechanics: "Rotate fist during extension so palm faces down at impact, creating spiral force", anatomy: "Shoulder rotators, forearm, triceps", progression: "Slow technical → Speed work → Bag", safety: "Maintain wrist alignment", focusCues: "Fist rotation, snap, penetration", stance: "Orthodox/Southpaw", weightShift: "Standard punch mechanics", lineOfAttack: "Straight with rotation", strikingSurface: "Knuckles", retraction: "Reverse rotation", defenseAgainst: "Standard defenses", counterSetup: "Variation of straight punches", youtube: null },
        
        { name: "Check Hook", difficulty: "Advanced", mechanics: "Pivot 90° on lead foot while throwing lead hook, using opponent's momentum against them", anatomy: "Core, lead leg, shoulder", progression: "Footwork drills → Partner drills → Sparring", safety: "Maintain balance on pivot", focusCues: "Pivot, hook simultaneously, angle off", stance: "Orthodox/Southpaw", weightShift: "Rotate on lead leg", lineOfAttack: "Horizontal with angle change", strikingSurface: "Knuckles", retraction: "Step off at angle", defenseAgainst: "Stop forward momentum", counterSetup: "Counter aggressive opponent", youtube: null },
        
        { name: "Pull Counter", difficulty: "Advanced", mechanics: "Pull head back just out of range of jab, immediately counter with cross over top", anatomy: "Neck, core, rear shoulder", progression: "Reaction drills → Partner work → Sparring", safety: "Don't lean too far", focusCues: "Minimal pull, immediate counter", stance: "Orthodox/Southpaw", weightShift: "Slight back then forward", lineOfAttack: "Straight counter", strikingSurface: "Knuckles", retraction: "Return to stance", defenseAgainst: "Feint, don't commit", counterSetup: "Counter to jab", youtube: null },
        
        { name: "Shovel Hook", difficulty: "Advanced", mechanics: "Hybrid between hook and uppercut at 45° angle, target liver or spleen", anatomy: "Obliques, shoulder, core", progression: "Technical → Bag → Sparring", safety: "Maintain guard", focusCues: "45° angle, short arc, power", stance: "Orthodox/Southpaw", weightShift: "Rotate and drive", lineOfAttack: "Diagonal upward", strikingSurface: "Knuckles", retraction: "Quick return", defenseAgainst: "Elbow block", counterSetup: "Body attack variation", youtube: null },
        
        { name: "Rabbit Punch (ILLEGAL - Educational Only)", difficulty: "Advanced", mechanics: "Strike to back of head/neck area - ILLEGAL in regulated boxing", anatomy: "N/A - Prohibited technique", progression: "N/A", safety: "NEVER USE - Can cause serious injury or death", focusCues: "AVOID - Recognize to defend", stance: "N/A", weightShift: "N/A", lineOfAttack: "N/A", strikingSurface: "N/A", retraction: "N/A", defenseAgainst: "Maintain awareness, referee intervention", counterSetup: "N/A - Results in disqualification", youtube: null },
      ],
      
      defense: [
        // BLOCKS - BEGINNER
        { name: "High Guard Block", difficulty: "Beginner", mechanics: "Raise both gloves to temples, elbows tight to ribs, absorb punches on gloves/forearms", timing: "Continuous protection, especially when stationary", recovery: "Maintain guard, look for counter opportunities", youtube: null },
        
        { name: "Cross-Arm Block", difficulty: "Beginner", mechanics: "Cross forearms in front of face, elbows together, absorb straight punches", timing: "Against straight punches to head", recovery: "Uncross and counter", youtube: null },
        
        { name: "Elbow Block to Body", difficulty: "Beginner", mechanics: "Drop elbow to side of body, tuck tight to absorb body shots", timing: "Against hooks and straights to body", recovery: "Return to high guard", youtube: null },
        
        { name: "Glove Block (Lead Hand)", difficulty: "Beginner", mechanics: "Use lead glove to block incoming punches to head, maintain rear hand at chin", timing: "Against jabs and crosses", recovery: "Block and counter immediately", youtube: null },
        
        { name: "Glove Block (Rear Hand)", difficulty: "Beginner", mechanics: "Use rear glove to block punches, keep lead hand extended or at chin", timing: "Against rear hand attacks", recovery: "Block and counter cross", youtube: null },
        
        // PARRIES - BEGINNER/INTERMEDIATE
        { name: "Lead Hand Parry (Jab)", difficulty: "Beginner", mechanics: "Use lead glove to deflect opponent's jab slightly offline with small circular motion", timing: "As jab extends, minimal movement", recovery: "Parry and counter jab or cross", youtube: null },
        
        { name: "Rear Hand Parry (Jab)", difficulty: "Beginner", mechanics: "Use rear glove to parry jab across body, palm open or closed", timing: "As jab approaches face", recovery: "Parry and counter cross", youtube: null },
        
        { name: "Lead Hand Parry (Cross)", difficulty: "Intermediate", mechanics: "Parry opponent's cross with lead hand, redirect to outside", timing: "As cross extends", recovery: "Parry and counter hook or jab", youtube: null },
        
        { name: "Rear Hand Parry (Cross)", difficulty: "Intermediate", mechanics: "Use rear hand to parry opponent's cross, minimal deflection", timing: "At extension point", recovery: "Parry and counter", youtube: null },
        
        { name: "Parry to Hook", difficulty: "Advanced", mechanics: "Use glove to catch and redirect hook punch", timing: "As hook swings", recovery: "Catch and counter uppercut", youtube: null },
        
        // SLIPS - INTERMEDIATE
        { name: "Slip Outside Jab (Orthodox vs Orthodox)", difficulty: "Intermediate", mechanics: "Move head slightly to outside (right) of jab, minimal movement, keep eyes on opponent", timing: "As jab extends, before impact", recovery: "Slip and counter cross or hook", youtube: null },
        
        { name: "Slip Inside Jab", difficulty: "Intermediate", mechanics: "Move head to inside (left) of jab, enter opponent's guard", timing: "At jab extension", recovery: "Slip and counter hook or body shot", youtube: null },
        
        { name: "Slip Outside Cross", difficulty: "Intermediate", mechanics: "Move head to outside (left for orthodox) of cross, rotate shoulders", timing: "As cross comes forward", recovery: "Slip and counter lead hook", youtube: null },
        
        { name: "Slip Inside Cross", difficulty: "Advanced", mechanics: "Slip to inside of cross, enter close range", timing: "Early in cross extension", recovery: "Slip and counter uppercut or hook", youtube: null },
        
        { name: "Slip to Lead Hook", difficulty: "Advanced", mechanics: "Slip under/inside lead hook by dropping level slightly", timing: "As hook swings", recovery: "Slip and counter cross", youtube: null },
        
        { name: "Slip to Rear Hook", difficulty: "Advanced", mechanics: "Slip inside rear hook, move forward into opponent", timing: "As hook begins arc", recovery: "Slip and counter uppercut", youtube: null },
        
        // ROLLS/BOB AND WEAVE - INTERMEDIATE/ADVANCED
        { name: "Roll Under Hook (Lead Side)", difficulty: "Intermediate", mechanics: "Bend knees, drop level, rotate shoulders in U-shape under hook, come up on other side", timing: "As hook swings overhead", recovery: "Roll and counter cross or uppercut", youtube: null },
        
        { name: "Roll Under Hook (Rear Side)", difficulty: "Intermediate", mechanics: "Drop and roll under rear hook in U-shaped motion", timing: "During hook arc", recovery: "Roll and counter lead hook", youtube: null },
        
        { name: "Bob and Weave", difficulty: "Intermediate", mechanics: "Continuous U-shaped movement under punches, combining bob (drop) and weave (side to side)", timing: "Against combinations", recovery: "Weave and counter", youtube: null },
        
        { name: "Duck Under Punch", difficulty: "Intermediate", mechanics: "Quick drop of level under straight punches or hooks", timing: "Before impact", recovery: "Duck and change position", youtube: null },
        
        // EVASIVE MOVEMENTS - INTERMEDIATE/ADVANCED
        { name: "Pull Back", difficulty: "Intermediate", mechanics: "Lean upper body back just out of range, maintain balance on rear leg", timing: "Against straight punches", recovery: "Pull and counter or reset", youtube: null },
        
        { name: "Lean Back", difficulty: "Intermediate", mechanics: "Shift weight to rear leg, lean torso back to evade punch", timing: "As punch extends", recovery: "Return to stance or counter", youtube: null },
        
        { name: "Step Back", difficulty: "Beginner", mechanics: "Push off lead foot, step back with rear foot first, maintain guard", timing: "Against pressure or combinations", recovery: "Create distance, reset", youtube: null },
        
        { name: "Side Step (Lateral Movement)", difficulty: "Intermediate", mechanics: "Step laterally off centerline, maintain stance and guard", timing: "Against straight attacks", recovery: "Angle off and counter", youtube: null },
        
        { name: "Circle Out", difficulty: "Intermediate", mechanics: "Move in circular pattern around opponent, control distance", timing: "Continuous movement", recovery: "Create angle, attack", youtube: null },
        
        // ADVANCED DEFENSIVE SYSTEMS
        { name: "Shoulder Roll (Philly Shell)", difficulty: "Advanced", mechanics: "Turn lead shoulder forward to block jab, rear hand at chin, lead hand low for body", timing: "Against orthodox opponents", recovery: "Roll shoulder and counter", youtube: null },
        
        { name: "Peek-a-Boo Defense", difficulty: "Advanced", mechanics: "Hands at cheekbones, elbows tight, bob and weave continuously, tight guard", timing: "Constant protection with movement", recovery: "Block and explosive counter", youtube: null },
        
        { name: "Cross-Counter Defense", difficulty: "Advanced", mechanics: "Slip jab to outside while simultaneously throwing cross over top", timing: "Simultaneous slip and counter", recovery: "Land counter and follow up", youtube: null },
        
        { name: "Catch and Counter", difficulty: "Advanced", mechanics: "Catch punch in glove, immediately counter with opposite hand", timing: "Catch at impact moment", recovery: "Catch and explosive counter", youtube: null },
        
        { name: "Parry-Slip Combination", difficulty: "Advanced", mechanics: "Parry punch then slip follow-up shot in fluid motion", timing: "Against combinations", recovery: "Defend and counter", youtube: null },
        
        { name: "Rope-a-Dope", difficulty: "Advanced", mechanics: "Lean on ropes, cover up, absorb punches while opponent expends energy", timing: "Strategic defensive position", recovery: "Counter when opponent tires", youtube: null },
      ],
      
      grappling: [
        // Boxing has minimal grappling - only clinch work
        { name: "Clinch (Hold)", difficulty: "Beginner", mechanics: "Wrap arms around opponent's arms or body, control posture, prevent punching", grips: "Over-under, double underhook, or body lock", leveragePoints: "Control opponent's arms and posture", finish: "Referee breaks or create space to punch", youtube: null },
        
        { name: "Clinch Break", difficulty: "Beginner", mechanics: "Push opponent away, step back, or pivot out of clinch", grips: "Push on shoulders or chest", leveragePoints: "Create distance", finish: "Return to boxing range", youtube: null },
        
        { name: "Tie-Up", difficulty: "Intermediate", mechanics: "Control opponent's lead arm with your lead arm, neutralize their offense", grips: "Arm control, head position", leveragePoints: "Control lead side", finish: "Create angle or break", youtube: null },
        
        { name: "Inside Clinch", difficulty: "Intermediate", mechanics: "Get inside opponent's guard, control with forearms, land short punches", grips: "Inside arm control", leveragePoints: "Close range position", finish: "Land uppercuts or hooks", youtube: null },
        
        { name: "Pivot Out of Clinch", difficulty: "Advanced", mechanics: "Pivot on lead foot while maintaining arm control, create angle", grips: "Maintain control during pivot", leveragePoints: "Footwork and hip rotation", finish: "Angle off and counter", youtube: null },
      ],
      
      footwork: [
        // BASIC STANCE - BEGINNER
        { name: "Orthodox Stance", difficulty: "Beginner", mechanics: "Left foot forward, right foot back at 45° angle, feet shoulder-width apart, knees slightly bent, hands at chin", weightDistribution: "60% rear leg, 40% lead leg", stanceShift: "Foundation position", youtube: null },
        
        { name: "Southpaw Stance", difficulty: "Beginner", mechanics: "Right foot forward, left foot back at 45° angle, mirror of orthodox", weightDistribution: "60% rear leg, 40% lead leg", stanceShift: "Foundation for left-handed boxers", youtube: null },
        
        // BASIC MOVEMENT - BEGINNER
        { name: "Advance (Forward Step)", difficulty: "Beginner", mechanics: "Push off rear foot, step forward with lead foot first, rear foot follows maintaining distance", weightDistribution: "Maintain 60/40 ratio", stanceShift: "Forward movement", youtube: null },
        
        { name: "Retreat (Backward Step)", difficulty: "Beginner", mechanics: "Push off lead foot, step back with rear foot first, lead foot follows", weightDistribution: "Maintain balance", stanceShift: "Backward movement", youtube: null },
        
        { name: "Step Left (Lateral)", difficulty: "Beginner", mechanics: "Step left with lead foot first, rear foot follows, maintain stance width", weightDistribution: "Even distribution", stanceShift: "Lateral movement left", youtube: null },
        
        { name: "Step Right (Lateral)", difficulty: "Beginner", mechanics: "Step right with rear foot first, lead foot follows", weightDistribution: "Even distribution", stanceShift: "Lateral movement right", youtube: null },
        
        // INTERMEDIATE FOOTWORK
        { name: "Pendulum Step (Bounce Step)", difficulty: "Intermediate", mechanics: "Light bounce on balls of feet, move forward and back rhythmically", weightDistribution: "Dynamic, on balls of feet", stanceShift: "Rhythmic movement", youtube: null },
        
        { name: "Pivot (Lead Foot)", difficulty: "Intermediate", mechanics: "Plant lead foot, rotate on ball, swing rear foot around to change angle (90° or 180°)", weightDistribution: "Weight on lead foot during pivot", stanceShift: "Angle change", youtube: null },
        
        { name: "Pivot (Rear Foot)", difficulty: "Intermediate", mechanics: "Plant rear foot, rotate, swing lead foot around", weightDistribution: "Weight on rear foot", stanceShift: "Angle change opposite direction", youtube: null },
        
        { name: "L-Step", difficulty: "Intermediate", mechanics: "Step forward, then step laterally forming L-shape, create angle", weightDistribution: "Transfer weight through movement", stanceShift: "Angular attack", youtube: null },
        
        { name: "V-Step", difficulty: "Intermediate", mechanics: "Step diagonally forward-left or forward-right forming V pattern", weightDistribution: "Forward weight transfer", stanceShift: "Diagonal advance", youtube: null },
        
        { name: "Side Step (Angle Off)", difficulty: "Intermediate", mechanics: "Quick lateral step off centerline after punching", weightDistribution: "Shift to stepping side", stanceShift: "Create angle", youtube: null },
        
        // ADVANCED FOOTWORK
        { name: "Switch Step", difficulty: "Advanced", mechanics: "Temporarily switch stance (orthodox to southpaw or vice versa) to change angle", weightDistribution: "Quick weight transfer", stanceShift: "Stance switch", youtube: null },
        
        { name: "D'Amato Shift (Peak-a-Boo Shift)", difficulty: "Advanced", mechanics: "Step through with rear foot, switch stance while moving forward", weightDistribution: "Explosive transfer", stanceShift: "Aggressive angle change", youtube: null },
        
        { name: "Pull Step (Step-Back Counter)", difficulty: "Advanced", mechanics: "Step back with lead foot first while countering, create distance", weightDistribution: "Weight to rear leg", stanceShift: "Defensive counter movement", youtube: null },
        
        { name: "Circle Pivot", difficulty: "Advanced", mechanics: "Continuous pivoting in circular pattern around opponent", weightDistribution: "Dynamic on balls of feet", stanceShift: "Circular movement", youtube: null },
        
        { name: "In-and-Out Step", difficulty: "Advanced", mechanics: "Explosive forward step to punch, immediate backward step to exit", weightDistribution: "Quick transfer forward and back", stanceShift: "Hit-and-move", youtube: null },
        
        { name: "Cross Step", difficulty: "Advanced", mechanics: "Cross one foot over the other for rapid lateral movement (use sparingly)", weightDistribution: "Careful balance", stanceShift: "Quick lateral", youtube: null },
        
        { name: "Check Step", difficulty: "Advanced", mechanics: "Small stutter step to disrupt opponent's timing before attack", weightDistribution: "Balanced, ready", stanceShift: "Timing disruption", youtube: null },
      ],
      
      weapons: [] // Boxing doesn't use weapons
    },
    
    physicalTraining: {
      conditioning: [
        { name: "Heavy Bag Work", description: "3-5 minute rounds of continuous punching, working combinations, power, and endurance", roundStructure: "3 min work / 30-60 sec rest, 6-12 rounds", youtube: null },
        { name: "Speed Bag Training", description: "Rhythmic punching on small bag to develop hand-eye coordination, timing, and shoulder endurance", roundStructure: "3 min rounds / 30 sec rest, 5-10 rounds", youtube: null },
        { name: "Double-End Bag", description: "Punching moving bag attached to floor and ceiling for timing, accuracy, and reflexes", roundStructure: "3 min rounds / 30 sec rest, 5-8 rounds", youtube: null },
        { name: "Neck Strengthening", description: "Neck bridges, neck curls, resistance exercises to prevent whiplash and improve durability", roundStructure: "3 sets of 15-20 reps", youtube: null },
        { name: "Grip Strengthening", description: "Rice bucket exercises, grip trainers, towel pull-ups for hand strength", roundStructure: "3 sets of 30-60 seconds", youtube: null },
        { name: "Core Conditioning", description: "Planks, Russian twists, leg raises, medicine ball work for rotational power", roundStructure: "3-4 sets of 15-20 reps or 60 sec holds", youtube: null },
        { name: "Impact Conditioning", description: "Progressive body conditioning through controlled partner drills and bag work", roundStructure: "Gradual progression over months", youtube: null },
        { name: "Shadow Boxing", description: "Solo technique rehearsal, footwork, combinations without equipment", roundStructure: "3 min rounds / 30 sec rest, 5-10 rounds", youtube: null },
      ],
      
      stretchingMobility: [
        { name: "Dynamic Shoulder Circles", description: "Forward and backward arm circles to warm up shoulder joints", duration: "30 seconds each direction", youtube: null },
        { name: "Hip Flexor Stretch", description: "Lunge position stretch to open hips for footwork and power generation", duration: "30-60 seconds each side", youtube: null },
        { name: "Thoracic Spine Rotation", description: "Seated or standing rotations for upper body mobility", duration: "10 reps each side", youtube: null },
        { name: "Wrist Flexor/Extensor Stretch", description: "Stretch wrists to prevent injury from punching", duration: "30 seconds each position", youtube: null },
        { name: "Neck Stretches", description: "Gentle side-to-side and forward/back neck stretches", duration: "20-30 seconds each direction", youtube: null },
        { name: "Ankle Mobility Drills", description: "Ankle circles and calf stretches for footwork agility", duration: "30 seconds each ankle", youtube: null },
        { name: "Hamstring Dynamic Stretch", description: "Leg swings to prepare for explosive movement", duration: "10-15 swings each leg", youtube: null },
        { name: "Chest and Shoulder Opener", description: "Doorway stretch or band pull-aparts for punching mechanics", duration: "30-60 seconds", youtube: null },
      ],
      
      cardio: [
        { name: "Roadwork (Long Distance Running)", description: "Steady-state running to build aerobic base and endurance", roundStructure: "3-5 miles at conversational pace, 3-4x per week", youtube: null },
        { name: "Interval Sprints", description: "High-intensity sprint intervals for anaerobic conditioning", roundStructure: "30 sec sprint / 30 sec rest x 10-20 rounds", youtube: null },
        { name: "Jump Rope", description: "Continuous rope skipping for footwork, coordination, and cardio", roundStructure: "3 min rounds / 30 sec rest, 10-15 rounds", youtube: null },
        { name: "Hill Sprints", description: "Sprinting uphill for explosive power and leg endurance", roundStructure: "10-15 second sprints / walk back recovery x 10-15 rounds", youtube: null },
        { name: "Stair Running", description: "Running stairs for leg power and cardiovascular endurance", roundStructure: "5-10 flights up, walk down, repeat 10-15x", youtube: null },
        { name: "Circuit Training", description: "Mixed exercises (burpees, mountain climbers, jump squats) in circuit format", roundStructure: "45 sec work / 15 sec rest x 8-12 exercises, 3-4 circuits", youtube: null },
        { name: "Swimming", description: "Low-impact full-body cardio and lung capacity building", roundStructure: "20-30 minutes continuous or interval swimming", youtube: null },
      ]
    },
    
    knowledge: {
      combatAwareness: [
        { id: "range-system", name: "Range System", description: "Boxing defines four ranges: Outside (kicking distance - not applicable), Long Range (jab range), Medium Range (cross and hook range), and Close Range (uppercut and clinch range). Fighters must control distance through footwork, use appropriate punches for each range, and transition smoothly between ranges.", youtube: null },
        { id: "timing-rhythm", name: "Timing & Rhythm", description: "Boxing uses cadence disruption, counter-timing (hitting as opponent attacks), and tempo control. Key concepts include: beating opponent to the punch, counter-punching in the gap between their punches, and changing rhythm to break opponent's timing. Fighters study opponent patterns to find openings.", youtube: null },
        { id: "targeting", name: "Target Selection", description: "Primary targets: Head (chin, temple, jaw - knockout zones), Body (solar plexus, liver, ribs, heart - debilitating shots). Legal targets are front and sides of head and body above belt. Priority in competition: clean punches to head score highest, body shots wear down opponent. Anatomical rationale: chin causes rotational force leading to KO, liver shot causes vagus nerve response.", youtube: null },
        { id: "distance-control", name: "Distance Control", description: "Controlling range through footwork, jab usage, and body positioning. Offensive distance control: advance with combinations, cut off ring. Defensive distance control: retreat, lateral movement, clinch when pressured.", youtube: null },
      ],
      
      strategyTactics: [
        { id: "scoring-rules", name: "Competition Scoring", description: "Olympic/Amateur (IBA/USA Boxing): 10-point must system. Judges award 10 points to round winner, 9 or less to loser. Criteria: number of clean punches landed, domination, technique, competitiveness. Professional Boxing: Same 10-point must system but emphasizes effective aggression, ring generalship, defense, and clean punching. Knockdowns result in 10-8 rounds typically.", youtube: null },
        { id: "self-defense", name: "Real-World Application", description: "Boxing adapts to street defense by: targeting vulnerable areas (chin, liver), using footwork to escape, maintaining awareness of multiple attackers, avoiding ground fighting, using environment strategically. Limitations: no grappling defense, no weapon defense, legal considerations. Boxing provides superior striking, footwork, and composure under pressure.", youtube: null },
        { id: "feinting-setup", name: "Deception & Combination Logic", description: "Feints: fake jab to draw reaction, shoulder feint, level change feint, footwork feint. Standard combinations follow logic: straight punches set up hooks (1-2-3), body shots set up head shots (and vice versa), double jab sets up power shots. Chain attacks: if first punch blocked, flow to next target. Bait-and-counter: expose target to draw attack, then counter.", youtube: null },
        { id: "fight-iq", name: "Fight IQ & Adaptation", description: "Reading opponent: identify stance, dominant hand, patterns, weaknesses. Adaptation: switch strategy if not working (pressure vs boxing away, body attack vs head hunting). Round-by-round adjustment: assess what's working, exploit openings, neutralize opponent's strengths.", youtube: null },
        { id: "ring-generalship", name: "Ring Generalship", description: "Controlling ring geography: cut off ring to trap opponent, use ropes strategically, maintain center ring position. Angle creation: pivot to create offensive angles while denying opponent angles. Pressure fighting vs outboxing: dictate pace and range.", youtube: null },
      ],
      
      cultureEtiquette: [
        { id: "rituals", name: "Pre/Post Practice Rituals", description: "Pre-fight: hand wrapping (traditional ritual), glove fitting, warm-up routine, mental preparation. Pre-training: hand wraps, jump rope warm-up, stretching. Post-training: cool down, ice hands, respect bow/nod to coaches and training partners. Boxing doesn't have formal bowing like Asian martial arts but shows respect through handshake, glove touch, or nod.", youtube: null },
        { id: "ranking", name: "Progression System", description: "Amateur Boxing (USA Boxing/IBA): Novice → Open Class (no belt system, skill-based classification). Competition levels: local → regional → national → international → Olympic. Professional Boxing: No formal ranking for beginners. Professional rankings: Unranked → Regional rankings → National rankings → World rankings (WBA, WBC, IBF, WBO). Titles: Regional → National → Continental → World Champion. Progression based on win-loss record, quality of opposition, and sanctioning body decisions.", youtube: null },
        { id: "dojo-etiquette", name: "Training Protocol", description: "Gym etiquette: respect coaches and senior boxers, maintain equipment, wrap hands properly, wear clean gear, no ego in sparring. Sparring rules: controlled intensity as directed, protect training partners, listen to coach. Safety: never spar without mouthguard and headgear (amateur), report injuries, hydrate. Hierarchy: coaches command respect, experienced boxers mentor newcomers, everyone starts at bottom.", youtube: null },
        { id: "boxing-culture", name: "Boxing Culture & History", description: "Rich history from ancient Greece to modern sport. Cultural significance: working-class roots, path to upward mobility, character building. Values: discipline, toughness, respect, work ethic. Famous gyms and lineages: Kronk Gym, Wild Card Gym, Cus D'Amato's system, Cuban boxing school, Russian/Soviet system. Boxing terminology and language unique to sport.", youtube: null },
      ]
    },
    
    equipment: {
      protective: [
        { name: "Hand Wraps", purpose: "Protect knuckles, wrists, and hands; stabilize joints; absorb sweat; prevent injuries", mandatory: true, youtube: null },
        { name: "Boxing Gloves", purpose: "Protect hands and opponent; distribute impact force; different weights for training (16oz) vs competition (8-10oz)", mandatory: true, youtube: null },
        { name: "Mouthguard", purpose: "Protect teeth, jaw, and reduce concussion risk; mandatory for sparring and competition", mandatory: true, youtube: null },
        { name: "Headgear", purpose: "Protect head from cuts and reduce impact in amateur sparring/competition; not used in professional boxing", mandatory: true, youtube: null },
        { name: "Groin Protector (Cup)", purpose: "Protect sensitive areas from accidental low blows", mandatory: true, youtube: null },
        { name: "Shin Guards", purpose: "Not typically used in boxing (kicking not allowed)", mandatory: false, youtube: null },
        { name: "Chest Protector", purpose: "Occasionally used in beginner training for body shot conditioning", mandatory: false, youtube: null },
      ],
      
      training: [
        { name: "Heavy Bag", purpose: "Develop power, endurance, combinations; holding: hang at head height; usage: strike with full power, work all punches", youtube: null },
        { name: "Speed Bag", purpose: "Develop hand-eye coordination, rhythm, shoulder endurance; holding: mounted on platform; usage: light rapid punches in rhythm", youtube: null },
        { name: "Double-End Bag", purpose: "Timing, accuracy, reflexes; holding: attached to floor and ceiling with elastic; usage: punch moving target", youtube: null },
        { name: "Focus Mitts", purpose: "Coach-held pads for combination work, timing, accuracy; holding: coach holds at various positions; usage: striker hits called combinations", youtube: null },
        { name: "Body Shield/Thai Pad", purpose: "Absorb body shots and kicks; holding: partner holds against body; usage: powerful body strikes", youtube: null },
        { name: "Jump Rope", purpose: "Warm-up, footwork, cardio, coordination; holding: grip handles; usage: continuous skipping, variations", youtube: null },
        { name: "Reflex Ball", purpose: "Hand-eye coordination, reaction time; holding: headband with ball on elastic; usage: punch ball as it rebounds", youtube: null },
        { name: "Slip Bag (Maize Bag)", purpose: "Practice slipping and weaving; holding: hangs from ceiling; usage: slip under swinging bag", youtube: null },
      ]
    },
    
    trainingDrills: {
      shadowPractice: { 
        description: "Solo rehearsal of techniques, combinations, footwork, and defense without equipment or partner. Focus on form, visualization of opponent, movement, and conditioning. Round structure: 3 min rounds / 30 sec rest, 5-10 rounds. Emphasize: proper technique, head movement, footwork, defensive maneuvers, combination flow. Progressive complexity: basic punches → combinations → defensive integration → situational sparring simulation.",
        youtube: null 
      },
      partnerDrills: { 
        description: "Controlled interaction with training partner for timing, distance, and reaction development. Drills include: 1) Attack-Defense-Counter (A throws, B defends and counters), 2) Call-Out Drills (coach/partner calls technique), 3) Range Finding (maintain specific distance), 4) Reaction Drills (respond to visual cues), 5) Flow Drills (continuous exchange at controlled pace). Safety: controlled intensity, protective gear, clear communication.",
        youtube: null 
      },
      padWork: { 
        description: "Coach or partner holds focus mitts or pads for combination practice, timing, and power development. Holding positions: high guard (head level), body level, mixed heights. Strike sequences: called combinations (1-2-3, etc.), random sequences, situational drills. Resistance cues: holder provides slight resistance on impact, moves pads to simulate opponent movement, calls defensive maneuvers between combinations. Round structure: 3 min rounds / 1 min rest, 6-10 rounds.",
        youtube: null 
      },
      sparring: { 
        description: "Controlled fighting with partner simulating real competition. Light sparring: 30-40% power, focus on technique and learning; Technical sparring: specific focus (defense only, body shots only, etc.); Hard sparring: 70-80% power, competition simulation (limited frequency). Round structure: Amateur - 3 min rounds / 1 min rest, 3-6 rounds; Professional training - 3 min rounds / 1 min rest, 6-12 rounds. Safety rules: mandatory headgear, mouthguard, 16oz gloves, referee/coach supervision, medical clearance, weight class matching.",
        youtube: null 
      },
      formKata: { 
        description: "Boxing doesn't have traditional kata/forms like Asian martial arts. Closest equivalent: prescribed combination sequences drilled repetitively, shadow boxing patterns, and technical drills. Some gyms use 'number drills' (specific punch combinations repeated for muscle memory). Progressive complexity from basic to advanced combinations.",
        youtube: null 
      }
    },
    
    enduranceDrills: [
      {
        name: "Boxing Circuit #1 - Power Endurance",
        description: "Heavy bag power rounds with minimal rest",
        structure: "Round 1: 3 min continuous power punches (70% effort) / 30 sec rest; Round 2: 3 min power combinations / 30 sec rest; Round 3: 3 min maximum power shots / 30 sec rest; Round 4: 3 min power endurance / 30 sec rest; Round 5: 3 min all-out power / rest; Total: 5 rounds",
        youtube: null
      },
      {
        name: "Boxing Circuit #2 - Speed Endurance",
        description: "High-speed punching with speed bag and double-end bag",
        structure: "Station 1: Speed bag 2 min / Station 2: Double-end bag 2 min / Station 3: Shadow boxing (speed focus) 2 min / Station 4: Jump rope 2 min; Rest 1 min between stations; Repeat circuit 3x",
        youtube: null
      },
      {
        name: "Boxing Circuit #3 - Anaerobic Capacity",
        description: "High-intensity interval punching",
        structure: "Heavy bag: 30 sec maximum output / 30 sec rest x 10 rounds; Focus: explosive combinations, full power, complete recovery between work intervals",
        youtube: null
      },
      {
        name: "Boxing Circuit #4 - Technical Endurance",
        description: "Maintain technique under fatigue",
        structure: "Round 1-3: Shadow boxing with perfect form 3 min / 30 sec rest; Round 4-6: Focus mitts technical combinations 3 min / 1 min rest; Round 7-9: Heavy bag technical work 3 min / 30 sec rest; Emphasis: technique doesn't break down when tired",
        youtube: null
      },
      {
        name: "Boxing Circuit #5 - Lactic Threshold",
        description: "Train in the pain zone",
        structure: "Round 1: 3 min steady pace (60% effort); Round 2: 3 min hard pace (80% effort); Round 3: 3 min maximum effort (95%); Round 4: 3 min recovery pace (50%); Repeat 2x; Total: 8 rounds; Builds ability to perform while accumulating lactic acid",
        youtube: null
      },
      {
        name: "Boxing Circuit #6 - Full Body Conditioning",
        description: "Boxing movements with bodyweight exercises",
        structure: "Circuit: 1 min heavy bag / 10 burpees / 1 min double-end bag / 20 mountain climbers / 1 min shadow boxing / 15 jump squats; Rest 2 min; Repeat 4x",
        youtube: null
      }
    ],
    
    combinationDrills: [
      // BEGINNER COMBINATIONS
      { name: "1-2 (Jab-Cross)", difficulty: "Beginner", sequence: "Jab (1) → Cross (2)", purpose: "Basic straight punch combination, fundamental of boxing", progression: "Shadow → Bag → Mitts → Sparring", youtube: null },
      { name: "1-1-2 (Double Jab-Cross)", difficulty: "Beginner", sequence: "Jab (1) → Jab (1) → Cross (2)", purpose: "Double jab sets up power cross, disrupts opponent's timing", progression: "Shadow → Bag → Mitts", youtube: null },
      { name: "1-2-1 (Jab-Cross-Jab)", difficulty: "Beginner", sequence: "Jab (1) → Cross (2) → Jab (1)", purpose: "Straight combination, reset with jab", progression: "Shadow → Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-3 (Jab-Cross-Lead Hook)", difficulty: "Beginner", sequence: "Jab (1) → Cross (2) → Lead Hook (3)", purpose: "Add hook to straight punches, head level combination", progression: "Shadow → Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-1-2 (Jab-Cross-Jab-Cross)", difficulty: "Beginner", sequence: "Jab (1) → Cross (2) → Jab (1) → Cross (2)", purpose: "Four-punch straight combination, build endurance", progression: "Shadow → Bag → Mitts", youtube: null },
      
      // INTERMEDIATE COMBINATIONS
      { name: "1-2-3-2 (Jab-Cross-Hook-Cross)", difficulty: "Intermediate", sequence: "Jab (1) → Cross (2) → Lead Hook (3) → Cross (2)", purpose: "Four-punch combination with level change potential", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-1-2-3 (Double Jab-Cross-Hook)", difficulty: "Intermediate", sequence: "Jab (1) → Jab (1) → Cross (2) → Lead Hook (3)", purpose: "Double jab setup for power shots", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-5-2 (Jab-Cross-Lead Uppercut-Cross)", difficulty: "Intermediate", sequence: "Jab (1) → Cross (2) → Lead Uppercut (5) → Cross (2)", purpose: "Add uppercut to combination, close range", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-6-3-2 (Jab-Rear Uppercut-Hook-Cross)", difficulty: "Intermediate", sequence: "Jab (1) → Rear Uppercut (6) → Lead Hook (3) → Cross (2)", purpose: "Uppercut variation, unpredictable angles", progression: "Bag → Mitts", youtube: null },
      { name: "3-2 (Lead Hook-Cross)", difficulty: "Intermediate", sequence: "Lead Hook (3) → Cross (2)", purpose: "Counter combination, hook to straight", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-3b-2 (Jab-Cross-Body Hook-Cross)", difficulty: "Intermediate", sequence: "Jab (1) → Cross (2) → Lead Hook to Body (3b) → Cross (2)", purpose: "Level change, body-head attack", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1b-2b-3 (Body Jab-Body Cross-Head Hook)", difficulty: "Intermediate", sequence: "Jab to Body (1b) → Cross to Body (2b) → Lead Hook to Head (3)", purpose: "Body attack setup for head shot", progression: "Bag → Mitts", youtube: null },
      
      // ADVANCED COMBINATIONS
      { name: "1-2-3-2-1 (Jab-Cross-Hook-Cross-Jab)", difficulty: "Advanced", sequence: "Jab (1) → Cross (2) → Lead Hook (3) → Cross (2) → Jab (1)", purpose: "Five-punch combination, endurance and flow", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-1-2-3-2 (Double Jab-Cross-Hook-Cross)", difficulty: "Advanced", sequence: "Jab (1) → Jab (1) → Cross (2) → Lead Hook (3) → Cross (2)", purpose: "Five-punch with double jab setup", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-5-2-3 (Jab-Cross-Uppercut-Cross-Hook)", difficulty: "Advanced", sequence: "Jab (1) → Cross (2) → Lead Uppercut (5) → Cross (2) → Lead Hook (3)", purpose: "Five-punch with uppercut, varied angles", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-6-3b-2-3 (Jab-Rear Uppercut-Body Hook-Cross-Head Hook)", difficulty: "Advanced", sequence: "Jab (1) → Rear Uppercut (6) → Lead Body Hook (3b) → Cross (2) → Lead Hook (3)", purpose: "Complex level changes, unpredictable", progression: "Bag → Mitts", youtube: null },
      { name: "3-2-3-2 (Hook-Cross-Hook-Cross)", difficulty: "Advanced", sequence: "Lead Hook (3) → Cross (2) → Lead Hook (3) → Cross (2)", purpose: "Hook-cross exchanges, counter punching", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-3-2-1-2 (Jab-Cross-Hook-Cross-Jab-Cross)", difficulty: "Advanced", sequence: "Jab (1) → Cross (2) → Lead Hook (3) → Cross (2) → Jab (1) → Cross (2)", purpose: "Six-punch combination, advanced endurance", progression: "Bag → Mitts", youtube: null },
      { name: "1b-2-3-2 (Body Jab-Cross-Head Hook-Cross)", difficulty: "Advanced", sequence: "Jab to Body (1b) → Cross (2) → Lead Hook to Head (3) → Cross (2)", purpose: "Body-head level change", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "1-2-slip-3-2 (Jab-Cross-Slip-Lead Hook-Cross)", difficulty: "Advanced", sequence: "Jab (1) → Cross (2) → Slip → Lead Hook (3) → Cross (2)", purpose: "Integrate defense with offense", progression: "Mitts → Sparring", youtube: null },
      { name: "4-3-1-2 (Overhand-Hook-Jab-Cross)", difficulty: "Advanced", sequence: "Overhand Right (4) → Lead Hook (3) → Jab (1) → Cross (2)", purpose: "Overhand entry, unconventional start", progression: "Bag → Mitts", youtube: null },
      { name: "1-2-3-2-5-2 (Jab-Cross-Hook-Cross-Uppercut-Cross)", difficulty: "Advanced", sequence: "Jab (1) → Cross (2) → Lead Hook (3) → Cross (2) → Lead Uppercut (5) → Cross (2)", purpose: "Six-punch with uppercut finish", progression: "Bag → Mitts", youtube: null },
      { name: "Counter 1-2-3 (Counter Jab-Cross-Hook)", difficulty: "Advanced", sequence: "Slip jab → Counter Cross (2) → Counter Lead Hook (3)", purpose: "Defensive counter combination", progression: "Partner drills → Sparring", youtube: null },
      { name: "Body-Head Assault (1b-2b-3b-2-3)", difficulty: "Advanced", sequence: "Jab Body (1b) → Cross Body (2b) → Hook Body (3b) → Cross Head (2) → Hook Head (3)", purpose: "Systematic body attack finishing head", progression: "Bag → Mitts → Sparring", youtube: null },
      { name: "Check Hook Counter (Pivot-3-2)", difficulty: "Advanced", sequence: "Pivot → Check Hook (3) → Cross (2)", purpose: "Angle change counter", progression: "Partner drills → Sparring", youtube: null },
      { name: "15-Punch Combination", difficulty: "Advanced", sequence: "1-1-2-3-2-1-2-3b-2-3-2-5-2-3-2", purpose: "Ultimate endurance and combination flow test", progression: "Bag → Mitts (conditioning drill)", youtube: null },
    ],
    
    problemAreaTips: [
      {
        problem: "Dropping rear hand when jabbing",
        fix: "Practice jab with mirror feedback, consciously keep rear hand at chin, use light dumbbells (1-2 lbs) to build muscle memory, partner taps dropped hand as reminder",
        drill: "Jab-only rounds focusing solely on rear hand position, 3 min x 5 rounds",
        youtube: null
      },
      {
        problem: "Poor footwork - crossing feet or flat-footed",
        fix: "Practice basic steps slowly with focus on maintaining stance width, never cross feet, stay on balls of feet, use ladder drills for foot speed",
        drill: "Footwork-only shadow boxing rounds, advance-retreat-side to side patterns, 3 min x 5 rounds",
        youtube: null
      },
      {
        problem: "Telegraphing punches (pulling hand back before punching)",
        fix: "Practice punching directly from guard position, eliminate wind-up, use mirror work, partner watches for tells",
        drill: "Speed bag work to develop direct punch path, 3 min x 5 rounds",
        youtube: null
      },
      {
        problem: "Holding breath while punching",
        fix: "Consciously exhale sharply on each punch (make 'shh' sound), practice breathing rhythm, build cardiovascular endurance",
        drill: "Shadow boxing with audible exhale on every punch, 3 min x 5 rounds",
        youtube: null
      },
      {
        problem: "Poor defensive awareness - staring at hands or fixed gaze",
        fix: "Train to watch opponent's chest/shoulders (not hands), practice peripheral vision, drill defensive reactions",
        drill: "Partner reaction drills - partner throws random punches at 50% speed, practice defense, 3 min x 5 rounds",
        youtube: null
      },
      {
        problem: "Overcommitting on punches - losing balance",
        fix: "Practice punching with 70% power maintaining balance, never extend beyond base, strengthen core and legs",
        drill: "Balance drills - punch while standing on one leg, 30 sec each leg x 3 sets",
        youtube: null
      },
      {
        problem: "Slow hand return after punching",
        fix: "Emphasize retraction speed equals extension speed, visualize hands snapping back like rubber bands",
        drill: "Jab-cross rounds focusing only on quick retraction, 3 min x 5 rounds",
        youtube: null
      },
      {
        problem: "Tensing up - rigid muscles reducing speed",
        fix: "Stay relaxed until impact moment, practice loose shadow boxing, shake out arms between rounds",
        drill: "Speed-focused rounds at 50% power emphasizing relaxation, 3 min x 5 rounds",
        youtube: null
      }
    ]
  }
};