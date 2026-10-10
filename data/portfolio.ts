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

export type OngoingResearchItem = {
  /** "Submitted" papers are under review; "Ongoing" are still in progress. */
  status: "Submitted" | "Ongoing";
  title: string;
  summary: string;
  authors?: string;
  tools?: string[];
  focus?: string[];
};

export const ongoingResearch: OngoingResearchItem[] = [
  {
    status: "Submitted",
    title:
      "Calibrate, Certify, or Learn? Deciding When a Language Model Should Defer to a Human",
    authors: "Tushy Tasnim, Rifat Faruk Zitu",
    summary:
      "This research investigates how large language models can improve decision reliability by determining when to answer independently and when to defer to human review. It combines Bayesian uncertainty estimation, conformal risk control, and value-of-information strategies to evaluate the trade-offs between accuracy, risk, and review costs.",
    tools: [
      "Python",
      "Qwen2.5-Instruct (7B / 1.5B)",
      "vLLM",
      "GPTQ 4-bit quantization",
      "Bayesian Logistic Regression",
      "Conformal Risk Control",
      "TruthfulQA",
      "GSM8K",
    ],
    focus: [
      "LLM reliability",
      "Uncertainty calibration",
      "Human–AI collaboration",
      "Risk-aware decision-making",
    ],
  },
  {
    status: "Submitted",
    title:
      "Uncertainty-Aware Preferential Bayesian Optimization under Noisy Human Preferences: A Controlled Test of Ambiguity-Seeking Acquisition",
    authors: "Rifat Faruk Zitu, Tushy Tasnim",
    summary:
      "This research evaluates whether incorporating uncertainty about preference rankings can improve Bayesian optimization when human preference feedback contains noise. It introduces Uncertainty-Aware Expected Utility of the Best Option (UA-EUBO), which combines expected utility with an ambiguity bonus. The approach is tested against standard EUBO using synthetic optimization benchmarks and the UT-Zappos50K shoe-preference dataset. Results show that the proposed method does not provide consistent improvements, highlighting when ambiguity-aware query selection may offer limited benefits.",
    tools: [
      "Python",
      "BoTorch 0.18.1",
      "Pairwise Gaussian Process (PairwiseGP)",
      "Bayesian Optimization",
      "Gaussian Process Preference Learning",
      "Principal Component Analysis (PCA)",
      "UT-Zappos50K",
    ],
    focus: [
      "Preferential Bayesian optimization",
      "Uncertainty-aware decision-making",
      "Noisy human feedback",
      "Active learning",
      "Experimental evaluation",
    ],
  },
  {
    status: "Ongoing",
    title:
      "Bottleneck Forecasting Under a Stricter Evaluation: A Leakage-Controlled, Rolling-Origin Comparison of Statistical and Machine Learning Models",
    authors: "Rifat Faruk Zitu, Tushy Tasnim",
    summary:
      "This study compares statistical and machine learning models for forecasting bottlenecks in a simulated five-station steel production line. Using public energy-consumption data from a South Korean steel plant, it evaluates six forecasting approaches across 25 rolling weekly origins and four forecast horizons. Recursive XGBoost achieved the lowest mean scaled error at every horizon, although statistically significant improvements over the best classical model occurred only at the 4-hour and 10-day horizons. The study also evaluates prediction-interval coverage and high-utilization alerts, demonstrating that machine learning advantages depend on the forecasting horizon and evaluation criteria.",
    tools: [
      "Discrete-Event Simulation",
      "Python",
      "ARIMA",
      "SARIMA",
      "Hybrid SARIMA",
      "XGBoost",
      "Recursive XGBoost",
      "Split-Conformal Prediction",
      "Diebold–Mariano Tests",
      "Holm Correction",
    ],
    focus: [
      "Manufacturing bottleneck prediction",
      "Production-system simulation",
      "Time-series forecasting",
      "Machine learning evaluation",
      "Uncertainty quantification",
      "Industrial process monitoring",
    ],
  },
  {
    status: "Ongoing",
    title:
      "A Two-Stage Experimental Framework for Industrial Defect Detection and Inspection Decisions Using Classical Machine Learning and Q-Learning",
    authors: "Tushy Tasnim, Rifat Faruk Zitu",
    summary:
      "This study develops a two-stage framework that combines industrial defect detection with cost-sensitive inspection decision-making. In the first stage, handcrafted colour, texture, and shape features are combined with an Isolation Forest trained on normal bottle images from the MVTec Anomaly Detection Dataset, achieving a ROC-AUC of 0.947. In the second stage, tabular Q-learning converts anomaly scores into inspection decisions: Accept, Reject, or Human Review. Compared with a fixed-threshold strategy, the learned policy increased average reward from 0.143 to 0.405 and reduced missed defects from three to zero, while highlighting trade-offs involving false rejections and human-review costs.",
    tools: [
      "Isolation Forest",
      "Handcrafted Feature Engineering (Colour, Texture, Shape)",
      "Tabular Q-Learning",
      "Reinforcement Learning",
      "MVTec Anomaly Detection Dataset",
      "Cost-Sensitive Decision-Making",
    ],
    focus: [
      "Industrial defect detection",
      "Manufacturing quality control",
      "Anomaly detection",
      "Reinforcement learning",
      "Automated inspection",
      "Human-in-the-loop decision systems",
    ],
  },
  {
    status: "Ongoing",
    title:
      "Evaluating Digital Twin Readiness and Prioritizing Adoption Barriers in Bangladesh's Ready-Made Garment Industry: A Fuzzy DEMATEL Approach",
    summary:
      "Developing a fuzzy DEMATEL model in Python to identify causal relationships among digital-twin readiness factors and prioritize adoption barriers in Bangladesh's ready-made garment sector.",
    tools: ["Python", "Fuzzy DEMATEL", "Digital Twin"],
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
  description: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Data Analysis",
    description: "Turning raw datasets into decision-ready insight with BI and statistical tooling.",
    items: ["MS Excel", "Google Sheets", "Power BI", "SmartPLS"],
  },
  {
    label: "Research Methods",
    description: "Modeling causal structure and decision systems for industrial and academic research.",
    items: ["PLS-SEM", "ISM-MICMAC", "Linear Programming", "Simulation"],
  },
  {
    label: "Programming",
    description: "Core languages for data pipelines, modeling, and applied problem solving.",
    items: ["Python", "C Language"],
  },
  {
    label: "Python Libraries",
    description: "The Python data-science stack I use for analysis, modeling, and visualization.",
    items: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Gurobipy"],
  },
  {
    label: "Web Development",
    description: "Building and shipping sites and landing pages without a heavy dev stack.",
    items: ["WordPress", "Webflow", "Squarespace"],
  },
  {
    label: "Automation Tools",
    description: "Connecting apps and automating repetitive workflows end to end.",
    items: ["Zapier", "Pabbly Connect"],
  },
  {
    label: "Simulation & Drafting",
    description: "Modeling systems and drafting technical designs for industrial engineering work.",
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
      "A discrete-event digital twin of a four-station production line (cutting, welding, painting, inspection) that simulates machine wear, breakdowns, and sensor streams, computes OEE and MTBF/MTTR, tests six improvement scenarios, and trains an ML model to predict failures 30 minutes ahead.",
    relevance: "Digital Twin · Smart Manufacturing",
    tags: ["Python", "SimPy", "Predictive Maintenance"],
  },
  {
    repo: "lean-green-sewing-line",
    url: "https://github.com/TushyTasnim/lean-green-sewing-line",
    description:
      "A SimPy simulation of a ten-operation T-shirt sewing line measuring how takt-based line balancing (lean) and servo motors (green) affect output, WIP, lead time, and CO₂ per garment, reported over 30 replications with confidence intervals.",
    relevance: "Simulation · Sustainable Operations",
    tags: ["Python", "SimPy", "Sustainability"],
  },
  {
    repo: "last-mile-delivery",
    url: "https://github.com/TushyTasnim/last-mile-delivery",
    description:
      "An emissions-aware vehicle routing study for two Bangladeshi cities, solving the same capacitated VRP for minimum distance and for modelled CO₂ (payload, speed, and gradient effects) to quantify the trade-off between the two objectives.",
    relevance: "Supply Chain Analytics · Optimization",
    tags: ["Python", "Vehicle Routing", "Optimization"],
  },
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
    repo: "Demand-Forecasting-App",
    url: "https://github.com/TushyTasnim/Demand-Forecasting-App",
    description:
      "Forecasts product demand from historical retail data using XGBoost, deployed as an interactive Streamlit app with pricing, promotion, and inventory scenario inputs.",
    relevance: "Demand Forecasting · Retail Analytics",
    tags: ["Python", "XGBoost", "Streamlit"],
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
    image: "/images/projects/Health-Analytics.JPG",
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
