// "Joints & pain" service pages. Intro text and FAQs come from the dev site; the "what we look at" cards and "your program" lists are written to match.
import type { ServicePage } from './services';
import { serviceImages } from './serviceImages';

export const JOINTS_PAGES: Record<string, ServicePage> = {
  'shoulder-physical-therapy': {
    slug: 'shoulder-physical-therapy',
    title: 'Shoulder Physical Therapy',
    metaDescription: 'Shoulder physical therapy in San Diego: relieve pain from rotator cuff injuries, frozen shoulder, impingement and more. Water & Sports Physical Therapy.',
    eyebrow: 'Strength, mobility & function',
    lead: 'Restore shoulder strength, mobility, and function with personalized physical therapy designed to relieve pain and improve movement.',
    highlights: ['Rotator cuff & frozen shoulder', 'Hands-on manual therapy', 'Post-surgical recovery'],
    overview: {
      title: 'Comprehensive Shoulder Physical Therapy',
      paras: [
        'Shoulder pain can make everyday activities such as reaching overhead, lifting objects, getting dressed, or participating in sports difficult and uncomfortable. Whether your symptoms are caused by a rotator cuff injury, tendonitis, frozen shoulder, arthritis, instability, or a sports-related injury, our personalized shoulder physical therapy programs are designed to reduce pain, restore mobility, and improve overall shoulder function. We focus on treating the root cause of your condition to support lasting recovery.',
        'Our experienced physical therapists use evidence-based techniques, including therapeutic exercises, manual therapy, stretching, strengthening, posture correction, and movement retraining. Every treatment plan is tailored to your condition and recovery goals, helping you regain strength, improve flexibility, and return to your daily activities with greater confidence.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Range of motion', text: 'How far your shoulder moves forward, out to the side and overhead.' },
      { label: 'Rotator cuff strength', text: 'The small muscles that hold and steady the joint.' },
      { label: 'Shoulder blade control', text: 'How your shoulder blade moves and supports your arm.' },
      { label: 'Posture', text: 'Neck, upper back and shoulder position that load the joint.' },
      { label: 'Joint stability', text: 'Whether the shoulder feels loose, tight or unsteady.' },
      { label: 'Daily movement', text: 'The reaching, lifting and sports moves that cause pain.' },
    ],
    guidance: {
      title: 'Personalized Rehabilitation for Lasting Shoulder Health',
      paras: [
        'No two shoulder injuries are the same, which is why we create individualized rehabilitation programs based on your diagnosis, activity level, and functional goals. As your recovery progresses, your therapy advances with targeted strengthening exercises, stability training, and functional movement techniques that safely restore shoulder performance while reducing the risk of future injuries.',
        'Whether you’re recovering from surgery, managing chronic shoulder pain, or returning to work or sports after an injury, our goal is to help you move comfortably and confidently. Through ongoing education, guided rehabilitation, and personalized care, we support long-term shoulder health and improved quality of life.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Therapeutic exercise', 'Manual therapy', 'Stretching', 'Strengthening', 'Posture correction', 'Joint mobilization', 'Movement retraining'],
    },
    images: serviceImages('shoulder-physical-therapy'),
    faqs: [
      { q: 'What conditions can shoulder physical therapy treat?', a: ['Shoulder physical therapy can help treat rotator cuff injuries, shoulder impingement, tendonitis, bursitis, frozen shoulder, arthritis, shoulder instability, labral injuries, muscle strains, and post-surgical conditions. A comprehensive evaluation helps identify the cause of your symptoms and guides your treatment plan.', 'Based on your condition, your therapist develops a personalized rehabilitation program to reduce pain, improve mobility, strengthen supporting muscles, and restore normal shoulder function.'] },
      { q: 'What treatments are included in shoulder physical therapy?', a: ['Treatment may include therapeutic exercises, manual therapy, stretching, strengthening, posture correction, range-of-motion exercises, joint mobilization, and functional movement training. Depending on your condition, additional techniques may be incorporated to improve recovery and relieve discomfort.', 'Each session is designed to improve shoulder stability, increase flexibility, reduce pain, and help you safely return to your normal activities, work, or sports.'] },
      { q: 'How long does shoulder rehabilitation take?', a: ['Recovery time depends on the type and severity of your condition, your overall health, and your commitment to rehabilitation. Mild shoulder injuries may improve within a few weeks, while more complex injuries or post-surgical recovery may require several months of physical therapy.', 'Your physical therapist will regularly monitor your progress and adjust your treatment plan to ensure continued improvement and the best possible outcome.'] },
      { q: 'Can physical therapy help me avoid shoulder surgery?', a: ['In many cases, yes. Physical therapy can effectively manage conditions such as tendonitis, shoulder impingement, and certain rotator cuff injuries by improving strength, flexibility, posture, and movement mechanics. Conservative treatment often helps reduce pain and restore function without surgery.', 'If surgery is necessary, preoperative and postoperative physical therapy can improve strength, support healing, and enhance your overall recovery.'] },
      { q: 'Can physical therapy prevent future shoulder injuries?', a: ['Yes. Physical therapy helps improve shoulder strength, joint stability, posture, flexibility, and movement patterns, reducing stress on the shoulder during everyday activities and sports. Addressing muscle imbalances and improper mechanics can significantly lower the risk of recurring injuries.', 'Your therapist will also provide personalized home exercises, ergonomic recommendations, and injury prevention strategies to help you maintain healthy shoulder function and stay active for years to come.'] },
    ],
  },

  'elbow-pain': {
    slug: 'elbow-pain',
    title: 'Elbow Pain',
    metaDescription: 'Elbow pain treatment in San Diego: physical therapy for tennis elbow, overuse and grip problems that restores strength and arm function. Water & Sports Physical Therapy.',
    eyebrow: 'Arm strength & function',
    lead: 'Reduce elbow pain, restore strength and mobility, and improve arm function through personalized physical therapy tailored to your needs.',
    highlights: ['Whole-arm evaluation', 'Grip & forearm strength', 'Home exercise program'],
    overview: {
      title: 'Understanding and Treating Elbow Pain',
      paras: [
        'Elbow pain can make everyday activities such as lifting, reaching, gripping, typing, exercising, and participating in sports more difficult. It may develop from repetitive movements, overuse, sports injuries, falls, muscle weakness, joint stiffness, or irritation affecting the tissues surrounding the elbow.',
        'Our physical therapy approach begins with a comprehensive evaluation of your elbow, wrist, shoulder, and overall arm function to identify movement limitations and factors contributing to your symptoms. Your therapist evaluates strength, flexibility, mobility, coordination, and functional movement before developing an individualized treatment plan.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Elbow motion', text: 'How fully you can bend, straighten and rotate your forearm.' },
      { label: 'Grip & forearm strength', text: 'The muscles you use to hold, lift and carry.' },
      { label: 'Wrist & shoulder', text: 'Nearby joints that can add stress to the elbow.' },
      { label: 'Flexibility', text: 'Tight muscles and tendons around the arm.' },
      { label: 'Coordination', text: 'How smoothly your arm works as one unit.' },
      { label: 'Repetitive tasks', text: 'Work, sport and hobby habits that keep symptoms going.' },
    ],
    guidance: {
      title: 'Restore Elbow Strength and Everyday Function',
      paras: [
        'Successful elbow rehabilitation focuses on restoring comfortable movement while improving the strength and stability needed for daily activities. Because the elbow works closely with the wrist, hand, shoulder, and forearm, your therapist may assess the entire upper extremity to understand how different areas influence your symptoms.',
        'Whether your goal is to return to work, exercise, sports, or everyday tasks, your rehabilitation program can be progressed according to your abilities and functional goals. Consistent therapy and a personalized home exercise program can help support long-term improvements in strength, mobility, and arm function.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Therapeutic exercise', 'Stretching', 'Strengthening', 'Manual therapy', 'Mobility training', 'Activity modification', 'Home exercises'],
    },
    images: serviceImages('elbow-pain'),
    faqs: [
      { q: 'How can physical therapy help with elbow pain?', a: ['Physical therapy can help identify strength deficits, mobility restrictions, movement problems, and activity-related factors that may contribute to elbow pain. Your therapist evaluates your elbow along with the surrounding wrist, forearm, and shoulder to understand your overall arm function.', 'Treatment may include strengthening exercises, stretching, mobility training, manual therapy, and movement retraining. Your therapist can also recommend activity modifications and exercises designed to help you gradually return to your normal routine.'] },
      { q: 'What can cause elbow pain?', a: ['Elbow pain can result from overuse, repetitive movements, sports activities, injuries, falls, muscle weakness, joint stiffness, or irritation of tissues around the elbow. Activities involving frequent gripping, lifting, throwing, or repetitive arm movements may place additional demands on the area.', 'A physical therapy evaluation can help identify functional and movement factors associated with your symptoms. Your therapist can then develop an individualized rehabilitation program based on your condition, activity level, and goals.'] },
      { q: 'Can physical therapy help with tennis elbow?', a: ['Physical therapy may help improve function for people experiencing symptoms commonly associated with tennis elbow. Treatment typically focuses on improving the strength and flexibility of the forearm and supporting muscles while addressing movement and activity factors that may contribute to discomfort.', 'Your therapist may use progressive strengthening, stretching, manual therapy, and activity modification as part of your rehabilitation. Exercises can be gradually progressed as your tolerance and arm function improve.'] },
      { q: 'Can elbow pain affect grip strength?', a: ['Elbow discomfort can sometimes affect how comfortably you grip, lift, or carry objects, particularly when these activities place demands on the forearm and elbow. Weakness or discomfort may make certain daily or work-related activities more challenging.', 'Physical therapy can include exercises targeting the forearm, wrist, hand, and elbow to improve strength and coordination. Your therapist can gradually progress these exercises according to your symptoms and functional goals.'] },
      { q: 'How long does elbow rehabilitation take?', a: ['The length of rehabilitation depends on the cause of your elbow pain, the severity of your symptoms, your activity level, and how your body responds to treatment. Some people may improve with a shorter course of therapy, while more involved conditions may require additional rehabilitation.', 'Your therapist will monitor your progress and adjust your treatment as your strength, mobility, and function improve. Following your prescribed exercises and gradually returning to activities can help support steady and safe progress.'] },
    ],
  },

  'wrist-hand-pain': {
    slug: 'wrist-hand-pain',
    title: 'Wrist/Hand Pain',
    metaDescription: 'Wrist and hand pain treatment in San Diego: physical therapy to restore grip strength, mobility and comfortable daily function. Water & Sports Physical Therapy.',
    eyebrow: 'Grip, strength & mobility',
    lead: 'Relieve wrist and hand pain, restore strength and mobility, and improve your ability to perform daily activities comfortably and confidently.',
    highlights: ['Grip strength training', 'Repetitive-strain care', 'Everyday hand function'],
    overview: {
      title: 'Understanding and Treating Wrist and Hand Pain',
      paras: [
        'Wrist and hand pain can interfere with many everyday activities, including typing, writing, gripping objects, lifting, exercising, and performing work-related tasks. Symptoms may develop from repetitive use, injuries, joint stiffness, muscle weakness, nerve irritation, or other conditions affecting the wrist, hand, and fingers.',
        'Our physical therapy approach begins with a detailed evaluation of your strength, flexibility, mobility, coordination, grip function, and movement patterns to better understand the factors contributing to your symptoms. Your therapist then develops a personalized treatment program based on your condition and functional goals.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Grip strength', text: 'How strongly and comfortably you can hold and squeeze.' },
      { label: 'Wrist & finger motion', text: 'Range of movement in every joint of the hand.' },
      { label: 'Coordination', text: 'Fine control for writing, typing and using tools.' },
      { label: 'Forearm strength', text: 'The muscles that power your wrist and fingers.' },
      { label: 'Nerve symptoms', text: 'Tingling or numbness linked to certain positions.' },
      { label: 'Work & hobby habits', text: 'Repeated movements that keep symptoms going.' },
    ],
    guidance: {
      title: 'Restore Strength, Mobility, and Hand Function',
      paras: [
        'Effective rehabilitation for wrist and hand pain focuses on restoring comfortable movement while addressing the factors that may contribute to ongoing symptoms. Depending on your individual needs, therapy may target the muscles and joints of the fingers, hand, wrist, forearm, and surrounding areas.',
        'As your symptoms and function improve, your program can progress toward work, sports, hobbies, and other activities that require reliable hand and wrist movement. The goal is to help you regain confidence and use your hand and wrist more comfortably in daily life.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Therapeutic exercise', 'Mobility work', 'Stretching', 'Strengthening', 'Manual therapy', 'Coordination exercises', 'Activity modification'],
    },
    images: serviceImages('wrist-hand-pain'),
    faqs: [
      { q: 'How can physical therapy help with wrist and hand pain?', a: ['Physical therapy can evaluate the strength, mobility, flexibility, coordination, and movement patterns of your wrist, hand, fingers, and forearm. This assessment helps your therapist identify functional limitations that may be contributing to your symptoms.', 'Treatment may include strengthening exercises, stretching, mobility work, manual therapy, grip exercises, and coordination training. Your therapist can also provide guidance on modifying activities that place repeated stress on your wrist or hand.'] },
      { q: 'What can cause wrist and hand pain?', a: ['Wrist and hand pain can develop for many reasons, including repetitive activities, sports injuries, falls, overuse, joint stiffness, muscle weakness, and irritation affecting surrounding tissues or nerves. Symptoms can also vary depending on the activity that causes or aggravates the discomfort.', 'A physical therapy evaluation can help identify movement and functional factors associated with your symptoms. Based on your assessment, your therapist can create a rehabilitation plan focused on improving mobility, strength, coordination, and everyday hand function.'] },
      { q: 'Can physical therapy improve grip strength?', a: ['Yes. Physical therapy can include exercises specifically designed to improve grip strength and the supporting muscles of the hand, wrist, and forearm. Your therapist can assess your current grip function and select exercises appropriate for your condition and goals.', 'Strengthening is generally progressed gradually as your tolerance improves. Improving grip strength and coordination can make activities such as carrying, holding, opening, writing, and using tools more manageable.'] },
      { q: 'Can physical therapy help with wrist pain from repetitive activities?', a: ['Physical therapy may help people experiencing wrist discomfort associated with repetitive activities by addressing strength, mobility, movement patterns, and activity habits. Repeated typing, writing, gripping, or other hand-intensive activities can place ongoing demands on the wrist and surrounding structures.', 'Your therapist can recommend exercises, movement strategies, activity modifications, and appropriate breaks based on your needs. These approaches can help improve movement efficiency and support a gradual return to comfortable daily activities.'] },
      { q: 'How long does wrist or hand rehabilitation take?', a: ['Recovery time varies depending on the cause and severity of your symptoms, your current level of function, and how your body responds to treatment. Some problems may improve with a shorter rehabilitation program, while more complex conditions may require longer-term therapy.', 'Your therapist will monitor your progress and adjust your treatment as your mobility, strength, coordination, and function improve. Following your recommended exercises and gradually returning to activities can support steady progress throughout rehabilitation.'] },
    ],
  },

  'hip-pain-physical-therapy': {
    slug: 'hip-pain-physical-therapy',
    title: 'Hip Pain Physical Therapy',
    metaDescription: 'Hip pain physical therapy in San Diego: treatment for arthritis, labral tears, bursitis, FAI and hip replacement recovery. Water & Sports Physical Therapy.',
    eyebrow: 'Mobility & strength',
    lead: 'Relieve joint pain, restore hip mobility, and rebuild strength with personalized physical therapy tailored to your active lifestyle and recovery goals.',
    highlights: ['Arthritis, labral tears & FAI', 'Hip replacement recovery', 'One-on-one care'],
    overview: {
      title: 'Comprehensive Hip Pain Physical Therapy for Long-Term Mobility',
      paras: [
        'The hip is the largest ball-and-socket joint in your body, designed to support heavy loads and withstand constant motion. Over time, protective cartilage can wear down, muscles and tendons can become overused, and conditions like osteoarthritis, labral tears, bursitis, or femoroacetabular impingement (FAI) can significantly restrict your movement. When left unaddressed, chronic hip pain often leads to a limp, creating mechanical imbalances that place added stress on your lower back, knees, and ankles.',
        'At Water & Sports Physical Therapy, we focus on identifying the underlying joint or tissue dysfunction rather than just masking discomfort. By combining evidence-based physical therapy with targeted manual care and active movement retraining, we help reduce inflammation, correct joint alignment, and restore fluid mobility so you can move without compensation.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Hip range of motion', text: 'How freely the joint bends, rotates and moves out to the side.' },
      { label: 'Muscle strength', text: 'Glute, hip flexor and core strength that support the joint.' },
      { label: 'Gait mechanics', text: 'How you walk, and whether a limp is loading other joints.' },
      { label: 'Joint alignment', text: 'How the hip, pelvis and spine work together.' },
      { label: 'Balance', text: 'Control on one leg, which hip pain often weakens.' },
      { label: 'Daily function', text: 'Stairs, getting up, sitting and walking comfort.' },
    ],
    guidance: {
      title: 'Personalized Care from Conservative Treatment to Post-Surgical Rehabilitation',
      paras: [
        'Because no two hip conditions are alike, your treatment begins with a thorough one-on-one functional evaluation to analyze your joint range of motion, muscle strength, and gait mechanics. We believe recovery should be an active process that equips you with long-term movement strategies. Whether you are managing chronic arthritis, recovering from flexor tendinitis, or rehabilitating after a minimally invasive hip arthroscopy or direct superior total hip replacement, your dedicated therapist will craft an individualized program just for you.',
        'Utilizing advanced land-based exercises alongside our specialized aquatic therapy pools, we leverage the buoyancy of water to reduce joint impact and allow pain-free strengthening early in your recovery. Every step of your care is guided one-on-one by board-certified specialists committed to helping you return to your favorite activities safely and confidently.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Therapeutic exercise', 'Manual therapy', 'Hip & core strengthening', 'Flexibility training', 'Gait analysis', 'Aquatic therapy', 'Movement retraining'],
    },
    images: serviceImages('hip-pain-physical-therapy'),
    faqs: [
      { q: 'What conditions can physical therapy for hip pain help treat?', a: ['Physical therapy can treat a broad range of hip issues, including hip osteoarthritis, bursitis, labral tears, femoroacetabular impingement (FAI), flexor tendinitis, snapping hip syndrome, and hip dysplasia. It is also an essential component of rehabilitation following hip arthroscopy, joint reconstruction, or total hip replacement surgery.', 'Your therapist evaluates your hip joint, surrounding muscles, and movement mechanics to build a targeted treatment plan.'] },
      { q: 'How does aquatic therapy help with hip pain and rehabilitation?', a: ['Aquatic therapy is uniquely beneficial for hip conditions because water’s natural buoyancy reduces gravitational load and weight-bearing pressure on the ball-and-socket joint. This allows you to perform essential range-of-motion exercises, gait retraining, and strengthening movements with significantly less pain than on land.', 'The water resistance also helps build surrounding gluteal and core support safely during early or painful stages of recovery.'] },
      { q: 'Can physical therapy help me avoid hip surgery?', a: ['In many cases, yes. Conservative physical therapy—focused on strengthening the supporting gluteal, hip flexor, and core muscles, improving joint flexibility, and correcting movement mechanics—can dramatically reduce pain and delay or prevent the need for surgical intervention.', 'If surgery ultimately becomes necessary, pre-operative physical therapy (“pre-hab”) helps ensure a faster, stronger recovery post-procedure.'] },
      { q: 'What treatments are included in a hip physical therapy program?', a: ['Your custom treatment plan may include therapeutic exercise, joint and soft-tissue manual therapy, progressive hip and core strengthening, targeted flexibility training, gait analysis, and movement retraining.', 'Depending on your needs, your session may incorporate low-impact exercises in our aquatic therapy pools or specialized sports rehabilitation techniques to help you safely return to high-impact activities, running, or athletics.'] },
      { q: 'What should I expect during physical therapy after a total hip replacement?', a: ['Following a total hip replacement, physical therapy begins by restoring early range of motion, managing post-surgical swelling, and safely training you on weight-bearing and walking mechanics.', 'As healing progresses, your board-certified specialist will focus on progressive strength building, hip stability, balance exercises, and functional training to help you safely return to daily life, recreation, and low-impact sports with full confidence in your new joint.'] },
    ],
  },

  'ankle-pain-physical-therapy': {
    slug: 'ankle-pain-physical-therapy',
    title: 'Ankle Pain Physical Therapy',
    metaDescription: 'Ankle pain physical therapy in San Diego: treatment for sprains, Achilles tendonitis, instability and post-surgical recovery. Water & Sports Physical Therapy.',
    eyebrow: 'Stability & re-injury prevention',
    lead: 'Restore mobility, build joint stability, and step back into your active lifestyle with personalized ankle rehabilitation tailored to your recovery goals.',
    highlights: ['Sprains & Achilles care', 'Balance & stability training', 'Prevents re-injury'],
    overview: {
      title: 'Targeted Ankle Rehabilitation to Relieve Pain and Rebuild Stability',
      paras: [
        'Your ankle is a complex structure of bones, ligaments, and tendons that supports your entire body weight with every step you take. An injury or chronic condition—such as an ankle sprain, Achilles tendonitis, chronic ankle instability, stress fractures, or plantar fasciitis—can make simple daily tasks like walking through the grocery store feel overwhelming. Without proper care and movement retraining, an initial ankle injury can increase your risk of re-injury by up to 70%, leading to long-term joint weakness and altered gait mechanics that strain your knees, hips, and spine.',
        'At Water & Sports Physical Therapy, we address the root cause of your pain rather than relying on temporary fixes. By combining specialized sports rehabilitation techniques with targeted manual therapy, we help decrease swelling, restore full range of motion, and rebuild the foundational strength needed to keep you moving safely.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Joint mobility', text: 'How far the ankle bends, points and tilts side to side.' },
      { label: 'Ligament stability', text: 'Whether the ankle feels loose or gives way.' },
      { label: 'Tendon function', text: 'The Achilles and the tendons on the outside of the ankle.' },
      { label: 'Balance', text: 'Your sense of foot position, often weakened after a sprain.' },
      { label: 'Calf & foot strength', text: 'The muscles that push off, steady and absorb impact.' },
      { label: 'Gait & landing', text: 'How you walk, run and land from a jump.' },
    ],
    guidance: {
      title: 'Evidence-Based Care for Active Recovery and Re-Injury Prevention',
      paras: [
        'Effective ankle rehabilitation requires an active, progressive approach designed to safely challenge and strengthen the joint without causing strain. Your recovery begins with a comprehensive, one-on-one evaluation to assess joint mobility, tendon function, and balance mechanics. Whether you are recovering from a recent sprain, managing chronic tendonitis, or rehabilitating after an Achilles tendon repair or bunionectomy, your board-certified therapist will guide you through an individualized treatment program. Utilizing gentle non-weight-bearing exercises, functional strengthening, and advanced plyometrics, we ensure your ankles can handle multi-directional movement and impact.',
        'Additionally, our specialized aquatic therapy pools provide a low-impact environment to begin early gait training and weight-bearing exercises with minimal joint stress. Through one-on-one care and ongoing objective monitoring, we empower you to return to walking, running, and athletics with total confidence.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Mobility exercises', 'Balance training', 'Strengthening', 'Manual therapy', 'Gait correction', 'Plyometrics', 'Aquatic therapy'],
    },
    images: serviceImages('ankle-pain-physical-therapy'),
    faqs: [
      { q: 'What ankle injuries and conditions can physical therapy treat?', a: ['Physical therapy can treat a wide variety of acute injuries and chronic conditions, including ankle sprains and strains, Achilles tendonitis, chronic ankle instability, stress fractures, shin splints, tarsal tunnel syndrome, peroneal tendonitis, and arthritis. It is also critical for post-surgical rehabilitation following Achilles tendon repairs, ankle fusions, or foot bunionectomies.', 'Your physical therapist customizes treatment based on the exact structures involved.'] },
      { q: 'How does physical therapy help prevent recurring ankle sprains?', a: ['An initial ankle sprain damages joint ligaments and weakens proprioception—your brain’s ability to sense foot positioning and balance. Physical therapy retrains these sensorimotor pathways through progressive balance exercises, ankle stability drills, dynamic strengthening, and plyometric movement training.', 'Rebuilding local muscular strength and neuromuscular control dramatically reduces your risk of future twists and recurring sprains.'] },
      { q: 'How does aquatic therapy benefit ankle pain and recovery?', a: ['Aquatic therapy offers an ideal environment for early ankle rehabilitation because water buoyancy reduces the impact and effective weight placed on the joint. This allows you to practice full range of motion, early weight-bearing, and normal gait patterns with significantly less pain and swelling than on land.', 'The gentle resistance of the water also builds supporting foot and calf strength safely before transitioning to full land-based sports drills.'] },
      { q: 'What exercises are typically included in ankle physical therapy?', a: ['Ankle physical therapy begins with controlled, non-weight-bearing mobility exercises (dorsiflexion, plantar flexion, inversion, and eversion) to safely restore flexibility and movement.', 'As healing progresses, your program advances to weight-bearing calf and tendon strengthening, balance and balance-board training, gait correction, and sport-specific plyometrics designed to prepare your ankle for sudden stops, turns, and running.'] },
      { q: 'When should I see a physical therapist or medical specialist for ankle pain?', a: ['You should schedule an evaluation if your ankle pain persists for more than a few days, causes you to limp, makes putting weight on your foot difficult, or limits your ability to perform everyday activities.', 'Immediate medical attention should be sought if you experience an absolute inability to bear weight, significant severe swelling, or signs of infection such as intense redness, warmth, and localized tenderness around the joint.'] },
    ],
  },

  'foot-pain': {
    slug: 'foot-pain',
    title: 'Foot Pain Treatment',
    metaDescription: 'Foot pain treatment in San Diego: physical therapy for heel and arch pain, plus semi-custom orthotics heat-molded in your own shoes. Water & Sports Physical Therapy.',
    eyebrow: 'Comfortable, confident steps',
    lead: 'Relieve foot pain and restore comfortable movement through personalized physical therapy focused on strength, mobility, balance, and proper mechanics.',
    highlights: ['Heel & arch pain', 'Gait & balance training', 'Semi-custom orthotics'],
    overview: {
      title: 'Understanding and Treating Foot Pain',
      paras: [
        'Foot pain can make everyday activities such as walking, standing, exercising, and climbing stairs uncomfortable or difficult. It may develop from overuse, injuries, muscle weakness, limited mobility, improper movement patterns, or conditions affecting the feet and lower extremities.',
        'Our physical therapy approach begins with a comprehensive evaluation of your foot, ankle, lower leg, strength, flexibility, balance, and walking mechanics to identify factors contributing to your symptoms. Based on your assessment, your therapist creates an individualized treatment plan focused on improving function and reducing unnecessary stress on the affected area.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Foot & ankle motion', text: 'How well the joints of your foot and ankle move.' },
      { label: 'Arch & heel mechanics', text: 'How your foot absorbs and spreads load as you step.' },
      { label: 'Strength', text: 'The small foot muscles and the calf that support you.' },
      { label: 'Balance', text: 'Control while standing, turning and walking.' },
      { label: 'Walking pattern', text: 'Gait habits that raise pressure in one area.' },
      { label: 'Footwear', text: 'How your shoes affect support, comfort and shock absorption.' },
    ],
    guidance: {
      title: 'Restore Foot Function and Prevent Future Problems',
      paras: [
        'Effective treatment for foot pain involves more than simply addressing the painful area. The condition of your ankles, knees, hips, and overall movement mechanics can influence how pressure is distributed through your feet during walking and other activities. Your therapist may evaluate your gait, footwear habits, balance, strength, and lower-body movement to develop a comprehensive rehabilitation program.',
        'Exercises can help improve the strength and stability of the muscles supporting your feet and ankles, while mobility work can address restrictions that may affect normal movement. As your symptoms improve, your therapy program can gradually progress toward functional activities, exercise, sports, or other goals that are important to you. Education about movement techniques and activity progression can also help reduce unnecessary strain and support long-term foot health.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Therapeutic exercise', 'Stretching', 'Mobility training', 'Balance exercises', 'Manual therapy', 'Gait training', 'Movement education'],
    },
    extra: {
      title: 'Orthotics Designed for You — and Your Shoes',
      paras: [
        'Every shoe is built differently and can affect the way your foot functions. That’s why we don’t mold your orthotics separately and simply place them into your shoes afterward.',
        'Our semi-custom orthotics are heat-molded directly in your shoes while your foot is positioned and weight-bearing, allowing your physical therapist to account for both your foot mechanics and the characteristics of the shoe you’ll actually be wearing.',
        'The result is an orthotic designed to provide the right combination of support, comfort, and shock absorption for you and your footwear.',
      ],
    },
    images: serviceImages('foot-pain'),
    faqs: [
      { q: 'How can physical therapy help with foot pain?', a: ['Physical therapy can identify movement limitations, weakness, balance problems, mobility restrictions, and other factors that may contribute to foot pain. Your therapist evaluates your foot and lower extremity to understand how your body moves during everyday activities.', 'Treatment may include strengthening exercises, stretching, mobility work, balance training, manual therapy, and gait training. Your program is adjusted according to your symptoms and functional goals to help improve movement and overall foot function.'] },
      { q: 'What can cause foot pain?', a: ['Foot pain can have many possible causes, including overuse, sports injuries, muscle weakness, limited joint mobility, changes in walking mechanics, and repetitive stress. Pain may also be associated with conditions affecting the muscles, tendons, joints, or other structures of the foot and ankle.', 'A physical therapy evaluation can help identify movement and functional factors that may be contributing to your symptoms. Your therapist can then develop an appropriate rehabilitation plan based on your evaluation and individual needs.'] },
      { q: 'Can physical therapy help with heel and arch pain?', a: ['Physical therapy may help improve function for people experiencing heel or arch discomfort by addressing contributing strength, flexibility, mobility, and movement issues. Your therapist can evaluate how your foot and lower extremity work together during standing and walking.', 'Treatment may include targeted strengthening, stretching, mobility exercises, balance training, manual therapy, and gait-focused exercises. The goal is to improve how your foot handles everyday movement while gradually returning you to activities that are important to you.'] },
      { q: 'How long does it take for foot pain to improve?', a: ['Recovery time varies depending on the underlying cause of your foot pain, how long you have experienced symptoms, your activity level, and how your body responds to treatment. Some conditions may improve relatively quickly, while others require a longer rehabilitation program.', 'Your therapist can monitor your progress throughout treatment and modify your exercises as your strength, mobility, and function improve. Following your recommended home program and gradually increasing activity can help support your rehabilitation.'] },
      { q: 'Can physical therapy help prevent foot pain from returning?', a: ['Physical therapy can help address factors that may contribute to recurring foot problems, such as weakness, limited mobility, poor balance, or inefficient movement patterns. Improving these areas can help your body handle everyday activities and exercise more effectively.', 'Your therapist may also provide guidance on movement techniques, activity progression, footwear considerations, and exercises that support ongoing strength and mobility. Continuing appropriate exercises after completing therapy can help maintain the improvements you have achieved.'] },
    ],
  },

  'acl-rehabilitation': {
    slug: 'acl-rehabilitation',
    title: 'ACL Rehabilitation',
    metaDescription: 'ACL rehabilitation in San Diego: structured recovery after ACL injury or reconstruction, from early motion to return-to-sport testing. Water & Sports Physical Therapy.',
    eyebrow: 'Knee strength & stability',
    lead: 'Personalized ACL rehabilitation programs focused on restoring knee strength, stability, mobility, and confidence for a safe return to daily activities and sports.',
    highlights: ['Surgical & non-surgical', 'Phase-by-phase plan', 'Return-to-sport testing'],
    overview: {
      title: 'Comprehensive ACL Rehabilitation for Lasting Recovery',
      paras: [
        'An anterior cruciate ligament (ACL) injury can significantly impact your mobility, strength, and confidence. Whether you’ve undergone ACL reconstruction surgery or are recovering through non-surgical treatment, our personalized rehabilitation programs are designed to help you regain full knee function safely and effectively. Every treatment plan is tailored to your recovery stage, goals, and activity level.',
        'Our experienced physical therapists combine targeted strengthening exercises, balance training, flexibility work, movement correction, and sport-specific rehabilitation to support your recovery. We focus on reducing pain, restoring stability, preventing future injuries, and helping you return to work, exercise, and sports with greater confidence.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Knee motion', text: 'Full bending and straightening, a key early goal.' },
      { label: 'Swelling & pain', text: 'How the knee is healing and responding to load.' },
      { label: 'Quad & hamstring strength', text: 'Comparing the injured leg with the healthy one.' },
      { label: 'Balance & stability', text: 'Control of the knee on one leg and during movement.' },
      { label: 'Landing & agility', text: 'Jumping, cutting and pivoting in later phases.' },
      { label: 'Confidence', text: 'How ready you feel for your sport or daily demands.' },
    ],
    guidance: {
      title: 'A Personalized Approach to Return You to Peak Performance',
      paras: [
        'No two ACL injuries are the same, which is why we closely monitor your progress and adjust your rehabilitation program as your strength and mobility improve. From improving range of motion during the early stages to advanced agility and functional movement training, every phase is carefully guided to maximize recovery while minimizing the risk of reinjury.',
        'Whether you’re an athlete aiming to return to competition or someone looking to resume everyday activities without pain, our evidence-based rehabilitation approach helps you rebuild strength, improve movement quality, and restore confidence every step of the way. Our goal is to help you achieve a safe, successful, and long-lasting recovery.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Range-of-motion exercise', 'Quad & hamstring strengthening', 'Balance training', 'Gait retraining', 'Flexibility work', 'Agility drills', 'Return-to-sport testing'],
    },
    images: serviceImages('acl-rehabilitation'),
    faqs: [
      { q: 'What is ACL rehabilitation?', a: ['ACL rehabilitation is a structured physical therapy program designed to help patients recover after an ACL injury or reconstruction surgery. The program focuses on restoring knee mobility, reducing pain and swelling, rebuilding muscle strength, and improving joint stability.', 'Recovery typically progresses through several phases, beginning with gentle mobility exercises and gradually advancing to strength training, balance exercises, agility work, and functional movement training. The final goal is to safely return patients to their normal activities or sports.'] },
      { q: 'How long does ACL rehabilitation usually take?', a: ['Recovery time varies depending on the severity of the injury, whether surgery was performed, and how consistently rehabilitation exercises are completed. Many patients require several months of rehabilitation before returning to unrestricted physical activities.', 'Athletes often undergo additional sport-specific training and return-to-sport testing to ensure the knee is strong, stable, and ready for high-demand movements. Following the recommended rehabilitation timeline helps reduce the risk of reinjury.'] },
      { q: 'Can physical therapy help me avoid ACL surgery?', a: ['Not every ACL injury requires surgery. Some individuals with partial tears or lower activity demands may achieve excellent function through a comprehensive rehabilitation program that strengthens the muscles supporting the knee.', 'A physical therapist works closely with your physician to determine the most appropriate treatment plan based on your injury, lifestyle, and personal goals. Even if surgery becomes necessary, rehabilitation before surgery can improve recovery outcomes.'] },
      { q: 'What exercises are included in ACL rehabilitation?', a: ['Your rehabilitation program may include range-of-motion exercises, quadriceps and hamstring strengthening, balance and stability training, gait retraining, flexibility exercises, and progressive functional movements. As recovery advances, higher-level exercises such as jumping, agility drills, and sport-specific activities may be introduced.', 'Each exercise is carefully selected based on your recovery stage to ensure the knee heals properly while safely rebuilding strength and confidence.'] },
      { q: 'When can I return to sports after an ACL injury?', a: ['Returning to sports depends on meeting specific rehabilitation milestones rather than following a fixed timeline. Your physical therapist evaluates knee strength, balance, movement quality, endurance, and functional performance before recommending a return to athletic activities.', 'Comprehensive return-to-sport testing helps ensure your knee can safely handle the demands of your sport, reducing the likelihood of future injuries while improving performance and confidence.'] },
    ],
  },
};
