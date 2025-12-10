// Portfolio data extraction utility
// This file contains structured data about skills, experience, and projects

export const portfolioData = {
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "Javascript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Bootstrap",
      "Material UI",
      "Redux",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Postman",
      "MongoDB",
      "Python",
    ],
    other: [
      "Langchain",
      "Docker",
      "Azure",
      "Kubernetes",
      "Redux",
      "Sass",
    ],
  },
  experience: [
    {
      company: "SYMB Technologies",
      position: "Software Engineer",
      period: "Oct 2023 — June 2025",
      achievements: [
        "Enhanced the AcePlus.in admin dashboard by integrating backend services and optimizing data workflows, streamlining application operations.",
        "Engineered an intuitive drag-and-drop game management system, improving content organization and accelerating game upload efficiency by 80%.",
        "Built scalable REST and GraphQL APIs to strengthen frontend-backend communication.",
        "Successfully migrated the ASU Chat LP platform from Vue 2 to Vue 3, improving performance, maintainability, and user experience.",
      ],
    },
    {
      company: "Upwork (Freelance)",
      position: "Frontend Developer",
      period: "Jun 2025 — Present",
      achievements: [
        "Engineered and deployed a scalable, full-stack music streaming platform (BeatDrop) with secure authentication, real-time audio streaming, and a modular component architecture.",
        "Built a complete e-commerce platform (Silanyas) from the ground up with authentication, payment gateway integration, and a responsive UI.",
      ],
    },
  ],
  projects: [
    {
      title: "Beatdrop",
      description:
        "Beatdrop is a full-stack music streaming platform built with Next.js, TypeScript, and React. It features secure JWT authentication, real-time audio playback, playlist handling, and Cloudinary-based media storage for reliable content management.",
      technologies: ["React", "Next.js", "Node.js", "Express.js", "Postgresql", "prisma"],
      github: "http://github.com/asjadreza/fe-beatdrop-prod",
      demo: "https://fe-beatdrop-prod.vercel.app/",
    },
    {
      title: "Weather-Web-App",
      description:
        "A minimal, visually clean weather application using HTML, CSS, and JavaScript. It fetches real-time weather details via API and displays temperature, location, humidity, and conditions in an intuitive and user-friendly interface.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      github: "https://github.com/asjadreza/WeatherWebApp",
      demo: "https://weather-web-app-32ou.onrender.com/",
    },
    {
      title: "Todo Web App",
      description:
        "A simple task management web app using Node.js and EJS. Users can add, complete, and delete tasks through a clean UI designed to improve productivity and organize daily work efficiently.",
      technologies: ["EJS", "Express.js", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/asjadreza/todo-app",
      demo: "https://todo-app-a6r3.onrender.com/",
    },
    {
      title: "Snake-Game",
      description:
        "A browser-based version of the classic Snake game built using HTML, CSS, and JavaScript. Players control the snake to eat food, grow, and avoid collisions for increasing score and challenge.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/asjadreza/Snake-Game/",
      demo: "https://asjadreza.github.io/Snake-Game/",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic Tic-Tac-Toe game created using HTML, CSS, and JavaScript. Includes win detection, visual highlights, restart functionality, and responsive interactions for a simple yet engaging gameplay experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/asjadreza/tic-tac-toe",
      demo: "https://asjadreza.github.io/tic-tac-toe/",
    },
    {
      title: "Simon game",
      description:
        "Simon Game is a memory-based challenge where users repeat color sequences that grow progressively harder. Built using HTML, CSS, and JavaScript, it tests focus and recall through interactive gameplay.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/asjadreza/Simon_game",
      demo: "https://asjadreza.github.io/Simon_game/",
    },
  ],
  bio: "Software Developer with proven hands on experience in building responsive, high-performance web applications. Skilled in modern JavaScript frameworks and clean UI/UX. Currently freelancing and open to new opportunities.",
};

// Convert portfolio data to text format for embedding
export function getPortfolioText(): string {
  let text = `Portfolio Information for Asjad Reza\n\n`;
  
  text += `Bio: ${portfolioData.bio}\n\n`;
  
  text += `Skills:\n`;
  text += `Frontend: ${portfolioData.skills.frontend.join(", ")}\n`;
  text += `Backend: ${portfolioData.skills.backend.join(", ")}\n`;
  text += `Other Technologies: ${portfolioData.skills.other.join(", ")}\n\n`;
  
  text += `Experience:\n`;
  portfolioData.experience.forEach((exp) => {
    text += `${exp.position} at ${exp.company} (${exp.period})\n`;
    exp.achievements.forEach((ach) => {
      text += `- ${ach}\n`;
    });
    text += `\n`;
  });
  
  text += `Projects:\n`;
  portfolioData.projects.forEach((proj) => {
    text += `${proj.title}: ${proj.description}\n`;
    text += `Technologies: ${proj.technologies.join(", ")}\n`;
    text += `GitHub: ${proj.github}\n`;
    text += `Demo: ${proj.demo}\n\n`;
  });
  
  return text;
}

