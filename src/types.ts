export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
  type?: "full-time" | "client-engagement" | "internship";
  client?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: "fintech" | "iot" | "ecommerce" | "platform" | "ai" | "other";
  technologies: string[];
  bullets: string[];
  metrics: string[];
  client?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export interface Certification {
  id: string;
  name: string;
}

export interface Extracurricular {
  id: string;
  activity: string;
  description: string;
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
