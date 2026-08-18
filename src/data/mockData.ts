import { Service, SkillCategory, ProjectItem } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-design',
    title: 'Web Engineering & WordPress Development',
    shortDesc: 'Custom web application engineering (React, Next.js), Element page builder design, and hands-on WordPress development, from custom builds and plugin creation to full-site maintenance.',
    fullDesc: 'We deliver end-to-end web software engineering, Element page builder design, and enterprise WordPress solutions. From custom web platforms to multilingual WordPress architectures, custom plugins, WooCommerce store management, and high-performance site maintenance.',
    iconName: 'Globe',
    gradient: 'from-teal-600 to-cyan-600',
    features: [
      'WordPress & Element Developer with hands-on experience, from custom builds to full-site maintenance',
      'Elementor Page Builder custom layout design, responsive styling & custom widget development',
      'Delivered & maintained multilingual WordPress sites (Persian/Arabic/English) for international brands across UAE, Saudi Arabia, Qatar, Kuwait, and Canada',
      'Custom WordPress plugin & theme development tailored to specific business requirements',
      'Full WooCommerce store development, custom payment gateways, and inventory management',
      'Performance optimization at scale — supported 50+ live WordPress sites simultaneously',
      'Strong grasp of software engineering principles (OOP, SOLID, Clean Architecture) for maintainable code',
      'Proficient in Element, Elementor, PHP, JavaScript, jQuery, AJAX, HTML5/CSS3/SCSS, Figma (UI/UX), & Google Analytics',
      'Experienced working remotely with distributed, multinational teams'
    ],
    technologies: [ 'Elementor', 'WordPress', 'PHP', 'WooCommerce', 'React.js', 'Next.js', 'JavaScript', 'jQuery', 'AJAX', 'Tailwind CSS', 'Figma', 'Google Analytics'],
    deliverables: ['Custom Elementor Layouts & Widgets', 'Custom Plugin & Theme Build', 'Multilingual Setup (EN/AR/FA)', 'WooCommerce E-Commerce Store', 'Performance Optimization (50+ Sites)', 'Figma UI/UX & Analytics Integration', 'Ongoing Maintenance SLA'],
    estimatedTime: '2 to 4 Weeks',
    startingPrice: 'From $1,200'
  },
  {
    id: 'ai-solutions',
    title: 'AI & Machine Learning Solutions',
    shortDesc: 'Custom AI model integration, intelligent Gemini chatbots, NLP document processing, and computer vision automation.',
    fullDesc: 'Automate your business workflows leveraging Gemini models and modern AI engineering. From 24/7 intelligent customer support chatbots to automated text analytics, image recognition, and predictive recommendation systems.',
    iconName: 'Cpu',
    gradient: 'from-violet-500 to-purple-600',
    features: [
      'Custom LLM chatbots trained on your organization data',
      'Natural Language Processing (NLP) & contract analysis',
      'Computer Vision & automated video inspection',
      'Automated administrative workflows & support dispatch',
      'Predictive customer behavior & demand forecasting'
    ],
    technologies: ['Gemini API', 'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'FastAPI'],
    deliverables: ['Custom AI Pipelines & Prompts', 'Dedicated REST/gRPC APIs', 'Control & Monitoring Dashboard', 'Complete Technical Documentation'],
    estimatedTime: '3 to 6 Weeks',
    startingPrice: 'From $2,500'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development (iOS & Android)',
    shortDesc: 'High-performance mobile application design with engaging UI, smooth animations, and App Store / Google Play publishing.',
    fullDesc: 'Our engineering team crafts native and cross-platform mobile apps using React Native and Flutter frameworks, keeping your business accessible to customers on iOS and Android devices anywhere.',
    iconName: 'Smartphone',
    gradient: 'from-emerald-500 to-teal-600',
    features: [
      'Smooth, modern UI adhering to Apple & Google HIG standards',
      'Native-speed performance with offline caching',
      'Real-time push notifications & live messaging',
      'In-app purchases, payment integration & GPS mapping',
      'Secure biometrics & offline data sync'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    deliverables: ['Production App Binaries (IPA & APK)', 'App Store & Google Play Publishing', 'Complete UI/UX Figma Source', 'Post-Launch Technical Support'],
    estimatedTime: '4 to 8 Weeks',
    startingPrice: 'From $2,000'
  },
  {
    id: 'data-analysis',
    title: 'Data Analytics & Business Intelligence (BI)',
    shortDesc: 'Transform raw enterprise data into actionable executive insights with real-time interactive BI dashboards and automated pipelines.',
    fullDesc: 'We consolidate your scattered sales, marketing, HR, and financial data into real-time visual PowerBI and web dashboards, helping executive teams make data-backed strategic decisions.',
    iconName: 'BarChart3',
    gradient: 'from-amber-500 to-orange-600',
    features: [
      'Interactive PowerBI & Web Executive Dashboards',
      'Data Warehousing & automated ETL pipelines',
      'Customer churn analysis & lifetime value modeling',
      'Revenue & sales forecasting with statistical algorithms',
      'Automated daily/weekly executive email digests'
    ],
    technologies: ['Power BI', 'Python (Pandas, SQL)', 'ClickHouse', 'Metabase', 'PostgreSQL', 'Tableau'],
    deliverables: ['Live Executive Dashboard', 'Automated Data Pipeline', 'Comprehensive Analytical Report', 'Executive Training Workshops'],
    estimatedTime: '2 to 5 Weeks',
    startingPrice: 'From $1,800'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'development',
    title: 'Software & Web Engineering',
    description: 'Mastery over modern web frameworks, typed architectures, and cloud services.',
    skills: [
      { name: 'React.js & Next.js', level: 96, experienceYears: '6+ Years', description: 'Enterprise SPA platforms, SSR rendering, and micro-frontends' },
      { name: 'WordPress, Element & PHP (Plugins/Themes/WooCommerce)', level: 95, experienceYears: '6+ Years', description: 'Elementor custom layouts, plugins, multilingual sites (EN/AR/FA), WooCommerce, OOP/SOLID principles, 50+ sites supported' },
      { name: 'Node.js & Express / Python FastAPI', level: 92, experienceYears: '5+ Years', description: 'Microservices architecture and high-throughput REST APIs' },
      { name: 'TypeScript & JavaScript (jQuery/AJAX)', level: 95, experienceYears: '5+ Years', description: 'Type-safe functional coding, interactive frontend logic, and clean architecture' }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Integration of Large Language Models (LLMs), neural networks, and computer vision.',
    skills: [
      { name: 'Gemini API & LLM Integration', level: 98, experienceYears: '3+ Years', description: 'Server-side LLM orchestration, function calling, and live agents' },
      { name: 'Python & PyTorch', level: 90, experienceYears: '4+ Years', description: 'Deep learning model training and fine-tuning pipelines' },
      { name: 'NLP & Text Analytics', level: 87, experienceYears: '4+ Years', description: 'Semantic search, document summarization, and sentiment analysis' },
      { name: 'Computer Vision (OpenCV)', level: 85, experienceYears: '3+ Years', description: 'Real-time object detection and visual quality control' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Engineering',
    description: 'Cross-platform mobile applications for iOS and Android ecosystems.',
    skills: [
      { name: 'React Native', level: 94, experienceYears: '5+ Years', description: 'Single codebase native cross-platform deployment' },
      { name: 'Flutter', level: 89, experienceYears: '4+ Years', description: 'High-FPS custom UI graphics with Dart engine' },
      { name: 'State Management (Zustand/Redux)', level: 95, experienceYears: '5+ Years', description: 'Predictable application state and offline-first storage' }
    ]
  },
  {
    id: 'data-bi',
    title: 'Data Engineering & BI',
    description: 'Data warehousing, ETL pipelines, and executive analytical dashboards.',
    skills: [
      { name: 'Power BI & DAX', level: 93, experienceYears: '5+ Years', description: 'Interactive executive reporting and complex DAX measures' },
      { name: 'SQL & Data Warehouse', level: 95, experienceYears: '6+ Years', description: 'High-performance OLAP query optimization' },
      { name: 'Pandas & Data Pipelines', level: 91, experienceYears: '4+ Years', description: 'Automated data cleaning and batch ETL jobs' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps, Cloud & Security',
    description: 'Containerized deployment, cloud infrastructure, and 24/7 SLA monitoring.',
    skills: [
      { name: 'Docker & Kubernetes', level: 88, experienceYears: '4+ Years', description: 'Container orchestration and automated auto-scaling' },
      { name: 'CI/CD Pipelines & Linux', level: 92, experienceYears: '5+ Years', description: 'Automated build tests and Linux server administration' },
      { name: 'Network Security & Hardening', level: 90, experienceYears: '6+ Years', description: 'Vulnerability assessment and zero-trust infrastructure' }
    ]
  }
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Smart E-Commerce Platform & Business Intelligence Hub',
    category: 'web',
    categoryLabel: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Ultra-fast online store with inventory management integration and AI analytics dashboard.',
    fullDesc: 'Developed for a nationwide retail chain. Includes sub-second page loads, automated customer loyalty program, multi-gateway checkout, and live executive sales performance metrics.',
    client: 'OmniChain Retail Corp',
    impactMetrics: [
      { label: 'Online Revenue Growth', value: '+340%' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Monthly Active Users', value: '120,000' }
    ],
    technologies: ['Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    completionDate: 'May 2024',
    demoUrl: 'https://example.com/demo-store'
  },
  {
    id: 'p2',
    title: 'Gemini AI Legal Assistant & Contract Analysis Tool',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Gemini-powered document processing tool for legal summarization and risk clause extraction.',
    fullDesc: 'Enterprise legal management software that analyzes 200-page corporate contracts in seconds, highlighting high-risk clauses with 98.5% precision using Gemini models.',
    client: 'Sina Global Investments',
    impactMetrics: [
      { label: 'Attorney Time Saved', value: '85%' },
      { label: 'Risk Detection Accuracy', value: '98.5%' },
      { label: 'Processed Documents', value: '50,000+' }
    ],
    technologies: ['Gemini API', 'Python', 'FastAPI', 'React', 'Vector DB'],
    completionDate: 'July 2024',
    demoUrl: 'https://example.com/demo-ai'
  },
  {
    id: 'p3',
    title: 'Telehealth & Digital Appointment Scheduling Mobile App',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Comprehensive iOS & Android healthcare app with e-prescriptions and video consultation.',
    fullDesc: 'Mobile health platform enabling patients to search specialists, book appointments, receive digital prescriptions, and consult doctors via encrypted HD video calls.',
    client: 'Arad Healthcare Network',
    impactMetrics: [
      { label: 'Active Installs', value: '85,000+' },
      { label: 'App Store Rating', value: '4.8 / 5.0' },
      { label: 'In-Clinic Waiting Time', value: '-65%' }
    ],
    technologies: ['React Native', 'WebRTC', 'Redux Toolkit', 'Express.js', 'Redis'],
    completionDate: 'September 2023',
    demoUrl: 'https://example.com/demo-app'
  },
  {
    id: 'p4',
    title: 'Logistics BI & Fleet Demand Forecasting Dashboard',
    category: 'data',
    categoryLabel: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Transportation data analysis system optimizing route dispatching with predictive algorithms.',
    fullDesc: 'Unified fleet data pipelines into an analytical warehouse, calculating optimal transit routes, fuel efficiency ratios, and estimated arrival times in real time.',
    client: 'TransPacific Freight Lines',
    impactMetrics: [
      { label: 'Fuel Cost Reduction', value: '22%' },
      { label: 'Delivery Delay Reduction', value: '40%' },
      { label: 'Processing Latency', value: 'Real-time' }
    ],
    technologies: ['Power BI', 'Python Pandas', 'PostgreSQL', 'Docker', 'ClickHouse'],
    completionDate: 'March 2024',
    demoUrl: 'https://example.com/demo-data'
  },
  {
    id: 'p5',
    title: 'Online Learning Platform & Webinar Portal',
    category: 'web',
    categoryLabel: 'Web Design',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Virtual LMS platform with automated quizzes, digital certificates, and live classrooms.',
    fullDesc: 'Built an end-to-end Learning Management System featuring adaptive bitrate video streaming, automated grading, interactive student forums, and smart certificate generation.',
    client: 'International Knowledge Academy',
    impactMetrics: [
      { label: 'Active Learners', value: '45,000+' },
      { label: 'Course Revenue Increase', value: '+280%' },
      { label: 'Instructor Satisfaction', value: '99%' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'AWS S3'],
    completionDate: 'November 2023',
    demoUrl: 'https://example.com/demo-edu'
  },
  {
    id: 'p6',
    title: 'Industrial Quality Vision Defect Detection System',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Edge AI computer vision pipeline detecting automotive manufacturing defects at high speed.',
    fullDesc: 'Factory automation system utilizing high-resolution cameras and edge AI hardware to inspect structural surface defects at a rate of 50 parts per second.',
    client: 'Advanced Auto Component Mfg',
    impactMetrics: [
      { label: 'Manufacturing Waste Drop', value: '91%' },
      { label: 'Inspection Speed', value: '50 units/sec' },
      { label: 'Human Error Elimination', value: '100%' }
    ],
    technologies: ['OpenCV', 'PyTorch', 'Python', 'NVIDIA Jetson', 'MQTT'],
    completionDate: 'June 2024',
    demoUrl: 'https://example.com/demo-vision'
  }
];

export const OFFICE_LOCATION = {
  name: 'RF Craft',
  owner: 'Aref Soleymani',
  kvkNumber: '99957922',
  vestigingsnummer: '000064995178',
  sbiCode: '63100 - Computer infrastructure, data processing, hosting & related activities',
  activityDescription: 'Data Analyst & Computer Infrastructure Specialist',
  address: 'Burgersdijkstraat 20, 2522WE \'s-Gravenhage, Netherlands',
  postalCode: '2522 WE',
  city: '\'s-Gravenhage (The Hague)',
  country: 'Netherlands',
  phones: ['+31 6 14167492', '0614167492'],
  email: 'aref.s.1373@gmail.com',
  supportEmail: 'aref.s.1373@gmail.com',
  workingHours: 'Monday - Friday: 09:00 - 18:00 CET',
  coordinates: {
    lat: 52.0620,
    lng: 4.3312
  },
  googleMapsUrl: 'https://maps.google.com/?q=Burgersdijkstraat+20,+2522WE+\'s-Gravenhage,+Netherlands'
};
