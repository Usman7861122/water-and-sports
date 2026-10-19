// "Sports & performance" service pages. Intro text and FAQs come from the dev site; the "what we look at" cards and "your program" lists are written to match.
import type { ServicePage } from './services';

const img = (slug: string, n: number) => `/images/services/${slug}-${n}.webp`;

export const SPORTS_PAGES: Record<string, ServicePage> = {
  'performance-training': {
    slug: 'performance-training',
    title: 'Performance Training',
    metaDescription: 'Performance training in San Diego: personalized strength, speed, agility and endurance programs that start with a movement assessment. Water & Sports Physical Therapy.',
    eyebrow: 'Strength, speed & endurance',
    lead: 'Enhance strength, speed, agility, and endurance with personalized performance training designed to maximize athletic potential.',
    highlights: ['Movement assessment first', 'Sport-specific programs', 'Built to prevent injury'],
    overview: {
      title: 'Elevate Your Performance with Expert Training',
      paras: [
        'Whether you’re a competitive athlete, a weekend warrior, or simply looking to improve your overall fitness, our performance training programs are designed to help you reach your full potential. We focus on improving strength, power, speed, agility, flexibility, and endurance through evidence-based training methods tailored to your sport, fitness level, and individual goals.',
        'Every program begins with a comprehensive movement assessment to identify strengths, weaknesses, and opportunities for improvement.',
      ],
    },
    assessTitle: 'What we build in every program',
    assess: [
      { label: 'Strength & power', text: 'Lifting and explosive work that matches the demands of your sport.' },
      { label: 'Speed & agility', text: 'Sprint, change-of-direction and reaction drills done with clean mechanics.' },
      { label: 'Endurance', text: 'Conditioning that lets you perform at the same level late in the game.' },
      { label: 'Mobility & flexibility', text: 'The range of motion you need to move freely and safely.' },
      { label: 'Balance & coordination', text: 'Body control that carries over to fast, unpredictable movement.' },
      { label: 'Movement quality', text: 'Technique and muscle balance that keep stress off your joints.' },
    ],
    guidance: {
      title: 'A Plan That Grows With You',
      paras: [
        'Each session is tailored to your goals and progresses over time to keep challenging you while protecting proper technique. Your performance specialist builds a schedule that balances training load, recovery and progress.',
        'Because our team are licensed physical therapists, we can also spot movement limits and muscle imbalances early and fix them before they become injuries.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Strength training', 'Speed & agility drills', 'Plyometrics', 'Balance & coordination', 'Mobility work', 'Conditioning', 'Sport-specific practice'],
    },
    images: [
      { src: img('performance-training', 1), alt: 'A trainer coaching an athlete through a plank with a weighted ball' },
      { src: img('performance-training', 2), alt: 'Two athletes doing lunge drills side by side in a gym' },
      { src: img('performance-training', 3), alt: 'Close-up of an athlete’s hands on a barbell before a lift' },
    ],
    faqs: [
      { q: 'What is performance training?', a: ['Performance training is a structured program designed to improve athletic abilities such as strength, speed, agility, endurance, balance, coordination, and overall movement efficiency. It uses targeted exercises and sport-specific techniques to help individuals perform at their highest potential.', 'Programs are customized based on your current fitness level, athletic goals, and movement assessment, ensuring safe and effective progress while reducing the risk of injury.'] },
      { q: 'Who can benefit from performance training?', a: ['Performance training is beneficial for athletes of all ages and skill levels, as well as active individuals looking to improve strength, mobility, and physical fitness. Whether you participate in team sports, individual competitions, or recreational activities, personalized training can help you achieve your goals.', 'It is also an excellent option for individuals returning to sports after rehabilitation, providing a safe transition from recovery to peak athletic performance.'] },
      { q: 'What does a performance training program include?', a: ['A typical program may include strength training, speed and agility drills, plyometric exercises, balance and coordination work, flexibility training, mobility exercises, cardiovascular conditioning, and sport-specific movement practice.', 'Each session is tailored to your goals and progresses over time to continually challenge your abilities while maintaining proper technique and reducing injury risk.'] },
      { q: 'Can performance training help prevent injuries?', a: ['Yes. Performance training emphasizes proper movement mechanics, muscle balance, flexibility, and joint stability, all of which play an important role in injury prevention. Improving these areas helps reduce unnecessary stress on the body during sports and physical activities.', 'Your trainer or physical therapist will also identify movement limitations and muscular imbalances, allowing them to address potential injury risks before they become serious problems.'] },
      { q: 'How often should I participate in performance training?', a: ['The ideal training frequency depends on your sport, schedule, fitness level, and personal goals. Many athletes benefit from two to four sessions per week, while others may train more or less depending on their competition season and recovery needs.', 'Your performance specialist will develop a customized schedule that balances training intensity, recovery, and progression to help you achieve consistent, long-term improvements while avoiding overtraining.'] },
    ],
  },

  'return-to-sport-testing': {
    slug: 'return-to-sport-testing',
    title: 'Return-to-Sport Testing',
    metaDescription: 'Return-to-sport testing in San Diego: objective strength, balance, hop and agility tests that show when you are ready to compete again. Water & Sports Physical Therapy.',
    eyebrow: 'Safe return to competition',
    lead: 'Safely return to competition with comprehensive testing that measures strength, movement, balance, and sport-specific readiness.',
    highlights: ['Objective test results', 'Strength, balance & agility', 'Lowers reinjury risk'],
    overview: {
      title: 'Comprehensive Return-to-Sport Testing',
      paras: [
        'Returning to sports after an injury requires more than feeling pain-free—it requires confidence that your body is ready to perform safely. Our Return-to-Sport Testing program uses objective assessments to evaluate strength, balance, agility, mobility, endurance, and functional movement.',
        'These tests help determine whether you are physically prepared to resume training and competition while reducing the risk of reinjury.',
      ],
    },
    assessTitle: 'What we test',
    assess: [
      { label: 'Strength', text: 'How much force each leg or arm can produce, compared side to side.' },
      { label: 'Balance', text: 'How steadily you control your body on one leg and while moving.' },
      { label: 'Hop & jump tests', text: 'Distance, height and landing control during hopping and jumping.' },
      { label: 'Agility', text: 'Cutting, pivoting and quick direction changes at sport speed.' },
      { label: 'Mobility & flexibility', text: 'Whether your joints move through a full, pain-free range.' },
      { label: 'Sport-specific skills', text: 'Movements taken from your sport to check real-game readiness.' },
    ],
    guidance: {
      title: 'Know Before You Go Back',
      paras: [
        'Your therapist reviews every result with you and explains any areas that still need work before you return to unrestricted play. The exact tests are chosen based on your injury and what your sport demands.',
        'If you’re not ready yet, we build a plan to close the gaps, then repeat the testing so you can return with real numbers behind you.',
      ],
      includesTitle: 'Testing may include',
      includes: ['Strength assessments', 'Balance evaluations', 'Hop tests', 'Agility drills', 'Flexibility measures', 'Endurance testing', 'Movement analysis'],
    },
    images: [
      { src: img('return-to-sport-testing', 1), alt: 'A therapist guiding a woman through a weighted lunge while she wears a knee brace' },
      { src: img('return-to-sport-testing', 2), alt: 'A therapist checking a woman’s braced knee in a clinic with a soccer ball nearby' },
      { src: img('return-to-sport-testing', 3), alt: 'A soccer player holding his knee while a clinician examines it' },
    ],
    faqs: [
      { q: 'What is Return-to-Sport Testing?', a: ['Return-to-Sport Testing is a comprehensive evaluation that determines whether an athlete is physically prepared to safely resume sports after an injury or surgery. It measures key factors such as strength, balance, agility, flexibility, endurance, and movement quality.', 'The results help identify any remaining deficits that could increase the risk of reinjury, allowing your rehabilitation program to be adjusted before you return to full competition.'] },
      { q: 'Who should undergo Return-to-Sport Testing?', a: ['Return-to-Sport Testing is recommended for athletes recovering from injuries such as ACL tears, ankle sprains, shoulder injuries, muscle strains, fractures, or orthopedic surgeries. It is beneficial for athletes of all ages and skill levels who want to return to sports safely.', 'Even if you feel fully recovered, objective testing can reveal hidden weaknesses or movement imbalances that may not be noticeable during everyday activities.'] },
      { q: 'What does Return-to-Sport Testing include?', a: ['Testing may include strength assessments, balance evaluations, hop tests, agility drills, flexibility measurements, endurance testing, movement analysis, and sport-specific functional assessments. The exact tests are selected based on your injury and the demands of your sport.', 'Your therapist reviews the results with you and explains any areas that require further improvement before returning to unrestricted athletic activity.'] },
      { q: 'Why is Return-to-Sport Testing important?', a: ['Returning to sports too early can increase the likelihood of reinjury and may delay your long-term recovery. Return-to-Sport Testing provides objective data that helps determine whether your body has regained the strength, stability, and coordination necessary for safe participation.', 'This evidence-based approach gives athletes, parents, coaches, and healthcare providers greater confidence when making return-to-play decisions.'] },
      { q: 'What happens if I’m not ready to return to sports?', a: ['If testing shows that additional rehabilitation is needed, your physical therapist will create a personalized program to address the specific areas that need improvement. This may include strengthening exercises, balance training, agility work, mobility exercises, or sport-specific drills.', 'Once you’ve made sufficient progress, you can repeat the testing to ensure you’ve achieved the necessary benchmarks for a safe and confident return to your sport.'] },
    ],
  },

  'golf-rehabilitation': {
    slug: 'golf-rehabilitation',
    title: 'Golf Rehabilitation',
    metaDescription: 'Golf rehabilitation in San Diego: relieve back, shoulder, hip and elbow pain and improve your swing with personalized physical therapy. Water & Sports Physical Therapy.',
    eyebrow: 'Recover stronger, swing better',
    lead: 'Recover from golf-related injuries and improve your swing with personalized rehabilitation focused on strength, mobility, and performance.',
    highlights: ['Swing & movement assessment', 'Back, shoulder & hip care', 'Injury prevention'],
    overview: {
      title: 'Personalized Therapy to Improve Your Game',
      paras: [
        'Golf places repetitive stress on the body, particularly the shoulders, back, hips, elbows, wrists, and knees. Whether you’re recovering from an injury, managing chronic pain, or looking to improve your physical performance on the course, our golf rehabilitation program is designed to restore mobility, reduce discomfort, and optimize movement. We address the underlying causes of pain while helping you return to the game safely and confidently.',
        'Our physical therapists perform a comprehensive assessment of your movement patterns, flexibility, strength, posture, and swing mechanics.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Rotation', text: 'How freely your hips, spine and shoulders turn during the swing.' },
      { label: 'Posture', text: 'Your setup and how you hold it through the whole swing.' },
      { label: 'Core strength', text: 'The trunk control that transfers power from the ground to the club.' },
      { label: 'Hip & shoulder mobility', text: 'Stiff joints that make other areas work too hard.' },
      { label: 'Balance & stability', text: 'Staying centered through the backswing, impact and finish.' },
      { label: 'Pain triggers', text: 'The movements that bring on back, elbow or wrist pain.' },
    ],
    guidance: {
      title: 'Treatment Built Around Your Swing',
      paras: [
        'Using evidence-based rehabilitation techniques, we create a personalized plan to heal your injury and improve how you move on the course. Treatment is customized to each golfer’s needs.',
        'We also teach you warm-up routines, stretching and conditioning so you can stay healthy and keep enjoying the game for years to come.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Manual therapy', 'Flexibility exercises', 'Strength training', 'Balance training', 'Golf-specific exercises', 'Warm-up routines'],
    },
    images: [
      { src: img('golf-rehabilitation', 1), alt: 'A golfer at the top of the backswing on a sunny course' },
      { src: img('golf-rehabilitation', 2), alt: 'A physical therapist stretching a patient’s arm and shoulder' },
      { src: img('golf-rehabilitation', 3), alt: 'A golfer holding his finish after a swing' },
    ],
    faqs: [
      { q: 'What is golf rehabilitation?', a: ['Golf rehabilitation is a specialized physical therapy program designed to treat golf-related injuries and improve physical performance. It focuses on restoring mobility, reducing pain, strengthening key muscle groups, and correcting movement patterns that may contribute to injury.', 'Treatment is customized to each golfer’s needs and often includes flexibility exercises, strength training, manual therapy, balance training, and golf-specific functional exercises to support a safe return to play.'] },
      { q: 'What injuries can golf rehabilitation treat?', a: ['Golf rehabilitation can help treat a variety of conditions, including low back pain, golfer’s elbow, shoulder injuries, rotator cuff problems, wrist pain, hip stiffness, knee pain, tendon injuries, and muscle strains caused by repetitive golf swings.', 'Your physical therapist will identify the source of your pain and develop a treatment plan that promotes healing while improving your overall movement and golf performance.'] },
      { q: 'Can golf rehabilitation improve my swing?', a: ['Yes. While the primary goal is injury recovery, rehabilitation can also improve swing mechanics by increasing flexibility, core strength, balance, stability, and body control. Better movement patterns often lead to a more efficient and consistent golf swing.', 'Your therapist may evaluate your posture, rotational mobility, and functional movement to identify physical limitations that could be affecting your performance on the course.'] },
      { q: 'How long does golf rehabilitation take?', a: ['Recovery time depends on the type and severity of your injury, your overall health, and your rehabilitation goals. Minor injuries may improve within a few weeks, while more complex conditions or post-surgical recovery may require several months of therapy.', 'Your treatment plan will be adjusted as you progress to ensure steady improvement and a safe return to golfing activities without unnecessary setbacks.'] },
      { q: 'Can golf rehabilitation help prevent future injuries?', a: ['Yes. A major focus of golf rehabilitation is injury prevention through improved strength, flexibility, balance, posture, and movement efficiency. Addressing physical limitations early can reduce stress on your joints and muscles during the golf swing.', 'Your therapist will also provide education on warm-up routines, stretching, conditioning exercises, and proper body mechanics to help you stay healthy and continue enjoying the game for years to come.'] },
    ],
  },

  'pickleball-injury-rehabilitation': {
    slug: 'pickleball-injury-rehabilitation',
    title: 'Pickleball Injury Rehabilitation',
    metaDescription: 'Pickleball injury rehabilitation in San Diego: treatment for tennis elbow, shoulder, wrist, knee and ankle injuries so you can get back on the court. Water & Sports Physical Therapy.',
    eyebrow: 'Back on the court, stronger',
    lead: 'Recover from pickleball injuries with personalized rehabilitation that restores strength, mobility, and confidence for a safe return to play.',
    highlights: ['Elbow, shoulder & wrist care', 'Knee & ankle recovery', 'Court-ready drills'],
    overview: {
      title: 'Return to the Court Stronger and More Confident',
      paras: [
        'Pickleball is one of the fastest-growing sports, but its quick starts, sudden stops, and repetitive movements can place significant stress on the shoulders, elbows, wrists, knees, hips, and ankles.',
        'Whether you’ve experienced a sprain, tendon injury, muscle strain, or overuse condition, our personalized pickleball injury rehabilitation program is designed to relieve pain, restore mobility, and rebuild the strength you need to play.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Swing & arm mechanics', text: 'How your shoulder, elbow and wrist share the load on each shot.' },
      { label: 'Footwork', text: 'Quick starts, stops and side steps that strain knees and ankles.' },
      { label: 'Strength balance', text: 'Weak links that make other muscles and tendons overwork.' },
      { label: 'Mobility', text: 'Joint range that lets you reach, lunge and rotate freely.' },
      { label: 'Balance', text: 'Control on one leg and during quick changes of direction.' },
      { label: 'Overuse patterns', text: 'Repeated movements that keep an injury from healing.' },
    ],
    guidance: {
      title: 'A Plan for Your Injury and Your Game',
      paras: [
        'Your physical therapist will perform a detailed evaluation to find the cause of your symptoms, then build a plan that promotes healing while restoring strength and mobility. Each program is individualized.',
        'Before you go back to play, we check that you have the strength, stability and confidence to move well on the court, and we show you warm-ups and recovery habits to stay healthy.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Manual therapy', 'Therapeutic exercise', 'Stretching', 'Strengthening', 'Balance training', 'Movement retraining', 'Sport-specific drills'],
    },
    images: [
      { src: img('pickleball-injury-rehabilitation', 1), alt: 'A pickleball player ready to return a shot on an indoor court' },
      { src: img('pickleball-injury-rehabilitation', 2), alt: 'A woman in a lunge holding a paddle during a pickleball point' },
      { src: img('pickleball-injury-rehabilitation', 3), alt: 'A player holding a paddle and a yellow pickleball' },
    ],
    faqs: [
      { q: 'What injuries can pickleball rehabilitation treat?', a: ['Pickleball rehabilitation can treat a variety of injuries, including tennis elbow, shoulder tendonitis, rotator cuff injuries, wrist sprains, knee pain, ankle sprains, Achilles tendon injuries, muscle strains, and lower back pain. Many of these injuries result from repetitive movements, sudden directional changes, or overuse.', 'Your physical therapist will perform a detailed evaluation to determine the cause of your symptoms and create a personalized treatment plan that promotes healing while restoring strength and mobility.'] },
      { q: 'What does pickleball injury rehabilitation include?', a: ['Treatment may include manual therapy, therapeutic exercises, stretching, strengthening, balance training, mobility exercises, and functional movement retraining. Depending on your injury, your therapist may also incorporate sport-specific drills to prepare you for returning to pickleball.', 'Each rehabilitation program is individualized to help reduce pain, improve joint function, and safely rebuild the physical demands required for the sport.'] },
      { q: 'How long does it take to recover from a pickleball injury?', a: ['Recovery time depends on the type and severity of the injury, your overall health, and how consistently you follow your rehabilitation program. Minor strains or sprains may improve within a few weeks, while more significant injuries or post-surgical recovery can require several months.', 'Your therapist will regularly evaluate your progress and adjust your treatment plan to ensure a safe and steady recovery while minimizing the risk of reinjury.'] },
      { q: 'Can physical therapy help prevent future pickleball injuries?', a: ['Yes. Physical therapy helps improve strength, flexibility, balance, coordination, and movement mechanics, all of which reduce stress on your joints and muscles during play. Correcting movement patterns can significantly lower the risk of recurring injuries.', 'Your therapist will also recommend proper warm-up routines, recovery strategies, and conditioning exercises to help you stay healthy and continue enjoying the game.'] },
      { q: 'When can I safely return to playing pickleball?', a: ['Your return to pickleball depends on factors such as pain levels, strength, range of motion, balance, and your ability to perform sport-specific movements without discomfort. Returning too soon may increase the risk of reinjury.', 'Before returning to the court, your physical therapist will assess your functional performance and ensure you have regained the strength, stability, and confidence needed to play safely and effectively.'] },
    ],
  },

  'shockwave-therapy': {
    slug: 'shockwave-therapy',
    title: 'Shockwave Therapy',
    metaDescription: 'Shockwave therapy in San Diego: non-invasive acoustic wave treatment for plantar fasciitis, tendinopathy, tennis elbow and chronic pain. Water & Sports Physical Therapy.',
    eyebrow: 'Non-invasive pain relief',
    lead: 'Promote natural healing and relieve chronic pain with non-invasive Shockwave Therapy tailored to your recovery needs.',
    highlights: ['No surgery or injections', 'Sessions take minutes', 'Pairs with exercise therapy'],
    overview: {
      title: 'Advanced Shockwave Therapy for Pain Relief',
      paras: [
        'Shockwave Therapy is a non-invasive treatment that uses high-energy acoustic waves to stimulate the body’s natural healing response. It is commonly used to treat chronic musculoskeletal conditions that have not responded well to rest, medication, or other conservative treatments.',
        'By increasing blood flow and encouraging tissue repair, Shockwave Therapy can help reduce pain, improve mobility, and accelerate recovery without surgery or injections.',
      ],
    },
    assessTitle: 'What shockwave therapy can treat',
    assess: [
      { label: 'Plantar fasciitis', text: 'Heel and arch pain, especially the first steps in the morning.' },
      { label: 'Achilles tendinopathy', text: 'Pain and stiffness in the tendon at the back of the ankle.' },
      { label: 'Tennis & golfer’s elbow', text: 'Long-lasting tendon pain on the outside or inside of the elbow.' },
      { label: 'Patellar tendinopathy', text: 'Pain just below the kneecap, common in jumping sports.' },
      { label: 'Rotator cuff & shoulder', text: 'Tendon problems and calcific shoulder tendinitis.' },
      { label: 'Shin splints', text: 'Lower-leg pain from repeated impact and overuse.' },
    ],
    guidance: {
      title: 'Personalized Care to Restore Function and Mobility',
      paras: [
        'Our physical therapists perform a thorough evaluation to determine whether Shockwave Therapy is right for your condition. Treatment is often combined with therapeutic exercises, stretching, and strengthening to maximize results and support long-term healing.',
        'Each care plan is personalized to your diagnosis, goals and how your body responds. The intensity can be adjusted during a session so you stay comfortable.',
      ],
      includesTitle: 'Your care may include',
      includes: ['Shockwave sessions', 'Therapeutic exercise', 'Stretching', 'Strengthening', 'Manual therapy', 'Progress checks'],
    },
    images: [
      { src: img('shockwave-therapy', 1), alt: 'A therapist applying a shockwave applicator to a patient’s foot' },
      { src: img('shockwave-therapy', 2), alt: 'A shockwave device treating a patient’s ankle and lower leg' },
      { src: img('shockwave-therapy', 3), alt: 'A therapist using a shockwave applicator on a patient’s lower back' },
    ],
    faqs: [
      { q: 'What is Shockwave Therapy?', a: ['Shockwave Therapy is a non-surgical treatment that delivers controlled acoustic waves to injured tissues to stimulate the body’s natural healing process. It helps increase circulation, promote tissue regeneration, and reduce chronic pain associated with tendon and soft tissue injuries.', 'The treatment is performed in a clinical setting and typically takes only a few minutes per session, allowing most patients to return to their normal activities shortly afterward.'] },
      { q: 'What conditions can Shockwave Therapy treat?', a: ['Shockwave Therapy is commonly used to treat plantar fasciitis, Achilles tendinopathy, tennis elbow, golfer’s elbow, patellar tendinopathy, rotator cuff tendinopathy, calcific shoulder tendinitis, shin splints, and other chronic musculoskeletal conditions.', 'Your physical therapist will evaluate your symptoms and medical history to determine whether this treatment is appropriate for your specific condition and recovery goals.'] },
      { q: 'Is Shockwave Therapy painful?', a: ['Most patients experience mild to moderate discomfort during the treatment as the acoustic waves target the injured tissue. The intensity can be adjusted throughout the session to maintain your comfort while still delivering effective therapy.', 'Any temporary soreness after treatment typically resolves within a day or two, and many patients notice gradual improvement as healing progresses over several sessions.'] },
      { q: 'How many Shockwave Therapy sessions will I need?', a: ['The number of sessions depends on the condition being treated, its severity, and your body’s response to therapy. Many patients benefit from a series of three to six treatments scheduled over several weeks.', 'Your therapist will evaluate your progress after each session and adjust your treatment plan as needed to achieve the best possible results.'] },
      { q: 'Is Shockwave Therapy safe?', a: ['Yes. Shockwave Therapy is considered a safe, evidence-based treatment when performed by trained healthcare professionals. It is non-invasive, requires no incisions or anesthesia, and has minimal downtime, making it an excellent option for many patients seeking alternatives to surgery.', 'Before beginning treatment, your therapist will review your medical history and perform a comprehensive evaluation to ensure Shockwave Therapy is both safe and appropriate for your individual needs.'] },
    ],
  },
};
