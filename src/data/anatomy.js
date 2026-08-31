// src/data/anatomy.js

export const anteriorMuscles = [
  {
    id: "sternocleidomastoid",
    name: "Sternocleidomastoid",
    side: "Neck",
    function: "Flexes neck to chest; rotates head to opposite side.",
    exercises: ["Neck curls", "Head stands (stabilizer)", "Wrestler bridges"],
    injuries: ["Torticollis (wry neck)", "Strain from sudden turning", "Tension headaches"],
    notes: "Often tight in people who look down at phones all day. Stretching this muscle can relieve tension headaches."
  },
  {
    id: "trapezius",
    name: "Trapezius",
    side: "Neck & Back",
    function: "Elevates, retracts, and depresses scapula.",
    exercises: ["Shrugs", "Face pulls", "Farmer's carries"],
    injuries: ["Upper trap strain", "Tension knots (trigger points)", "Scapular winging"],
    notes: "The upper traps often get overactive. Focus on lower and mid traps for better posture."
  },
  {
    id: "deltoid",
    name: "Deltoid",
    side: "Shoulder",
    function: "Abducts arm; anterior flexes, posterior extends.",
    exercises: ["Overhead press", "Lateral raises", "Rear delt flys"],
    injuries: ["Impingement syndrome", "Rotator cuff tears", "Bursitis"],
    notes: "Three heads (front, side, rear). Most people overtrain front delts with bench press and neglect rear delts."
  },
  {
    id: "pectoralis-major",
    name: "Pectoralis Major",
    side: "Chest",
    function: "Flexes, adducts, and medially rotates humerus.",
    exercises: ["Bench press", "Push-ups", "Chest flys", "Dips"],
    injuries: ["Pec tear (often during heavy bench)", "Strain from overstretching", "Costochondritis"],
    notes: "Clavicular head (upper chest) needs incline movements to develop fully. Stretches are crucial to prevent rounded shoulders."
  },
  {
    id: "pectoralis-minor",
    name: "Pectoralis Minor",
    side: "Chest (Deep)",
    function: "Stabilizes scapula; draws it anterior and inferior.",
    exercises: ["Push-up plus", "Serratus punches"],
    injuries: ["Thoracic outlet syndrome", "Shoulder impingement"],
    notes: "Tight pec minor pulls shoulders forward. Release this with lacrosse ball massage."
  },
  {
    id: "serratus-anterior",
    name: "Serratus Anterior",
    side: "Rib Cage",
    function: "Protracts scapula; holds it against thoracic wall.",
    exercises: ["Scapular push-ups", "Overhead reaches", "Punching movements"],
    injuries: ["Scapular winging", "Weakness leads to shoulder instability"],
    notes: "The 'boxer's muscle'. Essential for overhead stability and pushing power."
  },
  {
    id: "biceps-brachii",
    name: "Biceps Brachii",
    side: "Arm (Front)",
    function: "Flexes elbow; supinates forearm.",
    exercises: ["Barbell curls", "Chin-ups", "Hammer curls"],
    injuries: ["Bicep tendonitis", "Long head rupture (Popeye deformity)"],
    notes: "Supination (twisting palm up) activates the bicep more than neutral grip."
  },
  {
    id: "brachialis",
    name: "Brachialis",
    side: "Arm (Deep)",
    function: "Flexes elbow (pure flexor).",
    exercises: ["Hammer curls", "Reverse curls", "Zottman curls"],
    injuries: ["Overuse strain", "Tendonitis"],
    notes: "Sits underneath the bicep. Developing it pushes the bicep up, making the arm look bigger."
  },
  {
    id: "brachioradialis",
    name: "Brachioradialis",
    side: "Forearm",
    function: "Flexes forearm at elbow (neutral grip).",
    exercises: ["Hammer curls", "Reverse curls", "Rope climbs"],
    injuries: ["Tennis elbow", "Strain from heavy gripping"],
    notes: "Often neglected. Strong brachioradialis helps with grip strength and prevents elbow pain."
  },
  {
    id: "rectus-abdominis",
    name: "Rectus Abdominis",
    side: "Core (Front)",
    function: "Flexes lumbar spine (six-pack muscle).",
    exercises: ["Crunches", "Leg raises", "Cable crunches"],
    injuries: ["Strain from sudden flexion", "Separation (Diastasis recti)"],
    notes: "You cannot spot-reduce fat here. It's one long muscle sheet; 'upper' and 'lower' abs are the same muscle."
  },
  {
    id: "external-oblique",
    name: "External Oblique",
    side: "Core (Side)",
    function: "Rotates trunk; lateral flexion.",
    exercises: ["Russian twists", "Side planks", "Woodchoppers"],
    injuries: ["Oblique strain (common in golf/tennis)", "Tears from twisting under load"],
    notes: "Crucial for rotational power in sports. Balance left and right sides."
  },
  {
    id: "iliopsoas",
    name: "Iliopsoas",
    side: "Hip (Deep)",
    function: "Flexes hip (hip flexor).",
    exercises: ["Hanging leg raises", "High knees", "Dragon flags"],
    injuries: ["Hip flexor strain", "Snapping hip syndrome", "Lower back pain (if tight)"],
    notes: "Tight hip flexors are the #1 cause of lower back pain in sedentary people. Stretch them daily."
  },
  {
    id: "tensor-fasciae-latae",
    name: "Tensor Fasciae Latae (TFL)",
    side: "Hip (Side)",
    function: "Abducts and medially rotates thigh; stabilizes knee.",
    exercises: ["Clamshells", "Side leg raises", "Copenhagen planks"],
    injuries: ["IT Band syndrome", "Trochanteric bursitis", "Knee pain"],
    notes: "Often overactive in runners. Foam rolling the TFL can be painful but effective."
  },
  {
    id: "rectus-femoris",
    name: "Rectus Femoris",
    side: "Thigh (Front)",
    function: "Extends knee; flexes hip (part of quads).",
    exercises: ["Squats", "Leg extensions", "Front squats"],
    injuries: ["Quad strain", "Tendonitis at hip or knee"],
    notes: "The only quad muscle that crosses the hip. Tightness here can limit squat depth."
  },
  {
    id: "vastus-lateralis",
    name: "Vastus Lateralis",
    side: "Thigh (Outer)",
    function: "Extends knee.",
    exercises: ["Squats (wide stance)", "Lunges", "Leg press"],
    injuries: ["Strain", "Trigger points referring pain to knee"],
    notes: "The largest quad muscle. Give your quads that 'teardrop' shape near the knee."
  },
  {
    id: "vastus-medialis",
    name: "Vastus Medialis",
    side: "Thigh (Inner)",
    function: "Extends knee; stabilizes patella.",
    exercises: ["Squats (deep)", "Step-ups", "Bulgarian split squats"],
    injuries: ["VMO weakness leads to runner's knee", "Patellar tracking issues"],
    notes: "Crucial for knee health. Weak VMO is the primary cause of knee pain in lifters."
  },
  {
    id: "sartorius",
    name: "Sartorius",
    side: "Thigh (Front/Inner)",
    function: "Flexes, abducts, and laterally rotates thigh.",
    exercises: ["Cross-legged sits", "High kicks", "Martial arts drills"],
    injuries: ["Strain from kicking motions", "Pes anserine bursitis"],
    notes: "The longest muscle in the body. Known as the 'tailor's muscle' because of the sitting position it creates."
  },
  {
    id: "adductor-longus",
    name: "Adductor Longus",
    side: "Thigh (Inner)",
    function: "Adducts thigh.",
    exercises: ["Copenhagen planks", "Side lunges", "Hip adduction machine"],
    injuries: ["Groin strain", "Osteitis pubis", "Sports hernia"],
    notes: "Often injured in soccer and hockey. Strengthening adductors prevents groin pulls."
  },
  {
    id: "tibialis-anterior",
    name: "Tibialis Anterior",
    side: "Lower Leg (Front)",
    function: "Dorsiflexes ankle (lifts toes up).",
    exercises: ["Tibialis raises", "Heel walks", "Banded dorsiflexion"],
    injuries: ["Shin splints", "Ankle weakness", "Foot drop"],
    notes: "Neglected by most lifters. Strengthening this prevents shin splints and improves ankle mobility."
  },
  {
    id: "fibularis-longus",
    name: "Fibularis Longus",
    side: "Lower Leg (Side)",
    function: "Everts foot (turns sole out).",
    exercises: ["Banded eversion", "Single-leg balance", "Calf raises (toes pointed out)"],
    injuries: ["Ankle sprains (weakness increases risk)", "Tendonitis"],
    notes: "Critical for ankle stability. Often injured when rolling the ankle."
  }
];

