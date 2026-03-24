import blogImg from "../assets/blog.png";
import fetchMeImg from "../assets/FetchMe.png";
import netflixImg from "../assets/netflix.png";
import realImg from "../assets/real.png";
import travelImg from "../assets/travel.png";
import todoImg from "../assets/ToDo.png";
import mindsketch from "../assets/mindsketch.png";
import warewise from "../assets/warewise.png";

// Import internship project previews (Local Assets)
import quickdocsImg from "../assets/quickdocs.png";
import flowsuiteImg from "../assets/flowsuite.png";
import learningImg from "../assets/learner.cenzios.png";
import travoraImg from "../assets/travora.png";
import certImg from "../assets/cert.png";
import interviewproImg from "../assets/interviewpro.png";
import payrollImg from "../assets/payroll.png";

export const projects = [
  {
    id: 1,
    title: "Personal Blog",
    category: "Front-end",
    description:
      "A personal portfolio website to showcase my projects, skills, and experience. Built with HTML, CSS, and JavaScript to provide a clean and responsive user interface.",
    image: blogImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://portfolio-new-steel-psi.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/Portfolio.git",
  },
  {
    id: 2,
    title: "Fetch Me Home",
    category: "Full Stack",
    description:
      "A modern pet adoption platform that connects potential pet parents with animals in need. Built with a scalable tech stack, it features user registration, pet listings, search functionality, and admin control with secure data handling.",
    image: fetchMeImg,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Spring Boot",
      "AWS",
    ],
    demoLink: "https://fetch-me-home-front-end.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/Fetch_Me_Home_FrontEnd.git",
  },
  {
    id: 3,
    title: "Netflix Clone",
    category: "Full Stack",
    description:
      "A Netflix-inspired full-stack streaming platform built with React.js and Spring Boot, featuring user authentication, video playback, and dynamic content fetched from MongoDB.",
    image: netflixImg,
    technologies: ["React.js", "Spring Boot", "MongoDB"],
    demoLink: "https://netflix-clone-frontend-hiup.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/Netflix_Clone_Frontend.git",
  },
  {
    id: 4,
    title: "Real Estate",
    category: "Front-end",
    description:
      "A responsive real estate website that allows users to browse, search, and inquire about properties. Built with ReactJS and styled using Tailwind CSS, it also integrates EmailJS for contact form functionality.",
    image: realImg,
    technologies: ["ReactJS", "Tailwind CSS", "EmailJS"],
    demoLink: "https://real-estate-frontend-chi.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/Real-Estate-Frontend.git",
  },
  // {
  //   id: 5,
  //   title: "ToDo App",
  //   category: "Front-end",
  //   description:
  //     "A minimal and intuitive ToDo application that helps users manage daily tasks efficiently. Includes features like task creation, completion toggles, and real-time updates with a responsive mobile-friendly design.",
  //   image: todoImg,
  //   technologies: ["ReactJS", "Tailwind CSS"],
  //   demoLink: "https://to-do-app-psi-eight.vercel.app/",
  //   codeLink: "https://github.com/chamithsandeepa/ToDo-App-.git",
  // },
  {
    id: 6,
    title: "Travel Blog",
    category: "Full Stack",
    description:
      "A web-based travel booking system that allows users to search, book, and manage travel packages with ease.",
    image: travelImg,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "N/A",
    codeLink: "https://github.com/chamithsandeepa/Travel_Booking_System.git",
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A full-stack clothing e-commerce platform with product browsing, cart management, secure JWT authentication, Stripe payment integration, and an admin dashboard for inventory, orders, and Cloudinary-powered product uploads.",
    image: warewise,
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    demoLink: "https://warewise-frontend.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/warewise-frontend.git",
  },
  {
    id: 8,
    title: "AI Text-to-Image Platform",
    category: "Full Stack",
    description:
      "A text-to-image generation platform powered by Stable Diffusion XL via Hugging Face API with secure JWT authentication, custom prompt handling, and a Stripe-based credit system for session and transaction management.",
    image: mindsketch,
    technologies: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Hugging Face API",
      "Stripe API",
      "JWT Authentication",
    ],
    demoLink: "https://mind-sketch-nine.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/MindSketch.git",
  },
  {
    id: 9,
    title: "QuickDocs",
    category: "Front-end",
    isInternship: true,
    description:
      "A professional service landing page for document preparation business. Built with React and Vite to ensure high performance and responsiveness, featuring interactive sections, smooth scroll navigation, and premium UI animations using Framer Motion.",
    image: quickdocsImg,
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://quickdocs.cenzios.com/",
    codeLink: "https://github.com/Cenzios/Quickdocs",
  },
  {
    id: 10,
    title: "FlowSuite",
    category: "Front-end",
    isInternship: true,
    description:
      "A modern, responsive landing page and workflow management platform specifically for the apparel industry. Built with React 19 and TypeScript to provide a premium user interface with smooth, high-performance animations.",
    image: flowsuiteImg,
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://flowsuite.web.cenzios.com/",
    codeLink: "https://github.com/Cenzios/Flowsuit_Product_Page",
  },
  {
    id: 11,
    title: "Cenzios Learning",
    category: "Front-end",
    isInternship: true,
    description:
      "A modern Learning Management System (LMS) designed to showcase role-based management (Admin, Coach, Learner, Parent). Features complex system architecture and is containerized for seamless deployment.",
    image: learningImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker"],
    demoLink: "https://learner.cenzios.com/",
    codeLink: "https://github.com/Cenzios/CenziosLearning",
  },
  {
    id: 12,
    title: "Travora 2.0",
    category: "Full Stack",
    isInternship: true,
    description:
      "A comprehensive tourism platform for Sri Lanka featuring a modern client application and an administrative dashboard. Manages travel content, tour bookings, and vehicle rentals with a high-performance interface.",
    image: travoraImg,
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Shadcn/ui"],
    demoLink: "https://travora.dev.cenzios.com/",
    codeLink: "N/A",
  },
  {
    id: 13,
    title: "CERT Foundation",
    category: "Front-end",
    isInternship: true,
    description:
      "A modern landing page for a non-profit organization focused on community support. Built with Next.js 16 to provide a clean user interface with smooth animations and interactive components for volunteer recruitment.",
    image: certImg,
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Framer Motion"],
    demoLink: "https://cert.cenzios.com/",
    codeLink: "https://github.com/chamithsandeepa/CERT-Application",
  },
  {
    id: 14,
    title: "InterviewPro",
    category: "Front-end",
    isInternship: true,
    description:
      "A professional interview preparation platform helping students build confidence through mock interviews and expert CV reviews. Features a responsive UI and smooth micro-interactions.",
    image: interviewproImg,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://interviewpro.cenzios.com/",
    codeLink: "https://github.com/chamithsandeepa/InterviewPro",
  },
  {
    id: 15,
    title: "Cenzios Payroll",
    category: "Full Stack",
    isInternship: true,
    description:
      "A comprehensive payroll management system featuring automated salary calculations, multi-company support, and real-time reporting dashboards. Focused on responsive UI/UX and professional interactions.",
    image: payrollImg,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://payroll.web.cenzios.com/",
    codeLink: "https://github.com/Cenzios/payrollWeb2",
  },
];
