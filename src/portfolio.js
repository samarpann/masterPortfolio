/* Personal Portfolio Data for Samarpan Singh */

// Website related settings
const settings = {
  isSplash: false, // Splash screen
};

// SEO Related settings
const seo = {
  title: "Samarpan Singh — Full Stack Web Developer | MERN Stack",
  description:
    "Personal portfolio of Samarpan Singh, Full Stack Web Developer based in Delhi, India. Specializing in MERN stack, React.js, Next.js, Node.js, MongoDB, Express, and modern digital platforms.",
  og: {
    title: "Samarpan Singh Portfolio",
    type: "website",
    url: "https://samarpann.github.io/masterPortfolio",
  },
};

// Home Page Greeting
const greeting = {
  title: "Samarpan Singh",
  logo_name: "Samarpan",
  nickname: "Full Stack Developer & MERN Specialist",
  subTitle:
    "I build responsive web applications, business platforms, and internal tools with modern frontend & backend architectures. Skilled in the MERN stack, database design, and high-performance UI engineering.",
  resumeLink: "/Samarpan_Singh_Resume.pdf",
  portfolio_repository: "https://github.com/samarpann/masterPortfolio",
  githubProfile: "https://github.com/samarpann",
  stats: [
    { label: "Live Platforms", value: "5+" },
    { label: "Years Experience", value: "3.5+" },
    { label: "Hackathon Award", value: "2nd Place" },
    { label: "Response Time", value: "< 1 Hour" },
  ],
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/samarpann",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samarpan-singh-56396836a/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "WhatsApp",
    link:
      "https://wa.me/918178557544?text=Hello%20Samarpan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
  {
    name: "Gmail",
    link: "mailto:samarpansingh17@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/officalsamarr/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full-Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable, responsive, and production-ready web applications using MongoDB, Express.js, React.js, Node.js, and Next.js",
        "⚡ Architecting modular component systems with Tailwind CSS, Redux Toolkit, and modern state management",
        "⚡ Designing resilient server-side architectures, RESTful APIs, and database schemas optimized for high concurrency",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos-react",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#38B2AC" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "API & Automation Integrations",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing automated WhatsApp Business API workflows, customer communication bots, and instant notifications",
        "⚡ Implementing robust RESTful endpoints, webhook listeners, and third-party payment gateway integrations",
        "⚡ Securing APIs with JWT token authentication, rate limiting, and role-based permissions",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "WhatsApp API",
          fontAwesomeClassname: "simple-icons:whatsapp",
          style: { color: "#25D366" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: { color: "#000000" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
      ],
    },
    {
      title: "Custom CRM & Admin ERP Solutions",
      fileName: "DesignImg",
      skills: [
        "⚡ Engineering internal enterprise ERP dashboards (like Swastik CRM) with real-time bullion & gold rate tracking",
        "⚡ Building live customer records, inventory management, order processing, and administrative telemetry",
        "⚡ Creating intuitive data visualization, revenue analytics, and role-based access control workflows",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "logos-react",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Chart.js",
          fontAwesomeClassname: "simple-icons:chartdotjs",
          style: { color: "#FF6384" },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: { color: "#F24E1E" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: { color: "#181717" },
      profileLink: "https://github.com/samarpann",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: { color: "#F79F1B" },
      profileLink: "https://leetcode.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      logo_path: "",
      alt_name: "GGSIPU",
      duration: "2025 – Present",
      descriptions: [
        "⚡ Undergraduate degree in Computer Applications with a focus on Software Engineering, Data Structures, Algorithms, and Database Management Systems.",
        "⚡ Actively bridging theoretical computer science principles with hands-on production application development.",
        "⚡ Demonstrating strong problem-solving skills across full-stack web architectures and scalable database design.",
      ],
      website_link: "",
    },
    {
      title: "Senior Secondary (12th Grade CBSE)",
      subtitle: "Sarvodaya Vidyalaya, Delhi",
      logo_path: "",
      alt_name: "CBSE",
      duration: "Completed 2025",
      descriptions: [
        "⚡ Completed Senior Secondary education under CBSE curriculum with high academic performance.",
        "⚡ Developed early interest and foundational expertise in computer programming, web technologies, and computational logic.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "2nd Place — Dice Academy Hackathon",
      subtitle: "Hackathon Award (2025)",
      logo_path: "codeInLogo.png",
      certificate_link: "",
      alt_name: "Dice Academy Hackathon",
      color_code: "#0284C7",
    },
    {
      title: "Web Development Certification",
      subtitle: "Dice Academy (2025)",
      logo_path: "fullstack.svg",
      certificate_link: "",
      alt_name: "Dice Academy",
      color_code: "#10B981",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Client Projects and Track Record",
  description:
    "A proven history of 3.5+ years engineering dependable web products, client platforms, and enterprise internal software. Experienced in full-stack MERN engineering, live gold rate tracking, internal CRM workflows, and modern digital solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Swastik Jewels",
          company_url: "https://www.swastikjewel.in/",
          logo_path: "",
          duration: "May 2026 – Present",
          location: "Delhi, India",
          description:
            "Developing and maintaining business websites, CRM workflows, and digital products for jewellery and corporate enterprises. Architecting full-stack web applications, REST APIs, database schemas, and deployment pipelines. Delivered key production platforms including Swastik Jewels storefront, Swastik CRM ERP, RK Steel Company portal, FundSphere, and Dr. Nidan clinic platform.",
          color: "#0284C7",
        },
        {
          title: "Full Stack Developer",
          company: "Orange Technology",
          company_url: "",
          logo_path: "",
          duration: "January 2025 – April 2026",
          location: "Delhi, India",
          description:
            "Built and maintained responsive web applications using modern frontend and backend technologies. Implemented modular UI components in React and Tailwind CSS, integrated RESTful APIs, and maintained MongoDB database operations. Improved app performance, optimized page load speeds, and resolved critical production bugs.",
          color: "#F97316",
        },
        {
          title: "Developer",
          company: "4th Dimension Private Limited",
          company_url: "",
          logo_path: "",
          duration: "January 2024 – December 2024",
          location: "Delhi, India",
          description:
            "Contributed to web application development and maintenance across frontend and backend tasks. Built responsive user interfaces with HTML5, CSS3, JavaScript, and modular component structures. Collaborated with senior engineers on application functionality and client feature delivery.",
          color: "#6366F1",
        },
      ],
    },
  ],
};

// Featured Production Platforms (From https://portfolio-861r.vercel.app/#our-work)
const featuredProjects = {
  title: "Featured Projects",
  subtitle:
    "Live production web applications, business platforms, and enterprise internal software engineered and deployed with the MERN stack.",
  projects: [
    {
      id: "01",
      title: "Swastik Jewels",
      category: "Luxury E-Commerce",
      description:
        "Luxury fine gold and natural diamond jewellery storefront presenting products, curated collections, and an exquisite digital shopping experience.",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.swastikjewel.in/",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "02",
      title: "SANKI",
      category: "Fashion & Retail",
      description:
        "Contemporary streetwear apparel brand with limited drops, custom fit guides, and a seamless mobile-first checkout experience.",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      url: "https://sanki.online/",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Mobile-First"],
    },
    {
      id: "03",
      title: "Swastik CRM",
      category: "CRM & ERP Platform",
      description:
        "Enterprise gold shop management ERP dashboard supporting customer records, real-time bullion rates, inventory tracking, and multi-level workflows.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      url: "https://crm.swastikjewel.in/",
      tags: [
        "MERN Stack",
        "Live Bullion Rates",
        "Role-Based Access",
        "ERP Analytics",
      ],
    },
    {
      id: "04",
      title: "Garvik India",
      category: "Digital Agency & Marketing",
      description:
        "360° strategic marketing, advertising, and creative branding agency platform driving corporate visibility, high-speed UI, and lead generation.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.garvikindia.com/",
      tags: ["React.js", "Tailwind CSS", "Lead Capture", "High-Performance"],
    },
    {
      id: "05",
      title: "RK Steel Company",
      category: "Corporate & Industrial",
      description:
        "High-performance corporate website for an industrial steel manufacturer, showcasing products, manufacturing capacities, and customer inquiries.",
      image:
        "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.rksteelcompany.in/",
      tags: ["React.js", "Node.js", "Industrial B2B", "SEO"],
    },
    {
      id: "06",
      title: "FundSphere",
      category: "Fintech & Web Platform",
      description:
        "Modern financial services and wealth management platform delivering clean interfaces, financial calculators, and digital wealth tools.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.fundsphere.co.in/",
      tags: ["React.js", "Financial Tools", "Tailwind CSS", "REST APIs"],
    },
    {
      id: "07",
      title: "Dr. Nidan",
      category: "Healthcare & Clinic",
      description:
        "Healthcare-focused web platform providing comprehensive medical brand information, specialty clinic services, and patient consultations.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.drnidan.in/",
      tags: ["React.js", "Healthcare UI", "Appointment Booking", "Responsive"],
    },
    {
      id: "08",
      title: "Sauriksha Villa",
      category: "Hospitality & Resort",
      description:
        "Scenic boutique mountain villa and resort near Nainital/Bhimtal featuring direct room bookings and bespoke guest hospitality.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.saurikshavilla.com/index.html",
      tags: ["Boutique Hospitality", "Direct Booking", "Luxury UI", "Gallery"],
    },
    {
      id: "09",
      title: "Grilli Restaurant",
      category: "Culinary & Dining",
      description:
        "Exquisite culinary dining experience featuring interactive menus, chef specials, and direct online table reservation engine.",
      image:
        "https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/assets/images/hero-slider-1.jpg",
      url: "https://6919d520872fbc7a96a26a0a--mellow-lokum-5f3443.netlify.app/",
      tags: ["Interactive Menus", "Reservation Engine", "Animations", "UI/UX"],
    },
  ],
};

// Projects Page Header
const projectsHeader = {
  title: "Projects",
  description:
    "A showcase of real-world production platforms, business portals, and client web applications engineered using modern full-stack web technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Published articles, blogs and research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description:
      "I am available for full-time roles, contract projects, and custom platform engineering. Have a question or want to discuss a project? Reach out via WhatsApp or email — I reply within 24 hours!",
  },
  blogSection: {
    title: "Communication & Workflow",
    subtitle:
      "Fast turnarounds, clean MERN architecture, and transparent communication from MVP to production.",
    link: "https://wa.me/918178557544",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Delhi, India",
    locality: "Delhi",
    country: "India",
    region: "Delhi NCR",
    postalCode: "110059",
    streetAddress: "Delhi, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Delhi,India",
  },
  phoneSection: {
    title: "Phone & WhatsApp",
    subtitle: "+91 8178557544",
  },
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
  featuredProjects,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
