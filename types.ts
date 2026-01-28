
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  problem: string;
  painPoints: string[];
  businessContext: string;
  role: string;
  hypotheses: string[];
  dataResearch: string;
  solution: string;
  tradeOffs: string;
  impact: string[];
  improvements: string;
  driveLink?: string;
}

export interface Project {
  title: string;
  link: string;
  description: string;
  impact: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  duration: string;
}

export interface Certification {
  name: string;
  issuer: string;
}
