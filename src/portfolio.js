/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nilesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nilesh Tiwari Portfolio",
    type: "website",
    // in url you can give your portfolio link
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Nilesh Tiwari",
  logo_name: "NileshTiwari",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1J60zrL_wqhCZLTb2Uad2OzVOqQtqVqHI/view?usp=sharing",
  // Give here your portfolio repo link
  portfolio_repository:
    "https://drive.google.com/file/d/1J60zrL_wqhCZLTb2Uad2OzVOqQtqVqHI/view?usp=sharing",
  githubProfile: "https://github.com/Nilesh1409",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/Nilesh1409",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nilesh-tiwari14/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:nileshtiwari7054@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node & Express",
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
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:Redux",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongo-db",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "DS & Algo",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
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
  degrees: [
    {
      title: "Masai School",
      subtitle: "Full Stack Web Development",
      // logo_path: "masai_logo.svg",
      // alt_name: "IIITDM Kurnool",
      duration: "Sep 2021 - Present",
      descriptions: [
        "⚡ I have learn DS, Algorithms, HTML, React, Redux, NodeJS ExpressJS, MongoDB, Github etc.",
        "⚡ Apart from this, I have also learn soft skills like Time management, Teamwork etc.",
      ],
      website_link: "https://www.masaischool.com/",
    },
    {
      title: "Shree Narayana Guru College of Commerce",
      subtitle: "Bachelor of Management Studies",
      // logo_path: "masai_logo.svg",
      // alt_name: "IIITDM Kurnool",
      duration: "June 2019 - Present",
      descriptions: [
        "⚡ I learn to take ownership of my own learning, perseverance and go beyond books, etc.",
        "⚡ Apart from this, I have also learn soft skills like Money management, How to deal with people etc.",
      ],
      website_link: "https://sngcollege.in/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Project",
  description:
    "My projects makes use of  latest technology tools. My best experience is to cloning Spotify.com.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nilesh_img.jpg",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "Sector 27, Taloja, Navi Mumbai 410210",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Taloja+Sector+27/@19.0705973,73.1007718,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7eb16f2934b53:0x45f80cbb2d617a3a!8m2!3d19.0706036!4d73.1029565",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9137831800",
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
  contactPageData,
};
