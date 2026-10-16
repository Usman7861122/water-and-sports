// Content for individual service pages (copied from the dev site). Photos are licensed Shutterstock images saved in /public/images/services.
export type ServicePage = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  highlights: string[];
  overview: { title: string; paras: string[] };
  assessTitle: string;
  assess: { label: string; text: string }[];
  guidance: { title: string; paras: string[]; includesTitle: string; includes: string[] };
  images: { src: string; alt: string }[]; // [0] hero, [1] overview, [2] guidance
  faqs: { q: string; a: string[] }[];
};

export const SERVICE_PAGES: Record<string, ServicePage> = {
  'running-analysis': {
    slug: 'running-analysis',
    title: 'Running Analysis',
    metaDescription: 'Running analysis in San Diego: video gait assessment and a personalized plan to run faster, feel better and prevent injury. Water & Sports Physical Therapy.',
    eyebrow: 'Performance & injury prevention',
    lead: 'Whether you’re a beginner, recreational runner, or competitive athlete, proper running mechanics are essential for maximizing performance and minimizing injury risk.',
    highlights: ['Video gait analysis', 'Full-body movement testing', 'Personalized training plan'],
    overview: {
      title: 'Optimize Your Performance with Running Analysis',
      paras: [
        'Our Running Analysis program uses detailed movement assessments to evaluate your running form, posture, stride, foot strike, cadence, and overall biomechanics. By identifying inefficiencies and movement patterns that may contribute to pain or injury, we help you run more efficiently and comfortably.',
        'Our experienced physical therapists combine video analysis with a comprehensive physical evaluation to assess strength, flexibility, balance, and mobility. Based on your results, we develop a personalized treatment and training plan that improves running mechanics, enhances performance, and supports long-term injury prevention.',
      ],
    },
    assessTitle: 'What we look at',
    assess: [
      { label: 'Posture', text: 'How you hold your body from head to pelvis as you run.' },
      { label: 'Stride & cadence', text: 'Stride length and steps per minute, and how they change as you tire.' },
      { label: 'Foot strike', text: 'Where and how your foot lands, and the load it sends up the leg.' },
      { label: 'Joint alignment', text: 'How your hips, knees and ankles line up through each step.' },
      { label: 'Strength & flexibility', text: 'The physical limits that shape your running form.' },
      { label: 'Balance & mobility', text: 'How well you control and move through each phase of the gait cycle.' },
    ],
    guidance: {
      title: 'Personalized Guidance for Better Running',
      paras: [
        'Every runner has unique goals, experience levels, and movement patterns. Whether you’re training for your first 5K, preparing for a marathon, or returning after an injury, our customized recommendations are designed to improve your running efficiency while reducing unnecessary stress on your joints and muscles.',
        'Our goal is to help you run with greater confidence, reduce the risk of recurring injuries, and achieve your personal performance goals.',
      ],
      includesTitle: 'Your program may include',
      includes: ['Strength training', 'Flexibility exercises', 'Gait retraining', 'Mobility work', 'Balance training', 'Sport-specific conditioning'],
    },
    images: [
      { src: '/images/services/running-analysis-1.webp', alt: 'A physical therapist watching a runner on a treadmill during a running analysis' },
      { src: '/images/services/running-analysis-2.webp', alt: 'Motion-capture markers on a runner’s back while a therapist records his running form' },
      { src: '/images/services/running-analysis-3.webp', alt: 'A runner training on a trail through open grassland' },
    ],
    faqs: [
      { q: 'What is a running analysis?', a: ['A running analysis is a detailed evaluation of your running mechanics, including your posture, stride length, foot strike, cadence, joint alignment, and overall movement patterns. It helps identify biomechanical issues that may affect performance or contribute to injuries.', 'Using video technology and a physical assessment, your therapist can pinpoint areas for improvement and create a personalized plan to help you run more efficiently and safely.'] },
      { q: 'Who can benefit from a running analysis?', a: ['Running analysis is beneficial for runners of all experience levels, from beginners to competitive athletes. It is especially helpful for individuals experiencing recurring injuries, discomfort while running, or those looking to improve their speed, endurance, and overall performance.', 'It is also valuable for runners returning after an injury, as it helps identify movement patterns that may increase the risk of reinjury.'] },
      { q: 'What happens during a running analysis?', a: ['During your evaluation, your therapist observes your running technique using video analysis and assesses factors such as posture, foot placement, stride mechanics, cadence, balance, flexibility, strength, and joint mobility. Additional functional movement tests may also be performed.', 'After the assessment, you’ll receive personalized recommendations and exercises to improve your running form, address physical limitations, and reduce injury risk.'] },
      { q: 'Can running analysis help prevent injuries?', a: ['Yes. Many running injuries are linked to inefficient biomechanics, muscle imbalances, poor flexibility, or improper training habits. Running analysis helps identify these issues before they lead to more serious problems.', 'By improving your running mechanics and correcting movement patterns, you can reduce stress on your joints and muscles while improving comfort, efficiency, and long-term performance.'] },
      { q: 'How often should I have a running analysis?', a: ['The frequency depends on your goals, training schedule, and any injuries you may have. Many runners benefit from an analysis when starting a new training program, returning from an injury, increasing mileage, or preparing for a race.', 'Periodic reassessments allow your physical therapist to monitor your progress, refine your training plan, and ensure your running mechanics continue to support optimal performance and injury prevention.'] },
    ],
  },
};
