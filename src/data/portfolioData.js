export const personalInfo = {
  name: "Nabila Putri Azhari",
  shortName: "Nabila Azhari",
  nickname: "Nabila",
  titleDegree: "S.Kom (Cand.)",
  role: "AI Engineer & Tech Researcher",
  subRole: "AI Engineer (Computer Vision)",
  tagline: "Bridging Machine Learning, Computer Vision & Aesthetic Digital Systems",
  university: "Telkom University",
  major: "Bachelor of Informatics (Computer Science)",
  gpa: "3.81 / 4.00",
  scholarship: "Bank Indonesia Scholarship Awardee (2026–2027)",
  location: "Bandung, Indonesia",
  phone: "+62 851-3673-3239",
  email: "nabilaazhari.dev@gmail.com",
  academicEmail: "nabilaazhari@student.telkomuniversity.ac.id",
  socials: {
    github: "https://github.com/nabila-azhari",
    linkedin: "https://www.linkedin.com/in/nabila-putri-azhari/",
    instagram: "https://instagram.com/_azharinabila",
    instagramHandle: "@_azharinabila"
  },
  stats: [
    { label: "GPA", value: "3.81", suffix: "/ 4.00" },
    { label: "Research Paper", value: "01", suffix: "st Author (ICERA)" },
    { label: "AI & Web Projects", value: "15+", suffix: "" },
    { label: "Awards & Honors", value: "8+", suffix: "Wins" }
  ],
  bio: `Undergraduate Informatics student at Telkom University specializing in Artificial Intelligence and Computer Vision, with focus on Classification, Object Detection, and Segmentation.

Bank Indonesia Scholarship Awardee (GPA 3.81 / 4.00), currently active as an AI Engineer and Laboratory Assistant. First Author of accepted international research paper at ICERA 2026.

Passionate about building production-ready AI systems, medical Vision-Language Models, and bridging the gap between scientific research and real-world implementation.`
};

export const educationList = [
  {
    institution: "Telkom University",
    degree: "Bachelor of Informatics (Computer Science)",
    period: "2023 – Present",
    gpa: "GPA: 3.81 / 4.00",
    badge: "Bank Indonesia Scholar",
    details: "Specialized in Artificial Intelligence, Computer Vision, and Data Science. Maintained straight A grades across core Machine Learning, Data Structures, and Basic Algorithms."
  },
  {
    institution: "Bank Indonesia Scholarship",
    degree: "Prestigious Merit Scholarship Awardee",
    period: "2026 – 2027",
    gpa: "Top Tier Merit Selection",
    badge: "Scholarship",
    details: "Awarded fully funded competitive national merit scholarship based on academic excellence, leadership, and research potential in technology."
  }
];

export const skillsCategories = [
  {
    category: "Languages",
    skills: "Python, C++, Golang, Java, JavaScript (ES6+), SQL"
  },
  {
    category: "AI / CV / Deep Learning",
    skills: "PyTorch, TensorFlow, YOLOv8, OpenCV, MediaPipe Pose, HuggingFace, VLM"
  },
  {
    category: "Generative AI & Agents",
    skills: "RAG Architecture, LangChain, ChromaDB, FastAPI, LLM Fine-Tuning"
  },
  {
    category: "Data Science & ML",
    skills: "LightGBM, Scikit-Learn, Pandas, NumPy, Bland-Altman Method, Power BI"
  },
  {
    category: "DevOps & Cloud",
    skills: "Docker, Git & GitHub Actions, MySQL, REST APIs, GCP, Azure"
  },
  {
    category: "Creative & UI Tools",
    skills: "Figma (UI/UX), Canva Pro, Adobe Photoshop, CapCut, Data Storytelling"
  }
];

