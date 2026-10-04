import {
  siCplusplus,
  siDjango,
  siFastapi,
  siFlutter,
  siGit,
  siJavascript,
  siPostgresql,
  siPython,
  siReact,
  siScikitlearn,
  siSqlite,
} from 'simple-icons'
import daftariShot from '../assets/projects/daftari.png?w=640;960;1366&format=avif;webp;jpeg&as=picture'
import mnadaniShot from '../assets/projects/mnadani.png?w=640;960;1280;1600&format=avif;webp;jpeg&as=picture'
import panganasiShot from '../assets/projects/panganasi.jpg?w=640;960;1280;1600&format=avif;webp;jpeg&as=picture'
import strokeRegister from '../assets/projects/strokeguard-register.jpg?w=270;540&format=avif;webp;jpeg&as=picture'
import strokeAssessment from '../assets/projects/strokeguard-assessment.jpg?w=270;540&format=avif;webp;jpeg&as=picture'
import strokeAdmin from '../assets/projects/strokeguard-admin.jpg?w=270;540&format=avif;webp;jpeg&as=picture'
import mnadaniMobile from '../assets/projects/mnadani-mobile.png?w=240;480&format=avif;webp;jpeg&as=picture'
import daftariCloseDay from '../assets/projects/daftari-close-day.png?w=560;1120&format=avif;webp;jpeg&as=picture'

export const profile = {
  name: 'Mohamed Haikali Mwamchua',
  shortName: 'Mohamed Mwamchua',
  email: 'mohamedmwamchua@gmail.com',
  phone: '+255654000873',
  phoneDisplay: '0654 000 873',
  whatsapp: '255654000873',
  github: 'MohammedMwamchua',
  location: 'Dar es Salaam, Tanzania',
  cv: '/Mohamed-Mwamchua-CV.pdf',
}

const tech = {
  react: { label: 'React', icon: siReact },
  javascript: { label: 'JavaScript', icon: siJavascript },
  django: { label: 'Django', icon: siDjango },
  drf: { label: 'Django REST Framework', icon: siDjango },
  fastapi: { label: 'FastAPI', icon: siFastapi },
  python: { label: 'Python', icon: siPython },
  postgresql: { label: 'PostgreSQL', icon: siPostgresql },
  sqlite: { label: 'SQLite', icon: siSqlite },
  flutter: { label: 'Flutter', icon: siFlutter },
  sklearn: { label: 'scikit-learn', icon: siScikitlearn },
  cpp: { label: 'C++', icon: siCplusplus },
  csharp: { label: 'C#' },
  git: { label: 'Git and GitHub', icon: siGit },
}

export const heroStack = [tech.react, tech.django, tech.postgresql, tech.flutter, tech.fastapi, tech.python]

export const skills = [
  { group: 'Front end', items: [tech.react, tech.javascript] },
  { group: 'Back end', items: [tech.django, tech.fastapi, tech.python] },
  { group: 'Databases', items: [tech.postgresql, tech.sqlite] },
  { group: 'Mobile', items: [tech.flutter] },
  { group: 'Also use', items: [tech.sklearn, tech.cpp, tech.csharp, tech.git] },
]

// Each service shows a screen from the project that proves it, in that project's colours.
export const services = [
  {
    title: 'Websites for schools, businesses and listings',
    desc: 'Websites that load quickly and work well on phones, like the Mnadani Secondary School site and Panga Nasi, a house-rental site I built and deployed.',
    brand: 'mnadani',
    link: { label: 'See the Mnadani website', href: '#mnadani' },
    media: {
      kind: 'phones',
      screens: [{ image: mnadaniMobile, alt: 'The Mnadani Secondary School website on a phone' }],
    },
  },
  {
    title: 'Admin panels and databases',
    desc: 'Screens where staff keep their own content and records up to date instead of calling a developer. Mnadani\'s staff edit their school website this way, and in Daftari the manager closes each day with a cash count.',
    brand: 'daftari',
    link: { label: 'See Daftari', href: '#daftari' },
    media: {
      kind: 'desktop',
      image: daftariCloseDay,
      alt: "Daftari's cash count step, comparing the cash expected in each till with the amount counted and showing a shortage",
    },
  },
  {
    title: 'Mobile apps',
    desc: 'Flutter apps with a backend behind them. For StrokeGuard, a hospital app, I built separate screens for reception, doctors and lab staff, and SMS messages that go to patients once a doctor approves them.',
    brand: 'strokeguard',
    link: { label: 'See StrokeGuard', href: '#strokeguard' },
    media: {
      kind: 'phones',
      screens: [
        { image: strokeRegister, alt: 'StrokeGuard reception screen for registering a patient' },
        { image: strokeAdmin, alt: 'StrokeGuard admin dashboard with staff and patient counts' },
      ],
    },
  },
  {
    title: 'Machine learning features',
    desc: 'For StrokeGuard I trained a Random Forest on 68,611 patient records (0.804 ROC AUC) and combined it with stroke-specific rules, so doctors can see which risk factors raised each score.',
    brand: 'strokeguard',
    link: { label: 'How the model works', href: '#strokeguard' },
    media: {
      kind: 'phones',
      screens: [{ image: strokeAssessment, alt: "StrokeGuard's stroke assessment screen with the patient's blood pressure, glucose, cholesterol, BMI and heart rate" }],
    },
  },
]

