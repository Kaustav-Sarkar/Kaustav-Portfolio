// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
  logoSizeRatio: 0.5, // Logo size as a ratio of the smaller screen dimension (0.5 = 50%)
};

//SEO Related settings
const seo = {
  title: "Kaustav's Portfolio",
  description:
    "A passionate Software Engineer who thrives on building backend systems, cloud infrastructure, and orchestration platforms that scale and solve real problems. I take ownership of what I build — from internal tools to production systems — and focus on making them reliable, usable, and easy for others to build on. I enjoy enabling teams through better abstractions, clean APIs, and well-designed systems.",
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
  subTitle: "I build scalable, business-aware systems that power modern companies, focusing on technology that drives product success and enables engineering teams. Privacy and security aren't afterthoughts—they're fundamental principles I embed in every solution I create. Fueled by a passion for continuous learning and resilience, I thrive on tackling complex challenges and improving every day",
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
      title: "Cloud Infrastructure & Backend Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting and developing scalable, multi-cloud backend services in Java and Go, engineered for high availability on Kubernetes",
        "⚡ Orchestrating complex, distributed workflows with Cadence, ensuring system resilience through robust failure recovery and fault-tolerant design",
        "⚡ Implementing fault-tolerant microservices with a focus on data consistency and persistence using JPA/Hibernate",
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
      title: "Platform Engineering",
      fileName: "ServerClusterImg",
      skills: [
        "⚡ Engineering standardized deployment frameworks using Helm and Vault to enable secure, repeatable, and automated CI/CD pipelines",
        "⚡ Creating internal developer platforms (IDPs), CLIs, and SDKs to abstract away infrastructure complexity and boost engineering velocity",
        "⚡ Driving the evolution of internal libraries, creating reusable components that accelerate development across multiple teams",
        "⚡ Building observability and control-plane tooling—including monitoring dashboards and APIs (REST/gRPC)—that give teams visibility and confidence in their systems",
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
      title: "AI & Applied Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Delivering production-ready AI features, from privacy-first posture correction with TensorFlow.js to real-time sentiment analysis using OpenCV",
        "⚡ Specializing in lightweight, efficient models designed for real-world environments, solving targeted problems without compromising user privacy",
        "⚡ Blending AI with real-world systems to enhance UX and unlock new capabilities in production applications",
        "⚡ Implementing computer vision solutions for object detection, image segmentation, and real-time analysis",
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
    "Education is not just about degrees—it's a lifelong commitment to growth. I believe in learning from every experience, whether through formal education, certifications, or real-world challenges. Each day brings an opportunity to expand my knowledge, refine my skills, and become a better engineer and leader",
  header_image_path: "education.svg",
  degrees: [
    {
      title: "Manipal Institute of Technology",
      subtitle: "B.Tech in Information Technology",
      logo_path: "manipal_logo.png",
      alt_name: "MIT Manipal",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Built a rigorous foundation in data structures, algorithms, and systems design, equipping me to build scalable and resilient platforms",
        "⚡ Cultivated proficiency in Java, Python, C++, and JavaScript through hands-on coursework, developing end-to-end applications to solve real-world challenges",
        "⚡ Applied cloud services, machine learning frameworks, and full-stack architectures in capstone projects to solve complex problems and prepare for end-to-end system ownership",
      ],
      website_link: "https://manipal.edu/mit.html",
    },
  ],
};

