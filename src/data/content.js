export const profile = {
  name: ['Mohamed', 'Haikali', 'Mwamchua'],
  role: 'Web and mobile developer in Dar es Salaam, Tanzania',
  email: 'mohamedmwamchua@gmail.com',
  phone: '+255654000873',
  phoneDisplay: '0654 000 873',
  whatsapp: '255654000873',
  github: 'MohammedMwamchua',
  location: 'Dar es Salaam, Tanzania',
}

export const heroStats = [
  { value: '3', label: 'Projects shipped end-to-end' },
  { value: '2026', label: 'Computer Engineering degree' },
]

export const skills = [
  { group: 'Front end', items: ['React', 'JavaScript'] },
  { group: 'Back end', items: ['Django', 'FastAPI', 'Python'] },
  { group: 'Databases', items: ['PostgreSQL', 'SQLite'] },
  { group: 'Mobile', items: ['Flutter'] },
  { group: 'Also use', items: ['C#', 'C++', 'Git and GitHub', 'Machine learning'] },
]

export const services = [
  {
    title: 'Websites for schools, businesses and listings',
    desc: 'A fast, clean website that works well on phones and looks professional from day one. Panga Nasi, a live house-rental site people use across Tanzania, is proof it holds up outside a demo.',
  },
  {
    title: 'Admin panels and databases',
    desc: "Update your own news, photos and listings without calling a developer every time. I build admin screens your team will actually use — like the one Mnadani Secondary School's staff now run day to day.",
  },
  {
    title: 'Mobile apps',
    desc: 'A Flutter app connected to a secure backend, built around how your team really works. I built one for hospitals with separate screens for reception, doctors and lab staff, plus automatic SMS updates.',
  },
  {
    title: 'Smart features with machine learning',
    desc: "When it's worth it, I add machine learning that earns its place — like the stroke-risk model I trained on 68,611 patient records (0.804 ROC AUC) and turned into a tool doctors can actually explain and trust.",
  },
]

export const projects = [
  {
    id: 'mnadani',
    title: 'Mnadani Secondary School website',
    status: 'School website with admin panel',
    badge: 'Completed',
    desc: 'A full website for my old school, built so staff can add news, awards and photos themselves — no code, and no calling a developer for routine updates.',
    chips: ['React', 'Django', 'SQLite'],
    details: [
      'The admin adds and edits photos and explanations across the whole site.',
      'Sections include news, awards, headteachers and notable teachers.',
      'A special place where the admin adds Mnadani alumni and their history.',
      'All content is stored in a database, so the site stays easy to keep up to date long after launch.',
    ],
    githubLink: 'https://github.com/MohammedMwamchua/mnadani-secondary-school',
  },
  {
    id: 'panganasi',
    title: 'Panga Nasi',
    status: 'House rental website',
    badge: 'Completed',
    desc: 'A house-rental platform where people browse listings across Tanzania and send a request in a few taps. I built the whole thing myself, from the pages to the database.',
    chips: ['React', 'Django', 'PostgreSQL'],
    details: [
      'Customers browse the houses that are available to rent.',
      'Customers send a rental request straight from the website — no phone tag needed to get started.',
      'Django handles the backend and PostgreSQL stores the data, so it holds up as listings grow.',
    ],
    liveLink: 'https://mkp-seven.vercel.app/',
    githubLink: 'https://github.com/MohammedMwamchua/MKP',
  },
  {
    id: 'strokeguard',
    title: 'StrokeGuard',
    status: 'Hospital app',
    badge: 'Completed',
    desc: 'A full clinical tool for hospitals: staff register patients, get an explainable stroke-risk score, and send doctor-approved lifestyle advice by SMS — built around how a hospital team actually works.',
    chips: ['FastAPI', 'Flutter', 'SQLite', 'Random Forest'],
    details: [
      'Register patients and keep their records in one place.',
      'Predict stroke risk with a Random Forest model trained on 68,611 records, scoring 0.804 ROC AUC.',
      "A rule-based engine explains every score using 12 weighted risk factors, so it's never a black box doctors have to take on faith.",
      'Reception, doctors, lab staff and admin each get their own screen, matching how the hospital actually divides the work.',
      'Doctors review and approve lifestyle advice before it is sent to the patient by SMS.',
    ],
    githubLink: 'https://github.com/MohammedMwamchua/StrokeRiskAssesment',
  },
]

export const timeline = [
  {
    year: '2019',
    what: 'Finished secondary school',
    where: 'Mnadani Secondary School, Dodoma',
  },
  {
    year: '2021',
    what: 'IT support, field training',
    where: 'Dodoma City Council',
    detail: 'Routine IT support and troubleshooting across council offices — my first taste of keeping real office systems running.',
  },
  {
    year: '2022',
    what: 'Started learning web and mobile development',
    where: 'Field training at TANESCO, Dodoma',
    detail: 'Supported daily IT operations while building the foundational programming skills everything since is built on.',
  },
  {
    year: '2023',
    what: 'Diploma in Computer Engineering',
    where: 'Mbeya University of Science and Technology',
  },
  {
    year: '2024',
    what: 'Mobile application development, field training',
    where: 'NSSF, Dar es Salaam',
    detail: 'Built a demo mobile app during a hands-on full-stack program, covering app design, backend integration and testing.',
  },
  {
    year: '2025',
    what: 'IT support, field training',
    where: 'TANESCO, Dar es Salaam',
    detail: 'Maintained computer systems and resolved technical requests across departments for the national power utility.',
  },
  {
    year: '2026',
    what: 'Bachelor of Computer Engineering',
    where: 'Dar es Salaam Institute of Technology',
  },
]
