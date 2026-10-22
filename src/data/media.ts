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

  // Hero slides: licensed Shutterstock photos (standard license). Saved as hero-1..3.webp in public/images.
  hero: [
    { src: '/images/hero-baseball.webp', alt: 'A baseball batter in a dark stadium swinging at a pitch under bright lights', pos: '82% 35%' },
    { src: '/images/hero-2.webp', alt: 'A swimmer training in a lap pool, seen from above', pos: 'center 20%' },
    { src: '/images/hero-3.webp', alt: 'An athlete stretching on a running track before training', pos: 'center 45%' },
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
    'carmel-valley': '/images/clinics/carmel-valley-card.webp',
    coronado: '/images/clinics/coronado-card.webp',
    downtown: m('2026/06/downtown_2_z1j8jenmtl.webp'),
    'pacific-beach': m('2026/08/PB-Location-reVis-31copy.jpg'),
    'mission-beach': '/images/clinics/mission-beach-card.webp',
    poway: '/images/clinics/poway-card.webp',
    'scripps-ranch': '/images/clinics/scripps-ranch-card.webp',
    utc: m('2026/06/utc_2_cyehqfqb2f.webp'),
  } as Record<string, string>,

  /** Clinic photos (first few from each clinic page on the dev site). */
  gallery: {
    'carmel-valley': ['/images/clinics/carmel-valley-card.webp', '/images/clinics/carmel-valley-1.webp', '/images/clinics/carmel-valley-2.webp', '/images/clinics/carmel-valley-3.webp', '/images/clinics/carmel-valley-4.webp', '/images/clinics/carmel-valley-5.webp', '/images/clinics/carmel-valley-6.webp'],
    coronado: ['/images/clinics/coronado-card.webp', '/images/clinics/coronado-1.webp', '/images/clinics/coronado-2.webp', '/images/clinics/coronado-3.webp', '/images/clinics/coronado-4.webp', '/images/clinics/coronado-5.webp', '/images/clinics/coronado-6.webp', '/images/clinics/coronado-7.webp'],
    downtown: [m('2026/06/downtown_clinic_1_236usav22q.webp'), m('2026/06/downtown_clinic_5_20xfdr9ycr.webp'), m('2026/06/downtown_clinic_8_cgwodiotf0.webp'), m('2026/06/downtown_pool_8_19_674_vtiet71rkt-scaled.webp'), m('2026/06/downtown_pool_8_19_17_oki4p81vfy.webp')],
    'pacific-beach': [m('2026/09/unnamed-1-scaled.jpg'), m('2026/09/unnamed.jpg'), m('2026/09/unnamed-2.jpg'), '/images/clinics/pacific-beach-1.webp', '/images/clinics/pacific-beach-2.webp'],
    'mission-beach': ['/images/clinics/mission-beach-card.webp', '/images/real/mission-beach-treatment.webp', '/images/clinics/mission-beach-1.webp', '/images/clinics/mission-beach-2.webp', '/images/clinics/mission-beach-3.webp', '/images/clinics/mission-beach-4.webp', '/images/clinics/mission-beach-5.webp', '/images/clinics/mission-beach-6.webp'],
    poway: ['/images/clinics/poway-card.webp', '/images/clinics/poway-1.webp', '/images/clinics/poway-2.webp', '/images/clinics/poway-3.webp', '/images/clinics/poway-4.webp'],
    'scripps-ranch': ['/images/clinics/scripps-ranch-card.webp', '/images/clinics/scripps-ranch-1.webp', '/images/clinics/scripps-ranch-2.webp', '/images/clinics/scripps-ranch-3.webp', '/images/clinics/scripps-ranch-4.webp', '/images/clinics/scripps-ranch-5.webp', '/images/clinics/scripps-ranch-6.webp'],
    utc: [m('2026/06/utc_aug_20_7_dhqwoeicfe.webp'), m('2026/06/utc_aug_20_6_tqugey0sxi.webp'), m('2026/06/utc_aug_20_14_v3l1kwhhzd.webp'), m('2026/06/utc_aug_20_15_8g0vzfd6c3.webp'), m('2026/06/utc_aug_20_18_bf4yovzi31.webp')],
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

  // Team headshots (Our Staff page + profiles), keyed by slug
  team: {
    'dr-sidjonn-cj-regala-pt-dpt': m('2026/07/drkftbbzepj5_5oj5cgmwx9.2CJ22REGALAPTDPT.webp'),
    'dr-david-evans-pt-dpt-ocs': m('2026/07/drpkh7zqxwq6_547bd7tyqc.VIDEVANSPTDPTOCS.webp'),
    'dr-garrick-li-pt-dpt-cert-vrs': m('2026/07/dr_garrick_li_pt_dpt_cert_27icd568wt.VRS_.webp'),
    'dr-maddie-horner-pt-dpt': m('2026/07/drxflhs8f1tm_efkea4via0.ADDIEHORNERPTDPT.webp'),
    'dr-matt-friedman-pt-dpt': m('2026/07/drljud335ajd_s4esyst7ur.ATTFRIEDMANPTDPT.webp'),
    'dr-matthew-speciale-pt-dpt': m('2026/07/drlk0ppz9tm0_e5bhh3waen.HEWSPECIALEPTDPT.webp'),
    'dr-salvatore-torry-fantano-pt-dpt': m('2026/07/drkzzdndnyf4_t34vn29rb7.RY22FANTANOPTDPT.webp'),
    'dr-ling-sun-pt-dpt': m('2026/07/drjzsqhl4ocv_cvgfs9d9z2.LINGSUNPTDPT.webp'),
    'dr-nastaran-pourdehmobed-dpt': m('2026/08/Nas_headshot.jpg'),
    'dr-adil-alexander-dpt': m('2026/08/unnamed-scaled.jpg'),
    'dr-nader-alhooie-pt-dpt': m('2026/07/nader_alhooie_npeyvwf7i4.webp'),
    'dr-avery-grant-pt-dpt': m('2026/07/dr34ld7aespm_qm2f1qqsjn.AveryGrant.webp'),
    'dr-jenna-freeman-pt-dpt': m('2026/07/new_head_1_1qa8hbu9j9.webp'),
    'dr-matthew-schiffino-pt-dpt': m('2026/07/drqtdc90165n_kevg9cfspj.MatthewSchiffino.webp'),
    'dr-cindy-gutierrez-pt-dpt': m('2026/07/cindy_guiterrez_4g3fiolwkx.webp'),
    'dr-robert-avery-pt-dpt': m('2026/07/drzb1mfqel7b_84pubzywy8.ROBERTAVERYPTDPT.webp'),
    'dr-jc-plantier-pt-dpt': m('2026/08/JC-Plantier-small.jpg'),
    'alex-bedrossian-pta': m('2026/08/Alex_Headshot.jpg'),
    'nicole-pino-pta': m('2026/07/nicole_pino_pta_l6vrrnbi1o.webp'),
    'vanessa-jasso-pta': m('2026/07/vanessa_jasso_pta_mkk7zj6ivi.webp'),
    'heaven-berg-pta-mfdc': m('2026/07/heaven_berg_pta_mfdc_qwyz64i9q5.webp'),
    'dayna-hansen-pta': m('2026/07/dayna_hansen_pta_u24at6bf6p.webp'),
    'micaela-fairchild-pta': m('2026/07/micaela_fairchild_pta_nfly2y0grl.webp'),
    'andrew-pitters-pta': m('2026/07/andrew_pitters_pta_gelaw9zemb.webp'),
    'ali-rios-pta-cfps': m('2026/07/ali_rios_pta_cfps_h8dllovlo8.webp'),
    'samantha-grendziak-pta': m('2026/07/samantha_grendziak_pta_tx9mx5b1yb.webp'),
  } as Record<string, string>,

  // Staff headshots (homepage Our Staff section)
  staff: {
    goldfarb: m('2026/06/drcy2vir8p2t_isgwu3dh5r.BPTDPTOCSOMTCSCS-e1781983239766.webp'),
    regala: m('2026/07/drkftbbzepj5_5oj5cgmwx9.2CJ22REGALAPTDPT.webp'),
    evans: m('2026/07/drpkh7zqxwq6_547bd7tyqc.VIDEVANSPTDPTOCS.webp'),
    li: m('2026/07/dr_garrick_li_pt_dpt_cert_27icd568wt.VRS_.webp'),
    horner: m('2026/07/drxflhs8f1tm_efkea4via0.ADDIEHORNERPTDPT.webp'),
    friedman: m('2026/07/drljud335ajd_s4esyst7ur.ATTFRIEDMANPTDPT.webp'),
  },
};
