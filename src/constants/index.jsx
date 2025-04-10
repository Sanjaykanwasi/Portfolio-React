import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiJavaLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Sanjay Singh Kanwasi",
  role: "Front End Developer",
  subheading:
    "Passionate and detail-oriented Front-End Developer with expertise in HTML, CSS, JavaScript, and modern frameworks like React.js. Skilled in building responsive, user-friendly, and high-performance web applications..",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Google Gemini Chatbot",
    description:
      "An advanced AI-powered chatbot designed to generate human-like responses, answer questions, and assist with various tasks. It replicates Gemini’s capabilities, including natural language understanding, contextual awareness, and smooth interaction, making it a powerful AI assistant.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project1,
    link: "https://sanjaykanwasiai.netlify.app/",
  },
  {
    id: 2,
    title: "Ochi Website",
    description:
      "A sleek and modern web design that replicates Ochi’s clean aesthetics, smooth animations, and user-friendly interface. It features a visually appealing layout, responsive design, and interactive elements, showcasing high-quality frontend development. ",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project2,
    link: "https://ochibysanjay.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance. It serves as a digital resume, allowing potential employers, clients, or collaborators to explore your work, learn about your expertise, and contact you easily.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project3,
    link: "https://sanjaysinghkanwasi.netlify.app/",
  },
  {
    id: 4,
    title: "Echo-S",
    description:
      "A landing page is a focused, standalone web page designed to capture attention and drive a specific action, such as signing up, purchasing, or learning more about a product or service. With a clean layout, compelling visuals, and persuasive copy, it effectively engages visitors and boosts conversions.",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://echo-s.vercel.app/",
  },
  {
    id: 5,
    title: "Echo-M (Movie Website)",
    description:
      "Developed and deployed a dynamic movie discovery website using The Movie Database (TMDB) API. The platform allows users to browse movies, view details, and watch trailers seamlessly. Implemented features such as a favorites system with local storage and an interactive UI using React and modern web technologies",
    techStack: ["React", "CSS"],
    imgSrc: project5,
    link: "https://echo-m.vercel.app/",
  },
  {
    id: 6,
    title: "Echo-L(Logo Maker)",
    description:
      "Echo-L is a sleek and intuitive website for creating custom logos effortlessly. Whether you're a startup, designer, or business owner, Echo-L provides AI-powered tools to generate professional-quality logos in minutes.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project6,
    link: "https://echo-l.vercel.app/",
  },
  {
    id: 7,
    title: "Echo-G(Game Website)",
    description:
      "Echo-G is a game discovery platform that leverages the RAWG API to provide users with detailed information about video games. It allows gamers to explore game ratings, genres, and more. With a sleek and intuitive interface, Echo-G enhances the browsing experience by offering seamless search and filtering options, making it easy to find and track favorite games.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project7,
    link: "https://echo-g-sanjay.vercel.app/",
  },
  {
    id: 8,
    title: "Echo-E(Employee Management System)",
    description:
      "Echo E is a streamlined task management web application designed for efficient workplace coordination. It features an Admin Dashboard where administrators can log in, manage employees, and assign tasks. Employees access their Employee Dashboard to view assigned tasks and track their progress.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project8,
    link: "https://echo-e.vercel.app/",
  },
  {
    id: 9,
    title: "Echo-I(AI Image Generator)",
    description:
      "Echo I is an AI-powered image generator website that utilizes the Hugging Face API to create stunning visuals based on user prompts. It allows users to select different AI models, adjust aspect ratios, and generate multiple images efficiently.",
    techStack: ["React", "TailwindCSS"],
    imgSrc: project9,
    link: "https://echo-i.vercel.app/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Java",
    icon: <RiJavaLine className="text-yellow-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "SQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const CERTIFICATES = [
  {
    plateform: "Internshala",
    name: "Web Development",
    description:
      "The Internshala Web Development Training equips learners with essential web development skills, covering both frontend (HTML, CSS, JavaScript, Bootstrap, React) and backend (PHP, MySQL) technologies. Participants learn to create responsive websites, handle user interactions, and connect frontend with backend for dynamic web applications.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "BootStrap"],
    link: "https://trainings.internshala.com/s/v/1757521/16656b11",
  },
  {
    plateform: "Coursera (Duke University)",
    name: "Java Programming: Solving Problems with Software",
    description:
      "The Java Programming: Solving Problems with Software course focuses on developing problem-solving skills using Java. Learners gain hands-on experience with fundamental programming concepts, including loops, conditionals, arrays, and string manipulation.",
    techStack: ["Java", "OOPs", "DSA"],
    link: "https://www.coursera.org/account/accomplishments/verify/GCGRDCZM2FR8",
  },
  {
    plateform: "Coursera (Johns Hopkins University)",
    name: "HTML, CSS, and Javascript for Web Developers",
    description:
      "The HTML, CSS, and JavaScript for Web Developers course teaches the fundamentals of modern web development, enabling learners to build responsive and interactive websites. Participants gain hands-on experience with HTML for structuring content, CSS for styling and layout, and JavaScript for dynamic functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://www.coursera.org/account/accomplishments/verify/WSL92RB876SB",
  },
  {
    plateform: "Coursera (IBM)",
    name: "Introduction to NoSQL Databases",
    description:
      "The Introduction to NoSQL Databases course provides a foundational understanding of NoSQL database concepts, their advantages, and real-world applications. Learners explore different types of NoSQL databases, including document-based, key-value, column-family, and graph databases, and understand when to use them over traditional relational databases. ",
    techStack: ["NoSql", "Mongodb", "Cassandra "],
    link: "https://www.coursera.org/account/accomplishments/verify/WBAX787YM7LD",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Chandigarh University",
    duration: "2020 - 2024",
    description:
      "Graduated in Computer Science, focusing on algorithms, data structures, and web development. Completed projects in Java, React, and Node.js, gaining hands-on experience in frontend and backend technologies.",
  },
  {
    id: 2,
    degree: "Senior School Certificate Examination",
    institution: "Army Public School No.1 Roorkee (CBSE)",
    duration: "2019 - 2020",
    description:
      "Completed coursework in Physics, Chemistry, Mathematics, English and Physical Education. Participated in extracurricular activities, sports and events.",
  },
  {
    id: 3,
    degree: "Secondary School Examination",
    institution: "Army Public School No.1 Roorkee (CBSE)",
    duration: "2017 - 2018",
    description:
      "Completed coursework in Mathematics, Science, Social Science, English and Hindi. Participated in extracurricular activites, sports, and events",
  },
];
