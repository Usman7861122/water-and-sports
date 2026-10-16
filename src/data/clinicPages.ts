// Extra, page-level content for each clinic page (copied from the dev site). Clinics without an entry fall back to CLINICS data.
export type ClinicExtra = {
  tagline?: string;
  about: string[];
  trusted?: string;
  conditions: string[];
  specialists: string[]; // team slugs, in display order
  faqs: { q: string; a: string }[];
};

const TRUSTED = "Trusted by professional athletes, former official physical therapists for the San Diego Padres, and current consultants for the Chicago White Sox. We bring elite-level therapeutic strategies to ensure you receive the most advanced care available.";
const CONDITIONS = ["Shockwave Therapy", "Running Analysis", "ACL Rehabilitation", "Return-to-Sport Testing", "Balance Training", "Vestibular Therapy", "Sports Physical Therapy", "Post-Surgical Rehabilitation", "Performance Training", "Back Pain Physical Therapy", "Pickleball Injury Rehabilitation", "Golf Rehabilitation", "Blood Flow Restriction Training", "Ankle Pain Physical Therapy", "Wrist/Hand Pain", "Foot Pain Treatment", "Neuropathy Physical Therapy", "Hip Pain Physical Therapy", "Vertigo Physical Therapy", "Posture Correction & Alignment", "Elbow Pain", "Gait Training"];

