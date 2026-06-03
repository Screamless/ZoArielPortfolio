// ─────────────────────────────────────────────
//  Shared data for Zo Ariel's portfolio
// ─────────────────────────────────────────────

export type SkillTag = { label: string; tone?: 'purple' | 'blue' | 'orange' }
export type SkillBar = { label: string; w: number }

export type Skill = {
  icon: string
  name: string
  desc: string
  tags: SkillTag[]
  bars?: SkillBar[]
  delayClass?: string
}

export const skills: Skill[] = [
  {
    icon: '⚛️',
    name: 'Frontend Web & Mobile',
    desc: 'Interfaces modernes avec ReactJS et applications cross-platform avec Flutter/Dart, du prototype au déploiement production.',
    tags: [{ label: 'ReactJS' }, { label: 'Flutter' }, { label: 'Dart' }],
    bars: [
      { label: 'ReactJS', w: 0.88 },
      { label: 'Flutter', w: 0.82 },
    ],
    delayClass: 'reveal-delay-1',
  },
  {
    icon: '⚙️',
    name: 'Backend & API REST',
    desc: 'APIs robustes avec ExpressJS (Node.js), authentification, gestion des données, mise en production et déploiement.',
    tags: [
      { label: 'ExpressJS', tone: 'purple' },
      { label: 'Node.js', tone: 'purple' },
      { label: 'REST API', tone: 'purple' },
    ],
    bars: [
      { label: 'ExpressJS', w: 0.85 },
      { label: 'Node.js', w: 0.82 },
    ],
    delayClass: 'reveal-delay-2',
  },
  {
    icon: '☕',
    name: 'Java & Android Natif',
    desc: 'Développement Android natif en Java, POO avancée, architecture MVC et applications desktop robustes.',
    tags: [
      { label: 'Java', tone: 'orange' },
      { label: 'Android', tone: 'orange' },
      { label: 'Python', tone: 'orange' },
    ],
    bars: [
      { label: 'Java', w: 0.9 },
      { label: 'Python', w: 0.7 },
    ],
    delayClass: 'reveal-delay-3',
  },
  {
    icon: '🗺️',
    name: 'SIG & Web Mapping',
    desc: 'Analyse spatiale QGIS, bases de données géospatiales PostGIS, publication WMS/WFS GeoServer et données OpenStreetMap.',
    tags: [
      { label: 'QGIS', tone: 'blue' },
      { label: 'PostGIS', tone: 'blue' },
      { label: 'GeoServer', tone: 'blue' },
      { label: 'OSM', tone: 'blue' },
    ],
    bars: [
      { label: 'PostGIS', w: 0.78 },
      { label: 'QGIS', w: 0.75 },
    ],
    delayClass: 'reveal-delay-1',
  },
  {
    icon: '🗄️',
    name: 'Bases de données',
    desc: 'Conception relationnelle et NoSQL, requêtes avancées et optimisation pour des applications scalables.',
    tags: [
      { label: 'PostgreSQL', tone: 'purple' },
      { label: 'MySQL', tone: 'purple' },
      { label: 'SQLite', tone: 'purple' },
      { label: 'Firebase', tone: 'purple' },
    ],
    bars: [
      { label: 'PostgreSQL', w: 0.85 },
      { label: 'MySQL', w: 0.88 },
    ],
    delayClass: 'reveal-delay-2',
  },
  {
    icon: '🛠️',
    name: 'Outils & Workflow',
    desc: 'Gestion de versions Git/GitHub, design UI/UX Figma & Adobe, pilotage de projet Trello et déploiement en production.',
    tags: [
      { label: 'Git / GitHub' },
      { label: 'Figma' },
      { label: 'Adobe' },
      { label: 'Trello' },
    ],
    delayClass: 'reveal-delay-3',
  },
]

// ─── Projects ────────────────────────────────

export type Project = {
  num: string
  category: string
  title: string
  desc: string
  tech: string[]
  date: string
  featured?: boolean
  badge?: string
}

