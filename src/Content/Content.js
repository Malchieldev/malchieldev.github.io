const aboutMe = {
  header: "I'm Kirill, Frontend Developer",
  aboutMeData: {
    briefNote: [
      {
        id: "aboutMe-01-briefNote-01",
        description:
          "I'm passionate about High Tech & IT and have been working in the industry since I was 18",
      },
      {
        id: "aboutMe-01-briefNote-02",
        description:
          "Currently, I'm focused on creating apps as a Frontend Developer, mainly using React as a Framework",
      },
      {
        id: "aboutMe-01-briefNote-03",
        description: "All enquiries are welcome",
      },
    ],
    softSkills: [
      "Communicative",
      "Organized",
      "Open to criticism",
      "Self-taught",
    ],
  },
};

const skills = [
  {
    id: "skills-01",
    name: "React",
    imagePath: "/skills/React.svg",
    progress: "85%",
  },
  {
    id: "skills-02",
    name: "NodeJS",
    imagePath: "/skills/NodeJS.svg",
    progress: "80%",
  },
  {
    id: "skills-03",
    name: "JavaScript",
    imagePath: "/skills/JS.svg",
    progress: "75%",
  },
  {
    id: "skills-04",
    name: "HTML5",
    imagePath: "/skills/HTML5.png",
    progress: "60%",
  },
  {
    id: "skills-05",
    name: "CSS3",
    imagePath: "/skills/CSS3.png",
    progress: "65%",
  },
  {
    id: "skills-06",
    name: "GitHub",
    imagePath: "/skills/GitHub.png",
    progress: "70%",
  },
]; //progress should be 0-100%

const experience = [
  {
    id: "experience-01",
    company: "RT-Business development",
    jobTitle: "Software engineer",
    dates: "2018-2022",
    descriptionData: [
      {
        id: "experience-01-description-01",
        description:
          "Developed corporate information systems and ERP systems for internal customers",
      },
      {
        id: "experience-01-description-02",
        description:
          "Improved existing systems code by efficiently rewriting algorithms",
      },
      {
        id: "experience-01-description-03",
        description:
          "Designed and implemented APIs for both in-house and external use",
      },
      {
        id: "experience-01-description-04",
        description: "Prepared technical specifications and documentation",
      },
      {
        id: "experience-01-description-05",
        description:
          "Developed Telegram bot for mobile access to one of the ERP systems",
      },
    ],
  },
  {
    id: "experience-02",
    company: "RT-Inform",
    jobTitle: "Software engineer",
    dates: "2016-2018",
    descriptionData: [
      {
        id: "experience-02-description-01",
        description: "Supported and developed in-house ERP systems",
      },
      {
        id: "experience-02-description-02",
        description: "Identified, evaluated, and solved problems",
      },
      {
        id: "experience-02-description-03",
        description:
          "Implemented project of step-by-step update to modern solution for entire ERP system",
      },
    ],
  },
  {
    id: "experience-03",
    company: "Transstroy",
    jobTitle: "Software Engineer",
    dates: "2014-2016",
    descriptionData: [
      {
        id: "experience-03-description-01",
        description:
          "Participated in the development of an in-house ERP solution",
      },
      {
        id: "experience-03-description-02",
        description: "Used external APIs within projects",
      },
      {
        id: "experience-03-description-03",
        description: "Created plugins for 1C-systems",
      },
      {
        id: "experience-03-description-04",
        description: "Built applicational modules",
      },
      {
        id: "experience-03-description-05",
        description: "Managed bugs from the first report to completion",
      },
    ],
  },
];

// const projects = [
//   {
//     id: "projects-01",
//     name: "test project#1",
//     description: "test description#1",
//   },
//   {
//     id: "projects-02",
//     name: "test project#2",
//     description: "test description#2",
//   },
// ];

const education = [
  {
    id: "education-01",
    university: "Bauman Moscow State Technical University",
    dates: "2009-2015",
    descriptionData: [
      {
        id: "education-01-description-01",
        description: "M.Sc Computer and Information Systems Security",
      },
    ],
    url: "https://en.wikipedia.org/wiki/Bauman_Moscow_State_Technical_University",
  },
  {
    id: "education-02",
    university: "Udemy",
    dates: "2022-2022",
    descriptionData: [
      {
        id: "education-01-description-01",
        description:
          "React - The Complete Guide (incl Hooks, React Router, Redux)",
      },
    ],
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
];
const languages = {
  header: "Besides programming languages, I can speak:",
  languagesData: [
    { id: "languages-01", description: "English (Fluent)" },
    { id: "languages-02", description: "Russian (Native)" },
    { id: "languages-03", description: "Hebrew (beginner)" },
  ],
};

const contacts = [
  {
    id: "contacts-01",
    name: "Email",
    imagePath: "/contacts/email.png",
    url: "mailto:kszolotuhin@gmail.com",
  },
  {
    id: "contacts-02",
    name: "Telegram",
    imagePath: "/contacts/TG.png",
    url: "https://t.me/zolotuhinks",
  },
  {
    id: "contacts-03",
    name: "WhatsApp",
    imagePath: "/contacts/WA.png",
    url: "https://wa.me/qr/ADE53IM7U3VMO1",
  },
  {
    id: "contacts-04",
    name: "LinkedIn",
    imagePath: "/contacts/LN.png",
    url: "https://www.linkedin.com/in/kirill-zolotukhin/",
  },
  {
    id: "contacts-05",
    name: "GitHub",
    imagePath: "/contacts/GitHub.png",
    url: "https://github.com/Malchieldev",
  },
];

const CONTENT = [
  {
    id: "1",
    title: "About Me",
    data: aboutMe,
    componentName: "AboutMe",
    imagePath: "/infoblocks/photo.jpg",
  },
  {
    id: "2",
    title: "Skills",
    data: skills,
    componentName: "Skills",
    imagePath: "/infoblocks/skills.png",
  },
  {
    id: "3",
    title: "Experience",
    data: experience,
    componentName: "Experience",
    imagePath: "/infoblocks/experience.png",
  },
  // {
  //   id: "4",
  //   title: "Projects",
  //   data: projects,
  //   componentName: "Projects",
  //   imagePath: "/infoblocks/projects.png",
  // },
  {
    id: "5",
    title: "Education",
    data: education,
    componentName: "Education",
    imagePath: "/infoblocks/education.png",
  },
  {
    id: "6",
    title: "Languages",
    data: languages,
    componentName: "Languages",
    imagePath: "/infoblocks/languages.png",
  },
  {
    id: "7",
    title: "Contacts",
    data: contacts,
    componentName: "Contacts",
    imagePath: "/infoblocks/contacts.png",
  },
];

export { CONTENT };
