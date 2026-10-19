import { EMAIL } from './content';

export const FORMS = [
  { title: 'New patient intake form', text: 'Complete this form before your first appointment. Includes medical history, current symptoms, and insurance information.', icon: 'user' },
  { title: 'Insurance verification form', text: 'Provide your insurance details so we can verify coverage and benefits before your visit.', icon: 'shield' },
  { title: 'Medical history questionnaire', text: 'Detailed health history form covering past injuries, surgeries, medications, and current conditions.', icon: 'clipboard' },
  { title: 'Pain assessment form', text: 'Help us understand your pain levels, location, and how it affects your daily activities.', icon: 'pulse' },
  { title: 'Consent for treatment', text: 'Standard consent form authorizing physical therapy treatment and acknowledging our privacy practices.', icon: 'check' },
  { title: 'HIPAA privacy notice', text: 'Information about how we protect your health information and your rights under HIPAA regulations.', icon: 'lock', href: '/hipaa-notice/' },
] as { title: string; text: string; icon: string; href?: string; file?: string }[];
export const formMailto = (t: string) => `mailto:${EMAIL}?subject=${encodeURIComponent('Please send: ' + t)}`;

export const PROVIDERS = ['Adminsure Inc', 'Aetna', 'Aetna Medicare Advantage', 'Allied Managed Care Incorporated', 'Anthem Blue Cross', 'Aspire / Coastal TPA', 'Athens Administrators', 'Blue Card', 'Blue Shield California', 'Blue Shield Federal', 'CCMSI', 'City of San Diego', 'County of San Diego', 'County of San Diego - BA', 'Family Health PACE', 'Gallagher Bassett', 'GEHA', 'GPA', 'Health Net', 'Homelink', 'Humana', 'Intercare', 'Liberty Mutual', 'Local Covered CA', 'Medica', 'MedRisk', 'Meritain Health', 'OneCall', 'Sedgwick', 'Sedgwick CMS', 'Self Pay', 'Sharp Community Medical Group', 'Sharp Community Medical for Water', 'Sharp Rees Stealy', 'Streamline', 'Surest', 'TriWest / VA Choice Program', 'TRICARE West', 'UCSD', 'UHC Student Resources', 'UMR', 'United Healthcare', 'Wawanesa'];

export const INSURANCE_HELP = ['Verifying your insurance benefits and coverage', 'Explaining your co-pays, deductibles, and out-of-pocket costs', 'Reviewing referral requirements for your specific plan', 'Assisting with prior authorization when needed', 'Coordinating workers’ compensation claims'];

export const INSURANCE_FAQS = [
  { q: 'Do I need a referral for physical therapy?', a: 'Referral requirements vary by insurance plan. Some plans require a physician referral, while others allow direct access to physical therapy. Medicare patients typically need a referral from their physician. We recommend contacting your insurance provider or our office to verify your specific plan requirements before your first appointment.' },
  { q: 'Can you verify my insurance benefits before my appointment?', a: 'Yes, we can verify your insurance benefits prior to your appointment. We recommend calling our office at least 24 hours in advance with your insurance information. Our front office team will contact your insurance provider to verify coverage, co-pays, deductibles, and any authorization requirements.' },
  { q: 'What if my insurance is not listed?', a: 'If you do not see your insurance provider listed, please contact our office directly. Insurance networks change frequently, and we may still be able to accept your plan. Our team can verify your coverage and discuss payment options to ensure you receive the care you need.' },
  { q: 'Do you accept Medicare?', a: 'Yes, we accept Medicare and Medicare Advantage plans. Medicare Part B typically covers physical therapy services when medically necessary and prescribed by your physician. Coverage limits and co-pays may apply. Contact our office for specific details about your Medicare coverage.' },
  { q: 'Do you accept workers’ compensation claims?', a: 'Yes, we accept workers’ compensation claims. We work directly with employers, insurance carriers, and case managers to coordinate care for work-related injuries. Please bring your claim number and adjuster contact information to your first appointment.' },
  { q: 'What should I bring to my first appointment?', a: 'Please bring your insurance card, photo ID, physician referral (if required), any relevant imaging reports or medical records, and a list of current medications. Arriving 15 minutes early to complete paperwork will help ensure your appointment starts on time.' },
];

export const PERKS = [
  { t: 'Collaborative team environment', d: 'Work alongside experienced PTs, PTAs, and athletic trainers in a supportive, collegial environment.' },
  { t: 'Sports & orthopedic expertise', d: 'Specialize in sports medicine, orthopedic rehabilitation, and athletic performance enhancement.' },
  { t: 'Aquatic therapy programs', d: 'Specialize in aquatic therapy and learn alongside clinicians who use it every day.' },
  { t: 'Continuing education support', d: 'Ongoing professional development, certifications, and training opportunities.' },
  { t: 'Modern treatment techniques', d: 'Work with cutting-edge rehabilitation technology and evidence-based treatment methods.' },
  { t: 'Positive patient relationships', d: 'Build meaningful connections with patients throughout their recovery journey.' },
  { t: 'Career growth opportunities', d: 'Clear pathways for advancement and professional development within WSPT San Diego.' },
  { t: 'San Diego lifestyle', d: 'Enjoy the vibrant San Diego community, beaches, and outdoor activities.' },
];

export const JOBS = [
  { title: 'Physical Therapist', text: 'Lead patient care and rehabilitation programs across our San Diego clinics.', qual: 'DPT degree, California PT license, 2+ years experience preferred' },
  { title: 'PTA (Physical Therapist Assistant)', text: 'Support patient treatment and therapy sessions under PT supervision.', qual: 'PTA certification, California license, experience in orthopedic or sports rehab' },
];
