
import React from 'react';
import { Briefcase, Database, Layout, Users, Wrench, BrainCircuit } from 'lucide-react';
import { CaseStudy, Project, Experience, SkillCategory, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Kaushal Prasad",
  role: "Product Manager | AI · SaaS · HealthTech · Communities",
  email: "Prasadkaushal3@gmail.com",
  phone: "+91 8093786521",
  linkedin: "https://www.linkedin.com/in/kaushalprasadkaush7/",
  twitter: "https://twitter.com/kaushalprasad",
  github: "https://github.com/kaushalprasad",
  resume: "https://drive.google.com/file/d/1PBsoidwX4lPCj6KxAhfqG4EZHatFf04e/view?usp=sharing", 
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Product Thinking",
    skills: ["Product Strategy & Roadmapping", "0→1 & MVP Development", "User Research & Empathy", "Stakeholder Management", "Agile & Scrum", "A/B Testing"]
  },
  {
    title: "Data & Growth",
    skills: ["Funnel Analysis & Retention", "Growth Metrics & KPIs", "SQL", "Python", "Power BI", "Excel"]
  },
  {
    title: "Tools & Tech",
    skills: ["Jira", "Confluence", "Notion", "Figma", "Mixpanel", "APIs & Postman", "GenAI", "Prompt Engineering"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Worlder Team",
    role: "Product Manager (Remote)",
    duration: "Oct 2024 – Present",
    bullets: [
      "Built an AI-powered Employee LMS MVP with personalization & performance analytics, contributing to $0.5M funding from Hot Staff.",
      "Designed and deployed a RAG-based AI support chatbot, reducing support tickets by 28%.",
      "Redesigned onboarding for an internal product (Improver), increasing sign-ups by 15%.",
      "Led UAT across 4 in-house AI products, reducing release defects by 17%."
    ]
  },
  {
    company: "Ultrahuman",
    role: "Product Specialist (Remote)",
    duration: "Feb 2024 – Jul 2024",
    bullets: [
      "Launched a WhatsApp-based AI support chatbot, improving CSAT from 4.1 → 4.5 (10% uplift).",
      "Diagnosed user drop-offs via data analysis & UX audits; shipped improvements that boosted weekly retention by 20%.",
      "Improved internal efficiency through structured product documentation and usability guidelines."
    ]
  },
  {
    company: "Rewardwise",
    role: "Associate Product Manager (Remote)",
    duration: "Mar 2023 – Feb 2024",
    bullets: [
      "Owned end-to-end development of the Rewardwise app and onboarded the first 100 customers.",
      "Rebuilt onboarding using data insights, increasing sign-ups by 30%.",
      "Defined roadmap, KPIs, and rollout strategy from scratch."
    ]
  }
];

