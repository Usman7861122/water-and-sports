// "Surgery, nerves & balance" service pages. Intro text and FAQs come from the dev site; the "what we look at" cards and "your program" lists are written to match.
import type { ServicePage } from './services';
import { serviceImages } from './serviceImages';

export const SURGERY_PAGES: Record<string, ServicePage> = {
  'post-surgical-rehabilitation': {
    slug: 'post-surgical-rehabilitation',
    title: 'Post-Surgical Rehabilitation',
    metaDescription: 'Post-surgical rehabilitation in San Diego: guided recovery after joint replacement, ligament and tendon repair and other orthopedic surgery. Water & Sports Physical Therapy.',
    eyebrow: 'Safe, structured recovery',
    lead: 'Recover safely after surgery with personalized rehabilitation focused on restoring strength, mobility, and everyday function.',
    highlights: ['Follows your surgeon’s protocol', 'Swelling & scar care', 'Strength & mobility'],
    overview: {
      title: 'Expert Post-Surgical Rehabilitation for a Stronger Recovery',
      paras: [
        'Recovering from surgery requires more than rest—it requires a structured rehabilitation program that promotes healing while restoring movement and strength. Whether you’ve undergone orthopedic surgery, joint replacement, ligament reconstruction, tendon repair, or another musculoskeletal procedure, our personalized post-surgical rehabilitation programs are designed to help you recover safely and efficiently. We work closely with your surgeon’s recommendations to ensure your recovery stays on track.',
        'Our experienced physical therapists develop customized treatment plans based on your procedure, current condition, and recovery goals. Through therapeutic exercises, manual therapy, mobility training, flexibility exercises, and progressive strengthening, we help reduce pain, improve range of motion, minimize stiffness, and restore normal function throughout every stage of recovery.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Your surgery & protocol', text: 'The procedure, your surgeon’s limits and the healing timeline.' },
      { label: 'Pain & swelling', text: 'How the area is healing from day to day.' },
      { label: 'Range of motion', text: 'How much movement you have and how fast it returns.' },
      { label: 'Strength', text: 'Muscle loss after surgery and how to rebuild it safely.' },
      { label: 'Scar & stiffness', text: 'Tissue that can tighten and limit movement.' },
      { label: 'Function & goals', text: 'Walking, work, sport and the things you want back.' },
    ],
    guidance: {
      title: 'Personalized Care to Help You Return to Daily Life',
      paras: [
        'Every surgical recovery is unique, which is why we tailor your rehabilitation plan to your individual needs and progress. As healing occurs, your therapy advances with functional exercises, balance training, gait training, and activity-specific rehabilitation to safely rebuild strength, endurance, and confidence.',
        'Whether your goal is returning to work, sports, or everyday activities, our team is committed to helping you achieve the best possible outcome. We focus on improving long-term function, preventing complications, and supporting a smooth recovery so you can regain your independence and quality of life.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Range-of-motion exercise', 'Therapeutic strengthening', 'Manual therapy', 'Gait training', 'Balance exercises', 'Swelling management', 'Scar tissue mobilization'],
    },
    images: serviceImages('post-surgical-rehabilitation'),
    faqs: [
      { q: 'What is post-surgical rehabilitation?', a: ['Post-surgical rehabilitation is a specialized physical therapy program that helps patients recover after surgery by improving mobility, strength, flexibility, and overall function. It also helps reduce pain, swelling, stiffness, and scar tissue formation while supporting proper healing.', 'Your rehabilitation plan is customized based on the type of surgery you had, your current stage of healing, and your personal recovery goals to ensure safe and effective progress.'] },
      { q: 'What types of surgeries benefit from rehabilitation?', a: ['Post-surgical rehabilitation is commonly recommended after joint replacement, ACL reconstruction, rotator cuff repair, spinal surgery, tendon repair, fracture repair, meniscus surgery, and many other orthopedic procedures. It can also benefit patients recovering from certain neurological or general surgical procedures when movement has been affected.', 'Your physical therapist works closely with your surgeon’s protocol to guide your recovery and help restore normal function as safely as possible.'] },
      { q: 'How soon should I start physical therapy after surgery?', a: ['The timing depends on your surgical procedure and your surgeon’s recommendations. Some patients begin rehabilitation within a few days after surgery, while others may need to wait until the affected tissues have healed sufficiently before starting more active exercises.', 'Your physical therapist will follow your physician’s guidelines and gradually progress your treatment to protect healing tissues while restoring movement and strength.'] },
      { q: 'What treatments are included in post-surgical rehabilitation?', a: ['Treatment may include range-of-motion exercises, therapeutic strengthening, manual therapy, gait training, balance exercises, flexibility training, swelling management, scar tissue mobilization, and functional movement retraining. As you recover, your program progresses to include more advanced activities that prepare you for daily life or sports.', 'Each treatment plan is individualized to match your recovery stage and help you achieve the best possible outcome safely and efficiently.'] },
      { q: 'How long does post-surgical rehabilitation take?', a: ['Recovery time varies depending on the type of surgery, your overall health, and your rehabilitation goals. Some procedures require only a few weeks of therapy, while more complex surgeries may require several months of structured rehabilitation.', 'Your physical therapist will monitor your progress throughout recovery and adjust your treatment plan as needed, helping you regain strength, mobility, and confidence while reducing the risk of future complications or reinjury.'] },
    ],
  },

  'neuropathy-physical-therapy': {
    slug: 'neuropathy-physical-therapy',
    title: 'Neuropathy Physical Therapy',
    metaDescription: 'Neuropathy physical therapy in San Diego: relieve nerve pain, tingling and numbness and improve balance with non-invasive care. Water & Sports Physical Therapy.',
    eyebrow: 'Nerve pain, balance & function',
    lead: 'Relieve nerve pain, reduce tingling and numbness, and restore functional mobility with personalized physical therapy tailored to your active recovery goals.',
    highlights: ['Non-invasive care', 'Balance & fall prevention', 'Home self-management plan'],
    overview: {
      title: 'Targeted Neuropathy Physical Therapy for Lasting Symptom Relief',
      paras: [
        'Neuropathic pain—characterized by burning, tingling, numbness, and sudden shooting sensations—can severely impact your comfort, sleep, and overall quality of life. Whether caused by peripheral neuropathy, nerve compression, diabetes, or post-surgical changes, nerve damage interferes with how signals travel between your body and brain. This disruption often leads to muscle weakness, poor spatial awareness, and balance deficits that significantly increase your risk of dangerous falls.',
        'While medications are frequently used to manage symptoms, they can carry unwanted side effects and rarely address the root physical impairments. At Water & Sports Physical Therapy, we deliver non-invasive, evidence-based care focused on calming irritated nerves, improving circulation, and restoring proper body mechanics so you can move with freedom and confidence.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Nerve sensitivity', text: 'Where and when you feel burning, tingling or numbness.' },
      { label: 'Muscle strength', text: 'Weakness in the feet, legs, hands or arms.' },
      { label: 'Joint mobility', text: 'Stiffness that can add pressure to nerve pathways.' },
      { label: 'Balance', text: 'Control on stable and unstable surfaces.' },
      { label: 'Foot sensation & gait', text: 'How well you feel the ground and how you walk.' },
      { label: 'Daily triggers', text: 'Positions and activities that set off flare-ups.' },
    ],
    guidance: {
      title: 'Personalized Care to Rebuild Balance, Strength, and Function',
      paras: [
        'Managing nerve pain requires an active, individualized approach that prioritizes long-term function rather than temporary relief. Your recovery journey begins with a comprehensive, one-on-one evaluation to assess nerve sensitivity, muscle strength, joint mobility, and balance. Guided by our board-certified specialists, your personalized treatment plan may combine targeted manual therapy to reduce soft tissue pressure around nerves with gentle neurostimulation modalities like TENS to interrupt pain signals and promote endorphin release.',
        'To address balance issues safely, our specialized aquatic therapy pools offer a supportive, low-impact environment where you can work on spatial awareness, gait training, and core stabilization without fear of falling. Through one-on-one sessions, custom exercise programs, and empowering self-management education, we equip you with the tools to take control of your healing process.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Manual therapy', 'Neural mobilization', 'TENS', 'Balance retraining', 'Gait correction', 'Core stabilization', 'Aquatic therapy', 'Home program'],
    },
    images: serviceImages('neuropathy-physical-therapy'),
    faqs: [
      { q: 'How does physical therapy help treat nerve pain and neuropathy?', a: ['Physical therapy addresses neuropathy by targeting the physical mechanisms surrounding irritated nerves. Through targeted exercises to rebuild strength and flexibility, manual therapy techniques to relieve soft tissue compression, and neurostimulation modalities (such as TENS) to modulate pain signals, physical therapy helps improve localized circulation, calm overactive nerves, and restore sensory-motor control.'] },
      { q: 'Can physical therapy help improve balance and prevent falls from neuropathy?', a: ['Yes. Loss of sensation and proprioception (spatial awareness) in the feet and legs is a primary contributor to balance loss and falls in patients with peripheral neuropathy.', 'Your therapist will guide you through progressive balance retraining, gait correction, and core stabilization exercises. Practicing these movements safely—including using aquatic therapy pools for dynamic balance work—retrains your body’s balance pathways and significantly lowers fall risk.'] },
      { q: 'How does aquatic therapy benefit individuals with neuropathic pain?', a: ['Aquatic therapy is exceptionally beneficial for nerve pain because the warm water boosts peripheral circulation while the natural buoyancy removes weight-bearing stress from painful limbs. This allows you to perform mobility, balance, and strengthening exercises that might feel too painful or unsafe on land.', 'The gentle hydrostatic pressure of the water can also provide soothing sensory feedback to calm hypersensitive nerves.'] },
      { q: 'What manual therapy techniques are used for neuropathy?', a: ['Your therapist may use hands-on manual therapy, including soft tissue mobilization, gentle nerve gliding exercises (neural mobilization), and joint mobilization.', 'These techniques help reduce muscular tension, ease tight tissue around peripheral nerve pathways, reduce swelling, and restore natural biomechanics to relieve mechanical pressure on compromised nerves.'] },
      { q: 'What can I do at home to manage my neuropathy symptoms alongside physical therapy?', a: ['Empowerment through education is a core part of our care philosophy. Your physical therapist will teach you targeted home stretching and strengthening routines, safe foot care routines, ergonomic adjustments, and self-management strategies—such as desensitization techniques and daily balance maintenance—to help you control flare-ups and maintain long-term functional progress between appointments.'] },
    ],
  },

  'balance-training': {
    slug: 'balance-training',
    title: 'Balance Training',
    metaDescription: 'Balance training in San Diego: personalized physical therapy to improve stability, coordination and confidence and reduce falls. Water & Sports Physical Therapy.',
    eyebrow: 'Stability & fall prevention',
    lead: 'Improve stability, coordination, and confidence with personalized balance training designed to reduce falls and enhance everyday movement.',
    highlights: ['Reduces fall risk', 'Coordination & posture', 'Home exercise plan'],
    overview: {
      title: 'Enhance Stability and Confidence with Balance Training',
      paras: [
        'Good balance is essential for safe movement, whether you’re walking, exercising, recovering from an injury, or simply performing daily tasks. Balance problems can result from aging, neurological conditions, sports injuries, inner ear disorders, or muscle weakness. Our personalized balance training programs are designed to improve stability, coordination, and body awareness while reducing the risk of falls and future injuries.',
        'Our physical therapists perform a comprehensive assessment to identify the underlying causes of your balance difficulties. Using evidence-based exercises, strength training, coordination drills, and functional movement activities, we create a customized rehabilitation plan that helps improve posture, mobility, and overall physical confidence.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Standing balance', text: 'How steady you are with feet together, on one leg and with eyes closed.' },
      { label: 'Leg & core strength', text: 'The muscles that keep you upright and catch a stumble.' },
      { label: 'Walking & turning', text: 'Stability while stepping, turning and changing direction.' },
      { label: 'Reaction time', text: 'How quickly you respond to a trip or uneven ground.' },
      { label: 'Sensation & awareness', text: 'Your feel for where your feet and joints are.' },
      { label: 'Dizziness & fear of falling', text: 'Symptoms and worries that limit what you do.' },
    ],
    guidance: {
      title: 'Personalized Therapy to Improve Everyday Movement',
      paras: [
        'Every patient has unique balance challenges, which is why we tailor each treatment program to your specific needs, health condition, and activity level. As your strength and coordination improve, your therapy progresses with more advanced exercises that safely challenge your balance and functional abilities.',
        'Whether you’re recovering from surgery, managing a neurological condition, rehabilitating after an injury, or looking to stay active as you age, our goal is to help you move safely and confidently. We focus on building long-term stability so you can enjoy greater independence and a better quality of life.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Single-leg exercises', 'Gait training', 'Core strengthening', 'Stability exercises', 'Coordination drills', 'Resistance training', 'Flexibility work'],
    },
    images: serviceImages('balance-training'),
    faqs: [
      { q: 'What is balance training?', a: ['Balance training is a specialized form of physical therapy that helps improve stability, coordination, posture, and body control. It involves exercises that strengthen muscles, improve joint awareness, and enhance communication between your muscles, nerves, and brain.', 'These exercises help reduce the risk of falls, improve mobility, and increase confidence during everyday activities such as walking, climbing stairs, and changing directions.'] },
      { q: 'Who can benefit from balance training?', a: ['Balance training is beneficial for individuals of all ages experiencing dizziness, frequent falls, muscle weakness, neurological disorders, sports injuries, joint problems, or recovery after surgery. Older adults also benefit by improving stability and maintaining independence.', 'Athletes may use balance training to enhance performance, while individuals recovering from injuries can restore coordination and reduce the risk of reinjury through targeted rehabilitation exercises.'] },
      { q: 'What exercises are included in balance training?', a: ['Balance training may include single-leg standing exercises, gait training, core strengthening, stability exercises, coordination drills, resistance training, flexibility exercises, and functional movement activities. Your therapist selects exercises based on your abilities and rehabilitation goals.', 'As your balance improves, more advanced exercises may be introduced to challenge your stability safely and prepare you for daily activities, recreational sports, or work-related movements.'] },
      { q: 'How long does it take to improve balance?', a: ['The length of treatment depends on the cause of your balance problems, your overall health, and how consistently you participate in therapy. Many patients notice improvements within a few weeks, while more complex conditions may require ongoing rehabilitation.', 'Your therapist regularly monitors your progress and adjusts your program to ensure continued improvement while helping you safely reach your mobility and functional goals.'] },
      { q: 'Can balance training help prevent falls?', a: ['Yes. One of the primary goals of balance training is to reduce the risk of falls by improving strength, coordination, posture, and reaction time. Better balance helps you respond more effectively to uneven surfaces, sudden movements, and everyday physical challenges.', 'In addition to supervised therapy, you’ll receive guidance on home exercises and safe movement strategies that support long-term stability and help maintain your independence.'] },
    ],
  },

  'gait-training': {
    slug: 'gait-training',
    title: 'Gait Training',
    metaDescription: 'Gait training in San Diego: personalized physical therapy to improve walking, balance and coordination after injury, surgery or neurological changes. Water & Sports Physical Therapy.',
    eyebrow: 'Walking with confidence',
    lead: 'Improve walking ability, balance, coordination, and movement efficiency through personalized gait training designed to support safer, more confident mobility.',
    highlights: ['Walking pattern assessment', 'Balance & weight shifting', 'Safer everyday mobility'],
    overview: {
      title: 'Improve Walking Mechanics and Mobility',
      paras: [
        'Gait training is a specialized physical therapy approach designed to help individuals improve the way they walk and move. Changes in walking patterns can occur after an injury, surgery, neurological condition, balance problem, weakness, joint limitation, or prolonged period of reduced activity.',
        'Our gait training program begins with an assessment of your walking pattern, balance, strength, flexibility, coordination, and lower-extremity movement to identify areas affecting your mobility. Your therapist then develops an individualized program based on your specific needs and functional goals.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Walking pattern', text: 'Step length, speed, rhythm and how evenly you load each leg.' },
      { label: 'Weight shifting', text: 'How smoothly you move your weight from one foot to the other.' },
      { label: 'Balance', text: 'Stability while standing, stepping and turning.' },
      { label: 'Leg strength', text: 'Hip, knee and ankle strength for each phase of a step.' },
      { label: 'Flexibility & joint motion', text: 'Limits that change how you walk.' },
      { label: 'Mobility aids & safety', text: 'Whether a cane or walker is helping and used correctly.' },
    ],
    guidance: {
      title: 'Build Confidence and Improve Functional Movement',
      paras: [
        'Effective gait rehabilitation focuses on more than simply practicing walking. Your therapist considers how your feet, ankles, knees, hips, core, balance, and overall coordination work together during each step. Exercises can be used to improve lower-body strength, weight shifting, balance, stride control, and coordination while addressing movement limitations that may affect your walking pattern.',
        'As your abilities improve, therapy can progress from basic walking activities to more challenging tasks such as changing direction, navigating different surfaces, stepping over obstacles, or increasing walking distance. Through consistent practice and individualized progression, gait training can support greater independence and help you move more comfortably and confidently during daily activities.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Walking exercises', 'Balance training', 'Strengthening', 'Mobility work', 'Coordination exercises', 'Movement retraining', 'Mobility-aid guidance'],
    },
    images: serviceImages('gait-training'),
    faqs: [
      { q: 'Who can benefit from gait training?', a: ['Gait training may benefit individuals who have difficulty walking because of weakness, balance problems, injuries, surgery, joint limitations, neurological conditions, or changes in movement patterns. It can also be useful for people who have become less active and need help rebuilding walking ability.', 'Your physical therapist evaluates your individual walking pattern and functional limitations before developing an appropriate treatment plan. Exercises and activities are then selected based on your mobility needs, safety, and personal goals.'] },
      { q: 'What happens during gait training?', a: ['During gait training, your therapist evaluates how you stand, shift your weight, take steps, maintain balance, and coordinate movement. The assessment helps identify areas that may be affecting your walking efficiency or safety.', 'Treatment may include walking practice, strengthening exercises, balance activities, coordination training, mobility exercises, and movement retraining. Your therapist can gradually increase the difficulty of activities as your strength, balance, and walking control improve.'] },
      { q: 'Can gait training improve balance while walking?', a: ['Yes. Gait training often incorporates balance and coordination exercises because these abilities are important for controlled and confident walking. Your therapist may assess how well you maintain stability while standing, stepping, turning, and changing direction.', 'Treatment can include weight-shifting exercises, controlled stepping activities, balance training, and walking drills. These activities can be progressed according to your abilities to help improve control during everyday movement.'] },
      { q: 'Can gait training help after surgery or an injury?', a: ['Gait training can be an important part of rehabilitation after certain surgeries or injuries that affect walking ability. After an injury or procedure, changes in strength, mobility, balance, or movement habits may temporarily alter the way you walk.', 'Your therapist can develop a gradual program based on your recovery and functional abilities. Treatment may focus on restoring strength and mobility, improving walking mechanics, and progressively returning you to normal daily activities.'] },
      { q: 'How long does gait training take?', a: ['The length of gait training varies depending on the reason for your walking difficulty, your current strength and balance, your overall mobility, and your rehabilitation goals. Some people may require a short period of focused training, while others may need a longer program.', 'Your therapist will regularly evaluate your progress and adjust the difficulty of your exercises and walking activities. Consistent participation in therapy and recommended home exercises can help support continued improvements in walking ability and functional mobility.'] },
    ],
  },

  'vestibular-therapy': {
    slug: 'vestibular-therapy',
    title: 'Vestibular Therapy',
    metaDescription: 'Vestibular therapy in San Diego: treatment for dizziness, BPPV, vestibular neuritis, concussion-related dizziness and balance problems. Water & Sports Physical Therapy.',
    eyebrow: 'Dizziness & balance relief',
    lead: 'Improve balance, reduce dizziness, and restore confidence with personalized vestibular therapy designed for lasting relief.',
    highlights: ['BPPV & inner ear care', 'Gaze stabilization', 'Concussion-related dizziness'],
    overview: {
      title: 'Specialized Vestibular Therapy for Balance and Dizziness',
      paras: [
        'Dizziness, vertigo, and balance problems can interfere with everyday activities, making it difficult to walk, work, drive, or enjoy an active lifestyle. Vestibular therapy is a specialized form of physical therapy that helps treat disorders affecting the inner ear and balance system. Whether your symptoms are caused by vertigo, vestibular neuritis, labyrinthitis, concussion, or age-related balance changes, our personalized treatment programs are designed to reduce symptoms and improve stability.',
        'Our physical therapists perform a comprehensive evaluation to determine the cause of your dizziness or balance concerns. Using evidence-based techniques such as balance training, gaze stabilization exercises, canalith repositioning maneuvers, and vestibular rehabilitation exercises, we create an individualized treatment plan that helps restore normal function and improve your quality of life.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Dizziness triggers', text: 'The head movements and positions that bring on symptoms.' },
      { label: 'Eye movements', text: 'How your eyes track and stay steady when your head moves.' },
      { label: 'Balance', text: 'Stability with different surfaces, stances and eyes closed.' },
      { label: 'Walking pattern', text: 'How you walk, turn and change direction.' },
      { label: 'Coordination', text: 'Smooth, controlled movement of the head, eyes and body.' },
      { label: 'Daily impact', text: 'How symptoms affect work, driving and activity.' },
    ],
    guidance: {
      title: 'Personalized Care to Help You Move with Confidence',
      paras: [
        'Every patient’s symptoms and recovery needs are different, which is why we tailor each vestibular rehabilitation program to your specific diagnosis and goals. As your symptoms improve, your therapy progresses with more advanced balance, coordination, and functional movement exercises to help you safely return to your daily routine.',
        'Whether you’re recovering from an inner ear disorder, concussion, or experiencing chronic dizziness, our goal is to help you regain confidence in your movement and reduce the risk of falls. We focus on long-term symptom management, improved mobility, and helping you return to the activities you enjoy.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Canalith repositioning', 'Balance exercises', 'Gaze stabilization', 'Movement retraining', 'Walking activities', 'Head movement exercises'],
    },
    images: serviceImages('vestibular-therapy'),
    faqs: [
      { q: 'What is vestibular therapy?', a: ['Vestibular therapy is a specialized type of physical therapy that treats dizziness, vertigo, balance disorders, and problems related to the inner ear and vestibular system. It uses targeted exercises to help your brain adapt to balance changes and improve stability.', 'Treatment is customized to your symptoms and may include balance exercises, gaze stabilization, movement retraining, and repositioning techniques to reduce dizziness and improve overall function.'] },
      { q: 'What conditions can vestibular therapy treat?', a: ['Vestibular therapy can help treat benign paroxysmal positional vertigo (BPPV), vestibular neuritis, labyrinthitis, concussion-related dizziness, balance disorders, age-related balance decline, Ménière’s disease, and certain neurological conditions that affect balance.', 'Your physical therapist will perform a detailed evaluation to identify the underlying cause of your symptoms and recommend the most appropriate treatment plan.'] },
      { q: 'What happens during a vestibular therapy session?', a: ['Your therapist will begin by evaluating your balance, eye movements, walking pattern, coordination, and dizziness triggers. Based on your findings, treatment may include canalith repositioning maneuvers, balance exercises, gaze stabilization, walking activities, and head movement exercises.', 'As your symptoms improve, your rehabilitation program is gradually progressed to improve your ability to perform daily activities safely and comfortably.'] },
      { q: 'How long does vestibular therapy take?', a: ['The length of treatment depends on your diagnosis, symptom severity, and how your body responds to therapy. Some conditions, such as BPPV, may improve after one or two visits, while more complex vestibular disorders may require several weeks of rehabilitation.', 'Your therapist will monitor your progress and modify your treatment plan as your balance, mobility, and confidence continue to improve.'] },
      { q: 'Can vestibular therapy help prevent falls?', a: ['Yes. Vestibular therapy improves balance, coordination, strength, and body awareness, helping reduce the risk of falls associated with dizziness and instability. It also teaches safe movement strategies that make everyday activities easier and more secure.', 'By improving your balance and reducing dizziness, vestibular therapy helps you regain independence, increase confidence, and safely return to work, exercise, and other daily activities.'] },
    ],
  },

  'vertigo-physical-therapy': {
    slug: 'vertigo-physical-therapy',
    title: 'Vertigo Physical Therapy',
    metaDescription: 'Vertigo physical therapy in San Diego: Epley maneuver, gaze stabilization and balance retraining to relieve dizziness and spinning. Water & Sports Physical Therapy.',
    eyebrow: 'Relief from spinning & dizziness',
    lead: 'Restore balance, relieve dizziness, and regain your confidence with personalized vestibular rehabilitation tailored to your recovery goals.',
    highlights: ['Epley & repositioning', 'Habituation training', 'Fall prevention'],
    overview: {
      title: 'Targeted Vertigo Physical Therapy for Lasting Balance and Relief',
      paras: [
        'Vertigo is an unsettling condition that causes a false sense of spinning, severe dizziness, or lightheadedness, often triggered by simple head movements or positional changes. In many cases, these symptoms stem from an underlying issue in your inner ear, where sensors and tiny calcium crystals control your brain’s perception of gravity and motion. When these sensors are disrupted by pressure, inflammation, or displaced crystals, your brain struggles to process your surroundings, leading to balance loss, nausea, and an increased risk of dangerous falls.',
        'At Water & Sports Physical Therapy, we focus on identifying the root cause of your vestibular dysfunction rather than just managing symptoms. Combining advanced vestibular rehabilitation with our board-certified expertise and low-impact aquatic therapy options, our evidence-based treatment plans help reset your balance system and restore comfortable, steady movement.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Eye movements', text: 'Eye signs that point to the inner ear as the source.' },
      { label: 'Head position', text: 'Positions and turns that trigger spinning.' },
      { label: 'Steady-state balance', text: 'How stable you are standing and walking.' },
      { label: 'Nausea & lightheadedness', text: 'Symptoms that come with motion or position changes.' },
      { label: 'Fall risk', text: 'How dizziness changes your safety day to day.' },
      { label: 'Daily triggers', text: 'Rolling over, looking up, bending and more.' },
    ],
    guidance: {
      title: 'Personalized Vestibular Rehabilitation to Restore Control and Prevent Falls',
      paras: [
        'No two cases of vertigo are identical, which is why your recovery begins with a comprehensive, one-on-one evaluation to test your eye movements, head orientation, and steady-state balance. We believe recovery should be active, empowering you with the tools and guided movement techniques needed to take control of your healing process. Depending on your needs, your individualized care plan may include canalith repositioning maneuvers (such as the Epley maneuver), gaze stabilization exercises, habituation training, and targeted balance retraining.',
        'When appropriate, utilizing specialized aquatic therapy pools provides a unique, safe, low-impact environment to practice dynamic balance exercises with minimal fear of falling. Throughout your care, your dedicated physical therapist continuously measures your progress to ensure safe, steady improvement so you can return to daily activities with total confidence.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Epley maneuver', 'Gaze stabilization', 'Habituation training', 'Balance retraining', 'Aquatic therapy', 'Home exercises'],
    },
    images: serviceImages('vertigo-physical-therapy'),
    faqs: [
      { q: 'What causes vertigo, and how can physical therapy help?', a: ['Vertigo is most commonly caused by inner ear conditions such as Benign Paroxysmal Positional Vertigo (BPPV), vestibular neuritis, or labyrinthitis. These issues disrupt how inner ear fluid, sensors, and gravity-detecting crystals send motion signals to your brain.', 'Physical therapy—specifically vestibular rehabilitation—uses precise head and body movements to reposition dislodged crystals, recalibrate your vestibular system, and retrain your brain to process balance signals accurately without triggering dizziness.'] },
      { q: 'What treatments are included in physical therapy for vertigo?', a: ['Your physical therapist will design a custom treatment plan that may include canalith repositioning maneuvers (like the Epley maneuver) to clear displaced inner ear crystals, gaze stabilization exercises to keep your vision steady during head movements, habituation techniques to decrease sensitivity to motion, and functional balance training.', 'In our clinics, sessions are always one-on-one with your therapist and may incorporate aquatic therapy to safely work on stability in a low-impact water environment.'] },
      { q: 'How does aquatic therapy help with vertigo and balance retraining?', a: ['Aquatic therapy offers a unique, safe setting for balance and gait training. The buoyancy of water reduces gravity’s impact on your joints and eliminates the fear of falling, allowing you to perform dynamic balance, core stabilization, and head-turn exercises that might feel overwhelming or unsafe on land.', 'The gentle resistance and support of the water help rebuild body awareness and movement confidence faster.'] },
      { q: 'How quickly can I expect results from vertigo physical therapy?', a: ['Recovery timelines depend on the specific underlying cause and severity of your vertigo. For conditions like BPPV, patients often experience dramatic relief within just one to three sessions using targeted repositioning maneuvers.', 'For complex or chronic balance disorders, several weeks of consistent, active therapy and guided home exercises may be needed to achieve long-term stability and symptom resolution. Your therapist will track your objective progress at every session.'] },
      { q: 'When should vertigo symptoms be evaluated by a doctor immediately?', a: ['While vertigo is frequently treated successfully in physical therapy, certain high-risk symptoms require immediate medical attention.', 'You should seek emergency medical care if your vertigo or dizziness is accompanied by a severe, sudden headache, sudden changes in hearing, double or blurry vision, breathing difficulties, an irregular or rapid heartbeat, or weakness and numbness in your face or limbs.'] },
    ],
  },
};