const certifications = {
  certifications: [
    // Big Data & Infrastructure
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
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/H7MFM43S8J6E",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Big Data Integration and Processing",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AALHV9Z4D89A",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Introduction to Big Data",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
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
      title: "Algorithmic Toolbox",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/T3PMRCV8ELE6",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Python Data Structures",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/46VEELUH5MKQ",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },

    // Deep Learning & AI
    {
      title: "Convolutional Neural Networks",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WVPCTSKXCJ8G",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ENSRQLHHKPC4",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/CBS4QX3LWHSD",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },

    // General Skills
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
      title: "Probability Theory, Statistics and Exploratory Data Analysis",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4NA8J8CZSHG3",
      alt_name: "Coursera",
      color_code: "#0056D2",
    },
    {
      title: "High-Impact Business Writing",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/TXYHHYSE9TLN",
      alt_name: "Coursera",
      color_code: "#0056D2",
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
  description: "I approach every role as an opportunity to understand the entire system—from technical architecture to business impact. Through my journey across startups and enterprises, I've learned to build not just scalable technology, but privacy-conscious solutions that enable teams and drive product success. Each experience has strengthened my ability to take ownership, solve complex problems with security at the forefront, and create lasting value while protecting user data",
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
          logo_path: "cloudera_logo.png",
          location: "Bangalore, India",
          description:
            "• Built secure API exposure layer using Istio gateways, auth policies, and Apache Knox for authenticated access to Helm-deployed applications\n• Integrated Cadence with Spring Boot microservices for long-running workflow orchestration with full retry and failure handling\n• Refactored internal Helm deployment into a parameterized Go library, integrated with Vault, and wrapped it for Java-based services",
          color: "#FF6900",
        },
        {
          title: "SDE - Datalake MicroService",
          company: "Cloudera",
          company_url: "https://www.cloudera.com/",
          logo_path: "cloudera_logo.png",
          duration: "Aug 2023 - Feb 2025",
          location: "Bangalore, India",
          description:
            "• Built a common-API wrapper to extend data-lake capabilities to existing services; drove its adoption across multiple teams.\n• Created a Start/Stop Datalake API using Cadence for async orchestration of multi-service workflows.\n• Extended Hibernate schema for soft deletes, with Cadence-based cleanup orchestration for fault tolerance.\n• Developed utility commands like describe datalake and describe services to enhance data observability for tools like Ranger, Atlas, and Kafka.",
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
          logo_path: "cloudera_logo.png",
          duration: "Jan 2023 - Aug 2023",
          location: "Bangalore, India",
          description:
            "• Built centralized dashboard for multi-cloud Kubernetes environments, integrating with Kubernetes API and Prometheus for unified monitoring and management\n• Developed full-stack solution using Spring MVC backend with gRPC endpoints and React frontend, delivering intuitive interface for infrastructure management",
          color: "#FF6900",
        },
        {
          title: "Cloud DevOps Intern",
          company: "X80-Security",
          company_url: "https://x80security.com/",
          logo_path: "x80_logo.jpg",
          duration: "Sep 2021 - Jan 2023",
          location: "Paris (Remote)",
          description:
            "• Built automated vulnerability scanners for AWS/GCP VPCs and Heroku, reducing security breaches by 30% while ensuring client privacy\n• Created AppSmith dashboard for real-time cloud statistics and vulnerability tracking; implemented comprehensive unit tests with mocked API responses",
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
          logo_path: "manipal_logo.png",
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
          logo_path: "manas.png",
          duration: "May 2021 - Sep 2022",
          location: "Manipal, India",
          description:
            "• Implemented object detection using PCL (Point Cloud Library) for accurate and efficient detection of objects within the environment\n• Developed advanced algorithms to analyze multiple parameters and determine the best parking spots, optimizing factors such as distance, availability, and convenience\n• Leveraged the gathered data to generate intelligent insights, enabling effective decision-making and efficient utilization of parking spaces",
          color: "#FF6900",
        },
        {
          title: "AI Intern Innovation Lab",
          company: "Innovation Center Manipal",
          company_url:
            "https://www.manipal.edu/mu/important-links/innovation-entrepreneruship/innovation-centre.html",
          logo_path: "manipal_logo.png",
          duration: "May 2020 - Sep 2022",
          location: "Manipal, India",
          description:
            "• Built a sentiment analysis system with face tracking and image classification to assess crowd emotions in real-time, enabling contextual insights for public event monitoring\n• Collaborated with KMC Manipal doctors to develop an image segmentation prototype for dental plaque detection, quantifying plaque percentage on teeth from clinical images\n• Demonstrated potential for AI-assisted diagnosis through visual analysis, laying the groundwork for future tools to support dental screening workflows",
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
          logo_path: "cloudera_logo.png",
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
  blogs: [
    {
      url: "https://github.com/Kaustav-Sarkar", // Replace with actual blog URL
      title: "Building Scalable APIs with Cadence Workflow Engine",
      description:
        "Learn how I integrated Uber's Cadence workflow engine with Spring Boot microservices to handle long-running operations with built-in retry mechanisms and failure recovery.",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*5gJzummAqpBDGATo0fjU6Q.jpeg", // Placeholder image
    },
    {
      url: "https://github.com/Kaustav-Sarkar", // Replace with actual blog URL
      title: "From Monolith to Microservices: A Kubernetes Journey",
      description:
        "My experience migrating legacy applications to containerized microservices on Kubernetes, including challenges faced and lessons learned along the way.",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*KkME3gZPg4f6xBymvLkbRg.png", // Placeholder image
    },
    {
      url: "https://github.com/Kaustav-Sarkar", // Replace with actual blog URL
      title: "Implementing Soft Deletes with Hibernate and Cadence",
      description:
        "How I extended Hibernate schema to support soft deletes with automated cleanup orchestration using Cadence for fault-tolerant data management.",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*vHHBwcUFUaHWXntSnqKdCA.png", // Placeholder image
    },
    {
      url: "https://github.com/Kaustav-Sarkar", // Replace with actual blog URL
      title: "Building CLI Tools for Better Developer Experience",
      description:
        "Creating utility commands like 'describe datalake' to enhance data observability and simplify interaction with complex distributed systems.",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*BsZNI3YkQBwx8lu7UbBwVg.png", // Placeholder image
    },
  ],
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
      image: "", // Using placeholder
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