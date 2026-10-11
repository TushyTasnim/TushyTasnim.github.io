// Single source of truth for portfolio content.
// Edit this file to update anything on the site — text, links, dates, etc.
// Keep copy tight: short summaries, and only the most mention-worthy tools
// and focus areas per research item.

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
    "Industrial and Production Engineering graduate from Shahjalal University of Science and Technology, working at the intersection of supply chain analytics, smart manufacturing, and operations research.",
    "My research applies Industry 4.0 adoption modelling, PLS-SEM, ISM-MICMAC, optimization, and simulation to industrial systems and sustainable operations.",
  ],
  researchAreas: [
    "Industry 4.0",
    "Smart Manufacturing",
    "Supply Chain Analytics",
    "Operations Research",
    "Sustainable Operations",
    "Digital Twin",
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
  },
];

export const experience: TimelineItem[] = [
  {
    status: "Operations",
    title: "Associate Operations Engineer",
    org: "Algorizin Inc.",
    date: "Jan 2023 – Nov 2024 · Remote",
    bullets: [
      "Redesigned workflows from data-driven process analysis, cutting process cycle time by 70%.",
      "Built an automated expense tracking system, improving data accuracy and reporting efficiency.",
      "Turned operational datasets into analytical reports that supported evidence-based decisions.",
    ],
    current: true,
  },
  {
    status: "Industrial Attachment",
    title: "Training Institute for Chemical Industries",
    org: "",
    date: "Dec 2023",
    bullets: [
      "Mechanical engineering principles applied in a live manufacturing facility.",
    ],
  },
  {
    status: "Industrial Attachment",
    title: "Bangladesh Industrial Technical Assistance Centre",
    org: "",
    date: "Jan 2023",
    bullets: ["Hands-on process improvement, product testing, and data analysis."],
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
      "Modelled Industry 4.0 adoption in Bangladesh's food processing sector, identifying technological capability and information exchange as the key drivers and insufficient capital as the critical barrier.",
    paperUrl: "https://doi.org/10.1016/j.joitmc.2025.100674",
  },
  {
    type: "Conference",
    venue: "IMEOM 2022, Dhaka",
    date: "December 2021",
    title:
      "Development of a Linear Programming Model for the Diet Plan of University Students",
    summary:
      "A linear programming diet model solved by the simplex method, exposing protein intake gaps and reallocating cost toward protein-rich items.",
    paperUrl: "https://doi.org/10.46254/BD05.20220175",
  },
];

export type OngoingResearchItem = {
  /** "Submitted" papers are under review; "Ongoing" are still in progress. */
  status: "Submitted" | "Ongoing";
  title: string;
  summary: string;
  authors?: string;
  /** Only the headline tools — 3 to 6 per item, never an exhaustive stack. */
  tools?: string[];
  /** Only the 3 defining focus areas. */
  focus?: string[];
};

