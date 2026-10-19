// Legal pages. Drafted as a solid starting point; have your attorney / compliance officer review before launch.
import { EMAIL, PHONE } from './content';

export type LegalSection = { id: string; h: string; paras?: string[]; list?: string[]; after?: string[] };
export type LegalPage = { slug: string; title: string; short: string; updated: string; intro: string; description: string; sections: LegalSection[] };

const UPDATED = 'October 19, 2026';
const CONTACT = `Email ${EMAIL} or call ${PHONE}.`;

export const LEGAL: Record<string, LegalPage> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    short: 'Privacy Policy',
    updated: UPDATED,
    description: 'How Water & Sports Physical Therapy collects, uses and protects information from this website, and your privacy choices.',
    intro: 'This policy explains what information we collect on this website, how we use it, and the choices you have. How we protect your health records is explained in our HIPAA Notice of Privacy Practices.',
    sections: [
      { id: 'who-we-are', h: 'Who we are', paras: ['Water & Sports Physical Therapy ("WSPT", "we", "us") provides outpatient physical therapy at clinics across San Diego, California. This policy covers this website and its forms. It does not replace our HIPAA Notice of Privacy Practices, which covers your health information.'] },
      { id: 'information-we-collect', h: 'Information we collect', paras: ['We collect only what we need to answer you and run the site.'], list: [
        'Information you give us, such as your name, phone number, email address and message when you use a contact or job application form.',
        'Technical information, such as your browser type, device, pages viewed and approximate location, collected through cookies or similar tools only if you allow them (see our Cookie Policy).',
        'Information from third parties you choose to use with us, such as our online appointment and patient portal. That portal has its own privacy terms.'] },
      { id: 'health-information', h: 'Please do not send health details through web forms', paras: ['Website forms and regular email are not a secure way to send medical information. Please share symptoms, diagnoses and insurance details only by phone, in person, or through our secure patient portal. Health information we receive as a care provider is protected under HIPAA.'] },
      { id: 'how-we-use', h: 'How we use information', list: [
        'To reply to your questions and requests, and to schedule care.',
        'To process job applications.',
        'To keep the website secure, fix errors and improve it.',
        'To meet legal and insurance requirements.',
        'To send updates you asked for. You can opt out at any time.'] },
      { id: 'sharing', h: 'How we share information', paras: ['We do not sell your personal information, and we do not share it for cross-context behavioral advertising. We share it only with:'], list: [
        'Service providers who help us run the website, send email and schedule appointments, and who must protect it.',
        'Your insurance plan or others involved in your care, when allowed by HIPAA.',
        'Authorities or other parties when the law requires it, or to protect safety and rights.'] },
      { id: 'cookies', h: 'Cookies and tracking', paras: ['Strictly necessary cookies keep the site working. Optional cookies for preferences, analytics or marketing are off until you turn them on. You can change your choice at any time using "Cookie Settings" in the footer. Details are in our Cookie Policy.', 'If your browser sends a Global Privacy Control signal, we treat it as a request to keep optional cookies off.'] },
      { id: 'california-rights', h: 'Your California privacy rights', paras: ['If you live in California, the CCPA/CPRA gives you rights over personal information we hold about you, outside of health records covered by HIPAA and California’s Confidentiality of Medical Information Act:'], list: [
        'Know what we collect, use and share.',
        'Access a copy of your information.',
        'Correct information that is wrong.',
        'Delete information, with some legal exceptions.',
        'Opt out of sale or sharing. We do not sell or share personal information.',
        'Not be treated unfairly for using these rights.'], after: ['To use a right, contact us. We may need to confirm who you are before we act. You may also use an authorized agent.'] },
      { id: 'retention', h: 'How long we keep information', paras: ['We keep website messages and job applications only as long as needed for the purpose they were sent, then delete them. Medical records are kept for the period required by California law.'] },
      { id: 'security', h: 'How we protect information', paras: ['We use reasonable technical and organizational safeguards, including encryption in transit. No website can be 100% secure, so please use care when sharing information online.'] },
      { id: 'children', h: 'Children', paras: ['This website is for adults. We do not knowingly collect personal information from children under 13 through the website. A parent or guardian may contact us to schedule care for a child.'] },
      { id: 'links', h: 'Links to other sites', paras: ['Our site links to other sites, such as our patient portal and social media. We are not responsible for their privacy practices. Please read their policies.'] },
      { id: 'changes', h: 'Changes to this policy', paras: ['We may update this policy. The date at the top shows when it last changed. Big changes will be posted on this page.'] },
      { id: 'contact', h: 'Contact us', paras: [`Questions or requests about privacy? ${CONTACT}`] },
    ],
  },

  terms: {
    slug: 'terms',
    title: 'Terms and Conditions',
    short: 'Terms & Conditions',
    updated: UPDATED,
    description: 'The terms for using the Water & Sports Physical Therapy website.',
    intro: 'By using this website you agree to these terms. If you do not agree, please do not use the site.',
    sections: [
      { id: 'about', h: 'About this website', paras: ['This website is run by Water & Sports Physical Therapy ("WSPT") in San Diego, California. It gives general information about our clinics, people and services.'] },
      { id: 'no-medical-advice', h: 'Not medical advice', paras: ['Content on this site is for education only. It is not medical advice and does not create a patient-provider relationship. Only a licensed therapist who has examined you can advise on your care. See our Medical Disclaimer.', 'If you think you have a medical emergency, call 911.'] },
      { id: 'appointments', h: 'Appointments and requests', paras: ['Submitting a request through this site does not guarantee an appointment. We will confirm by phone or through our patient portal. Insurance coverage depends on your plan, and our team will help you verify benefits.'] },
      { id: 'acceptable-use', h: 'Acceptable use', paras: ['You agree not to:'], list: [
        'Break any law or use the site for fraud.',
        'Try to harm, overload or break into the site or its systems.',
        'Copy the site by automated means (scraping) without our written permission.',
        'Send false, harmful or misleading information in our forms.'] },
      { id: 'ip', h: 'Our content', paras: ['The text, photos, logos, videos and design on this site belong to WSPT or our licensors and are protected by copyright and trademark law. You may view and print pages for personal use. You may not copy, sell or reuse them without written permission.'] },
      { id: 'testimonials', h: 'Athlete names and results', paras: ['Names and achievements of athletes we have treated are shown with respect for their privacy and do not imply endorsement. Results vary from person to person, and we cannot guarantee any outcome.'] },
      { id: 'third-party', h: 'Third-party links and services', paras: ['The site links to other websites and tools, such as our online scheduling and patient portal. We do not control them and are not responsible for their content or terms.'] },
      { id: 'disclaimer', h: 'Disclaimer of warranties', paras: ['The site is provided "as is" and "as available". We work to keep information accurate and up to date, but we do not promise that it is complete, current or error-free, or that the site will always be available.'] },
      { id: 'liability', h: 'Limit of liability', paras: ['To the fullest extent the law allows, WSPT is not liable for indirect, incidental or consequential damages from your use of the site. Nothing here limits liability that cannot be limited by law.'] },
      { id: 'law', h: 'Governing law', paras: ['These terms are governed by the laws of the State of California. Any dispute will be handled in the courts located in San Diego County, California.'] },
      { id: 'changes', h: 'Changes to these terms', paras: ['We may update these terms from time to time. Using the site after a change means you accept the new terms.'] },
      { id: 'contact', h: 'Contact us', paras: [`Questions about these terms? ${CONTACT}`] },
    ],
  },

  'cookie-policy': {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    short: 'Cookie Policy',
    updated: UPDATED,
    description: 'What cookies the Water & Sports Physical Therapy website uses and how to manage your choices.',
    intro: 'Cookies are small files a website saves on your device. This page explains which ones we use and how you control them.',
    sections: [
      { id: 'your-choice', h: 'You are in control', paras: ['When you first visit, a banner lets you accept all, reject optional cookies, or customize. You can change your mind at any time with the "Cookie Settings" link in the footer of every page. We also honor the Global Privacy Control signal from your browser.'] },
      { id: 'categories', h: 'Types of cookies', list: [
        'Strictly necessary: needed for the site to work and to remember your cookie choice. These are always on.',
        'Preferences: remember settings that make the site easier to use. Off until you allow them.',
        'Analytics: help us understand how the site is used so we can improve it. Off until you allow them.',
        'Marketing: used to measure and show relevant ads. Off until you allow them.'] },
      { id: 'cookie-list', h: 'Cookies we use', paras: ['Today the only cookie we set without asking is the one that remembers your consent choice:'], list: [
        'wspt_consent (strictly necessary): stores your cookie choices. Kept for 12 months.'], after: ['If we add analytics or marketing tools, they will be listed here and will load only after you allow that category.'] },
      { id: 'third-party', h: 'Third-party content', paras: ['Some pages show Google Maps for clinic locations. Google may set its own cookies when the map loads. Fonts are loaded from Google Fonts.'] },
      { id: 'browser', h: 'Manage cookies in your browser', paras: ['You can block or delete cookies in your browser settings. If you block strictly necessary cookies, some parts of the site may not work and we cannot remember your choice.'] },
      { id: 'contact', h: 'Contact us', paras: [`Questions about cookies? ${CONTACT}`] },
    ],
  },

  'hipaa-notice': {
    slug: 'hipaa-notice',
    title: 'HIPAA Notice of Privacy Practices',
    short: 'HIPAA Notice',
    updated: UPDATED,
    description: 'How Water & Sports Physical Therapy may use and share your health information, and your rights under HIPAA.',
    intro: 'This notice describes how medical information about you may be used and shared, and how you can get access to it. Please read it carefully.',
    sections: [
      { id: 'our-duties', h: 'Our duties', paras: ['We are required by law to keep your health information private, to give you this notice, and to follow its terms. We will tell you if a breach puts your information at risk.'] },
      { id: 'how-we-use', h: 'How we may use and share your information', paras: ['We may use and share your health information without your written permission for these purposes:'], list: [
        'Treatment: to provide and coordinate your care with your doctors, surgeons and other providers.',
        'Payment: to bill and collect from you, your insurance plan or others, and to check coverage or get approval.',
        'Health care operations: to run our clinics, train staff, review quality and manage the business.',
        'Appointment reminders and information about treatment options or related services.',
        'Business associates who help us and who must also protect your information.'] },
      { id: 'other-permitted', h: 'Other uses the law allows or requires', list: [
        'When required by federal, state or local law.',
        'Public health activities, such as reporting disease or injury.',
        'Reporting abuse, neglect or domestic violence as the law requires.',
        'Health oversight, court orders, and legal proceedings.',
        'Law enforcement in limited situations, and to prevent a serious threat to health or safety.',
        'Workers’ compensation, as needed for work-related injuries.',
        'Coroners, funeral directors and organ donation.',
        'Research that meets privacy rules.',
        'Military, national security and correctional facilities, when applicable.'] },
      { id: 'authorization', h: 'When we need your written permission', paras: ['We need your written authorization for most uses of psychotherapy notes, for marketing, and for the sale of health information. Other uses not described in this notice also require your permission. You may cancel an authorization in writing at any time, except for actions we already took.'] },
      { id: 'family', h: 'Family and friends', paras: ['If you do not object, we may share information with a family member or friend involved in your care or payment. If you cannot agree because of an emergency, we will use our judgment about what is in your best interest.'] },
      { id: 'rights', h: 'Your rights', list: [
        'See and get a copy of your records, usually within 30 days. We may charge a reasonable fee.',
        'Ask us to correct information you believe is wrong or incomplete.',
        'Ask for a list of certain disclosures we made (an accounting).',
        'Ask us to limit how we use or share your information. We do not have to agree, except when you pay in full out of pocket and ask us not to share it with your health plan.',
        'Ask us to contact you in a certain way or at a certain place, such as only by cell phone.',
        'Get a paper copy of this notice at any time, even if you agreed to receive it electronically.',
        'Choose someone to act for you, such as a legal guardian or person with medical power of attorney.',
        'Be told if there is a breach of your unsecured health information.'] },
      { id: 'california', h: 'California law', paras: ['California’s Confidentiality of Medical Information Act and other state laws may give you added protection. When state law is stricter than HIPAA, we follow the stricter rule.'] },
      { id: 'changes', h: 'Changes to this notice', paras: ['We may change this notice and the new notice will apply to all information we hold. The current notice is posted on this website and available at each clinic.'] },
      { id: 'complaints', h: 'Questions and complaints', paras: [`If you think your privacy rights were violated, you can contact us. ${CONTACT} You can also file a complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, at www.hhs.gov/ocr/privacy/hipaa/complaints or by calling 1-877-696-6775.`, 'We will not retaliate against you for filing a complaint.'] },
    ],
  },

  accessibility: {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    short: 'Accessibility',
    updated: UPDATED,
    description: 'Our commitment to an accessible website for everyone, and how to get help or report a problem.',
    intro: 'Water & Sports Physical Therapy wants everyone, including people with disabilities, to be able to use our website and get care.',
    sections: [
      { id: 'commitment', h: 'Our commitment', paras: ['We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. We design for keyboard use, screen readers, clear contrast and readable text.'] },
      { id: 'what-we-do', h: 'What we do', list: [
        'Pages work with a keyboard, and focus is always visible.',
        'Images that carry meaning have text descriptions.',
        'Text meets color-contrast guidelines and can be enlarged without losing content.',
        'Buttons and links are large enough to tap easily.',
        'Animations respect your device’s "reduce motion" setting.',
        'Forms have clear labels and plain-language error messages.'] },
      { id: 'limits', h: 'Known limits', paras: ['Some third-party tools, such as embedded maps and our patient portal, may not be fully accessible. We are working with those providers to improve this. If you have trouble, we are happy to help by phone.'] },
      { id: 'help', h: 'Need help or a different format?', paras: [`We can schedule appointments by phone, provide forms in other formats, and help you with any part of the site. ${CONTACT}`] },
      { id: 'feedback', h: 'Report a problem', paras: ['Tell us the page, what happened and what device or assistive technology you use. We aim to reply within 2 business days.'] },
      { id: 'clinics', h: 'Accessible care', paras: ['If you need an accommodation for your visit, such as a mobility aid, an interpreter or a certain appointment time, please tell us when you book so we can prepare.'] },
    ],
  },

  nondiscrimination: {
    slug: 'nondiscrimination',
    title: 'Notice of Nondiscrimination',
    short: 'Nondiscrimination',
    updated: UPDATED,
    description: 'Water & Sports Physical Therapy complies with civil rights laws and offers language help and aids for people with disabilities.',
    intro: 'We treat everyone with respect and provide care without discrimination.',
    sections: [
      { id: 'policy', h: 'Our policy', paras: ['Water & Sports Physical Therapy complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, sex, sexual orientation or gender identity. We do not exclude people or treat them differently because of these characteristics.'] },
      { id: 'free-help', h: 'Free help', list: [
        'Free aids and services for people with disabilities, such as qualified sign language interpreters and written information in other formats.',
        'Free language services for people whose first language is not English, such as qualified interpreters and information in other languages.'], after: [`To ask for these services, ${CONTACT}`] },
      { id: 'grievance', h: 'If you believe we failed to help', paras: [`You can file a grievance with us. ${CONTACT} We will respond promptly and treat your concern with care.`, 'You can also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, at ocrportal.hhs.gov/ocr/portal/lobby.jsf, by mail at U.S. Department of Health and Human Services, 200 Independence Avenue SW, Room 509F, HHH Building, Washington, DC 20201, or by phone at 1-800-368-1019 (TDD 1-800-537-7697).'] },
      { id: 'language', h: 'Language assistance', paras: ['ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al ' + PHONE + '.', 'Call ' + PHONE + ' if you need help in another language.'] },
    ],
  },

  'medical-disclaimer': {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    short: 'Medical Disclaimer',
    updated: UPDATED,
    description: 'Important information about the educational content on the Water & Sports Physical Therapy website.',
    intro: 'The content on this website is for general information only.',
    sections: [
      { id: 'not-advice', h: 'Not a substitute for care', paras: ['Articles, service pages, videos and other content on this site are meant to educate. They are not medical advice, diagnosis or treatment, and they do not replace a visit with a licensed healthcare professional.'] },
      { id: 'no-relationship', h: 'No patient relationship', paras: ['Reading this site, sending a message or requesting an appointment does not create a patient-provider relationship. That begins only when a therapist evaluates you and agrees to treat you.'] },
      { id: 'emergency', h: 'In an emergency', paras: ['If you have a medical emergency, such as chest pain, trouble breathing, sudden weakness or numbness, or severe injury, call 911 or go to the nearest emergency room. Do not rely on this website.'] },
      { id: 'results', h: 'Results vary', paras: ['Every person and injury is different. Descriptions of treatments, patient stories and athlete names are not a promise or guarantee of results. Your recovery depends on your condition, health and effort.'] },
      { id: 'consult', h: 'Talk to a professional', paras: ['Always ask your therapist or doctor about your own situation before you start, change or stop any exercise or treatment. Never ignore professional advice because of something you read here.'] },
      { id: 'accuracy', h: 'Accuracy', paras: ['We work to keep information current, but healthcare changes quickly and we cannot guarantee that everything is complete or up to date.'] },
      { id: 'contact', h: 'Questions?', paras: [`${CONTACT}`] },
    ],
  },
};

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms & Conditions', href: '/terms/' },
  { label: 'HIPAA Notice', href: '/hipaa-notice/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Accessibility', href: '/accessibility/' },
  { label: 'Nondiscrimination', href: '/nondiscrimination/' },
  { label: 'Medical Disclaimer', href: '/medical-disclaimer/' },
];
