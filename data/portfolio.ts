// Single source of truth for portfolio content.
// Edit this file to update anything on the site — text, links, dates, etc.

export const profile = {
  name: "Tushy Tasnim",
  initials: "TT",
  role: "Industrial & Production Engineering Graduate",
  tagline:
    "Researching supply chain analytics, smart manufacturing, and sustainable operations.",
  location: "Bangladesh",
  email: "onomytasnim@gmail.com",
  phone: "+8801725428973",
  cvUrl: "#",
  links: {
    scholar: "https://scholar.google.com/citations?user=TQI66zcAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/tushytasnim/",
    github: "https://github.com/TushyTasnim",
  },
};

export const about = {
  paragraphs: [
    "I am an Industrial and Production Engineering graduate from Shahjalal University of Science and Technology, Bangladesh. My academic and research interests lie at the intersection of supply chain analytics, smart manufacturing, operations research, sustainable operations, and data-driven decision-making.",
    "I have research experience in Industry 4.0 technology adoption, PLS-SEM, ISM-MICMAC, linear programming, simulation, and analytical reporting. I am particularly interested in how emerging technologies, analytics, and optimization methods can improve industrial systems, supply chain performance, and sustainable operations.",
  ],
  researchAreas: [
    "Industry 4.0",
    "Smart Manufacturing",
    "Supply Chain Analytics",
    "Operations Research",
    "Sustainable Operations",
    "AI/Data-driven Industrial Systems",
  ],
  researchTopics: [
    "Food Supply Chains",
    "Technology Adoption",
    "Optimization",
    "PLS-SEM",
    "ISM-MICMAC",
    "Simulation",
    "Decision Support",
  ],
};

export type TimelineItem = {
  status: string;
  title: string;
  org: string;
  date: string;
  meta?: string[];
  bullets?: string[];
  current?: boolean;
};

