import { media } from './media';

export const SITE = {
  name: 'Water & Sports Physical Therapy',
  short: 'WSPT',
  title: 'Water & Sports Physical Therapy | San Diego Physical Therapy',
  description:
    'Expert, hands-on physical therapy in San Diego. Licensed therapists only, advanced 3D movement analysis, and 8 convenient clinics. Get out of pain and back to what you love.',
};

export const PHONE = '(858) 488-3597';
export const FAX = '858-724-1747';
export const PHONE_HREF = 'tel:+18584883597';
export const BOOK_URL = 'https://patients.waterandsportspt.com/wspt-request-an-appointment/sign-up';
// NOTE: copied exactly from the dev site contact page — check the spelling ("waterandportspt") before launch.
export const EMAIL = 'info@waterandportspt.com';

// Most clinics: Mon–Fri 7–6, closed weekends. Downtown opens at 6 and closes at 7; Pacific Beach is open Saturday 8–1.
export const HOURS = [
  { day: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
  { day: 'Saturday – Sunday', time: 'Closed' },
];
export const HOURS_NOTE = 'Hours vary slightly by clinic.';

/* ───────── Navigation (same structure as the dev site) ───────── */
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[]; viewAll?: NavChild };

export const SERVICES_MENU: NavChild[] = [
  { label: 'Running Analysis', href: '/running-analysis/' },
  { label: 'ACL Rehabilitation', href: '/acl-rehabilitation/' },
  { label: 'Golf Rehabilitation', href: '/golf-rehabilitation/' },
  { label: 'Shockwave Therapy', href: '/shockwave-therapy/' },
  { label: 'Performance Training', href: '/performance-training/' },
  { label: 'Vestibular Therapy', href: '/vestibular-therapy/' },
  { label: 'Shoulder Physical Therapy', href: '/shoulder-physical-therapy/' },
  { label: 'Pickleball Injury Rehabilitation', href: '/pickleball-injury-rehabilitation/' },
  { label: 'Post-Surgical Rehabilitation', href: '/post-surgical-rehabilitation/' },
  { label: 'Return-to-Sport Testing', href: '/return-to-sport-testing/' },
  { label: 'Neuropathy Physical Therapy', href: '/neuropathy-physical-therapy/' },
  { label: 'Foot Pain', href: '/foot-pain/' },
  { label: 'Balance Training', href: '/balance-training/' },
  { label: 'Gait Training', href: '/gait-training/' },
  { label: 'Wrist / Hand Pain', href: '/wrist-hand-pain/' },
  { label: 'Elbow Pain', href: '/elbow-pain/' },
  { label: 'Ankle Pain Physical Therapy', href: '/ankle-pain-physical-therapy/' },
  { label: 'Hip Pain Physical Therapy', href: '/hip-pain-physical-therapy/' },
  { label: 'Vertigo Physical Therapy', href: '/vertigo-physical-therapy/' },
];

export const FOOTER_SERVICES: NavChild[] = ['Running Analysis','Golf Rehabilitation','Shockwave Therapy','Vestibular Therapy','ACL Rehabilitation'].map((l) => SERVICES_MENU.find((x) => x.label === l)!);

/* ───────── Locations ───────── */
export type Clinic = { slug: string; name: string; address: string; note?: string; ext: string; image: string; tagline: string; blurb: string; hours: string[]; director?: string; gallery: string[] };

