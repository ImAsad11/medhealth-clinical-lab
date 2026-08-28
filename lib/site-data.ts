export const SITE = {
  name: "Med Health Clinical Lab",
  shortName: "MHCL",
  domain: "https://www.medhealthlab.online",
  phone: "+92 319 781 0761",
  phoneHref: "tel:+923197810761",
  whatsappNumber: "+923197810761",
  email: "mhclislamabad@gmail.com",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=+923197810761&text=Welcome%20to%20Med%20Health%20Clinical%20Lab!%20I'd%20like%20to%20ask%20about...",
  reportPortalHref: "http://medhealthclinicallab.com/maxA/true_home.aspx",
  hqAddress: "Shop 5, United Plaza, Fazal-e-Haq Road, Blue Area, Islamabad",
  hours: "Monday – Sunday, 8:00 AM – 10:00 PM",
  certification: "IHRA-01452",
  founder: "Saeed Akhtar",
  founderTitle: "Founder, Chairman & CEO",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    whatsapp: "https://www.whatsapp.com/",
  },
};

export type Location = {
  slug: string;
  city: string;
  region: string;
  isHQ: boolean;
  address?: string;
  mapQuery: string;
  blurb: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "islamabad-blue-area",
    city: "Islamabad",
    region: "Blue Area — Head Office & Main Laboratory",
    isHQ: true,
    address: "Shop 5, United Plaza, Fazal-e-Haq Road, Blue Area, Islamabad",
    mapQuery:
      "SHOP 5, UNITED PLAZA, FAZAL-E-HAQ ROAD, Blue Area, Islamabad, Islamabad Capital Territory, Pakistan",
    blurb:
      "Our main laboratory and head office, housing the full range of testing departments — hematology, biochemistry, microbiology, and molecular diagnostics.",
  },
  {
    slug: "abbottabad",
    city: "Abbottabad",
    region: "Khyber Pakhtunkhwa",
    isHQ: false,
    mapQuery: "Abbottabad, Khyber Pakhtunkhwa, Pakistan",
    blurb:
      "Our Abbottabad collection point offers sample pickup for the full Med Health test menu, from routine blood work to specialised panels. Samples are couriered same-day to our Islamabad laboratory, and digitally signed reports are available online — no need to travel to the city for either step.",
  },
  {
    slug: "haripur",
    city: "Haripur",
    region: "Khyber Pakhtunkhwa",
    isHQ: false,
    mapQuery: "Haripur, Khyber Pakhtunkhwa, Pakistan",
    blurb:
      "Patients in Haripur can book a home sample collection or visit our local point directly, with every specimen processed on the same certified equipment used at our Islamabad head office. Reports are digitally signed and downloadable as soon as testing is complete.",
  },
  {
    slug: "khanpur",
    city: "Khan Pur",
    region: "Khyber Pakhtunkhwa",
    isHQ: false,
    mapQuery: "Khanpur, Khyber Pakhtunkhwa, Pakistan",
    blurb:
      "Khan Pur residents get access to Med Health's full diagnostic menu without a trip to Islamabad — samples collected locally are transported under proper cold-chain handling and tested at our accredited main laboratory, with results delivered online.",
  },
  {
    slug: "mansehra",
    city: "Mansehra",
    region: "Khyber Pakhtunkhwa",
    isHQ: false,
    mapQuery: "Mansehra, Khyber Pakhtunkhwa, Pakistan",
    blurb:
      "Our Mansehra collection point serves as a local touchpoint for booking and sample collection, while all testing — hematology, biochemistry, and beyond — runs through the same certified laboratory that serves our Islamabad head office.",
  },
  {
    slug: "rahim-yar-khan",
    city: "Rahim Yar Khan",
    region: "Punjab",
    isHQ: false,
    mapQuery: "Rahim Yar Khan, Punjab, Pakistan",
    blurb:
      "In Punjab's Rahim Yar Khan, our collection point handles sample pickup for patients and referring clinicians alike, with specimens forwarded to our Islamabad laboratory for testing and digitally signed reports made available for download shortly after.",
  },
];