export const projects = [
  {
    id: 'daftari',
    title: 'Daftari',
    kind: 'Bookkeeping web app',
    desc: 'A bookkeeping app for a small Tanzanian food business with two sections: a chips stall (banda) and a restaurant (mgahawa). Each evening the manager records sales and expenses, counts the cash in each till and marks attendance.',
    stack: [tech.react, tech.drf, tech.postgresql],
    image: daftariShot,
    imageAlt: "Daftari's home screen in Swahili, showing the day's sales split between the banda and the mgahawa, and the steps left to close the day",
    details: [
      'Records daily sales and expenses for the banda and the mgahawa, split between cash and mobile money.',
      "Compares the cash counted in each till with what should be there. A shortage goes onto that day's cashier's account.",
      'Works out salaries from attendance, advances and shortages, and profit for a month or a single day.',
      'Month and day reports download as PDF or Excel.',
      'The manager is the only one who logs in. Every screen is in Swahili and English, and it works on a phone.',
    ],
    githubLink: 'https://github.com/MohammedMwamchua/daftari',
  },
  {
    id: 'mnadani',
    title: 'Mnadani Secondary School website',
    kind: 'School website with admin panel',
    desc: "A website for my old secondary school. Staff add news, awards and photos themselves from an admin panel, so they don't need a developer for routine updates.",
    stack: [tech.react, tech.django, tech.sqlite],
    image: mnadaniShot,
    imageAlt: 'The Mnadani Secondary School homepage, with the headline "Educating Dodoma\'s next generation, one class at a time" and a panel showing the school opened in 2007',
    details: [
      'The admin adds and edits photos and text across the whole site.',
      'Sections include news, awards, headteachers and notable teachers.',
      'An alumni section where the admin adds former students and their stories.',
      'Everything on the site comes from the database, so it can be updated without touching the code.',
    ],
    githubLink: 'https://github.com/MohammedMwamchua/mnadani-secondary-school',
  },
  {
    id: 'panganasi',
    title: 'Panga Nasi',
    kind: 'House rental website',
    desc: 'A house-rental website where people browse houses for rent across Tanzania and send a rental request. I built both the front end and the back end on my own.',
    stack: [tech.react, tech.django, tech.postgresql],
    image: panganasiShot,
    imageAlt: 'The Panga Nasi homepage in Swahili, with the headline "Panga nyumba inayokufaa", a photo of a modern house, and a search bar for location and house type',
    details: [
      'Customers browse the houses that are available to rent.',
      'Customers send a rental request from the website.',
      'Django runs the backend and PostgreSQL stores the listings and requests.',
    ],
    liveLink: 'https://mkp-seven.vercel.app/',
    githubLink: 'https://github.com/MohammedMwamchua/MKP',
  },
  {
    id: 'strokeguard',
    title: 'StrokeGuard',
    kind: 'Hospital app',
    desc: 'A hospital app for stroke screening. Staff register patients and get a stroke-risk score with the reasons behind it, and doctors approve lifestyle advice that is sent to the patient by SMS.',
    stack: [tech.flutter, tech.fastapi, tech.sqlite, tech.sklearn],
    screens: [
      { image: strokeRegister, alt: 'StrokeGuard reception screen for registering a patient, with fields for name, age, phone number, height, weight and medical history' },
      { image: strokeAssessment, alt: "StrokeGuard doctor's stroke assessment screen, showing blood pressure, glucose, cholesterol, BMI and heart rate, with switches for known conditions and lifestyle" },
      { image: strokeAdmin, alt: 'StrokeGuard admin dashboard showing the number of patients, active staff, doctors, receptionists and lab scientists' },
    ],
    details: [
      'Register patients and keep their records in one place.',
      'A Random Forest trained on 68,611 patient records from a public cardiovascular dataset (0.804 ROC AUC) is blended 70/30 with stroke-specific rules, because no public dataset links stroke to all of these measurements.',
      'A rule-based engine checks 12 stroke risk factors and shows which ones raised each score.',
      'Reception, doctors, lab staff and admin each have their own screens.',
      'Doctors review and approve lifestyle advice before it is sent to the patient by SMS.',
    ],
    githubLink: 'https://github.com/MohammedMwamchua/StrokeRiskAssesment',
  },
]

export const timeline = [
  {
    year: '2026',
    what: 'Bachelor of Computer Engineering',
    where: 'Dar es Salaam Institute of Technology',
  },
  {
    year: '2025',
    what: 'IT support, field training',
    where: 'TANESCO, Dar es Salaam',
    detail: 'Looked after computer systems and handled IT requests from different departments.',
  },
  {
    year: '2024',
    what: 'Mobile application development, field training',
    where: 'NSSF, Dar es Salaam',
    detail: 'Built a demo mobile app during a full-stack training program, covering app design, connecting to a backend, and testing.',
  },
  {
    year: '2023',
    what: 'Diploma in Computer Engineering',
    where: 'Mbeya University of Science and Technology',
  },
  {
    year: '2022',
    what: 'Started learning web and mobile development',
    where: 'Field training at TANESCO, Dodoma',
    detail: 'Helped with daily IT work while I learned the basics of programming.',
  },
  {
    year: '2021',
    what: 'IT support, field training',
    where: 'Dodoma City Council',
    detail: 'Routine IT support and troubleshooting in council offices.',
  },
  {
    year: '2019',
    what: 'Finished secondary school',
    where: 'Mnadani Secondary School, Dodoma',
  },
]
