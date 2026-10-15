/**
 * All remote images live here so you can swap them in ONE place.
 * They currently load from the WordPress dev site. When the design is final,
 * download the ones you keep into /public/images and point these to local paths.
 */
// '/media/' is served by a rewrite to the dev server (see vercel.json / astro.config.mjs), so images load over https.
// Run `npm run media:download` to save them into public/media — local files win over the rewrite automatically.
const BASE = import.meta.env.PUBLIC_MEDIA_BASE ?? '/media/';
const m = (path: string) => BASE + path;

export const media = {
  logo: '/images/logo.webp',

  // Hero slides. Slides 2 and 3 are clinic photos for now: swap in your licensed Shutterstock files
  // (save them in public/images, e.g. hero-2.webp) and change the src below.
  hero: [
    { src: '/images/Banner.webp', alt: 'Recovery lounge and treatment floor at a Water & Sports clinic', pos: 'center 60%' },
    { src: '/images/wspt_5_30_14_14_23nczagqjs.webp', alt: 'Treatment floor at the Mission Beach clinic', pos: 'center 50%' },
    { src: '/images/poway_2_ajxvu0473h.webp', alt: 'Treatment area at the Poway clinic', pos: 'center 50%' },
  ],

  about: {
    main: '/images/Banner.webp',
    second: m('2026/09/unnamed-2.jpg'),
  },

  services: {
    shockwave: m('2026/07/extracorporeal-shockwave-therapy.jpg'),
    running: m('2026/07/2150165163-e1783622834593.jpg'),
    acl: m('2026/07/2150321573.jpg'),
    returnToSport: m('2026/07/StockSnap_RXOZ3RUP54.webp'),
    balance: m('2026/07/2051.jpg'),
    vestibular: m('2026/08/Epley-Maneuver.avif'),
    sports: m('2026/06/sports_0qagckt23p.webp'),
    postSurgical: m('2026/07/16905.jpg'),
    back: m('2026/07/2149115627.jpg'),
    knee: m('2026/07/1760.jpg'),
    pickleball: m('2026/07/aSCeo2GnmrmGqIMR_AdobeStock_567417960.avif'),
    shoulder: m('2026/07/2148836487.jpg'),
    golf: m('2026/07/22922.jpg'),
    performance: m('2026/07/21899.jpg'),
    bfr: m('2026/07/BloodFlowRestriction_article.jpg'),
    ankle: m('2026/08/pexels-funkcines-terapijos-centras-927573878-20860612-scaled.jpg'),
    neuropathy: m('2026/08/pexels-cansu-hangul-464804780-30483021-scaled.jpg'),
    hip: m('2026/08/pexels-shvetsa-4587427-scaled.jpg'),
    vertigo: m('2026/08/pexels-karola-g-4506216-scaled.jpg'),
    posture: m('2026/08/Posture.jpeg'),
    foot: m('2026/08/1146.jpg'),
    wrist: m('2026/08/123.jpg'),
    elbow: m('2026/09/shutterstock_1125787511.jpg'),
    gait: m('2026/08/234.jpg'),
  },

  why: [
    m('2026/06/downtown_clinic_1_236usav22q.webp'),
    m('2026/06/wspt_misc-17-gDNDv.webp'),
    m('2026/06/manual_therapy_hhheo8udbb.webp'),
    m('2026/07/helix3d.jpg'),
    m('2026/06/team_training_2_xjhlqnpffb.webp'),
  ],

  locations: {
    'carmel-valley': m('2026/06/carmel_thumbn_pjwqb9zl07.webp'),
    coronado: '/images/coronado_2_jwwyffesgk.webp',
    downtown: m('2026/06/downtown_2_z1j8jenmtl.webp'),
    'pacific-beach': m('2026/08/PB-Location-reVis-31copy.jpg'),
    'mission-beach': '/images/wspt_5_30_14_14_23nczagqjs.webp',
    poway: '/images/poway_2_ajxvu0473h.webp',
    'scripps-ranch': m('2026/06/scripps_2_jtphk17z3n.webp'),
    utc: m('2026/06/utc_2_cyehqfqb2f.webp'),
  } as Record<string, string>,

  /** Clinic photos (first few from each clinic page on the dev site). */
  gallery: {
    'carmel-valley': [m('2026/06/carmel_valley11_15_7_cur2423gn9.webp'), m('2026/06/Carmel-Valley-image2.jpg'), m('2026/06/carmel_valley11_15_12_1mwuz0yl31.jpg')],
    coronado: [m('2026/06/coronado_clinic_1_zbw6v0k6ew.webp'), m('2026/06/coronado_clinic_2_0cu1t6b86m.webp'), m('2026/06/coronado_clinic_3_nwu0yqa25t.webp')],
    downtown: [m('2026/06/downtown_clinic_1_236usav22q.webp'), m('2026/06/downtown_clinic_5_20xfdr9ycr.webp'), m('2026/06/downtown_clinic_8_cgwodiotf0.webp')],
    'pacific-beach': [m('2026/09/unnamed-1-scaled.jpg'), m('2026/09/unnamed.jpg'), m('2026/09/unnamed-2.jpg')],
    'mission-beach': [m('2026/06/wspt_5_30_14_1_ov1zdc97l5.webp'), m('2026/06/wspt_5_30_14_3_g853966hie.webp'), m('2026/06/wspt_5_30_14_5_2fiptmk8p9.webp')],
    poway: [m('2026/06/poway_clinic_1_m8fegua0f3.webp'), m('2026/06/poway_clinic_2_jh0iqivv6a.webp'), m('2026/06/poway_clinic_3_0qtfvbo9zt.webp')],
    'scripps-ranch': [m('2026/06/sr_clinic_17_fxfckjxxdl.webp'), m('2026/06/sr_clinic_14_k8od5aw11x.webp'), m('2026/06/sr_clinic_15_m4e1y3xk43.webp')],
    utc: [m('2026/06/utc_aug_20_7_dhqwoeicfe.webp'), m('2026/06/utc_aug_20_6_tqugey0sxi.webp'), m('2026/06/utc_aug_20_14_v3l1kwhhzd.webp')],
  } as Record<string, string[]>,


  tech: {
    base: m('2026/08/3D-Infrared-Analysis.png'),
    graph: m('2026/08/graph.png'),
    table: m('2026/08/table.png'),
    frame: m('2026/08/frameviewer.png'),
    treadmill: m('2026/07/helix3d.jpg'),
  },

  blog: {
    sports: m('2026/07/A-therapist-palpates-the-shoulder-of-a-sportswoman-experiencing-shoulder-pain-and-tendonitis-during-a-physical-therapy-session.jpg'),
    shockwave: m('2026/07/extracorporeal-shockwave-therapy.jpg'),
    running: m('2026/07/Running-Assessment.png'),
  },

  athlete: (file: string) => m('2026/07/' + file),
};