export const projects: Project[] = [
  {
    num: '01',
    category: 'Full-Stack Web',
    title: 'Plateforme de gestion des partenariats scolaires',
    desc: "Application web complète développée pour EMIT Fianarantsoa. Gestion des partenariats entre établissements scolaires : tableau de bord, gestion des utilisateurs, suivi des conventions, authentification et déploiement en production.",
    tech: ['ReactJS', 'ExpressJS', 'PostgreSQL', 'Node.js', 'REST API'],
    date: 'Oct. – Déc. 2025 · EMIT Fianarantsoa',
    featured: true,
    badge: '🏆 Projet le plus récent · Déployé en production',
  },
  {
    num: '02',
    category: 'Mobile Flutter',
    title: "App d'optimisation de la productivité individuelle",
    desc: "Application mobile Android développée et mise en ligne pour la Direction de Mine de Fianarantsoa. Interface Flutter connectée à une API REST ExpressJS.",
    tech: ['Flutter', 'Dart', 'ExpressJS', 'API REST'],
    date: 'Juil. – Sept. 2024 · Direction de Mine, Fianarantsoa',
  },
  {
    num: '03',
    category: 'Android Natif Java',
    title: 'Application de gestion des ressources humaines',
    desc: 'Application Android native conçue pour Sarobidy Informatique à Antananarivo. Gestion complète des employés, congés et évaluations en Java Android natif.',
    tech: ['Java', 'Android', 'SQLite'],
    date: 'Juil. – Sept. 2023 · Sarobidy Informatique, Antananarivo',
  },
  {
    num: '04',
    category: 'Desktop Java',
    title: 'Application de calcul fiscal',
    desc: "Logiciel Java de calcul des impôts pour la Commune Urbaine de Fianarantsoa, couvrant personnes physiques et morales.",
    tech: ['Java', 'MySQL'],
    date: 'Juin – Août 2021 · Commune Urbaine de Fianarantsoa',
  },
  {
    num: '05',
    category: 'SIG · Master II',
    title: "Système d'Information Géographique Web",
    desc: "Projet académique et professionnel : publication de couches WMS/WFS avec GeoServer, bases de données géospatiales PostGIS, analyse QGIS et exploitation OpenStreetMap.",
    tech: ['PostGIS', 'GeoServer', 'QGIS', 'OpenStreetMap'],
    date: '2024 – présent · EMIT, Master II SIGD',
  },
]

// ─── Experience ───────────────────────────────

export type TimelineEntry = {
  date: string
  role: string
  org: string
  text?: string
  stack?: string[]
  color?: string
  glow?: string
}

export const experiences: TimelineEntry[] = [
  {
    date: 'Oct. 2025 – Déc. 2025',
    role: 'Développeur Full-Stack',
    org: 'EMIT Fianarantsoa',
    text: 'Développement complet et déploiement en production de la plateforme de gestion des partenariats scolaires.',
    stack: ['ReactJS', 'ExpressJS', 'PostgreSQL'],
    color: 'var(--accent)',
    glow: '0 0 14px rgba(0,229,160,0.6)',
  },
  {
    date: 'Oct. 2024 – Oct. 2025',
    role: 'Assistant Responsable SI',
    org: 'Emit Business Hub · Andrainjato',
    text: "Assistance à la gestion du système d'information, support technique et participation aux projets numériques.",
    color: 'var(--accent2)',
  },
  {
    date: 'Juil. – Sept. 2024',
    role: 'Développeur Android (Stage)',
    org: 'Direction de Mine · Fianarantsoa',
    text: "Développement et mise en ligne d'une application mobile Android d'optimisation de la productivité.",
    stack: ['Flutter', 'ExpressJS'],
    color: '#00b4d8',
  },
  {
    date: 'Juil. – Sept. 2023',
    role: 'Développeur Android (Stage)',
    org: 'Sarobidy Informatique · Antananarivo',
    text: "Conception et réalisation d'une application Android de gestion RH en Java natif.",
    stack: ['Java', 'Android'],
    color: '#f9c74f',
  },
  {
    date: 'Juin – Août 2021',
    role: 'Développeur Java (Stage)',
    org: 'Commune Urbaine de Fianarantsoa',
    text: "Développement d'une application Java de calcul fiscal pour personnes physiques et morales.",
    stack: ['Java', 'MySQL'],
    color: '#ff6b6b',
  },
]

export const education: TimelineEntry[] = [
  {
    date: 'Depuis nov. 2024 · En cours ✨',
    role: "Master II — Systèmes d'Information Géomatique et Décision",
    org: "EMIT · École Management et d'Innovation Technologique · Fianarantsoa",
    text: 'Formation avancée en SIG, Web Mapping, analyse spatiale, PostGIS, GeoServer et aide à la décision géospatiale.',
    stack: ['QGIS', 'PostGIS', 'GeoServer', 'OSM'],
    color: 'var(--accent)',
    glow: '0 0 18px rgba(0,229,160,0.7)',
  },
  {
    date: 'Nov. 2023 – Sept. 2024',
    role: "Licence — Informatique, Développement d'Applications Internet et Intranet",
    org: 'EMIT · Fianarantsoa',
    text: "Développement web, mobile et réseau. Bases solides en algorithmique, POO et systèmes d'information.",
    color: 'var(--accent2)',
  },
  {
    date: 'Nov. 2018 – Août 2019',
    role: 'Baccalauréat Série C',
    org: 'Lycée Maria Manjaka · Fianarantsoa',
    color: '#f9c74f',
  },
]