export type ServiceTest = {
  name: string;
  turnaround: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  description: string;
  tests: ServiceTest[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "hematology",
    name: "Hematology",
    description: "Blood cell counts, clotting studies, and blood typing.",
    tests: [
      { name: "Complete Blood Count (CBC)", turnaround: "Same day" },
      { name: "ESR", turnaround: "Same day" },
      { name: "Peripheral Blood Film", turnaround: "Same day" },
      { name: "Blood Group & Rh Factor", turnaround: "Same day" },
      { name: "Prothrombin Time (PT/INR)", turnaround: "6 hrs" },
      { name: "APTT (Coagulation Profile)", turnaround: "6 hrs" },
      { name: "Reticulocyte Count", turnaround: "24 hrs" },
    ],
  },
  {
    slug: "biochemistry",
    name: "Clinical Biochemistry",
    description: "Organ function panels and routine metabolic screening.",
    tests: [
      { name: "Liver Function Test (LFT)", turnaround: "6 – 8 hrs" },
      { name: "Renal Function Test (RFT)", turnaround: "6 – 8 hrs" },
      { name: "Lipid Profile", turnaround: "6 – 8 hrs" },
      { name: "Fasting Blood Sugar", turnaround: "Same day" },
      { name: "Random Blood Sugar", turnaround: "Same day" },
      { name: "HbA1c", turnaround: "24 hrs" },
      { name: "Serum Electrolytes", turnaround: "6 hrs" },
      { name: "C-Reactive Protein (CRP)", turnaround: "Same day" },
      { name: "Uric Acid", turnaround: "Same day" },
    ],
  },
  {
    slug: "hormones",
    name: "Hormones & Endocrinology",
    description: "Thyroid, fertility, and metabolic hormone panels.",
    tests: [
      { name: "Thyroid Profile (T3, T4, TSH)", turnaround: "24 hrs" },
      { name: "Vitamin D (25-OH)", turnaround: "48 hrs" },
      { name: "Vitamin B12", turnaround: "24 hrs" },
      { name: "Serum Ferritin", turnaround: "24 hrs" },
      { name: "Prolactin", turnaround: "24 hrs" },
      { name: "FSH / LH", turnaround: "24 hrs" },
      { name: "HbA1c with Insulin", turnaround: "24 – 48 hrs" },
    ],
  },
  {
    slug: "microbiology",
    name: "Microbiology & Serology",
    description: "Infection screening, cultures, and antibody testing.",
    tests: [
      { name: "Urine Routine Examination", turnaround: "Same day" },
      { name: "Urine Culture & Sensitivity", turnaround: "48 – 72 hrs" },
      { name: "Stool Routine Examination", turnaround: "Same day" },
      { name: "Widal Test", turnaround: "Same day" },
      { name: "Hepatitis B & C Screening", turnaround: "24 hrs" },
      { name: "HIV Screening", turnaround: "24 hrs" },
      { name: "Blood Culture & Sensitivity", turnaround: "48 – 72 hrs" },
    ],
  },
  {
    slug: "molecular",
    name: "Molecular & PCR",
    description: "PCR-based diagnostics run in a dedicated molecular facility.",
    tests: [
      { name: "PCR Infectious Disease Panel", turnaround: "24 hrs" },
      { name: "Typhoid PCR", turnaround: "24 hrs" },
      { name: "Tuberculosis PCR", turnaround: "24 – 48 hrs" },
    ],
  },
];

export type Offer = {
  tag: string;
  title: string;
  description: string;
  validity: string;
  image: string;
};

