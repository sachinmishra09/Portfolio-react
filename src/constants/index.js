import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I'm a final-year Computer Science student passionate about building full-stack web applications with the MERN stack. With a strong foundation in React, Node.js, and MongoDB.\n\n I focus on writing clean, scalable code and creating seamless user experiences. Alongside web development, I actively sharpen my problem-solving skills, having solved problems on LeetCode. I'm always eager to learn new technologies and take on projects that push my skills further.\n\n Actively looking for internship opportunities.`;
// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const ABOUT_TEXT = `Hi, I'm Sachin Kumar Mishra — a BTech. Computer Science student graduating in 2027, passionate about web development and building intelligent systems that solve real-world problems.\n
I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly AI powered web applications. Computer Science undergraduate with strong foundations in data structures, frontend technologies, backend systems, and problem-solving. Experienced in building and validating scalable applications, with hands-on experience in API development, debugging, and automation.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "ABES Engineering College",
    company: "B.Tech.",
    description: `Pursuing a B.Tech in Computer Science and Engineering, with a focus on software development. Developing applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.`,
    technologies: ["Javascript", "React.js", "Data Structures", "Operating System", "SQL" ,"Database"],
  },
  {
    year: "2020 - 2022",
    role: "Fatima Convent School",
    company: "Intermediate",
    description: `Completed Class 12 with a focus on Physics, Chemistry, and Mathematics, building a strong foundation in analytical thinking and problem-solving.`,
    technologies: ["Java"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "AI Powered Resume Analyzer",
    image: project1,
    description:
      "Engineered a full-stack Resume Analyzer that leverages Generative AI to provide real-time ATS scoring, content feedback, and job-fit evaluations. Developed an automated PDF-to-Image conversion pipeline to enable seamless document previews within a virtualized cloud environment. Built a backend-less architecture using Puter.js, managing cloud storage, database services, and user authentication to eliminate traditional server costs.",
    technologies: ["TailwindCSS", "React", "Puter.js", "Zustand"],
    github: `https://github.com`,
    liveDemo: `https://github.com`,
  },
  {
    title: "Lockyt - Password Manager",
    image: project2,
    description:
      "Developed a full-stack, cross-platform password manager using React, Tailwind CSS, and Firebase, featuring real-time data synchronization. Engineered a zero-knowledge security architecture leveraging the Web Crypto API to implement client-side AES-256-GCM encryption and PBKDF2-SHA256 key derivation. Integrated advanced security mechanisms,",
    technologies: ["Reactjs", "TailwindCSS", "Firebase"],
    github: `https://github.com`,
    liveDemo: `https://github.com`,
  },
  {
    title: "Blog App",
    image: project3,
    description:
      "A full-featured blogging platform built with React, Appwrite, and Redux Toolkit. Users can create, edit, and publish rich-text posts using text editor, with dynamic routing powered by React Router DOM and secure authentication and content management handled through Appwrite's backend services.",
    technologies: ["Reactjs", "TailwindCSS", "Appwrite"],
    github: `https://github.com`,
    liveDemo: `https://github.com`,
  },
  {
    title: "Todo App",
    image: project4,
    description:
      "A task management app built while learning React state management, featuring full CRUD functionality with both Context API and Redux Toolkit implementations. Includes local storage persistence so tasks stay saved across sessions.",
    technologies: ["Reactjs", "TailwindCSS", "Local Storage"],
    github: `https://github.com`,
    liveDemo: `https://github.com`,
  },
];

export const CONTACT = {
  address: "Ghaziabad, Uttar Pradesh",
  phoneNo: "+91 9738529529",
  email: "sachinmishra0973@gmail.com",
};
