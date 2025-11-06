// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
  logoSizeRatio: 0.5, // Logo size as a ratio of the smaller screen dimension (0.5 = 50%)
};

//SEO Related settings
const seo = {
  title: "Kaustav's Portfolio",
  description:
    "I build distributed systems and platform engineering solutions that generate millions. SDE-2 at Cloudera, cutting infrastructure costs by 95%, modernizing legacy architectures, and thriving on greenfield projects. Working toward leading teams that ship industry-defining products.",
  og: {
    title: "Kaustav Sarkar Portfolio",
    type: "website",
    url: "https://kaustavsarkar.dev",
  },
};

//Home Page
const greeting = {
  title: "Kaustav Sarkar",
  logo_name: "KaustavSarkar",
  nickname: "tech_whiz",
  subTitle: "I believe engineering should benefit humanity, not just generate revenue. I want to build products that millions rely on, accessible, intuitive and work seamlessly. I chase greenfield projects for the creative freedom, no playbook, no legacy constraints, just ambiguity and the chance to architect the best version of something from scratch. I'm building distributed systems today, on my way to leading teams that ship products setting the standard for entire industries",
  resumeLink:
    "https://drive.google.com/file/d/118v_F2dGxCBBaVTkVCobgLK4KyTFqQ7-/view?usp=sharing",
  portfolio_repository: "https://github.com/Kaustav-Sarkar/Kaustav-Portfolio",
  githubProfile: "https://github.com/Kaustav-Sarkar",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Kaustav-Sarkar",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#4c1d95",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kaustavsarkar/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/nightfury007",
    fontAwesomeIcon: "fa-kaggle",
    backgroundColor: "#20BEFF",
  },
  {
    name: "Gmail",
    link: "mailto:kaustav.sarkar.work@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Backend & Distributed Systems",
      fileName: "ServerClusterImg",
      skills: [
        "⚡ I orchestrate workflows that save millions. Built lifecycle management APIs with Cadence that cut infrastructure costs by 80-95% and reduced operation time from 4 hours -> 30 minutes through async parallelization.",
        "⚡ I like to tackle challenging problems. When Cadence and Spring Boot were fundamentally incompatible, I built the bridge through custom ApplicationContext injection and externalized config. Shipped it, standardized it company-wide, adopted by 8+ services building distributed workflows.",
        "⚡ I build systems that handle messy real-world problems. Backward-compatible migrations for customers with zero disruptions. Idempotent deletions that eliminated 97% of manual cleanup and orphaned resources.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#ED8B00",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Uber Cadence",
          fontAwesomeClassname: "simple-icons:uber",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#59666C",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#FFFFFF",
          },
        },
      ],
    },
    {
      title: "Platform Engineering & Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I turn multi-cloud chaos into unified platforms. Built K8s management system consolidating EKS, GKE, and AKS operations, cutting ops time by 60%+ for all SaaS datalakes. One interface instead of three cloud consoles and kubectl.",
        "⚡ I build enterprise-grade security into infrastructure. Architected API gateway with Istio and custom K8s operators securing 25+ critical endpoints across public and private clouds. Authentication enforced once at the platform layer, not scattered across every service.",
        "⚡ I modernize legacy architecture for portability. Containerized and decoupled Atlas from VM-based infrastructure, enabling deployment on any Kubernetes platform with independent scaling. From monolithic to cloud-native.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "simple-icons:helm",
          style: {
            color: "#277A9F",
          },
        },
        {
          skillName: "Vault",
          fontAwesomeClassname: "simple-icons:vault",
          style: {
            color: "#FFD814",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "gRPC",
          fontAwesomeClassname: "fa-server",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
      ],
    },
    {
      title: "Big Data Platforms & Security",
      fileName: "DataScienceImg",
      skills: [
        "⚡ I built a security product from scratch. Engineered vulnerability scanning platform for 10+ enterprise customers reducing breaches by 30%. Graph-based modeling of misconfigurations, dependencies, and containers across GCP/AWS/Heroku with interactive UI and queryable API.",
        "⚡ I work with complex data platform ecosystems. Enhanced Ranger with multi-database support (RDS for enterprise, embedded for lightweight deployments). Redesigned metadata APIs from hardcoded to dynamic, provider-agnostic models. Built systems exposing Kafka, Atlas, and Ranger to external users.",
        "⚡ I design APIs that scale across data platforms. Built event-driven architectures with Kafka for real-time pipelines. Created provider-agnostic metadata interfaces that downstream teams extend without breaking existing integrations.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
            color: "#FF6F00",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#EE4C2C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "YOLO",
          fontAwesomeClassname: "simple-icons:yolo",
          style: {
            color: "#00FFFF",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  title: "Education",
  subtitle: "Continuous Learning, Continuous Growth",
  description:
    "Education is not just about degrees, it's a lifelong commitment to growth. I believe in learning from every experience, whether through formal education, certifications, or real-world challenges. Each day brings an opportunity to expand my knowledge, refine my skills, and become a better engineer and leader",
  header_image_path: "education.svg",
  degrees: [
    {
      title: "Manipal Institute of Technology",
      subtitle: "B.Tech in Information Technology",
      logo_path: "manipal_logo.webp",
      alt_name: "MIT Manipal",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Won 2 AI hackathons (sound classification, furniture detection) and placed first in MANAS recruitment solving complex pathfinding algorithms with near-zero coding experience. Joined MANAS autonomous vehicle team and Innovation Society Manipal.",
        "⚡ Started professional work early. Secured X80 Security internship at start of 3rd year, continued through 4th year building production security systems. Learned to ship real products while still in college.",
        "⚡ Built production-grade capstone projects: Automated Valet Parking perception system using YOLO, FCN32, and PCL. Crowd sentiment analysis app achieving 25% engagement improvement through computer vision.",
      ],
      website_link: "https://manipal.edu/mit.html",
    },
  ],
};

const certifications = {
  certifications: [
    // Cloud & Kubernetes
    {
      title: "Kubernetes Certified Application Developer (CKAD) with Tests",
      subtitle: "Udemy - Mumshad Mannambeth, KodeKloud Training",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6f549291-bf8e-49c8-9650-87d235954e34/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
      subtitle: "Udemy - Stephane Maarek",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6bee2340-29a5-4551-8fac-2bbfe821fe41/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },

    // Big Data & Systems
    {
      title: "Executive Briefing: Big Data and the Hadoop Ecosystem",
      subtitle: "Udemy - Sundog Education by Frank Kane",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8fa8a8b0-84cf-4cf6-9457-97f6f660ebe1/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Getting Started - Apache Iceberg",
      subtitle: "Udemy - Digital Innovation | Les Experts",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://udemy.com/certificate/UC-f521103a-2cb4-42cc-aa73-fd2351f2f50b/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Big Data Modeling and Management Systems",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/H7MFM43S8J6E",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Big Data Integration and Processing",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AALHV9Z4D89A",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Introduction to Big Data",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/P83U4GY86DE2",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },

    // Programming & Development
    {
      title: "Principles of Secure Coding",
      subtitle: "Udemy",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-569585fb-1287-4480-824d-f4ad7aaff7c1/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Go: The Complete Developer's Guide (Golang)",
      subtitle: "Udemy - Stephen Grider",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-0e746ed3-7472-40d5-ba5e-e35944d1b6c4/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Mastering the System Design Interview",
      subtitle: "Udemy - Sundog Education by Frank Kane",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c4f12a22-b6a7-4db4-a88e-e89d4a6665d7/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Introduction to Networking",
      subtitle: "Udemy - Kevin Brown",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-307098e9-0bdb-436e-8502-7c02b31725f7/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/T3PMRCV8ELE6",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Python Data Structures",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/46VEELUH5MKQ",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },

    // Deep Learning & AI
    {
      title: "Convolutional Neural Networks",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WVPCTSKXCJ8G",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ENSRQLHHKPC4",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/CBS4QX3LWHSD",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },

    // Soft Skills & General
    {
      title: "Probability Theory, Statistics and Exploratory Data Analysis",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4NA8J8CZSHG3",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "High-Impact Business Writing",
      subtitle: "Coursera",
      logo_path: "coursera_logo.webp",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TXYHHYSE9TLN",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Practical Time Management - Personal Productivity Tools",
      subtitle: "Udemy - Paul Ashun",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d8c35441-a4bf-4598-8185-03e3b22e4294/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Embracing a Culture of Feedback",
      subtitle: "Udemy",
      fontAwesomeClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-486ca27f-803c-4738-8c3b-4fad0f972989/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "I approach every role as an opportunity to understand the entire system; from technical architecture to business impact. Through my journey across startups and enterprises, I've learned to build not just scalable technology, but privacy-conscious solutions that enable teams and drive product success. Each experience has strengthened my ability to take ownership, solve complex problems with security at the forefront, and create lasting value while protecting user data",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "SDE-2 - Data Services Platform",
          company: "Cloudera",
          company_url: "https://www.cloudera.com/",
          logo_path: "cloudera_logo.webp",
          duration: "Feb 2025 - Present",
          location: "Bangalore, India",
          description:
            "• Owned end-to-end design and delivery of suspend/resume capability for applications. Achieved over 95% reduction in idle infrastructure costs through automated DB snapshots, graceful shutdown, RBAC checks, and K8s node scaling.\n• Architected and delivered an enterprise API security layer, leveraging Istio, custom K8s operators, and Knox. Secured critical endpoints across public and private clouds, and enforced authorisation.\n• Containerized and decoupled Apache Atlas from VM-based SDX stacks, enabling portable, independently scalable deployment on any K8s infrastructure backed by dedicated Postgres, Kafka, and Solr.\n• Standardized company-wide Spring Boot integration for Cadence, bridging framework gaps with custom ApplicationContext injection, adopted by 8+ services to build distributed workflows with externalized configuration and automated failure handling.\n• Developed the Functional Test Framework for a greenfield service (Appfactory) using GenAI which runs on a daily cadence for various control planes. This reduced compatibility regressions and new bugs by 30%+ and ensured continuous development while maintaining product stability and enhancing developer productivity.",
          color: "#FF6900",
        },
        {
          title: "SDE - Datalake MicroService",
          company: "Cloudera",
          company_url: "https://www.cloudera.com/",
          logo_path: "cloudera_logo.webp",
          duration: "Aug 2023 - Feb 2025",
          location: "Bangalore, India",
          description:
            "• Implemented start/stop lifecycle controls for large data lakes, leveraging Cadence to orchestrate long-running workflows across compute, storage and control-plane services.\n• Redesigned a metadata API to eliminate hardcoded values in favor of a dynamic, provider-agnostic model that downstream services can extend with ease.\n• Engineered a common-API wrapper service to seamlessly layer containerized data-lake support onto existing endpoints, auto-detecting variants and enabling adoption with a simple endpoint switch—no code changes required.\n• Led the common-API wrapper rollout across three data-services teams, coordinating with engineers, QA, and management to triage regressions and deliver API-side fixes for a seamless, disruption-free integration.\n• Enhanced the Ranger Admin Datalake service with multi-database support, integrating Amazon RDS for enterprise customers and a Kubernetes-hosted in-cluster database for lightweight deployments.",
          color: "#FF6900",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "SDE Intern - SDXSaaS Dashboard",
          company: "Cloudera",
          company_url: "https://www.cloudera.com/",
          logo_path: "cloudera_logo.webp",
          duration: "Jan 2023 - Aug 2023",
          location: "Bangalore, India",
          description:
            "• Developed unified Kubernetes management platform for SaaS datalakes across EKS, GKE, AKS, reducing ops time by merging kubectl and cloud console workflows in an SSO-secured web UI with Prometheus-based monitoring.\n• Designed and implemented backend via Spring MVC, exposing gRPC endpoints for control logic and real-time infrastructure metrics.\n• Built intuitive front-end dashboard using Figma (wireframing) and ReactJS, middleware using Python Flask, resulting in clear user flows and streamlined experiences.",
          color: "#FF6900",
        },
        {
          title: "Software Development and Cloud Intern",
          company: "X80-Security",
          company_url: "https://x80security.com/",
          logo_path: "x80_logo.jpg",
          duration: "Sep 2021 - Dec 2022",
          location: "Paris (Remote)",
          description:
            "• Engineered cloud vulnerability scanning platform for 10+ clients—reduced breaches by 30% by detecting misconfigs, vulnerable dependencies, machine images/containers across GCP, AWS, Heroku.\n• Built graph-modeled UI and API for client environments, visualizing security status and enabling fast queries.\n• Developed automation for Heroku VPC scanning and alerts, ensured privacy by fully automating detection & reporting.\n• Built interactive dashboards via AppSmith, showing real-time stats of cloud health and vulnerabilities.\n• Collected GitHub org metadata and Dependabot alerts, integrated insights into company's knowledge graph for vulnerabilities.",
          color: "#1E3A8A",
        },
        {
          title: "SDE GRM Intern - Posture Analysis",
          company: "IBM India",
          company_url: "https://www.ibm.com/",
          logo_icon: "simple-icons:ibm",
          duration: "May 2022 - July 2022",
          location: "Bangalore, India (Remote)",
          description:
            "• Developed privacy-focused posture detection using React and TensorFlow.js (BlazePose), ensuring all processing remained client-side\n• Implemented custom alerts for poor posture detection, enabling timely correction without compromising user privacy",
          color: "#1F70C1",
        },
        {
          title: "Research Intern",
          company: "Manipal Institute of Technology",
          company_url: "https://www.manipal.edu/mit.html",
          logo_path: "manipal_logo.webp",
          duration: "May 2022 - July 2022",
          location: "Bangalore, India (Remote)",
          description:
            "• Built an end-to-end anomaly detection pipeline on application and system logs using both statistical and machine learning methods.\n• Applied Z-score thresholds, IQR filtering, and moving average deviation to detect outliers in log frequencies, error rates, and event timing.\n• Benchmarked statistical methods against unsupervised ML models to improve detection precision and reduce false positives.",
          color: "#1F70C1",
        },
      ],
    },
    {
      title: "Clubs",
      experiences: [
        {
          title: "Senior AI Member",
          company: "Manas",
          company_url: "https://projectmanas.in/",
          logo_path: "manas.webp",
          duration: "May 2021 - Sep 2022",
          location: "Manipal, India",
          description:
            "• Implemented object detection using PCL (Point Cloud Library) on LIDAR data for accurate and efficient detection of objects within the environment\n• Developed advanced algorithms to analyze multiple parameters and determine the best parking spots, optimizing factors such as distance, availability, and convenience\n• Leveraged the gathered data to generate intelligent insights, enabling effective decision-making and efficient utilization of parking spaces",
          color: "#FF6900",
        },
        {
          title: "AI Intern Innovation Lab",
          company: "Innovation Center Manipal",
          company_url:
            "https://www.manipal.edu/mu/important-links/innovation-entrepreneruship/innovation-centre.html",
          logo_path: "manipal_logo.webp",
          duration: "May 2020 - Sep 2022",
          location: "Manipal, India",
          description:
            "• Built a sentiment analysis system with face tracking and image classification to assess crowd emotions in real-time, enabling contextual insights for public event monitoring\n• Collaborated with KMC Manipal doctors to develop an image segmentation prototype(FCN32 & UNET) for dental plaque detection, quantifying plaque percentage on teeth from clinical images\n• Demonstrated potential for AI-assisted diagnosis through visual analysis, laying the groundwork for future tools to support dental screening workflows",
          color: "#FF6900",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "CSR Member",
          company: "Cloudera Cares",
          company_url: "https://www.cloudera.com/about/philanthropy",
          logo_path: "cloudera_logo.webp",
          duration: "Jan 2024 - Present",
          location: "Bangalore, India",
          description:
            "• Participated in company volunteer initiatives like educational outreach programs, orphanage visits, and medical research NGOs\n• Connected cancer research NGO with company philanthropy team to explore partnership opportunities",
          color: "#FF6900",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A hands-on exploration of web, AI, and system prototypes, from a student-club autonomous parking system to this live portfolio, each project reflecting my curiosity and practical problem-solving focus",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kaustav.jpeg",
    description:
      "I'm always interested in connecting with fellow developers and leaders who share a passion for creating impactful technology. Whether you're looking to collaborate on challenging problems, discuss system architecture, or explore how we can create value together, let's connect",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Coming soon! I'll be sharing my thoughts on backend development, system architecture, and tools I'm exploring. Expect a mix of technical deep-dives, lessons learned, travel experiences, and whatever else catches my curiosity along the way",
    link: "/blogs", // This will show the 404 page since blogs section is disabled
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Bangalore, India",
    locality: "Bangalore",
    country: "India",
    region: "Karnataka",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
};

// Blog Section
const blogSection = {
  title: "My Blogs",
  subtitle:
    "I write about backend development, cloud infrastructure, and the challenges of building scalable systems.",
  blogs: [],
};

// Testimonials
const testimonials = {
  title: "What Others Say",
  subtitle: "Testimonials",
  testimonials: [
    {
      id: "1",
      name: "Edoardo Barp",
      role: "CTO of X80 Security",
      company: "X80 Security",
      image: "", // Using placeholder didn't wanna download their linkedin profile pics
      text:
        "Kaustav was a very good element of the development team. I was his direct manager for more than a year, during which he proved capable of taking ownership of complex and multi-faceted problems, stretching from software development to cloud infrastructure and automated development. I highly recommend him as I believe he would be a great addition to any development team.",
      linkedin: "https://linkedin.com/in/edoardobarp",
    },
    {
      id: "2",
      name: "Gomathy Shankar",
      role: "Lead Data Scientist of IBM",
      company: "IBM",
      image: "", // Using placeholder
      text:
        "Kaustav worked under my team at IBM as a computer vision intern. He is focused, reliable, and goal-oriented with a stellar work ethic. He is well versed in ML and adapted well to any new skill required for his project. I was impressed by his ingenuity and the way he tackles problems. I believe Kaustav will be a valuable addition to any team.",
      linkedin: "https://www.linkedin.com/in/gomathy-shankar-r/",
    },
    {
      id: "3",
      name: "Alper Akanser",
      role: "Engineering Manager of Cloudera",
      company: "Cloudera",
      image: "", // Using placeholder
      text:
        "Kaustav worked on an internal management platform for a Kubernetes based deployment architecture. He took on a full-stack role for the project building both the backend and the frontend. He was very quick to onboard on complex technologies and frameworks. The work involved many technical challenges that Kaustav solved utilizing resources effectively including cross-team collaboration.",
      linkedin: "https://www.linkedin.com/in/alper-akanser-375259b/",
    },
  ],
};

const flagshipProjects = {
  title: "Flagship Projects",
  subtitle: "Major applications and platforms I've architected and built from the ground up",
  projects: [
    {
      projectName: "Personal Portfolio",
      projectDesc: "A modern, responsive portfolio website built with React featuring dynamic theming, feature flags, and seamless user experience",
      image: "kaustav-logo.svg",
      link: "https://kaustavsarkar.dev",
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  blogSection,
  testimonials,
  flagshipProjects,
};