export const education: TimelineItem[] = [
  {
    status: "Graduated",
    title: "BSc in Industrial & Production Engineering",
    org: "Shahjalal University of Science and Technology, Bangladesh",
    date: "CGPA: 3.68 / 4.00",
    meta: ["Merit Position: 5th out of 71", "IELTS: 7.0"],
    current: true,
  },
  {
    status: "Graduate Applicant",
    title: "Prospective MS / PhD Student",
    org: "Industrial Engineering — Supply Chain Analytics, Smart Manufacturing, Sustainable Operations",
    date: "Seeking Fall admission opportunities",
    meta: [
      "Research fit: data-driven industrial systems, optimization, and sustainable operations.",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    status: "Operations",
    title: "Associate Operations Engineer",
    org: "Algorizin Inc.",
    date: "Jan 2023 – Nov 2024 · Remote",
    bullets: [
      "Conducted data-driven process analysis to redesign workflows and reduce process cycle time by 70%.",
      "Developed an automated expense tracking system, improving data accuracy, transparency, and reporting efficiency.",
      "Analyzed operational and performance datasets to identify trends and support evidence-based decision-making.",
      "Prepared analytical reports and presentations by converting complex data into actionable insights.",
      "Coordinated cross-functional teams to implement process improvement initiatives and ensure timely project delivery.",
    ],
    current: true,
  },
  {
    status: "Industrial Attachment",
    title: "Training Institute for Chemical Industries",
    org: "",
    date: "Dec 2023",
    bullets: [
      "Gained practical understanding of mechanical engineering principles in a manufacturing facility.",
    ],
  },
  {
    status: "Industrial Attachment",
    title: "Bangladesh Industrial Technical Assistance Centre",
    org: "",
    date: "Jan 2023",
    bullets: [
      "Acquired practical skills in process improvement, product testing, and data analysis.",
    ],
  },
];

export type Publication = {
  type: "Journal" | "Conference";
  venue: string;
  date: string;
  title: string;
  summary: string;
  paperUrl: string;
};

export const publications: Publication[] = [
  {
    type: "Journal",
    venue: "Journal of Open Innovation: Technology, Market & Complexity [Q1]",
    date: "December 2025",
    title:
      "Technological capability and information exchange through adopting advanced technology in food processing: A model-based study of Bangladesh",
    summary:
      "Studied Industry 4.0 adoption in Bangladesh's food processing sector and identified technology capability, information sharing, organizational performance, business growth, and insufficient capital as a critical driving barrier.",
    paperUrl: "https://doi.org/10.1016/j.joitmc.2025.100674",
  },
  {
    type: "Conference",
    venue: "IMEOM 2022, Dhaka",
    date: "December 2021",
    title:
      "Development of a Linear Programming Model for the Diet Plan of University Students",
    summary:
      "Developed a nutrition optimization model using linear programming and the simplex method, showing protein intake gaps and improved cost allocation toward protein-rich food items.",
    paperUrl: "https://doi.org/10.46254/BD05.20220175",
  },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  illustration: "sensor" | "dishwasher";
  /** Real prototype photo, when available. Falls back to the SVG illustration. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Dust Detection using IR & Photo Sensor",
    summary:
      "Designed an engineering prototype concept for dust accumulation detection using infrared and photo sensor behavior, with emphasis on sensing logic, calibration, and practical monitoring potential.",
    tags: ["Sensors", "Prototype", "Industrial Monitoring"],
    illustration: "sensor",
    image: "/images/projects/dust-detection.jpg",
  },
  {
    title: "Portable Dishwasher with Liquid Dispenser",
    summary:
      "Developed a compact cleaning automation concept focused on dispensing control, ergonomic usability, product design, and manufacturability considerations.",
    tags: ["Product Design", "Automation", "Manufacturing"],
    illustration: "dishwasher",
    image: "/images/projects/portable-dishwasher.jpg",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Data Analysis", items: ["MS Excel", "Google Sheets", "Power BI", "SmartPLS"] },
  {
    label: "Research Methods",
    items: ["PLS-SEM", "ISM-MICMAC", "Linear Programming", "Simulation"],
  },
  { label: "Programming", items: ["Python", "C Language", "Analytical Reporting"] },
  {
    label: "Python Libraries",
    items: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Gurobipy"],
  },
  { label: "Web Development", items: ["WordPress", "Webflow", "Squarespace"] },
  { label: "Automation Tools", items: ["Zapier", "Pabbly Connect"] },
  {
    label: "Simulation & Drafting",
    items: ["Arena", "AutoCAD", "Adobe Illustrator", "Canva"],
  },
];

export type NewsItem = {
  date: string;
  text: string;
  certUrl?: string;
};

export const news: NewsItem[] = [
  {
    date: "Apr 2026",
    text: "Selected for the Aspire Leaders Program by Aspire Institute.",
    certUrl: "/images/certificates/aspire-leaders.png",
  },
  {
    date: "Dec 2025",
    text: "Journal article on Industry 4.0 adoption in Bangladesh's food processing sector scheduled in Journal of Open Innovation: Technology, Market & Complexity.",
  },
  {
    date: "May 2024",
    text: "Received Government Board Scholarship from the Ministry of Education, Bangladesh.",
  },
  {
    date: "Nov 2023",
    text: "Earned Certified Supply Chain Analyst credential from the International Supply Chain Education Alliance.",
    certUrl: "/images/certificates/iscea-csca.jpg",
  },
  {
    date: "Aug 2023",
    text: "Awarded 70% scholarship for the Certified Supply Chain Analyst program through the 2023 ISCEA Prize Global Supply Chain Case Competition.",
  },
];

export type Activity = {
  date: string;
  title: string;
  icon: "leadership" | "certification" | "analytics";
  certUrl?: string;
};

export const activities: Activity[] = [
  {
    date: "Apr 2026",
    title: "Aspire Leaders Program",
    icon: "leadership",
    certUrl: "/images/certificates/aspire-leaders.png",
  },
  {
    date: "Nov 2023",
    title: "Certified Supply Chain Analyst",
    icon: "certification",
    certUrl: "/images/certificates/iscea-csca.jpg",
  },
  { date: "Ongoing", title: "Data Analytics & Power BI", icon: "analytics" },
];

export type ServiceItem = {
  title: string;
  detail: string;
};

export const service = {
  awardCount: 2,
  items: [
    {
      title: "ISCEA Scholarship",
      detail:
        "70% scholarship for the Certified Supply Chain Analyst program through the 2023 ISCEA Prize Global Supply Chain Case Competition, Aug 2023.",
    },
    {
      title: "Government Board Scholarship",
      detail: "Ministry of Education, Bangladesh, May 2024.",
    },
  ] as ServiceItem[],
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#ml-projects", label: "Data Projects" },
  { href: "#dashboards", label: "Dashboard" },
  { href: "#projects", label: "Academic Projects" },
  { href: "#news", label: "News" },
  { href: "#service", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export type MLProject = {
  repo: string;
  url: string;
  description: string;
  relevance: string;
  tags: string[];
  /** Local screenshot of the real dashboard/app, when available. Falls back to GitHub's OG image. */
  image?: string;
  /** Optional link to a live app / published dashboard. */
  demoUrl?: string;
  demoLabel?: string;
};

// My own data science, ML, and analytics projects, pulled from
// github.com/TushyTasnim — predictive modeling, forecasting, and BI
// dashboards built end to end.
export const mlProjects: MLProject[] = [
  {
    repo: "XGBoost-Based-Predictive-Maintenance-System",
    url: "https://github.com/TushyTasnim/XGBoost-Based-Predictive-Maintenance-System",
    description:
      "Predicts machine failure from sensor data using XGBoost, generating downtime risk scores and visualizing maintenance insights through an interactive Streamlit dashboard.",
    relevance: "Predictive Maintenance · Industry 4.0",
    tags: ["Python", "XGBoost", "Streamlit"],
  },
  {
    repo: "supply_chain_optimization_projects",
    url: "https://github.com/TushyTasnim/supply_chain_optimization_projects",
    description:
      "An end-to-end supply chain analytics project covering demand forecasting, inventory optimization, route optimization, Monte Carlo simulation, and cost optimization.",
    relevance: "Supply Chain Analytics · Optimization",
    tags: ["Python", "Simulation", "Optimization"],
  },
  {
    repo: "late-delivery-predictive-analytics-in-supply-chain-using-ML-HistGradientBoostingModel",
    url: "https://github.com/TushyTasnim/late-delivery-predictive-analytics-in-supply-chain-using-ML-HistGradientBoostingModel",
    description:
      "Predicts late-delivery risk in supply chain logistics using a HistGradientBoosting model, with an interactive Streamlit dashboard exploring the drivers behind delivery delays.",
    relevance: "Supply Chain Analytics · Predictive Modeling",
    tags: ["Python", "HistGradientBoosting", "Streamlit"],
  },
  {
    repo: "Emotion-Detection-NLP-and-ML",
    url: "https://github.com/TushyTasnim/Emotion-Detection-NLP-and-ML",
    description:
      "Classifies human emotion in text using NLP preprocessing and feature extraction, comparing machine learning models across the full classification pipeline.",
    relevance: "NLP · Machine Learning",
    tags: ["Python", "NLP", "scikit-learn"],
  },
  {
    repo: "Demand-Forecasting-App",
    url: "https://github.com/TushyTasnim/Demand-Forecasting-App",
    description:
      "Forecasts product demand from historical retail data using XGBoost, deployed as an interactive Streamlit app with pricing, promotion, and inventory scenario inputs.",
    relevance: "Demand Forecasting · Retail Analytics",
    tags: ["Python", "XGBoost", "Streamlit"],
  },
  {
    repo: "heart-disease-prediction",
    url: "https://github.com/TushyTasnim/heart-disease-prediction",
    description:
      "Predicts heart-disease risk from clinical data, comparing five classification algorithms and deploying a K-Nearest Neighbors model in a Streamlit web app.",
    relevance: "Healthcare · Machine Learning",
    tags: ["Python", "scikit-learn", "Streamlit"],
  },
];

// Business-intelligence dashboards, pulled out of mlProjects into their own
// section since these are visual BI deliverables rather than ML/code repos.
export const dashboards: MLProject[] = [
  {
    repo: "Hospital-Monitoring-PowerBI-Dashboard",
    url: "https://github.com/TushyTasnim/Hospital-Monitoring-PowerBI-Dashboard",
    description:
      "An interactive Power BI dashboard analyzing hospital operations and healthcare performance metrics from patient-level data.",
    relevance: "Business Intelligence · Healthcare Analytics",
    tags: ["Power BI", "Dashboard", "DAX"],
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZDY5NjdiMmYtMzQ0ZS00N2E4LWE4MTUtYjExMGE0OTQxMmEyIiwidCI6ImZkOGY0MWFiLWVlZDEtNDMwZC05ZTE0LTY3M2NhOGQ0NzBjNiIsImMiOjEwfQ%3D%3D",
    demoLabel: "Live Dashboard",
  },
  {
    repo: "Dengue-Phenomenon-in-Bangladesh-Dashboard",
    url: "https://github.com/TushyTasnim/Dengue-Phenomenon-in-Bangladesh-Dashboard",
    description:
      "A dashboard visualizing dengue outbreak trends and patterns across Bangladesh to support public-health monitoring and awareness.",
    relevance: "Public Health Analytics · Dashboard",
    tags: ["Dashboard", "Data Visualization", "Public Health"],
    image: "/images/projects/dengue-dashboard.jpg",
  },
  {
    repo: "Hotel-Monitoring-Excel-Dashboard",
    url: "https://github.com/TushyTasnim/Hotel-Monitoring-Excel-Dashboard",
    description:
      "An Excel dashboard tracking hotel booking, occupancy, and revenue performance for hospitality management.",
    relevance: "Business Intelligence · Hospitality Analytics",
    tags: ["Excel", "Dashboard", "Data Visualization"],
    image: "/images/projects/hotel-dashboard.png",
  },
];