export const OFFERS: Offer[] = [
  {
    tag: "Seasonal",
    title: "Special Health Screening Packages for Ramadan Kareem",
    description:
      "Four baseline lab packages — from Fasting Sugar & Lipid Profile up to a full HbA1c, Lipid, Creatinine & Electrolytes panel — priced for the season so preventive screening doesn't wait.",
    validity: "Valid through Ramadan",
    image: "/images/offers/offer-ramadan-packages.jpg",
  },
  {
    tag: "Popular",
    title: "Full Body Checkup",
    description:
      "CBC, Lipid Profile, LFTs, RFTs, HbA1c, Blood Sugar, Vitamin D3, Calcium, Iron, TSH, HbsAg/HCV and Urine R/E — save up to 40%, now just Rs 6,000.",
    validity: "Ongoing",
    image: "/images/offers/offer-full-body-checkup.jpg",
  },
  {
    tag: "Every day",
    title: "Senior Citizen Care Panel",
    description:
      "A full-body screening package designed for patients 50 and above — CBC, Lipid Profile, LFTs, RFTs, HbA1c, Vitamin D3, Calcium, Iron, TSH and more. Save up to 40%, now Rs 4,500.",
    validity: "Ongoing",
    image: "/images/offers/offer-senior-citizen-care.jpg",
  },
  {
    tag: "Corporate",
    title: "Workplace Wellness Packages",
    description:
      "Bulk screening for offices and factories, with on-site sample collection available for teams — save up to 30%, now Rs 4,200 per employee.",
    validity: "Year-round",
    image: "/images/offers/offer-workplace-wellness.jpg",
  },
  {
    tag: "Every 6 months",
    title: "Executive Profile — Blood Tests",
    description:
      "A recommended twice-yearly panel — Blood CP, LFTs, RFTs, Lipid Profile, Sugar, HbA1c, Vitamin B-12, Folic Acid, HBs, HCV, Electrolytes, H. Pylori Antibodies, Magnesium, TFTs, Calcium, Iron and Urine R/E — now Rs 13,500.",
    validity: "Ongoing",
    image: "/images/offers/offer-executive-profile.jpg",
  },
  {
    tag: "Women's health",
    title: "Female Infertility Profile",
    description:
      "AMH, FSH, LH, Serum Prolactin, Progesterone, Testosterone, Serum TSH and Blood CP, with free home sample collection — 50% discount, now Rs 10,500.",
    validity: "Ongoing",
    image: "/images/offers/offer-female-infertility.jpg",
  },
];

export type Certification = {
  name: string;
  image: string;
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Islamabad Healthcare Regulatory Authority (IHRA)", image: "/images/certs/cert-ihra.jpg" },
  { name: "Punjab Health Care Commission Certification", image: "/images/certs/cert-phc.jpg" },
  { name: "ISO 9001:2015 Certified Company", image: "/images/certs/cert-iso9001.jpg" },
  { name: "Excellence in Quality Certification", image: "/images/certs/cert-nhs-neqas.jpg" },
  { name: "National Institutes of Health", image: "/images/certs/cert-nih.jpg" },
  { name: "Metropolitan Corporation of Islamabad (MCI)", image: "/images/certs/cert-mci.jpg" },
  { name: "Envirocare", image: "/images/certs/cert-envirocare.jpg" },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  {
    label: "About",
    href: "/about",
    children: [
      { href: "/about", label: "Who We Are" },
      { href: "/about#leadership", label: "Leadership" },
      { href: "/about#certification", label: "Certification" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: SERVICE_CATEGORIES.map((c) => ({
      href: `/services#${c.slug}`,
      label: c.name,
    })),
  },
  { href: "/packages", label: "Health Packages" },
  { href: "/offers", label: "Offers" },
  {
    label: "Locations",
    href: "/locations",
    children: LOCATIONS.map((l) => ({
      href: `/locations/${l.slug}`,
      label: l.city,
    })),
  },
  { href: "/reports", label: "Get Reports" },
  { href: "/contact", label: "Contact" },
];

export const STATS = [
  { value: SITE.certification, label: "Certified laboratory" },
  { value: "6", label: "Collection points across Pakistan" },
  { value: "6 hrs", label: "Average report turnaround" },
  { value: "7", label: "Days a week, open till 10 PM" },
];
