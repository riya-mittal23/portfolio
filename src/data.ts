import { Experience, Project, Education, Certification, Extracurricular, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Riya",
  title: "Full-Stack MERN Developer",
  subTitle: "4+ years of experience scaling web applications",
  email: "riyamittal232@gmail.com",
  phone: "+91-8557989005",
  location: "India (Seeking opportunity in Canada)",
  summary: "Results-driven Full-Stack MERN Developer with 4+ years of experience designing, building, and deploying scalable web applications across fintech, IoT, e-commerce, and enterprise domains. Proficient in React.js, Node.js, Express.js, MongoDB, and TypeScript, with hands-on expertise in REST API design, real-time data streaming (MQTT), JWT authentication, and cloud deployments on AWS and Azure. Delivered 20+ production-grade projects in Agile environments, consistently improving performance, reducing latency, and enhancing user experience. Seeking to bring full-stack expertise to a growth-oriented team in Canada.",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Production Projects", value: "20+" },
    { label: "API Res. Speed Increase", value: "25-30%" },
    { label: "Page Load Reduction", value: "~30%" }
  ]
};

export const CORE_COMPETENCIES: string[] = [
  "Full-Stack Web Development",
  "REST API Design & Integration",
  "Real-Time Data Streaming",
  "Database Optimization",
  "UI/UX Implementation",
  "JWT & OAuth Authentication",
  "Agile / Scrum Delivery",
  "Code Review & Mentorship",
  "Cloud Deployment (AWS / Azure)",
  "Performance Optimization"
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "Material UI", "Figma"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "MQTT Protocol", "Socket.io"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Query Optimization", "Database Indexing"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Vercel", "CI/CD Pipelines", "Git", "GitHub", "Postman"]
  },
  {
    category: "Practices",
    skills: ["Agile/Scrum", "Code Reviews", "Mentorship", "Cross-Functional Collaboration"]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "elite-web",
    role: "MERN Stack Developer",
    company: "Elite Web Technologies",
    location: "Panchkula, Haryana, India",
    period: "June 2022 – Present",
    bullets: [
      "Architected and delivered 20+ scalable, production-grade web applications using React.js, Node.js, Express.js, and MongoDB, serving thousands of concurrent users",
      "Led performance optimization initiatives — implementing lazy loading, server-side caching, and Redux state management — reducing average page load time by ~30%",
      "Designed and consumed RESTful APIs and third-party integrations (payment gateways, geolocation, notifications) across 15+ client projects",
      "Built fully responsive, accessible UIs with Bootstrap, Tailwind CSS, and Material UI; collaborated in Figma with UX designers to ensure pixel-perfect delivery",
      "Conducted structured code reviews and mentored junior developers, raising code-quality standards and reducing bug-escape rate",
      "Championed Agile/Scrum practices — sprint planning, stand-ups, retrospectives — enabling on-time delivery of complex, multi-stakeholder projects",
      "Worked cross-functionally with product managers, designers, and QA engineers throughout the full product development lifecycle"
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS", "Agile/Scrum", "Figma", "RESTful APIs"]
  },
  {
    id: "infowiz",
    role: "React.js Developer Intern",
    company: "Infowiz Software Solutions",
    location: "Chandigarh, India",
    period: "July 2021 – June 2022",
    bullets: [
      "Built modular, reusable React.js components adopted across multiple internal products, accelerating feature development velocity",
      "Integrated REST APIs to bridge frontend interactions with backend services, reducing frontend data-fetch errors by standardizing request patterns"
    ],
    skills: ["React.js", "REST APIs", "Component Architecture", "JavaScript"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "myiou",
    name: "MyIoU",
    tagline: "Social Media Platform with Token-Based Transactions",
    category: "fintech",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js"],
    bullets: [
      "Designed and built a scalable backend for a social media platform with integrated token-based wallet and transaction system",
      "Developed secure RESTful APIs for user profiles, social interactions, wallet management, and end-to-end transaction processing",
      "Engineered authentication, authorization, and transaction validation layers to guarantee data integrity and prevent fraud",
      "Implemented scalable architecture patterns (horizontal scaling, modular services) to support high-concurrency workloads"
    ],
    metrics: ["Optimized MongoDB queries and applied strategic indexing, achieving ~25–30% improvement in API response time"]
  },
  {
    id: "iot-dashboard",
    name: "IoT Dashboard",
    tagline: "Configurable Multi-Site Monitoring System",
    category: "iot",
    technologies: ["React.js", "MQTT", "Node.js", "Redux"],
    bullets: [
      "Built a production IoT monitoring dashboard enabling real-time visualization of device telemetry across multiple geographically distributed sites",
      "Integrated MQTT protocol for high-frequency, bi-directional data streaming with sub-second update latency",
      "Engineered fully configurable, site-specific and device-specific UI components — zero-code configuration for non-technical operators",
      "Designed frontend data pipeline to handle continuous large-dataset streams without memory leaks or performance degradation"
    ],
    metrics: ["Applied optimized state management patterns in Redux, eliminating UI jank during sustained high-frequency real-time updates"]
  },
  {
    id: "shopsaverz",
    name: "ShopSaverz",
    tagline: "E-Commerce Platform with Reward & Bidding System",
    category: "ecommerce",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Delivered a full-stack multi-vendor e-commerce platform covering vendor onboarding, product catalogue management, and complete order lifecycle",
      "Engineered a real-time bidding engine with reward point redemption, enabling users to compete for products — boosting platform engagement",
      "Built secure, rate-limited APIs for all transaction types, bidding logic, and user management with role-based access control",
      "Designed multi-vendor architecture supporting concurrent sellers and simultaneous bidding sessions without race conditions"
    ],
    metrics: ["Improved conversion rates through a streamlined, interactive frontend with fast-loading, optimized React components"]
  },
  {
    id: "efuel",
    name: "EFUEL",
    tagline: "Fuel Discovery & Management Platform",
    category: "platform",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Geolocation API"],
    bullets: [
      "Developed backend microservices for fuel station discovery, incorporating JWT-based authentication and granular role-based authorization",
      "Implemented geolocation-powered search (radius-based queries) to surface nearest fuel stations with real-time availability data",
      "Integrated real-time push notifications for fuel price changes and supply updates using third-party notification services",
      "Designed scalable data schemas to support millions of station records and high-volume concurrent user queries"
    ],
    metrics: ["Optimized MongoDB aggregation pipelines and API payload structures, reducing average response latency by ~20%"]
  },
  {
    id: "uaf",
    name: "UAF",
    tagline: "Certification & Authorization Platform",
    category: "platform",
    technologies: ["React.js", "Node.js", "REST APIs", "Role-Based Auth"],
    bullets: [
      "Developed React.js frontend for a government-grade multi-step certification platform enabling company registration, document upload, and authority-level verification",
      "Implemented complex multi-stage workflows: registration, document submission, automated validation, and manual approval routing",
      "Integrated role-based authentication ensuring strict separation of access between applicants, reviewers, and administrators",
      "Collaborated with backend team on API contract design, achieving 100% consistency between frontend expectations and backend responses"
    ],
    metrics: ["Improved task completion rate through UX redesign — simplified complex verification flows into guided, responsive step-by-step interfaces"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "msc-it",
    degree: "M.Sc. Information Technology",
    institution: "Panjab University",
    location: "Chandigarh, India",
    period: "2020 – 2022",
    score: "90%"
  },
  {
    id: "bsc-cs",
    degree: "B.Sc. Computer Science",
    institution: "Panjab University",
    location: "Chandigarh, India",
    period: "2017 – 2020",
    score: "76.88%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: "cert-web", name: "Web Designing and Multimedia Certification" },
  { id: "cert-java", name: "Java Programming Certification" }
];

export const EXTRACURRICULAR: Extracurricular[] = [
  {
    id: "ncc-cadet",
    activity: "NCC Air Wing Cadet",
    description: "Developed leadership, discipline, and team communication through structured military training and aviation exposure.",
    highlight: "Military Discipline & Leadership"
  },
  {
    id: "pilot",
    activity: "Virus SW Biplane Pilot",
    description: "Piloted a Virus SW Biplane; represented institution at inter-state camps focused on cultural exchange and skill-building.",
    highlight: "Aviation & Cultural Representation"
  }
];