export const CLINICS: Clinic[] = [
  { slug: 'carmel-valley', name: 'Carmel Valley', address: '12395 El Camino Real Suite #111, San Diego, CA 92130', ext: '9', image: media.locations['carmel-valley'], tagline: 'Advanced physical therapy for the Carmel Valley community.', blurb: 'We provide top-tier physical therapy and sports medicine to one of San Diego’s most active communities, from orthopedic injuries to post-surgical rehabilitation.', hours: ['Monday – Friday: 7:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'], director: 'Dr. Sidjonn “CJ” Regala, PT, DPT', gallery: media.gallery['carmel-valley'] },
  { slug: 'coronado', name: 'Coronado', address: '120 C Ave Ste 110, Coronado, CA 92118', ext: '6', image: media.locations.coronado, tagline: 'Expert physical therapy in the heart of Coronado.', blurb: 'Comprehensive care for the island’s active community, and for the active-duty service members, veterans and families near the Naval Base. We accept TRICARE.', hours: ['Monday – Friday: 7:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'], director: 'Dr. David Evans, PT, DPT, OCS', gallery: media.gallery['coronado'] },
  { slug: 'downtown', name: 'Downtown', address: '501 West Broadway, San Diego, CA 92101', ext: '2', image: media.locations.downtown, tagline: 'Accessible, elite recovery for the urban professional.', blurb: 'Efficient, effective care for downtown workers and residents, with extended hours before work, at lunch or after your commute. Easy to reach by trolley and bus.', hours: ['Monday – Friday: 6:00 AM – 7:00 PM', 'Saturday – Sunday: Closed'], gallery: media.gallery['downtown'] },
  { slug: 'pacific-beach', name: 'Pacific Beach', address: '875 Garnet Ave, San Diego, CA 92109', note: 'Inside Fitness Quest 10', ext: '3', image: media.locations['pacific-beach'], tagline: 'Elite physical therapy and sports medicine in Pacific Beach.', blurb: 'Personalized care for surfers, runners, active families and competitive athletes, inside Fitness Quest 10, with parking right outside.', hours: ['Monday – Friday: 7:00 AM – 6:00 PM', 'Saturday: 8:00 AM – 1:00 PM', 'Sunday: Closed'], director: 'Dr. Matthew Speciale, PT, DPT', gallery: media.gallery['pacific-beach'] },
  { slug: 'mission-beach', name: 'Mission Beach', address: '2999 Mission Blvd Suite 101, San Diego, CA 92109', ext: '4', image: media.locations['mission-beach'], tagline: 'Coastal recovery for an active lifestyle.', blurb: 'Steps from the ocean, we assess your whole kinetic chain to treat overuse injuries, support post-surgical recovery and build lasting strength.', hours: ['Monday – Friday: 7:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'], director: 'Dr. Matthew Speciale, PT, DPT', gallery: media.gallery['mission-beach'] },
  { slug: 'poway', name: 'Poway', address: '12234 Poway Road, Poway, CA 92064', ext: '7', image: media.locations.poway, tagline: 'Comprehensive physical therapy in Poway.', blurb: 'A welcoming, professional clinic for post-surgical rehabilitation, sports injuries and chronic pain, with a plan built around your goals.', hours: ['Monday – Friday: 7:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'], director: 'Dr. Matt Friedman, PT, DPT', gallery: media.gallery['poway'] },
  { slug: 'scripps-ranch', name: 'Scripps Ranch', address: '9972 Scripps Ranch Blvd Suite C-7, San Diego, CA 92131', note: 'Fitness Quest 10', ext: '8', image: media.locations['scripps-ranch'], tagline: 'Dedicated physical therapy in Scripps Ranch.', blurb: 'Personalized care to help you recover from injury and improve how you move, including manual therapy and specialized rehabilitation programs.', hours: ['Monday – Thursday: 7:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'], director: 'Dr. Garrick Li, PT, DPT', gallery: media.gallery['scripps-ranch'] },
  { slug: 'utc', name: 'UTC', address: '10300 Campus Pointe Dr, San Diego, CA 92121', ext: '5', image: media.locations.utc, tagline: 'Comprehensive rehabilitation in the UTC area.', blurb: 'Advanced manual therapy and custom exercise programs for professionals, students and residents of University Town Center. We accept most PPO plans, Medicare and TRICARE.', hours: ['Monday – Friday: 7:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'], director: 'Dr. Maddie Horner, PT, DPT', gallery: media.gallery['utc'] },
];

