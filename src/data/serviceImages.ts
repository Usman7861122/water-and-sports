// Alt text for the three Shutterstock photos on each service page. Files live at /images/services/<slug>-1..3.webp
export const SERVICE_ALTS: Record<string, [string, string, string]> = {
  'shoulder-physical-therapy': ["Therapist guiding an older woman through a shoulder stretch", "Man doing a shoulder exercise with a stick while a therapist watches", "Smiling woman stretching her arm overhead with a therapist"],
  'wrist-hand-pain': ["Doctor checking a patient's hand and wrist", "Hand squeezing a soft ball for grip strength exercise", "Illustration of a therapist's hands treating a painful wrist"],
  'hip-pain-physical-therapy': ["Therapist working on a patient's hip in a bright clinic", "Therapist stretching a woman's bent leg on a treatment table", "Therapist guiding a patient's leg on a blue treatment table"],
  'elbow-pain': ["Therapist applying tape to a man's forearm and elbow", "Close-up of hands treating a painful elbow", "Therapist holding a patient's arm to assess the elbow"],
  'foot-pain': ["Therapist showing custom orthotic insoles", "Close-up of a foot with a heel pain spot", "Doctor holding two orthotic insoles at a desk"],
  'ankle-pain-physical-therapy': ["Therapist treating a patient's ankle on a table", "Runner on a track grabbing a sore ankle", "Therapist's hands assessing an ankle with motion markers"],
  'neuropathy-physical-therapy': ["Therapist's hands gently treating a foot", "Close-up of a therapist working on a patient's foot", "Woman having her leg and foot treated by a therapist"],
  'acl-rehabilitation': ["Therapist examining a patient's knee in a gym-style clinic", "Therapist bending a patient's knee on a treatment table", "Therapist lifting a patient's leg for a knee exercise"],
  'post-surgical-rehabilitation': ["Woman learning to walk with a walker and a therapist's help", "Patient walking with crutches and a knee brace beside a therapist", "Knee with a surgical scar after an operation"],
  'gait-training': ["Older patient walking between parallel bars with a therapist", "Man walking on a treadmill beside parallel bars while a therapist watches", "Therapist helping an older man hold the parallel bars"],
  'vestibular-therapy': ["Woman with a headset rubbing her forehead, feeling dizzy", "Woman at a desk holding her head with dizziness", "Woman holding her neck while a therapist takes notes"],
  'balance-training': ["Therapist helping a woman balance on a mat", "Group of older adults doing balance training in a gym", "Bare feet standing on a blue balance disc"],
  'vertigo-physical-therapy': ["Older woman holding her ear while talking with a doctor", "Young woman describing dizziness to her doctor", "Doctor with a head mirror examining a woman's ear"],
};
export const serviceImages = (slug: string) =>
  [1, 2, 3].map((n) => ({ src: `/images/services/${slug}-${n}.webp`, alt: SERVICE_ALTS[slug]?.[n - 1] ?? `${slug.replace(/-/g, ' ')} photo ${n}` }));