export const ongoingResearch: OngoingResearchItem[] = [
  {
    status: "Submitted",
    title:
      "Calibrate, Certify, or Learn? Deciding When a Language Model Should Defer to a Human",
    authors: "Tushy Tasnim, Rifat Faruk Zitu",
    summary:
      "Decides when a language model should answer and when to defer to a human, combining Bayesian uncertainty estimation, conformal risk control, and value-of-information to balance accuracy, risk, and review cost.",
    tools: [
      "Python",
      "Qwen2.5-Instruct",
      "vLLM",
      "Bayesian Logistic Regression",
      "Conformal Risk Control",
    ],
    focus: ["LLM reliability", "Uncertainty calibration", "Human–AI collaboration"],
  },
  {
    status: "Submitted",
    title:
      "Uncertainty-Aware Preferential Bayesian Optimization under Noisy Human Preferences: A Controlled Test of Ambiguity-Seeking Acquisition",
    authors: "Rifat Faruk Zitu, Tushy Tasnim",
    summary:
      "Tests whether modelling uncertainty over preference rankings improves Bayesian optimization under noisy human feedback. The proposed UA-EUBO acquisition adds an ambiguity bonus to expected utility, but shows no consistent gain over standard EUBO on synthetic benchmarks or the UT-Zappos50K dataset.",
    tools: [
      "Python",
      "BoTorch",
      "Pairwise Gaussian Process",
      "Bayesian Optimization",
    ],
    focus: [
      "Preferential Bayesian optimization",
      "Noisy human feedback",
      "Active learning",
    ],
  },
  {
    status: "Ongoing",
    title:
      "Bottleneck Forecasting Under a Stricter Evaluation: A Leakage-Controlled, Rolling-Origin Comparison of Statistical and Machine Learning Models",
    authors: "Rifat Faruk Zitu, Tushy Tasnim",
    summary:
      "Compares six forecasting models for bottlenecks in a simulated five-station steel line under leakage-controlled, rolling-origin evaluation across 25 origins and four horizons. Recursive XGBoost gave the lowest scaled error at every horizon, but beat the best classical model significantly at only two.",
    tools: [
      "Python",
      "Discrete-Event Simulation",
      "SARIMA",
      "XGBoost",
      "Conformal Prediction",
      "Diebold–Mariano Test",
    ],
    focus: [
      "Bottleneck prediction",
      "Time-series forecasting",
      "Uncertainty quantification",
    ],
  },
  {
    status: "Ongoing",
    title:
      "A Two-Stage Experimental Framework for Industrial Defect Detection and Inspection Decisions Using Classical Machine Learning and Q-Learning",
    authors: "Tushy Tasnim, Rifat Faruk Zitu",
    summary:
      "Pairs anomaly detection with cost-sensitive inspection decisions on MVTec bottle images. Handcrafted colour, texture, and shape features with an Isolation Forest reach 0.947 ROC-AUC; tabular Q-learning then chooses Accept, Reject, or Human Review, lifting average reward from 0.143 to 0.405 and cutting missed defects from three to zero.",
    tools: [
      "Python",
      "Isolation Forest",
      "Tabular Q-Learning",
      "Feature Engineering",
    ],
    focus: [
      "Industrial defect detection",
      "Anomaly detection",
      "Human-in-the-loop decisions",
    ],
  },
  {
    status: "Ongoing",
    title:
      "Evaluating Digital Twin Readiness and Prioritizing Adoption Barriers in Bangladesh's Ready-Made Garment Industry: A Fuzzy DEMATEL Approach",
    summary:
      "A fuzzy DEMATEL model mapping causal relationships among digital-twin readiness factors and ranking adoption barriers in Bangladesh's ready-made garment sector.",
    tools: ["Python", "Fuzzy DEMATEL", "Digital Twin"],
    focus: ["Digital twin readiness", "Barrier prioritization"],
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
      "A prototype for detecting dust accumulation from infrared and photo sensor behaviour, focused on sensing logic and calibration.",
    tags: ["Sensors", "Prototype", "Industrial Monitoring"],
    illustration: "sensor",
    image: "/images/projects/dust-detection.jpg",
  },
  {
    title: "Portable Dishwasher with Liquid Dispenser",
    summary:
      "A compact cleaning automation concept focused on dispensing control, ergonomics, and manufacturability.",
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
  {
    label: "Data Analysis",
    items: ["MS Excel", "Google Sheets", "Power BI", "SmartPLS"],
  },
  {
    label: "Research Methods",
    items: ["PLS-SEM", "ISM-MICMAC", "Linear Programming", "Simulation"],
  },
  {
    label: "Programming",
    items: ["Python", "C Language"],
  },
  {
    label: "Python Libraries",
    items: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Gurobipy"],
  },
  {
    label: "Web Development",
    items: ["WordPress", "Webflow", "Squarespace"],
  },
  {
    label: "Automation Tools",
    items: ["Zapier", "Pabbly Connect"],
  },
  {
    label: "Simulation & Drafting",
    items: ["Arena", "AutoCAD", "Adobe Illustrator"],
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#research", label: "Research" },
  { href: "#ongoing-research", label: "Ongoing" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#ml-projects", label: "ML Projects" },
  { href: "#dashboards", label: "Dashboards" },
  { href: "#projects", label: "Projects" },
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
    repo: "production-line-digital-twin",
    url: "https://github.com/TushyTasnim/production-line-digital-twin",
    description:
      "A discrete-event digital twin of a four-station line that simulates wear and breakdowns, computes OEE and MTBF/MTTR, and predicts failures 30 minutes ahead.",
    relevance: "Digital Twin · Smart Manufacturing",
    tags: ["Python", "SimPy", "Predictive Maintenance"],
  },
  {
    repo: "lean-green-sewing-line",
    url: "https://github.com/TushyTasnim/lean-green-sewing-line",
    description:
      "A SimPy model of a ten-operation sewing line measuring how takt-based balancing and servo motors affect output, WIP, lead time, and CO₂ per garment.",
    relevance: "Simulation · Sustainable Operations",
    tags: ["Python", "SimPy", "Sustainability"],
  },
  {
    repo: "last-mile-delivery",
    url: "https://github.com/TushyTasnim/last-mile-delivery",
    description:
      "An emissions-aware routing study for two Bangladeshi cities, solving the same capacitated VRP for minimum distance and for modelled CO₂.",
    relevance: "Supply Chain Analytics · Optimization",
    tags: ["Python", "Vehicle Routing", "Optimization"],
  },
  {
    repo: "XGBoost-Based-Predictive-Maintenance-System",
    url: "https://github.com/TushyTasnim/XGBoost-Based-Predictive-Maintenance-System",
    description:
      "Predicts machine failure from sensor data with XGBoost, surfacing downtime risk scores in an interactive Streamlit dashboard.",
    relevance: "Predictive Maintenance · Industry 4.0",
    tags: ["Python", "XGBoost", "Streamlit"],
  },
  {
    repo: "supply_chain_optimization_projects",
    url: "https://github.com/TushyTasnim/supply_chain_optimization_projects",
    description:
      "End-to-end supply chain analytics: demand forecasting, inventory and route optimization, and Monte Carlo simulation.",
    relevance: "Supply Chain Analytics · Optimization",
    tags: ["Python", "Simulation", "Optimization"],
  },
  {
    repo: "late-delivery-predictive-analytics-in-supply-chain-using-ML-HistGradientBoostingModel",
    url: "https://github.com/TushyTasnim/late-delivery-predictive-analytics-in-supply-chain-using-ML-HistGradientBoostingModel",
    description:
      "Predicts late-delivery risk with a HistGradientBoosting model, with a Streamlit dashboard exploring the drivers of delay.",
    relevance: "Supply Chain Analytics · Predictive Modeling",
    tags: ["Python", "HistGradientBoosting", "Streamlit"],
  },
  {
    repo: "Demand-Forecasting-App",
    url: "https://github.com/TushyTasnim/Demand-Forecasting-App",
    description:
      "Forecasts retail demand with XGBoost, deployed as a Streamlit app with pricing, promotion, and inventory scenarios.",
    relevance: "Demand Forecasting · Retail Analytics",
    tags: ["Python", "XGBoost", "Streamlit"],
  },
  {
    repo: "Emotion-Detection-NLP-and-ML",
    url: "https://github.com/TushyTasnim/Emotion-Detection-NLP-and-ML",
    description:
      "Classifies emotion in text, comparing machine learning models across an NLP preprocessing and feature-extraction pipeline.",
    relevance: "NLP · Machine Learning",
    tags: ["Python", "NLP", "scikit-learn"],
  },
  {
    repo: "heart-disease-prediction",
    url: "https://github.com/TushyTasnim/heart-disease-prediction",
    description:
      "Predicts heart-disease risk from clinical data, comparing five classifiers and deploying K-Nearest Neighbors in a Streamlit app.",
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
      "A Power BI dashboard on hospital operations and healthcare performance, built from patient-level data.",
    relevance: "Business Intelligence · Healthcare Analytics",
    tags: ["Power BI", "Dashboard", "DAX"],
    image: "/images/projects/Health-Analytics.JPG",
    demoUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZDY5NjdiMmYtMzQ0ZS00N2E4LWE4MTUtYjExMGE0OTQxMmEyIiwidCI6ImZkOGY0MWFiLWVlZDEtNDMwZC05ZTE0LTY3M2NhOGQ0NzBjNiIsImMiOjEwfQ%3D%3D",
    demoLabel: "Live Dashboard",
  },
  {
    repo: "Dengue-Phenomenon-in-Bangladesh-Dashboard",
    url: "https://github.com/TushyTasnim/Dengue-Phenomenon-in-Bangladesh-Dashboard",
    description:
      "Dengue outbreak trends and patterns across Bangladesh, for public-health monitoring.",
    relevance: "Public Health Analytics · Dashboard",
    tags: ["Dashboard", "Data Visualization", "Public Health"],
    image: "/images/projects/dengue-dashboard.jpg",
  },
  {
    repo: "Hotel-Monitoring-Excel-Dashboard",
    url: "https://github.com/TushyTasnim/Hotel-Monitoring-Excel-Dashboard",
    description:
      "An Excel dashboard tracking hotel booking, occupancy, and revenue performance.",
    relevance: "Business Intelligence · Hospitality Analytics",
    tags: ["Excel", "Dashboard", "Data Visualization"],
    image: "/images/projects/hotel-dashboard.png",
  },
];