export const CLINIC_EXTRA: Record<string, ClinicExtra> = {
  'carmel-valley': {
    tagline: 'Advanced Physical Therapy for the Carmel Valley Community.',
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
  coronado: {
    tagline: "Expert Physical Therapy in the Heart of Coronado.",
    about: [
      "Located conveniently in Coronado, our state-of-the-art clinic provides comprehensive physical therapy and rehabilitation services to the island’s vibrant, active community. We understand that whether you’re enjoying the pristine beaches, participating in local sports, or managing a demanding career, staying pain-free and mobile is essential.",
      "Given our close proximity to the Naval Base, we have a deep appreciation for the unique physical demands placed on our military personnel. We proudly serve active-duty service members, veterans, and their families, ensuring they receive the high-caliber care required to maintain optimal readiness and recover swiftly from injuries.",
      "Our approach is strictly evidence-based and personalized. We focus on manual therapy, aquatic therapy, and advanced biomechanical assessments to not only treat symptoms but resolve the underlying cause of your pain. At our Coronado clinic, your recovery is our primary mission."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-david-evans-pt-dpt-ocs", "dr-robert-avery-pt-dpt", "dr-cindy-gutierrez-pt-dpt", "dr-matthew-schiffino-pt-dpt", "dr-jenna-freeman-pt-dpt", "dr-adil-alexander-dpt"],
    faqs: [
      {
            "q": "Do you accept TRICARE at the Coronado clinic?",
            "a": "Yes, we proudly accept TRICARE and work closely with military families to ensure seamless coverage for physical therapy services."
      },
      {
            "q": "Are same-day appointments available?",
            "a": "Depending on our therapists’ schedules, we often accommodate same-day or next-day appointments. Please call our clinic directly to check immediate availability."
      },
      {
            "q": "What should I bring to my first appointment?",
            "a": "Please bring your photo ID, insurance card, any relevant medical records or imaging (MRI/X-rays), and comfortable clothing that allows for easy movement."
      }
],
  },
  downtown: {
    tagline: "Accessible, Elite Recovery for the Urban Professional.",
    about: [
      "Located in the heart of the city, our Downtown San Diego clinic offers highly accessible, top-tier physical therapy designed for urban professionals, downtown residents, and local workers. We understand that your time is valuable, which is why we focus on efficient, highly effective treatment protocols.",
      "Extended clinic hours make it easy to schedule your rehabilitation before work, during your lunch break, or after your commute. Whether you are dealing with postural strain from long hours at a desk or recovering from an active weekend injury, our therapists provide solutions tailored to the fast-paced downtown lifestyle.",
      "We employ advanced manual therapy and functional strength training to get you back to your routine quickly. Our modern facility provides a welcoming, professional environment where healing is prioritized."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-matt-friedman-pt-dpt", "dr-avery-grant-pt-dpt", "ali-rios-pta-cfps", "dayna-hansen-pta", "dr-nastaran-pourdehmobed-dpt"],
    faqs: [
      {
            "q": "Is it easy to get to the clinic via public transit?",
            "a": "Yes, our clinic is highly accessible via the trolley lines and multiple bus routes, making it perfect for downtown commuters."
      },
      {
            "q": "Do you treat postural issues related to desk work?",
            "a": "Absolutely. A large portion of our downtown patients seek treatment for neck, shoulder, and lower back pain caused by ergonomic and postural strain. We offer specialized therapies and ergonomic education."
      },
      {
            "q": "Can I schedule appointments during my lunch break?",
            "a": "Yes! We intentionally stagger our therapists’ schedules to accommodate lunchtime appointments for working professionals."
      }
],
  },
  "pacific-beach": {
    tagline: "Elite Physical Therapy & Sports Medicine in Pacific Beach.",
    about: [
      "Located in the heart of Pacific Beach, our premier physical therapy clinic is committed to delivering exceptional, personalized care for individuals of all activity levels. Conveniently located inside Fitness Quest 10, we serve busy professionals, active families, fitness enthusiasts, surfers, runners, and competitive athletes throughout the San Diego community.",
      "Pacific Beach is known for its energetic coastal lifestyle, making it the perfect environment for sports rehabilitation, performance enhancement, and injury prevention. Our experienced clinicians specialize in treating orthopedic conditions, sports injuries, and movement dysfunctions using evidence-based techniques, advanced rehabilitation equipment, and individualized treatment plans. We also offer specialized aquatic therapy at our dedicated pool location on Ocean Front Walk, providing a low-impact environment ideal for post-surgical recovery, chronic pain management, and functional rehabilitation.",
      "Whether you’re recovering from surgery, returning to your favorite sport, or striving to improve your overall performance and mobility, our team is dedicated to helping you reach your goals. At WSPT Pacific Beach, we combine clinical expertise, innovative treatment methods, and compassionate care to help you move better, recover faster, and live an active, healthy lifestyle."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-matthew-speciale-pt-dpt", "micaela-fairchild-pta", "heaven-berg-pta-mfdc", "nicole-pino-pta", "dr-ryan-elston-pt-dpt"],
    faqs: [
      {
            "q": "Do you offer specialized sports performance programs?",
            "a": "Yes. We offer advanced biomechanical assessments, golf swing analysis, and targeted sports rehabilitation for high-performance athletes in the La Jolla area."
      },
      {
            "q": "Is there parking available at the clinic?",
            "a": "We offer dedicated patient parking right outside our clinic doors for your convenience."
      },
      {
            "q": "Do I need a doctor's referral?",
            "a": "California allows direct access to physical therapy, meaning you can often be evaluated and treated without a referral. However, some insurance plans may require one. Call us and we can verify your benefits."
      }
],
  },
  "mission-beach": {
    tagline: "Coastal Recovery for an Active Lifestyle.",
    about: [
      "Located steps from the ocean, our Mission Beach clinic caters to a wellness-focused population that loves the outdoors. From avid surfers to dedicated runners and cyclists, our community relies on us to keep them moving and performing at their peak.",
      "We embrace a holistic, proactive approach to physical therapy. Rather than merely treating an acute injury, our therapists assess your entire kinetic chain to identify vulnerabilities and build sustainable strength. We are experts in treating overuse injuries, post-surgical rehabilitation, and providing preventative care.",
      "Equipped with modern rehabilitative technologies, the Mission Beach location provides a tranquil, healing environment. Let us help you overcome pain and return to the active lifestyle you love."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-matthew-speciale-pt-dpt", "micaela-fairchild-pta", "heaven-berg-pta-mfdc", "nicole-pino-pta", "dr-ryan-elston-pt-dpt"],
    faqs: [
      {
            "q": "Do you offer preventative physical therapy?",
            "a": "Yes. Many of our active coastal residents utilize our services for injury prevention, flexibility training, and mobility maintenance even when they are not actively injured."
      },
      {
            "q": "Can you help with running or cycling injuries?",
            "a": "Absolutely. Overuse injuries such as IT band syndrome, plantar fasciitis, and runner’s knee are common. We utilize gait analysis and specialized manual therapy to resolve these issues."
      },
      {
            "q": "What insurance plans do you accept?",
            "a": "We accept most major PPO insurances, Medicare, and TRICARE. We also offer affordable cash-pay rates. Please contact our office for specific plan verifications."
      }
],
  },
  poway: {
    tagline: "Comprehensive Physical Therapy in Poway.",
    about: [
      "Our Poway clinic offers a welcoming and professional environment for all your physical therapy needs. We are dedicated to helping our patients achieve their optimal level of physical function and well-being.",
      "We provide a wide range of services, including post-surgical rehabilitation, sports injury treatment, and chronic pain management. Our experienced therapists use the latest evidence-based techniques to ensure the best possible outcomes.",
      "We believe in a patient-centered approach, working closely with you to develop a personalized treatment plan that addresses your specific goals and concerns."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-matt-friedman-pt-dpt", "dr-ling-sun-pt-dpt"],
    faqs: [
      {
            "q": "Do you treat work-related injuries?",
            "a": "Yes, we have extensive experience treating work-related injuries and can help you safely return to your job."
      },
      {
            "q": "How do I schedule an appointment?",
            "a": "You can schedule an appointment by calling our clinic directly or by using the online request form on our website."
      },
      {
            "q": "What should I expect during my treatment sessions?",
            "a": "Your treatment sessions will typically involve a combination of manual therapy, therapeutic exercises, and education on how to manage your condition at home."
      }
],
  },
  "scripps-ranch": {
    tagline: "Dedicated Physical Therapy in Scripps Ranch.",
    about: [
      "Our Scripps Ranch clinic is dedicated to providing the highest quality physical therapy services to our local community. We focus on personalized care to help you recover from injuries and improve your overall physical function.",
      "We offer a comprehensive range of services, including manual therapy, therapeutic exercise, and specialized rehabilitation programs tailored to your unique needs.",
      "Our experienced therapists are committed to helping you achieve optimal health and wellness in a comfortable and supportive environment."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-garrick-li-pt-dpt-cert-vrs", "dr-cindy-gutierrez-pt-dpt", "vanessa-jasso-pta"],
    faqs: [
      {
            "q": "Do you treat back pain?",
            "a": "Yes, we specialize in treating all types of back pain, from acute injuries to chronic conditions, using evidence-based therapies."
      },
      {
            "q": "What should I expect during my first visit?",
            "a": "Your first visit will include a comprehensive evaluation by a licensed physical therapist, who will then develop a personalized treatment plan for you."
      },
      {
            "q": "Do you offer preventative care?",
            "a": "Yes, we provide preventative care programs to help you avoid future injuries and maintain optimal physical health."
      }
],
  },
  utc: {
    tagline: "Comprehensive Rehabilitation in the UTC Area.",
    about: [
      "Conveniently located in the University Town Center area, our clinic provides exceptional physical therapy services to professionals, students, and residents of the surrounding communities.",
      "We specialize in treating a wide range of musculoskeletal conditions, utilizing advanced manual therapy techniques and customized exercise programs to restore function and alleviate pain.",
      "Our dedicated team of therapists is committed to helping you achieve your rehabilitation goals in a supportive and encouraging environment."
],
    trusted: TRUSTED,
    conditions: CONDITIONS,
    specialists: ["dr-kahl-goldfarb-pt-dpt-ocs-omt-cscs", "dr-maddie-horner-pt-dpt", "dr-nader-alhooie-pt-dpt", "andrew-pitters-pta"],
    faqs: [
      {
            "q": "Do you accept my insurance?",
            "a": "We accept most major PPO insurances, Medicare, and TRICARE. Please contact our office for specific plan verifications."
      },
      {
            "q": "How long will my treatment take?",
            "a": "The duration of your treatment depends on your specific condition and goals. Your therapist will discuss your personalized plan during your initial evaluation."
      },
      {
            "q": "Do I need to bring anything to my first visit?",
            "a": "Please bring your photo ID, insurance card, and any relevant medical records or imaging."
      }
],
  },
};

/** Nearby neighborhoods and cities each clinic serves (shown in the page header for local SEO). Edit freely. */
export const CLINIC_AREAS: Record<string, { places: string[]; region: string }> = {
  'carmel-valley': { places: ['Carmel Valley', 'Del Mar', 'Solana Beach', 'Torrey Pines', 'Torrey Hills', 'Pacific Highlands Ranch'], region: 'North County Coastal area' },
  coronado: { places: ['Coronado', 'Imperial Beach', 'Point Loma', 'Downtown San Diego', 'National City'], region: 'South Bay area' },
  downtown: { places: ['the Gaslamp Quarter', 'East Village', 'Little Italy', 'Bankers Hill', 'Hillcrest', 'Barrio Logan'], region: 'greater Downtown San Diego area' },
  'pacific-beach': { places: ['Pacific Beach', 'Mission Beach', 'La Jolla', 'Crown Point', 'Bay Park', 'Clairemont'], region: 'greater Mission Bay area' },
  'mission-beach': { places: ['Mission Beach', 'Pacific Beach', 'Ocean Beach', 'Point Loma', 'Bay Park', 'Clairemont'], region: 'greater Mission Bay area' },
  poway: { places: ['Poway', 'Rancho Bernardo', 'Rancho Peñasquitos', 'Scripps Ranch', 'Escondido', 'Ramona'], region: 'North San Diego County area' },
  'scripps-ranch': { places: ['Scripps Ranch', 'Mira Mesa', 'Rancho Peñasquitos', 'Sabre Springs', 'Tierrasanta', 'Rancho Bernardo'], region: 'North San Diego area' },
  utc: { places: ['La Jolla', 'University City', 'the Golden Triangle', 'Clairemont', 'Mira Mesa', 'Torrey Pines'], region: 'greater San Diego area' },
};
