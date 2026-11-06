import { Experience, Project, Education, Certification, Extracurricular, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Riya",
  title: "Full-Stack Developer",
  subTitle: "7+ years of experience designing, building, and deploying scalable web applications",
  email: "riyamittal232@gmail.com",
  phone: "+1 647 242 5804",
  location: "Brampton, Ontario, Canada",
  linkedin: "https://www.linkedin.com/in/riya232",
  github: "https://github.com/riya-mittal23",
  summary:
    "Full-Stack Developer with 7+ years of experience designing, building, enhancing, deploying, and supporting production web applications across fintech, IoT, e-commerce, and enterprise domains. Strong hands-on experience with JavaScript, TypeScript, React.js, Redux, Node.js, Express.js, RESTful APIs, PostgreSQL, MongoDB, SQL/NoSQL data stores, and AWS cloud services. Delivered and maintained 20+ production web applications across 15+ client projects, improving page-load time by approximately 30% and reducing API response time by 25–30% through frontend, state-management, and database optimizations. Experienced building reusable UI components, responsive interfaces, backend services, third-party integrations, data-driven workflows, and secure API integrations. Comfortable working across frontend, backend, and cloud layers; troubleshooting production issues; modernizing existing code; and balancing feature delivery with performance, reliability, and maintainability. Brings 4 years of team leadership capabilities, including technical coordination, supporting teammates, code review, knowledge sharing, and reusable development practices. Collaborates with product, design, QA, and engineering stakeholders to clarify requirements and deliver scalable solutions in iterative development environments. Also holds a Java Programming Certification; professional hands-on experience is primarily in the JavaScript/TypeScript ecosystem. Familiar with Retrieval-Augmented Generation (RAG) fundamentals and has built a basic RAG learning prototype.",
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Production Apps", value: "20+" },
    { label: "Client Projects", value: "15+" },
    { label: "Team Leadership", value: "4 Yrs" },
    { label: "API Speedup", value: "25–30%" },
    { label: "Page Load Reduction", value: "~30%" }
  ]
};

