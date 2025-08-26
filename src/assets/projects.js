import blogImg from "../assets/blog.png";
import fetchMeImg from "../assets/FetchMe.png";
import netflixImg from "../assets/netflix.png";
import realImg from "../assets/real.png";
import travelImg from "../assets/travel.png";
import todoImg from "../assets/ToDo.png";
import mindsketch from "../assets/mindsketch.png";
import warewise from "../assets/warewise.png";

export const projects = [
  {
    id: 1,
    title: "Personal Blog",
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
    description:
      "A responsive real estate website that allows users to browse, search, and inquire about properties. Built with ReactJS and styled using Tailwind CSS, it also integrates EmailJS for contact form functionality.",
    image: realImg,
    technologies: ["ReactJS", "Tailwind CSS", "EmailJS"],
    demoLink: "https://real-estate-frontend-chi.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/Real-Estate-Frontend.git",
  },
  {
    id: 5,
    title: "ToDo App",
    description:
      "A minimal and intuitive ToDo application that helps users manage daily tasks efficiently. Includes features like task creation, completion toggles, and real-time updates with a responsive mobile-friendly design.",
    image: todoImg,
    technologies: ["ReactJS", "Tailwind CSS"],
    demoLink: "https://to-do-app-psi-eight.vercel.app/",
    codeLink: "https://github.com/chamithsandeepa/ToDo-App-.git",
  },
  {
    id: 6,
    title: "Travel Blog",
    description:
      "A web-based travel booking system that allows users to search, book, and manage travel packages with ease.",
    image: travelImg,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "N/A",
    codeLink: "https://github.com/chamithsandeepa/Travel_Booking_System.git",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
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
    id: 2,
    title: "AI Text-to-Image Platform",
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
];
