import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";
import algo from "../assets/company/algo.png";
import jps from "../assets/company/jps.png";
import fiverr from "../assets/company/fiverr.png";
import logos from "../assets/company/logos.webp";
import japanstation from "../assets/japanstation.png"
import  clickflow from "../assets/clickflow.png"
import  algorepublic from "../assets/algorepublic.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "CDN Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "SEO  Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Algo Republic",
    icon: algo,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Design and develop scalable server-side applications using Node.js and expertise.",
      "Ensure efficient code and seamless API integrations with collaboration and testing.",
      "Implement robust security measures and optimize performance for high-quality solutions always.",
      "Deliver continuous improvement through code refactoring, optimization, and innovation techniques.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Japan Station",
    icon: jps,
    iconBg: "#E6DEDD",
    date: "May 2022 - Feb 2023",
    points: [
      "Build comprehensive web applications using full stack technologies efficiently and effectively.",
      "Deliver high-quality code with seamless browser compatibility, collaboration, and testing.",
      "Craft responsive, user-friendly interfaces for exceptional user experiences and engagement.",
      "Ensure timely delivery with rigorous testing, iteration, and continuous learning always.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fiver",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Feb 2023 - Jun 2024",
    points: [
      "Create high-quality web applications using various technologies, expertise, and innovation.",
      "Deliver scalable, efficient code with cross-browser compatibility, testing, and iteration.",
      "Design and implement responsive, mobile-friendly interfaces with ease and effectiveness.",
      "Exceed client expectations with timely delivery, continuous learning, and exceptional support always.",
    ],
  },
  {
    title: "CTO and Founder",
    company_name: "ClickFlow",
    icon: logos,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Lead innovative web application development using cutting-edge technologies, expertise, and vision.",
      "Deliver high-quality, efficient code with seamless integration, collaboration, and testing.",
      "Drive technology vision with strategic solutions, exceptional leadership, and innovation.",
      "Foster a culture of innovation, continuous learning, and success with teamwork always.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arslan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arslan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Arslan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Altegon",
    description:
      "Web-based platform that enables users to search, book, and manage WebRTC solutions from various providers, offering a convenient and efficient solution for real-time communication needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: algorepublic,
    source_code_link: "https://altegon.com",
  },
  {
    name: "Japan Station",
    description:
      "With JapanStation, I contributed to the backend development for a company that outsources resources to clients in Japan, delivering tailored solutions to meet diverse business needs efficiently.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: japanstation,
    source_code_link: "https://japanstation.com.pk",
  },
  {
    name: "Clickflow",
    description:
      "For ClickFlow, I developed both the backend and frontend, creating a seamless platform that enhances user experience and streamlines workflow management effectively.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: clickflow,
    source_code_link: "https://clickflow.tech",
  },
];

export { services, technologies, experiences, testimonials, projects };
