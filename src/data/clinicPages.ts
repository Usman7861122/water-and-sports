// Extra, page-level content for each clinic page (copied from the dev site). Clinics without an entry fall back to CLINICS data.
export type ClinicExtra = {
  about: string[];
  trusted?: string;
  conditions: string[];
  specialists: string[]; // team slugs, in display order
  faqs: { q: string; a: string }[];
};

export const CLINIC_EXTRA: Record<string, ClinicExtra> = {
  'carmel-valley': {
    about: [
      'Our Carmel Valley clinic provides top-tier physical therapy and sports medicine services to one of San Diego’s most active communities. We specialize in treating orthopedic injuries, post-surgical rehabilitation, and sports-related conditions.',
      'We understand the demands of an active lifestyle. Our expert therapists utilize evidence-based treatments, including manual therapy, therapeutic exercise, and advanced modalities to help you recover quickly and safely.',
      'Whether you are a competitive athlete, a weekend warrior, or simply looking to live pain-free, our personalized approach ensures that your treatment plan is tailored to your specific goals and needs.',
    ],
    trusted: 'Trusted by professional athletes, former official physical therapists for the San Diego Padres, and current consultants for the Chicago White Sox. We bring elite-level therapeutic strategies to ensure you receive the most advanced care available.',
    conditions: ['Shockwave Therapy','Running Analysis','ACL Rehabilitation','Return-to-Sport Testing','Balance Training','Vestibular Therapy','Sports Physical Therapy','Post-Surgical Rehabilitation','Performance Training','Back Pain Physical Therapy','Pickleball Injury Rehabilitation','Golf Rehabilitation','Blood Flow Restriction Training','Ankle Pain Physical Therapy','Wrist/Hand Pain','Foot Pain Treatment','Neuropathy Physical Therapy','Hip Pain Physical Therapy','Vertigo Physical Therapy','Posture Correction & Alignment','Elbow Pain','Gait Training'],
    specialists: ['dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs','dr-sidjonn-cj-regala-pt-dpt','dr-garrick-li-pt-dpt-cert-vrs','dr-salvatore-torry-fantano-pt-dpt','dr-jc-plantier-pt-dpt','alex-bedrossian-pta'],
    faqs: [
      { q: 'Do you treat youth sports injuries?', a: 'Yes, we frequently work with young athletes from local schools and clubs to treat injuries and provide preventative care.' },
      { q: 'What should I wear to my appointment?', a: 'Please wear comfortable, loose-fitting clothing that allows for easy movement and access to the area being treated.' },
      { q: 'Do you offer post-surgical rehabilitation?', a: 'Absolutely. We work closely with local orthopedic surgeons to provide comprehensive post-operative care.' },
    ],
  },
};
