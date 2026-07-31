export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  gradient: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  estimatedTime: string;
  startingPrice: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    experienceYears: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'mobile' | 'data';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  client: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  completionDate: string;
  demoUrl?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}
