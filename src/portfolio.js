/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: " Samarpan singh",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Samarpan",
  logo_name: "samarpan",

  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1l1cT913F3LqGJu3pAD1SPEoQdYtF-WWB/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/samarpann",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/samarpann",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/samarpan-singh-56396836a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:samarpansingh17@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/officalsamarr/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable, responsive, and production-ready web applications using the MERN stack",
        "⚡ Experience in frontend architecture, REST API design, and secure authentication systems (JWT, Firebase)",
        "⚡ Developed real-time dashboards, AI-integrated apps, and clean UI/UX using modern frameworks",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos-react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },

    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dice Academy, New Delhi",
      subtitle: "Full stack web developemet",
      logo_path: "",
      alt_name: "dice academey",
      duration: "2024-2025",
      descriptions: [
        "⚡ Completed an intensive full stack web development course focused on MERN stack (MongoDB, Express, React, Node.js).",
        "⚡ Learned frontend technologies like HTML, CSS, JavaScript, React, Tailwind CSS, and UI libraries like ShadCN UI.",
        "⚡ Secured 2nd position in an internal Hackathon by building a production-ready project within tight deadlines.",
      ],
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      subtitle: "Indira Gandhi National Open University (IGNOU)",
      logo_path: "",
      alt_name: "IGNOU",
      duration: "2025-2028(ONGOING)",
      descriptions: [
        "⚡ Currently pursuing core computer science subjects including Data Structures, DBMS, Operating Systems, and Software Engineering.",
        "⚡ Actively applying academic concepts to real-world projects built with modern web technologies.",
        "⚡ Managing time efficiently between college academics and self-directed full stack development learning.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Fullstack Development",
      subtitle: "- DICE ACADEMY",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "🧑‍💻 I’m a self-taught Full Stack Developer just starting my professional journey.I may be new to the industry, but I’ve already built and deployed real-world MERN projects, contributed to open source, and won a hackathon.Now, I’m ready to learn, grow, and make an impact in a professional team.",

  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: " LOREM IPSUM",
          company: "LOREM IPSUM",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "LOREM IPSUM",
          description:
            "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          company: " LOREM IPSUM",
          company_url: "",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "LOREM IPSUM",
          description:
            "LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "LOREM IPSUM",
          company: "LOREM IPSUM",
          company_url: "",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "LOREM IPSUM",
          description: "LOREM IPSUM LOREM IPSUM ",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create full stack  projects and deploy them to web applications using cloud netlify.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "LOREM IPSUM",
      name: "LOREM IPSUM",
      createdAt: "LOREM IPSUM",
      description: "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
      url: "",
    },
    {
      id: "LOREM IPSUM",
      name: "LOREM IPSUM",
      createdAt: "LOREM IPSUM",
      description: "LOREM IPSUM",
      url: "",
    },
    {
      id: "LOREM IPSUM",
      name: "LOREM IPSUM",
      createdAt: "LOREM IPSUM",
      description: "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with , REACT, MONGODB,  NODE JS, EXPRESS Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      " Home no 24,street no 6 ,sainik enclave uttam nagar,New delhi -110059",
    locality: "new delhi",
    country: "india",
    region: "",
    postalCode: "110059",
    streetAddress: "STREET NO-6",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/gVczvTrwGRshNXjf7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