export const NAV: NavItem[] = [
  { label: 'Why WSPT', href: '/why-wspt/' },
  { label: 'Our Staff', href: '/staff/' },
  {
    label: 'Locations',
    children: CLINICS.map((c) => ({ label: c.name, href: `/locations/${c.slug}/` })),
    viewAll: { label: 'All locations', href: '/locations/' },
  },
  { label: 'Services', children: SERVICES_MENU, viewAll: { label: 'All services', href: '/services/' } },
  {
    label: 'Resources',
    children: [
      { label: 'Forms', href: '/forms/' },
      { label: 'Employment', href: '/careers/' },
      { label: 'Insurance', href: '/insurance/' },
      { label: 'Testimonials', href: '/testimonials/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
];

/* All 24 services, in the same order as the dev site's Services page. */
export const SERVICES_ALL = [
  { key: 'shockwave', title: 'Shockwave Therapy', href: '/shockwave-therapy/', image: media.services.shockwave, text: 'Shockwave therapy uses acoustic waves to reduce pain, promote healing and accelerate tissue recovery.' },
  { key: 'running', title: 'Running Analysis', href: '/running-analysis/', image: media.services.running, text: 'Running analysis evaluates your movement to improve performance, efficiency, and reduce injury risk.' },
  { key: 'acl', title: 'ACL Rehabilitation', href: '/acl-rehabilitation/', image: media.services.acl, text: 'ACL rehabilitation restores knee strength, stability, mobility, and confidence after injury or surgery.' },
  { key: 'returnToSport', title: 'Return-to-Sport Testing', href: '/return-to-sport-testing/', image: media.services.returnToSport, text: 'Return-to-sport testing measures strength, balance, and readiness for safe athletic performance.' },
  { key: 'balance', title: 'Balance Training', href: '/balance-training/', image: media.services.balance, text: 'Improve stability, coordination, and confidence through personalized exercises designed to enhance everyday movement safely.' },
  { key: 'vestibular', title: 'Vestibular Therapy', href: '/vestibular-therapy/', image: media.services.vestibular, text: 'Vestibular therapy improves balance, reduces dizziness, and restores confidence in daily movements.' },
  { key: 'sports', title: 'Sports Physical Therapy', href: '/sports-physical-therapy/', image: media.services.sports, text: 'Sports physical therapy helps restore movement and support faster recovery for active lifestyles.' },
  { key: 'postSurgical', title: 'Post-Surgical Rehabilitation', href: '/post-surgical-rehabilitation/', image: media.services.postSurgical, text: 'Post-surgical rehabilitation restores strength, mobility, function, and supports a safe recovery process.' },
  { key: 'back', title: 'Back Pain Physical Therapy', href: '/back-pain-physical-therapy/', image: media.services.back, text: 'Back pain physical therapy relieves discomfort, improves mobility, and restores everyday function naturally.' },
  { key: 'knee', title: 'Knee Pain Physical Therapy', href: '/knee-pain-physical-therapy/', image: media.services.knee, text: 'Knee pain physical therapy reduces discomfort, improves strength, restores mobility, and supports lasting recovery.' },
  { key: 'pickleball', title: 'Pickleball Injury Rehabilitation', href: '/pickleball-injury-rehabilitation/', image: media.services.pickleball, text: 'Pickleball injury rehabilitation relieves pain, restores movement and helps players safely return to the court.' },
  { key: 'shoulder', title: 'Shoulder Physical Therapy', href: '/shoulder-physical-therapy/', image: media.services.shoulder, text: 'Shoulder physical therapy relieves pain, restores mobility, strengthens muscles, and improves daily function.' },
  { key: 'golf', title: 'Golf Rehabilitation', href: '/golf-rehabilitation/', image: media.services.golf, text: 'Golf rehabilitation improves swing mechanics, restores mobility, reduces pain, and enhances performance safely.' },
  { key: 'performance', title: 'Performance Training', href: '/performance-training/', image: media.services.performance, text: 'Performance training builds strength, speed, endurance, and maximizes athletic potential safely and effectively.' },
  { key: 'bfr', title: 'Blood Flow Restriction Training', href: '/blood-flow-restriction-training/', image: media.services.bfr, text: 'Blood flow restriction training builds strength using lighter loads while supporting faster recovery.' },
  { key: 'ankle', title: 'Ankle Pain Physical Therapy', href: '/ankle-pain-physical-therapy/', image: media.services.ankle, text: 'Restore mobility, build joint stability, and step back into your active lifestyle with personalized ankle rehabilitation.' },
  { key: 'neuropathy', title: 'Neuropathy Physical Therapy', href: '/neuropathy-physical-therapy/', image: media.services.neuropathy, text: 'Relieve nerve pain, reduce tingling and numbness, and restore functional mobility with personalized physical therapy.' },
  { key: 'hip', title: 'Hip Pain Physical Therapy', href: '/hip-pain-physical-therapy/', image: media.services.hip, text: 'We focus on identifying the underlying joint or tissue dysfunction rather than just masking discomfort.' },
  { key: 'vertigo', title: 'Vertigo Physical Therapy', href: '/vertigo-physical-therapy/', image: media.services.vertigo, text: 'Restore balance, relieve dizziness, and regain your confidence with personalized vestibular rehabilitation.' },
  { key: 'posture', title: 'Posture Correction & Alignment', href: '/posture/', image: media.services.posture, text: 'Improve posture, movement, and body alignment with personalized therapy designed to reduce strain and support better mobility.' },
  { key: 'foot', title: 'Foot Pain Treatment', href: '/foot-pain/', image: media.services.foot, text: 'Relieve foot pain with personalized therapy that improves mobility, restores function, and supports comfortable, confident movement.' },
  { key: 'wrist', title: 'Wrist/Hand Pain', href: '/wrist-hand-pain/', image: media.services.wrist, text: 'Reduce wrist and hand pain with targeted therapy that restores movement, strength, function, and everyday comfort.' },
  { key: 'elbow', title: 'Elbow Pain', href: '/elbow-pain/', image: media.services.elbow, text: 'Relieve elbow pain with personalized therapy that improves strength, mobility, function, and comfort during everyday activities.' },
  { key: 'gait', title: 'Gait Training', href: '/gait-training/', image: media.services.gait, text: 'Improve walking patterns with personalized gait training that enhances balance, coordination, stability, and confidence.' },
];

/* ───────── Featured services (flip cards) — same first six as the dev homepage, plus two more ───────── */
export const FEATURED_SERVICES = (['back','postSurgical','shoulder','knee','pickleball','shockwave','running','acl'] as const).map((k) => SERVICES_ALL.find((x) => x.key === k)!);

/* ───────── Why Us timeline ───────── */
export const WHY_STEPS = [
  { title: 'Schedule in about two minutes',
    text: 'Pick the location and appointment time that work best for you and book online right now. No phone tag, no waiting.',
    image: media.why[0] },
  { title: 'Licensed therapist care only',
    text: 'Your entire treatment is provided by a licensed therapist. No aides. No techs. No handoffs.',
    image: media.why[1] },
  { title: 'A plan built around you',
    text: 'Your treatment is designed around your condition, your goals and how your body responds to care. No cookie-cutter plans.',
    image: media.why[2] },
  { title: 'Technology that proves progress',
    text: 'Advanced treatment technology and objective testing guide your care and measure how far you’ve come.',
    image: media.why[3] },
  { title: 'Clinicians who keep learning',
    text: 'Every week our therapists receive one-on-one, hands-on mentorship, plus advanced orthopedic and manual therapy education through NOMPTI.',
    image: media.why[4] },
];

/* ───────── Technology ───────── */
export const TECH_TOOLS = [
  { name: 'PhysioROM', text: 'Instantly analyzes range of motion at every joint, with real-time feedback on deficits so progress is tracked right away.' },
  { name: 'PhysioSport', text: 'Instantly analyzes athletic movements to show exactly where problems appear during high-speed activity.' },
];
export const TECH_BENEFITS = [
  'Real-time 3D analysis',
  'Injury prevention on and off the field, and in the workplace',
  'Improved sports performance',
  'Initial and follow-up assessments to track progress',
  'Better overall wellness',
];

/* ───────── Athletes / testimonials (real roster from the dev site) ───────── */
export const ATHLETES = [
  { name: 'Matt Kemp', file: 'Screenshot-2026-07-31-at-10.03.29-AM.png', honors: '2× All-Star · 2× Silver Slugger · 2× Gold Glove' },
  { name: 'Drew Brees', file: 'Screenshot-2026-07-31-at-10.52.16-AM.png', honors: 'Super Bowl XLIV MVP · NFL Comeback Player of the Year' },
  { name: 'Aaron Rodgers', file: 'Screenshot-2026-07-31-at-10.59.02-AM.png', honors: 'Super Bowl XLV Champion · 2× NFL MVP · 6× Pro Bowl' },
  { name: 'Gordon Hayward', file: 'Screenshot-2026-07-31-at-10.25.51-AM.png', honors: 'NBA All-Star · Horizon League Player of the Year' },
  { name: 'Darren Sproles', file: 'Screenshot-2026-07-31-at-10.44.33-AM.png', honors: '3× Pro Bowl · AP Second-team All-Pro' },
  { name: 'Troy Tulowitzki', file: 'Screenshot-2026-07-31-at-11.09.52-AM.png', honors: '5× All-Star · 2× Gold Glove · 2× Silver Slugger' },
  { name: 'Jake Peavy', file: 'Screenshot-2026-07-31-at-11.33.45-AM.png', honors: '2× World Series Champion · NL Cy Young Award' },
  { name: 'Heather Mitts', file: 'Screenshot-2026-07-31-at-12.41.41-PM.png', honors: '3× Olympic Gold Medalist' },
  { name: 'Alysia Montaño', file: 'Screenshot-2026-07-31-at-11.08.00-AM.png', honors: '2012 Olympian · 7× USA Champion' },
  { name: 'Wil Myers', file: 'Screenshot-2026-07-31-at-10.56.09-AM.png', honors: 'All-Star · AL Rookie of the Year' },
];

/* ───────── Blog ───────── */
// The first post is real (from the dev site). The other two are SAMPLES — replace when you publish more posts.
export const POSTS = [
  { title: 'Sports Rehabilitation: Helping Athletes Recover Stronger and Return to Peak Performance',
    excerpt: 'Whether you’re a pro, a weekend warrior, or simply love staying active, an injury can disrupt your routine. Here is how sports rehabilitation restores movement and rebuilds strength.',
    href: '/sports-rehabilitation-helping-athletes-recover-stronger-and-return-to-peak-performance/',
    date: 'June 22, 2026', tag: 'Sports Rehab', image: media.blog.sports, sample: false },
  { title: 'Shockwave Therapy: How Sound Waves Speed Up Healing',
    excerpt: 'A plain-English look at what shockwave therapy feels like, what it treats, and who benefits most.',
    href: '/shockwave-therapy/', date: 'Sample post', tag: 'Treatments', image: media.blog.shockwave, sample: true },
  { title: 'Why a 3D Running Analysis Can Prevent Your Next Injury',
    excerpt: 'How motion analysis spots small movement problems long before they turn into pain.',
    href: '/running-analysis/', date: 'Sample post', tag: 'Performance', image: media.blog.running, sample: true },
];

export const SOCIALS = [
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
  { label: 'YouTube', href: '#' },
];

/* ───────── Our Staff (homepage shows six; the full directory lives on /staff/) ───────── */
export const STAFF_FEATURED = [
  { name: 'Dr. Kahl Goldfarb', creds: 'PT, DPT, OCS, OMT, CSCS', role: 'CEO / Founder', image: media.staff.goldfarb, href: '/dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs/' },
  { name: 'Dr. Sidjonn “CJ” Regala', creds: 'PT, DPT', role: 'Director, Carmel Valley', image: media.staff.regala, href: '/dr-sidjonn-cj-regala-pt-dpt/' },
  { name: 'Dr. David Evans', creds: 'PT, DPT, OCS', role: 'Director, Coronado', image: media.staff.evans, href: '/dr-david-evans-pt-dpt-ocs/' },
  { name: 'Dr. Garrick Li', creds: 'PT, DPT, CERT. VRS', role: 'Director, Scripps Ranch', image: media.staff.li, href: '/dr-garrick-li-pt-dpt-cert-vrs/' },
  { name: 'Dr. Maddie Horner', creds: 'PT, DPT', role: 'Director, UTC', image: media.staff.horner, href: '/dr-maddie-horner-pt-dpt/' },
  { name: 'Dr. Matt Friedman', creds: 'PT, DPT', role: 'Director, Mission Beach & Poway', image: media.staff.friedman, href: '/dr-matt-friedman-pt-dpt/' },
];