export const techStackLogos = [
  { name: "Python", category: "Core" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "OpenCV", category: "Computer Vision" },
  { name: "YOLOv8", category: "Object Detection" },
  { name: "Scikit-Learn", category: "ML" },
  { name: "LightGBM", category: "ML" },
  { name: "HuggingFace", category: "VLM / LLM" },
  { name: "FastAPI", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "MySQL", category: "Database" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Azure / GCP", category: "Cloud" }
];

export const workExperiences = [
  {
    role: "AI Engineer (IT Intern)",
    company: "Badan Meteorologi Klimatologi Geofisika (BMKG)",
    period: "Jul – Sep 2026",
    badge: "Industry Internship",
    description: "Built AI-based predictive maintenance models to forecast replacement eligibility for seismic station equipment. Engineered centralized data warehouse integrating maintenance and field telemetry streams.",
    highlights: [
      "Engineered machine learning models analyzing telemetry and sensor wear cycles",
      "Designed real-time inspection synchronization app for field seismic technicians",
      "Integrated automated data warehouse for predictive maintenance analytics"
    ],
    tags: ["Machine Learning", "Predictive Maintenance", "Data Warehouse", "IoT / Mobile"]
  },
  {
    role: "Laboratory Assistant",
    company: "Artificial Intelligence Lab, Telkom University",
    period: "Aug 2025 – Present",
    badge: "Academic Research",
    description: "Led core faculty research in Computer Vision. Developed PACT (Pose-Anchored Compliance Tracker) accepted as First Author at ICERA 2026. Researched deepfake detection and mentored 40+ study group members.",
    highlights: [
      "First Author: Published 'PACT: Compliance Reporting in PPE Detection' at ICERA 2026",
      "Conducted speaker sessions on modern Computer Vision and YOLO architectures",
      "Mentored and coordinated 40+ AI research study group participants"
    ],
    tags: ["Computer Vision", "Pose Estimation", "ICERA 2026", "Deep Learning", "PyTorch"]
  },
  {
    role: "Practicum Assistant (Data Structures & Algorithms)",
    company: "Informatics Laboratory, Telkom University",
    period: "Sep 2025 – Jan 2026",
    badge: "Teaching Assistant",
    description: "Conducted weekly technical practicum sessions for 45+ undergraduate students covering core and advanced data structures and algorithms in C++ and Python.",
    highlights: [
      "Mentored students on algorithmic optimization, asymptotic complexity, and memory management",
      "Conducted code reviews and automated test case evaluations for 45+ undergraduates"
    ],
    tags: ["C++", "Python", "Data Structures", "Algorithm Design"]
  },
  {
    role: "Data Preprocessing & ML Division Member",
    company: "Central Computer Improvement (CCI)",
    period: "Aug 2025",
    badge: "Tech Organization",
    description: "Collaborated on data preparation, annotation, and model experimentation across Machine Learning and Computer Vision domains. Won 3rd Place in CCI Hacks for AI industrial helmet tracking.",
    highlights: [
      "Won 3rd Place at CCI Hacks for AI Worker Compliance & Helmet Tracking",
      "Prepared standardized training datasets for multi-stage vision models"
    ],
    tags: ["Machine Learning", "Computer Vision", "Dataset Engineering", "CCI Hacks 3rd"]
  }
];

export const projectList = [
  {
    id: "pact",
    num: "01",
    tag: "Thesis & Conference Paper",
    title: "PACT: Pose-Anchored Compliance Tracker",
    subtitle: "Automated Industrial Safety & PPE Detection (ICERA 2026)",
    conference: "Accepted at ICERA 2026 (1st Author)",
    points: [
      "Detection + pose estimation framework",
      "YOLOv8-based architecture with anatomical anchor keypoints",
      "Zero false-positives in crowded industrial scenes",
      "Real-time inference speed (30+ FPS)"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    diagramUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    details: {
      category: "Computer Vision & Industrial Safety",
      role: "First Author & Lead AI Engineer",
      venue: "Proceedings of ICERA 2026 – 5th International Conference on Electronics Representation and Algorithm",
      stack: ["Python", "PyTorch", "YOLOv8", "MediaPipe Pose", "OpenCV", "CUDA"],
      problem: "Traditional bounding box detectors fail in crowded industrial sites when detached safety helmets or vests get assigned to the wrong worker, creating false compliance alerts.",
      solution: "Engineered a two-stage pose-anchored framework isolating human anatomical keypoints (head, torso, extremities) before classifying PPE equipment, ensuring rock-solid precision.",
      metrics: [
        { label: "Status", value: "Accepted ICERA 2026" },
        { label: "Role", value: "1st Author" },
        { label: "Speed", value: "30+ FPS Real-Time" },
        { label: "Accuracy", value: "High Precision" }
      ],
      github: "https://github.com/nabila-azhari"
    }
  },
  {
    id: "vlm-cxr",
    num: "02",
    tag: "Multimodal AI & Medical RAG",
    title: "VLM-CXR: Medical Visual QA & Diagnostic RAG Agent",
    subtitle: "Indonesian Chest X-Ray Visual Question Answering System",
    conference: "Medical AI Research",
    points: [
      "Fine-tuned Vision-Language Model on chest radiograph datasets",
      "Retrieval-Augmented Generation (RAG) with Indonesian medical database",
      "Automated clinical reasoning with verifiable medical citations",
      "FastAPI inference backend with LangChain & ChromaDB"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    details: {
      category: "Multimodal AI & Clinical NLP",
      role: "AI Engineer – VLM & AI Agent Specialist",
      venue: "Telkom AI Lab Research Showcase",
      stack: ["Python", "PyTorch", "HuggingFace Transformers", "LangChain", "ChromaDB", "FastAPI"],
      problem: "Medical radiology terminology in Bahasa Indonesia is severely underserved in international foundation models, making automated clinical explanation unreliable.",
      solution: "Developed an end-to-end multimodal pipeline combining fine-tuned VLM visual representations with a specialized Indonesian clinical literature vector database via RAG.",
      metrics: [
        { label: "Modality", value: "Vision + Text" },
        { label: "Language", value: "Bahasa Indonesia" },
        { label: "Vector DB", value: "ChromaDB" },
        { label: "Backend", value: "FastAPI" }
      ],
      github: "https://github.com/nabila-azhari"
    }
  },
  {
    id: "bmkg-seismic",
    num: "03",
    tag: "Predictive AI & Data Warehouse",
    title: "BMKG Seismic Predictive Maintenance System",
    subtitle: "Automated Equipment Lifecycle Analytics & Field Sync",
    conference: "BMKG Bandung Deployed",
    points: [
      "Predictive machine learning models for seismic sensor degradation",
      "Centralized relational data warehouse integrating telemetry streams",
      "Real-time technician mobile logging and inspection sync",
      "Proactive automated replacement alerts for earthquake stations"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    details: {
      category: "Industrial AI & Data Engineering",
      role: "IT Intern – AI Engineer",
      venue: "Badan Meteorologi Klimatologi dan Geofisika (BMKG) Bandung",
      stack: ["Python", "Scikit-Learn", "MySQL", "Data Warehouse", "React / Mobile UI", "REST API"],
      problem: "Seismic station sensors in remote locations require proactive maintenance before breakdown to preserve national earthquake and tsunami early warning uptime.",
      solution: "Built ML models analyzing sensor wear cycles and climate telemetry, linked with a central data warehouse and technician inspection reporting tool.",
      metrics: [
        { label: "Agency", value: "BMKG Bandung" },
        { label: "Focus", value: "Seismic Sensors" },
        { label: "Architecture", value: "Data Warehouse" },
        { label: "Sync", value: "Real-time" }
      ],
      github: "https://github.com/nabila-azhari"
    }
  },
  {
    id: "stylow",
    num: "04",
    tag: "Full-Stack Web & REST API",
    title: "StyLow: Modern Fashion E-Commerce Platform",
    subtitle: "Interactive Storefront + Inventory Admin Dashboard",
    conference: "Web Systems & Architecture",
    points: [
      "Modern responsive UI built with React.js, Vite, and Tailwind CSS",
      "Synchronized shopping cart state and optimistic UI updates",
      "Dual interface design for consumer storefront & admin inventory management",
      "Modular Axios REST API integration with error resilience"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    details: {
      category: "Full-Stack Web Development",
      role: "Front-End Developer & UI Architect",
      venue: "OOP / Web Systems Final Project",
      stack: ["React.js", "Vite", "Tailwind CSS", "JavaScript ES6+", "Axios", "REST API"],
      problem: "Building a fluid e-commerce experience requiring state synchronization, instant cart feedback, and decoupled admin inventory operations.",
      solution: "Engineered reusable component architecture with optimized client-side state, responsive Tailwind styling, and full REST API workflows.",
      metrics: [
        { label: "Stack", value: "React + Vite" },
        { label: "Design", value: "Tailwind CSS" },
        { label: "Architecture", value: "REST API" },
        { label: "Panels", value: "Store + Admin" }
      ],
      github: "https://github.com/nabila-azhari/oop_tugasbesar_kelompok1.git"
    }
  },
  {
    id: "impactin",
    num: "05",
    tag: "Recommendation Engine & Web",
    title: "Impact!n: Environmental Action Discovery Platform",
    subtitle: "Personalized Volunteer Matching & Event Discovery",
    conference: "Software Engineering Project",
    points: [
      "Personalized volunteer recommendation engine matching user interests",
      "Interactive ecological event discovery and registration pipeline",
      "Modern responsive interface with fast search and filtering",
      "Developed with React.js, Vite, and Tailwind CSS"
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
    details: {
      category: "Web & Recommendation Systems",
      role: "Recommendation System & Front-End Developer",
      venue: "Software Engineering Group Project",
      stack: ["React.js", "Vite", "Tailwind CSS", "Recommendation Engine", "REST API"],
      problem: "Volunteers struggle to discover hyper-local environmental events matching their specific schedules and ecological causes.",
      solution: "Created profile-based similarity matching and interactive filtering inside a clean, modern web interface.",
      metrics: [
        { label: "Domain", value: "Eco & Climate" },
        { label: "Algorithm", value: "Profile Matching" },
        { label: "Framework", value: "React / Vite" },
        { label: "UI", value: "Tailwind CSS" }
      ],
      github: "https://github.com/VeironVaya/tugas_besar_IPPL_kelompok_impactin.git"
    }
  }
];

export const dataProjects = [
  {
    id: "lightgbm-weather",
    title: "LightGBM Weather Prediction Engine",
    subtitle: "Automated ML Pipeline with Meteorological API Integration",
    badge: "3rd Best AI Lab Project",
    points: [
      "Time-series meteorological feature engineering and gradient boosting",
      "Benchmarked against Random Forest, XGBoost, and neural baselines",
      "Real-time API ingestion pipeline and predictive dashboard",
      "Awarded 3rd Best Final Project at Telkom AI Laboratory"
    ],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
    stack: ["Python", "LightGBM", "Scikit-Learn", "Weather APIs", "Pandas"],
    github: "https://github.com/nabila-azhari"
  },
  {
    id: "telemedicine-bio",
    title: "Telemedicine Bio-Informatics Research",
    subtitle: "Medical Engineering & Bland–Altman Statistical Method Validation",
    badge: "UNPAD x Telkom Research",
    points: [
      "Conducted medical data validation and statistical agreement analysis",
      "Bland–Altman difference plot modeling for remote telemedicine concordance",
      "Evaluated limits of agreement across digital sensor readings",
      "Collaboration between UNPAD Nuclear Medicine and Telkom University"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    stack: ["Python", "Bland-Altman Method", "Statistical Modeling", "SciPy", "Matplotlib"],
    github: "https://github.com/nabila-azhari"
  },
  {
    id: "bmkg-dashboard",
    title: "BMKG Asset & Telemetry Monitoring Analytics",
    subtitle: "Business Intelligence & Equipment Lifecycle Dashboard",
    badge: "BMKG Enterprise BI",
    points: [
      "Interactive data visualization for national seismic equipment tracking",
      "Automated sensor drift analytics and maintenance alert triggers",
      "Centralized schema connecting 30+ regional monitoring stations",
      "Streamlined technician reporting and asset depreciation tracking"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    stack: ["Power BI", "MySQL", "Data Warehouse", "Python Analytics"],
    github: "https://github.com/nabila-azhari"
  }
];

export const publications = [
  {
    tag: "ICERA 2026 (Accepted)",
    venueBadge: "IEEE / ICERA 2026",
    title: "PACT: Compliance Reporting in PPE Detection Based on Pose-Anchored Body Region Assignment",
    authors: "Nabila Putri Azhari (First Author) et al.",
    venue: "Proceedings of ICERA 2026 – 5th International Conference on Electronics Representation and Algorithm",
    year: "2026",
    status: "Accepted & Forthcoming",
    abstract: "Proposes an end-to-end Computer Vision pipeline designed for automated Personal Protective Equipment (PPE) compliance monitoring. Incorporates pose-anchored anatomical region localization to eliminate spatial assignment ambiguity in crowded industrial scenes.",
    certificate: "Accepted Paper Certificate - ICERA 2026"
  }
];

export const teachingExperience = [
  {
    role: "Laboratory Assistant",
    period: "2025 – Present",
    lab: "Artificial Intelligence Laboratory, Telkom University",
    points: [
      "Computer Vision & Deep Learning Architectures",
      "YOLO Object Detection & Pose Estimation",
      "Mentoring 40+ Research Study Group Members",
      "Conducting Hands-on PyTorch Workshops"
    ]
  },
  {
    role: "Practicum Assistant",
    period: "2025 – 2026",
    lab: "Informatics Laboratory, Telkom University",
    points: [
      "Data Structures & Algorithm Design (C++ / Python)",
      "Time Complexity & Memory Management Mentoring",
      "Code Reviews & Practicum Lab Sessions for 45+ Students",
      "Automated Test Case Assessment"
    ]
  }
];

export const achievements = [
  { title: "Bank Indonesia Scholarship Awardee", org: "Bank Indonesia", year: "2026–2027", badge: "Scholarship" },
  { title: "Top 20, Machine Learning Data Competition 2026", org: "Institut Teknologi Bandung (ITB)", year: "2026", badge: "ML Competition" },
  { title: "1st Place, AI Innovation Paper Competition", org: "IAIN Kerinci", year: "2025", badge: "1st Winner" },
  { title: "1st Place, AI Essay National Competition", org: "Koperasi Mahasiswa Purwokerto", year: "2025", badge: "1st Winner" },
  { title: "3rd Place, Kaggle ML Data Research Competition", org: "Telkom University", year: "2025", badge: "3rd Winner" },
  { title: "3rd Place, CCI Hacks Industrial Safety Solution", org: "Central Computer Improvement", year: "2025", badge: "Hackathon" },
  { title: "Semi-Finalist, Satria Data Big Data Challenge", org: "Kemendikbudristek RI", year: "2025", badge: "National" },
  { title: "1st Place, Open Library Book Review Challenge", org: "Telkom University", year: "2024", badge: "1st Winner" },
  { title: "Microsoft Certified: Azure AI Fundamentals (AI-900)", org: "Microsoft", year: "2025", badge: "Certification" }
];