export const posteriorMuscles = [
  {
    id: "occipitofrontalis",
    name: "Occipitofrontalis",
    side: "Head",
    function: "Raises eyebrows; wrinkles forehead skin.",
    exercises: ["Facial exercises", "Scalp massage (indirect)"],
    injuries: ["Tension headaches", "Forehead strain"],
    notes: "Often tight in people who furrow brows frequently. Relaxation techniques help."
  },
  {
    id: "trapezius-posterior",
    name: "Trapezius (Lower/Mid)",
    side: "Upper Back",
    function: "Retracts and depresses scapula; extends neck.",
    exercises: ["Face pulls", "Rows", "Reverse flys", "Deadlifts"],
    injuries: ["Mid-back strain", "Rhomboid strain", "Postural dysfunction"],
    notes: "Weak mid/lower traps lead to rounded shoulders. Strengthen with horizontal pulling."
  },
  {
    id: "infraspinatus",
    name: "Infraspinatus",
    side: "Shoulder (Rear)",
    function: "Laterally rotates arm; stabilizes shoulder joint.",
    exercises: ["External rotations", "Face pulls", "Band pull-aparts"],
    injuries: ["Rotator cuff tear", "Impingement", "Tendonitis"],
    notes: "One of the most commonly injured rotator cuff muscles. Critical for shoulder health."
  },
  {
    id: "teres-minor",
    name: "Teres Minor",
    side: "Shoulder (Rear)",
    function: "Laterally rotates and adducts arm.",
    exercises: ["External rotations", "Reverse flys", "Face pulls"],
    injuries: ["Rotator cuff strain", "Shoulder instability"],
    notes: "Works with infraspinatus. Often weak in overhead athletes."
  },
  {
    id: "teres-major",
    name: "Teres Major",
    side: "Back (Lower)",
    function: "Adducts and medially rotates arm.",
    exercises: ["Pull-ups", "Lat pulldowns", "Rows"],
    injuries: ["Strain from overhead movements", "Tendonitis"],
    notes: "Assists the lats. Often tight in people who sit at desks."
  },
  {
    id: "latissimus-dorsi",
    name: "Latissimus Dorsi",
    side: "Back (Wide)",
    function: "Adducts, extends, and medially rotates arm.",
    exercises: ["Pull-ups", "Lat pulldowns", "Bent-over rows", "Deadlifts"],
    injuries: ["Lat strain", "Lower back pain (if tight)", "Shoulder impingement"],
    notes: "The 'lats' - the largest muscle in the upper body. Creates the V-taper physique."
  },
  {
    id: "rhomboids",
    name: "Rhomboids (Major & Minor)",
    side: "Upper Back",
    function: "Retracts and rotates scapula.",
    exercises: ["Rows", "Face pulls", "Reverse flys", "Scapular retractions"],
    injuries: ["Rhomboid strain", "Scapular winging", "Postural dysfunction"],
    notes: "Weak rhomboids cause rounded shoulders. Strengthen with rowing movements."
  },
  {
    id: "erector-spinae",
    name: "Erector Spinae",
    side: "Lower Back",
    function: "Extends spine; maintains posture.",
    exercises: ["Deadlifts", "Back extensions", "Supermans", "Good mornings"],
    injuries: ["Lower back strain", "Disc herniation", "Muscle spasms"],
    notes: "Critical for spinal health. Weak erectors are the #1 cause of lower back pain."
  },
  {
    id: "gluteus-maximus",
    name: "Gluteus Maximus",
    side: "Buttocks",
    function: "Extends and laterally rotates hip.",
    exercises: ["Squats", "Deadlifts", "Hip thrusts", "Lunges"],
    injuries: ["Glute strain", "Piriformis syndrome", "Sciatica"],
    notes: "The largest muscle in the body. Weak glutes cause lower back and knee pain."
  },
  {
    id: "gluteus-medius",
    name: "Gluteus Medius",
    side: "Hip (Side)",
    function: "Abducts and stabilizes hip.",
    exercises: ["Clamshells", "Side-lying leg raises", "Copenhagen planks", "Lateral band walks"],
    injuries: ["Trochanteric bursitis", "IT band syndrome", "Hip instability"],
    notes: "Weak glute medius causes knee valgus (knees caving in) during squats."
  },
  {
    id: "biceps-femoris",
    name: "Biceps Femoris (Hamstring)",
    side: "Thigh (Back/Outer)",
    function: "Flexes knee; extends hip.",
    exercises: ["Romanian deadlifts", "Leg curls", "Nordic curls", "Glute-ham raises"],
    injuries: ["Hamstring strain", "Tendonitis", "Avulsion fracture"],
    notes: "The most commonly strained hamstring muscle. Eccentric training prevents injury."
  },
  {
    id: "semitendinosus",
    name: "Semitendinosus (Hamstring)",
    side: "Thigh (Back/Inner)",
    function: "Flexes knee; extends hip.",
    exercises: ["Romanian deadlifts", "Leg curls", "Nordic curls", "Good mornings"],
    injuries: ["Hamstring strain", "Knee pain", "Lower back compensation"],
    notes: "Works with biceps femoris. Often weak in runners, leading to strains."
  },
  {
    id: "semimembranosus",
    name: "Semimembranosus (Hamstring)",
    side: "Thigh (Back/Deep)",
    function: "Flexes knee; extends hip.",
    exercises: ["Romanian deadlifts", "Leg curls", "Single-leg RDLs"],
    injuries: ["Hamstring strain", "Pes anserine bursitis"],
    notes: "The deepest hamstring muscle. Often neglected in training."
  },
  {
    id: "gastrocnemius",
    name: "Gastrocnemius",
    side: "Calf (Superficial)",
    function: "Plantarflexes ankle; flexes knee.",
    exercises: ["Standing calf raises", "Jump rope", "Box jumps", "Sprints"],
    injuries: ["Calf strain", "Achilles tendonitis", "Shin splints"],
    notes: "The visible calf muscle. Needs heavy loading for growth."
  },
  {
    id: "soleus",
    name: "Soleus",
    side: "Calf (Deep)",
    function: "Plantarflexes ankle (knee bent).",
    exercises: ["Seated calf raises", "Farmer's walks", "Jump rope"],
    injuries: ["Soleus strain", "Achilles tendonitis", "Chronic ankle instability"],
    notes: "Works with gastrocnemius. Train with bent-knee calf raises for full development."
  }
];