export const CORE_COMPETENCIES: string[] = [
  "Full-Stack Web Development",
  "RESTful API Design & Integration",
  "Cloud & AWS Services (ECS, S3, RDS, Lambda)",
  "Event-Driven Architecture (SQS & SNS)",
  "Database Optimization (PostgreSQL & MongoDB)",
  "Real-Time Telemetry & MQTT Protocol",
  "Security, JWT & Role-Based Access Control (RBAC)",
  "Team Leadership & Code Review (4+ Years)",
  "AI-Assisted Engineering & RAG Fundamentals",
  "Performance Optimization & Root-Cause Analysis"
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java (Certification Foundation)"]
  },
  {
    category: "Frontend & Mobile",
    skills: [
      "React.js",
      "React Native",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Reusable UI Components",
      "Responsive Web Design",
      "Cross-Browser Compatibility",
      "State Management"
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Backend Services",
      "Middleware Concepts",
      "Third-Party Integrations",
      "Frontend/Backend Integration",
      "API Contracts",
      "Request/Response Payloads",
      "Input Validation"
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "AWS S3",
      "AWS ECS",
      "AWS Fargate",
      "AWS EC2",
      "AWS RDS",
      "AWS SQS",
      "AWS SNS",
      "AWS Lambda",
      "AWS SES",
      "Cloud Integrations",
      "Event-Driven Workflows",
      "Serverless Processing",
      "Containerized Services"
    ]
  },
  {
    category: "Databases & Data",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL",
      "NoSQL",
      "Data Modelling",
      "Schema Design Concepts",
      "Database Indexing",
      "Query Optimization",
      "Aggregation Pipelines",
      "Data Integrity"
    ]
  },
  {
    category: "Security",
    skills: [
      "JWT Authentication",
      "Authorization",
      "Role-Based Access Control (RBAC)",
      "Secure API Access",
      "Request Validation",
      "Transaction Validation",
      "Secure Data Handling"
    ]
  },
  {
    category: "Architecture & Engineering",
    skills: [
      "Full-Stack Development",
      "Modular Service Design",
      "Microservices Concepts",
      "Reusable Patterns",
      "Incremental Modernization",
      "Scalable Application Design",
      "Maintainable Code",
      "End-to-End Feature Delivery"
    ]
  },
  {
    category: "AI & Emerging Tools",
    skills: [
      "RAG Fundamentals",
      "Basic RAG Prototype",
      "AI-Assisted Development",
      "GitHub Copilot",
      "Cursor",
      "OpenAI Codex",
      "Claude Code",
      "ChatGPT",
      "v0 by Vercel"
    ]
  },
  {
    category: "Quality & Performance",
    skills: [
      "Git",
      "Code Reviews",
      "Debugging",
      "Root-Cause Analysis",
      "Functional Validation",
      "Integration Troubleshooting",
      "Performance Optimization",
      "Production Issue Resolution",
      "Release Support",
      "Production Reliability"
    ]
  },
  {
    category: "Collaboration & Leadership",
    skills: [
      "4 Years Team Leadership",
      "Technical Coordination",
      "Mentoring Teammates",
      "Knowledge Sharing",
      "Cross-Functional Collaboration",
      "Product / Design / Engineering Communication",
      "Requirements Clarification",
      "Constructive Feedback",
      "Prioritization & Technical Trade-offs"
    ]
  },
  {
    category: "Product & Workflow Experience",
    skills: [
      "SaaS-Style Applications",
      "E-Commerce Workflows",
      "Wallet & Transaction Processing",
      "Campaign & Rewards Management",
      "Dashboards & Real-Time Monitoring",
      "Approval & Verification Workflows",
      "Third-Party Service Integrations"
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "iou-client-engagement",
    role: "Full Stack Developer — Client Engagement",
    company: "IOU Inc. via Elite Web Technologies",
    location: "Brampton, Ontario, Canada",
    period: "Client Engagement",
    type: "client-engagement",
    client: "IOU Inc.",
    bullets: [
      "Delivered backend API updates for bulk token allocation, sub-business campaign creation, rewards processing and wallet/transaction workflows.",
      "Built and maintained REST endpoints and coordinated API contracts, request/response payloads and integration fixes with frontend developers.",
      "Simplified bulk token allocation and one-click campaign workflows, reducing repetitive manual steps for platform users.",
      "Reviewed MongoDB and PostgreSQL query patterns and applied targeted data-access improvements for data-intensive workflows.",
      "Applied request validation, authentication and authorization checks to transaction-related endpoints to support secure access and data integrity.",
      "Integrated AWS SQS, SNS, Lambda and SES for asynchronous jobs, event-driven processing and transactional email notifications.",
      "Developed rewards-processing APIs, troubleshot backend and deployment issues, and supported production maintenance and releases.",
      "Collaborated across frontend and backend teams to resolve integration issues and deliver reliable platform features.",
      "Improved business workflows by translating product needs into practical API and application changes while preserving consistent data exchange between system layers.",
      "Shared technical context with teammates, coordinated integration dependencies, and contributed to code quality and team knowledge sharing."
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "AWS SQS",
      "AWS SNS",
      "AWS Lambda",
      "AWS SES",
      "JWT",
      "RESTful APIs"
    ]
  },
  {
    id: "elite-web",
    role: "Full Stack Developer",
    company: "Elite Web Technologies",
    location: "Panchkula, India",
    period: "July 2019 – Present",
    type: "full-time",
    bullets: [
      "Delivered and maintained 20+ production web applications across 15+ client projects using React.js, Node.js, Express.js and MongoDB.",
      "Designed, built and maintained features across the full stack, translating business requirements into frontend experiences, backend APIs, data models and integrations.",
      "Built reusable React components and RESTful APIs for user operations, wallet and transaction workflows, and third-party service integrations.",
      "Improved page-load time by approximately 30% through lazy loading, caching and Redux state-management improvements.",
      "Reduced API response time by 25–30% through PostgreSQL and MongoDB query optimization, indexing and efficient data handling.",
      "Implemented JWT authentication, authorization, request validation and role-based access control to strengthen application security and data integrity.",
      "Built event-driven processing and notification workflows using AWS SQS, SNS and Lambda, with SES for transactional email.",
      "Developed responsive, user-friendly React interfaces and collaborated with product, design, QA and engineering teammates on requirements, code reviews, debugging and API contracts.",
      "Integrated frontend features with backend APIs and third-party services, coordinating payloads and resolving cross-layer integration issues.",
      "Diagnosed and resolved production issues, investigated root causes, optimized performance, and supported existing systems while delivering new features.",
      "Supported deployment and production operations on AWS ECS and EC2, troubleshooting backend issues and contributing to reliability and release readiness.",
      "Applied team leadership capabilities developed over 4 years by coordinating technical tasks, helping teammates resolve implementation issues, reviewing code, sharing knowledge, and promoting reusable engineering practices.",
      "Contributed to maintainable code and incremental system improvements through debugging, functional validation, careful API changes and collaboration across engineering stakeholders."
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Redux",
      "AWS ECS & EC2",
      "AWS SQS / SNS / Lambda",
      "Team Leadership (4 Yrs)",
      "RESTful APIs"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "myiou",
    name: "MyIoU",
    tagline: "Social Media Platform with Token-Based Transactions",
    client: "IOU Inc., Brampton, ON",
    category: "fintech",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "AWS SQS",
      "AWS SES",
      "AWS SNS",
      "AWS Lambda",
      "AWS ECS",
      "AWS EC2",
      "AWS RDS"
    ],
    bullets: [
      "Built a scalable backend for a social platform with an integrated token wallet and transaction system using modular service design.",
      "Developed RESTful APIs for user profiles, social interactions, wallet management and transaction processing.",
      "Implemented authentication, authorization and transaction validation to maintain consistent transaction data and secure access.",
      "Improved API response time by 25–30% through MongoDB query optimization and indexing.",
      "Implemented AWS event-driven workflows with SQS, SNS and Lambda for asynchronous processing and notifications, and SES for transactional email.",
      "Deployed and supported backend services on AWS ECS and EC2, with PostgreSQL on Amazon RDS, to support concurrent workloads."
    ],
    metrics: [
      "Improved API response time by 25–30% through MongoDB query optimization and indexing",
      "Engineered AWS event-driven workflows (SQS, SNS, Lambda, SES) & deployed on AWS ECS/EC2 with RDS PostgreSQL"
    ]
  },
  {
    id: "iot-dashboard",
    name: "IoT Dashboard",
    tagline: "Configurable Multi-Site Monitoring System",
    category: "iot",
    technologies: ["React.js", "MQTT", "Node.js", "Redux"],
    bullets: [
      "Built a production dashboard for real-time visualization of device telemetry across multiple distributed sites.",
      "Integrated MQTT for high-frequency, bidirectional data streaming with sub-second update latency.",
      "Created configurable site- and device-specific UI components that operators can configure without code changes.",
      "Optimized Redux state management to reduce UI lag during sustained updates and support continuous data streams.",
      "Built data-rich monitoring views for operational users, emphasizing responsive presentation, continuous updates and clear site/device-specific information."
    ],
    metrics: [
      "Sub-second update latency via MQTT bidirectional streaming and zero UI lag under continuous high-frequency updates"
    ]
  },
  {
    id: "shopsaverz",
    name: "ShopSaverz",
    tagline: "E-Commerce Platform with Reward and Bidding System",
    category: "ecommerce",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Delivered a multi-vendor e-commerce platform covering vendor onboarding, product catalog management and the order lifecycle.",
      "Built a real-time bidding engine with reward-point redemption to support user engagement.",
      "Developed secure, rate-limited APIs for transactions, bidding and user management with role-based access control.",
      "Designed for concurrent sellers and simultaneous bidding sessions while keeping bid and order state consistent."
    ],
    metrics: [
      "Concurrent multi-vendor architecture and simultaneous bidding sessions without race conditions"
    ]
  },
  {
    id: "efuel",
    name: "EFUEL",
    tagline: "Fuel Discovery and Management Platform",
    category: "platform",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Geolocation API"],
    bullets: [
      "Developed backend services for fuel-station discovery with JWT authentication and role-based authorization.",
      "Implemented radius-based geolocation search, real-time availability and notifications for fuel-price changes.",
      "Reduced average response latency by about 20% by optimizing MongoDB aggregation pipelines and API payloads.",
      "Designed scalable data schemas for large station datasets and concurrent queries."
    ],
    metrics: [
      "Reduced average response latency by ~20% via optimized MongoDB aggregation pipelines and API payloads"
    ]
  },
  {
    id: "uaf",
    name: "UAF",
    tagline: "Certification and Authorization Platform",
    category: "platform",
    technologies: ["React.js", "Node.js", "REST APIs", "Role-Based Authentication"],
    bullets: [
      "Developed a React.js frontend for company registration, document upload and authority-level verification.",
      "Implemented multi-stage registration, document-submission, validation and approval workflows with role-based authentication.",
      "Collaborated with backend teammates on API contracts and redesigned verification flows into guided, responsive steps.",
      "Translated multi-step business approval processes into structured application workflows with clear user-facing steps."
    ],
    metrics: [
      "Redesigned multi-stage verification and authority compliance into a guided, responsive step-by-step experience"
    ]
  },
  {
    id: "rag-prototype",
    name: "Basic RAG Prototype",
    tagline: "Retrieval-Augmented Generation Learning Project",
    category: "ai",
    technologies: ["RAG Fundamentals", "AI / LLM APIs", "Embeddings & Retrieval", "Vector Context"],
    bullets: [
      "Created a basic learning project exploring Retrieval-Augmented Generation (RAG) and how retrieved context can support more grounded language-model responses.",
      "Built foundational understanding of retrieval-and-generation workflows; this was a learning prototype rather than a production application.",
      "Explored semantic retrieval, chunking strategies, and prompt augmentation to ground language models with domain-specific knowledge."
    ],
    metrics: [
      "Built foundational RAG workflow prototype exploring context injection and grounded response generation"
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "msc-it",
    degree: "Master of Science, Information Technology",
    institution: "Panjab University",
    location: "Chandigarh, India",
    period: "2020 – 2022",
    score: "90%"
  },
  {
    id: "bsc-cs",
    degree: "Bachelor of Science, Computer Science",
    institution: "Panjab University",
    location: "Chandigarh, India",
    period: "2017 – 2020",
    score: "76.88%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: "cert-java", name: "Java Programming Certification" },
  { id: "cert-web", name: "Web Designing and Multimedia Certification" }
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