export const INTERNSHIPS: Experience[] = [
  {
    company: "Price Labs",
    role: "Product Management Intern (Remote)",
    duration: "Jan 2023 – Feb 2023",
    bullets: [
      "Conducted product demos showcasing feature value propositions to customers.",
      "Redesigned property listing flow, reducing drop-offs and friction by 12%."
    ]
  },
  {
    company: "FANVIDEO",
    role: "Product Management Intern (Remote)",
    duration: "Mar 2022 – May 2022",
    bullets: [
      "Authored PRDs and collaborated with Engineering and Design to ship key UX improvements.",
      "Performed data-driven market and competitor research to prioritize features.",
      "Conducted interviews & surveys to align product decisions with user expectations."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "finmo",
    title: "Finmo: Optimizing Business Cash Flow & Yield",
    subtitle: "Enabling businesses to manage fluctuating revenue and generate additional income through smart treasury management.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2011",
    tags: ["FinTech", "B2B", "Treasury Management"],
    problem: "Businesses often face challenges in managing their cash flow effectively, especially those with fluctuating revenue streams. Traditional payment solutions do not offer sufficient flexibility or opportunities for generating additional income.",
    painPoints: [
      "Idle cash sitting in current accounts without earning any yield or interest.",
      "High difficulty in predicting upcoming payables against irregular revenue peaks.",
      "Manual treasury management processes that are prone to error and time-consuming."
    ],
    businessContext: "For SMEs, every bit of capital counts. In high-interest environments, leaving cash idle in a non-interest-bearing account represents a significant opportunity cost.",
    role: "Lead Product Manager for the Treasury & Yield optimization module.",
    hypotheses: [
      "Automating the 'sweep' of surplus cash into liquid funds will increase merchant retention by providing immediate visible value.",
      "Providing a visual cash flow forecast will reduce merchant reliance on high-interest short-term credit."
    ],
    dataResearch: "Analyzed transaction patterns of 500+ merchants and interviewed 15 CFOs to identify the threshold of 'surplus' cash that remains untouched for 15+ days.",
    solution: "Developed 'Finmo Yield', an automated treasury engine that identifies surplus cash and allows merchants to earn market-linked returns with T+0 liquidity.",
    tradeOffs: "Decided to prioritize liquid funds over higher-yield corporate bonds to ensure merchants never faced a liquidity crisis during unforeseen revenue dips.",
    impact: [
      "15% average increase in net income for early pilot merchants.",
      "25% reduction in time spent on manual treasury management by finance teams.",
      "Attained $2M+ in managed AUM within the first 100 days of launch."
    ],
    improvements: "Introduce predictive AI that anticipates upcoming tax or payroll cycles to suggest optimal yield durations for every dollar.",
    driveLink: "https://drive.google.com/file/d/1QY-lMzFmoCOrgVhf8JiRHdJh8Mlt32F1/view?usp=sharing"
  },
  {
    id: "star-wars-strategy",
    title: "Product Strategy: Star Wars Community Commerce",
    subtitle: "Fostering vibrant communities between small retailers and fans through shared themed interests.",
    image: "https://images.unsplash.com/photo-1593488913916-292bb05050f2?auto=format&fit=crop&q=80&w=2070",
    tags: ["Strategy", "Community", "E-commerce"],
    problem: "Small retailers struggle to reach niche enthusiast communities effectively, while fans lack a centralized platform that combines community engagement with trusted local commerce.",
    painPoints: [
      "Merchants lack tools for niche group-selling and targeted campaigns.",
      "Fans experience fragmented engagement across multiple disconnected social and shopping platforms.",
      "Low visibility for small business 'specialized' inventory among local users."
    ],
    businessContext: "The goal is to leverage the massive Star Wars fandom to drive merchant empowerment and small business growth through a dedicated platform.",
    role: "Lead Strategist defining vision, goals, and monetization frameworks.",
    hypotheses: [
      "Personalized experiences like custom avatars and mini-games will drive organic user base expansion.",
      "A dedicated space for merchant-user connection will foster resilient local community formation."
    ],
    dataResearch: "Conducted market analysis on fan behavior and retailer pain points in the collectables and themed merchandise space.",
    solution: "A hybrid community-commerce platform with social boards, merchant empowerment tools for group selling, and gamified engagement layers.",
    tradeOffs: "Focused initially on community density and local merchant features rather than broad e-commerce logistics to ensure early 'stickiness'.",
    impact: [
      "25% target increase in Community Engagement metrics.",
      "15% reduction in merchant Customer Acquisition Costs.",
      "Scalable monetization through seamless payment integrations and premium merchant tools."
    ],
    improvements: "Implement AI-driven merchant matching to connect users with the most relevant local shop campaigns based on their specific fandom sub-interests.",
    driveLink: "https://drive.google.com/file/d/1u8UyuoDzRWMUHCy4KmEnHse0-3HdpC1C/view?usp=sharing"
  },
  {
    id: "pazcare",
    title: "PAZcare: Revolutionizing Employee Health Benefits",
    subtitle: "Scaling healthtech infrastructure for enterprise transparency and efficiency.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    tags: ["HealthTech", "B2B SaaS", "Operational Efficiency"],
    problem: "Employee health benefits management was opaque, manually intensive, and suffered from high turnaround times for claims and policy adjustments.",
    painPoints: [
      "HR teams spent 20+ hours/month on manual policy updates.",
      "Employees were frustrated by lack of visibility into claim status.",
      "Insurance providers struggled with data fragmentation."
    ],
    businessContext: "As health insurance costs rose, enterprises needed a way to optimize their spend while improving the employee experience to retain talent.",
    role: "Core PM owning the employer dashboard and claim tracking workflow.",
    hypotheses: [
      "Automating policy adjustments via a self-serve portal will reduce HR support tickets by 40%.",
      "A real-time claim tracker will increase employee trust and portal engagement."
    ],
    dataResearch: "Conducted interviews with 15 HR managers and audited 500 support tickets. Found that 65% of queries were simple 'status check' requests.",
    solution: "Developed a centralized 'Benefits Command Center' for HRs and a simplified mobile interface for employees with push notifications for every claim stage.",
    tradeOffs: "Chose to postpone advanced analytics for HRs to prioritize the claim tracker, as the latter addressed the most immediate user frustration point.",
    impact: [
      "40% reduction in benefits-related HR support tickets.",
      "12% decrease in drop-offs during the claim filing process.",
      "Average claim turnaround time visible to users reduced from 3 days to real-time updates."
    ],
    improvements: "Integrate AI-driven claim estimation to set better user expectations before they even file a claim.",
    driveLink: "https://drive.google.com/file/d/1PBsoidwX4lPCj6KxAhfqG4EZHatFf04e/view?usp=sharing"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI PRD Maker",
    link: "https://aiprdmaker.vercel.app/",
    description: "An AI-powered tool that helps PMs generate clear, structured PRDs in minutes.",
    impact: [
      "Saves ~2 hours per PRD.",
      "Generates previewable & downloadable PDFs.",
      "Standardizes documentation across teams."
    ],
    tags: ["GenAI", "Productivity", "SaaS"]
  },
  {
    title: "The Noob PM Community",
    link: "https://www.thenoobpm.com",
    description: "Built and scaled a 3,000+ member PM community focused on career transitions.",
    impact: [
      "₹2,00,000+ revenue generated.",
      "30+ successful job placements.",
      "3,000+ active aspiring PMs."
    ],
    tags: ["Community", "Growth", "EdTech"]
  },
  {
    title: "GymPulse",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7401160825568423936/",
    description: "Real-time gym occupancy & equipment availability platform to optimize workouts.",
    impact: [
      "Reduced wait times for equipment.",
      "Predictive peak-hour insights.",
      "Improved user scheduling."
    ],
    tags: ["IoT", "UX", "Real-time"]
  },
  {
    title: "REFEASE",
    link: "https://www.linkedin.com/company/refease/about/?viewAsMember=true",
    description: "On-demand job referral-based community connecting seekers with top-tier professionals.",
    impact: [
      "Built 2700+ member community in < 12mo.",
      "Facilitated 100+ job referrals & placements.",
      "Defined strategy & managed all operations."
    ],
    tags: ["Community", "Growth", "Strategy"]
  },
  {
    title: "PM JOBS",
    link: "https://www.linkedin.com/company/pmjobs-in/",
    description: "One-stop solution for product management job roles, using web scraping for automation.",
    impact: [
      "Aggregated 200+ daily unique visitors.",
      "Automated job discovery & curation.",
      "Centralized PM role repository."
    ],
    tags: ["Web Scraping", "Jobs", "Automation"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MSC in Information Technology",
    school: "Lovely Professional University",
    location: "Punjab",
    duration: "2022 – 2024"
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "St. Joseph’s College",
    location: "Bangalore",
    duration: "2018 – 2021"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "SQL for Data Science", issuer: "IBM" },
  { name: "Python for Data Science", issuer: "IBM" },
  { name: "Master Product Management by Building a Product", issuer: "Udemy/Self-Led" },
  { name: "AI Automation", issuer: "Self-Led" },
  { name: "Foundation of prompt engineering", issuer: "AWS" },
  { name: "Postman API Fundamentals", issuer: "Postman" }
];
