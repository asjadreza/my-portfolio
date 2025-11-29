import React from "react";
import { motion } from "framer-motion";

// Skill logos with fixed positions
const skillLogos = [
  { name: "Redux", src: "Redux.svg", size: 57, top: 78, left: 45 },
  { name: "Jira", src: "Jira.svg", size: 50, top: 76, left: 57 },
  { name: "Azure", src: "Azure.svg", size: 65, top: 22, left: 10 },
  { name: "MongoDB", src: "MongoDB.svg", size: 65, top: 9, left: 24 },
  { name: "Nuxt.js", src: "Nuxt JS.svg", size: 63, top: 25, left: 25 },
  { name: "React", src: "React.svg", size: 78, top: 6, left: 42 },
  { name: "PostgresSQL", src: "PostgresSQL.svg", size: 75, top: 7, left: 61 },
  { name: "Next.js", src: "Next.js.svg", size: 70, top: 15, left: 78 },
  { name: "Node.js", src: "Node.js.svg", size: 75, top: 25, left: 55 },
  { name: "Express.js", src: "Express.svg", size: 70, top: 25, left: 40 },
  { name: "TypeScript", src: "TypeScript.svg", size: 74, top: 40, left: 5 },
  { name: "Babel", src: "Babel.svg", size: 67, top: 60, left: 7 },
  { name: "HTML5", src: "HTML5.svg", size: 83, top: 40, left: 23 },
  { name: "Webpack", src: "Webpack.svg", size: 70, top: 30, left: 89 },
  { name: "TailwindCSS", src: "Tailwind-CSS.svg", size: 70, top: 42, left: 63 },
  { name: "Docker", src: "Docker.svg", size: 75, top: 52, left: 77 },
  { name: "CSS3", src: "CSS3.svg", size: 70, top: 30, left: 73 },
  { name: "VueJS", src: "Vue.js.svg", size: 70, top: 76, left: 17 },
  { name: "Python", src: "Python.svg", size: 53, top: 71, left: 33 },
  { name: "Git", src: "Git.svg", size: 72, top: 92, left: 45 },
  { name: "NPM", src: "NPM.svg", size: 70, top: 91, left: 60 },
  { name: "Java", src: "Java.svg", size: 76, top: 82, left: 73 },
  { name: "Sass", src: "Sass.svg", size: 65, top: 88, left: 30 },
  { name: "Bootstrap", src: "Bootstrap.svg", size: 70, top: 68, left: 86 },
  { name: "Linux", src: "Linux.svg", size: 72, top: 50, left: 92 },
  { name: "Material UI", src: "Material UI.svg", size: 68, top: 60, left: 45 },
  { name: "Github", src: "GitHub.svg", size: 65, top: 60, left: 25 },
  { name: "Kubernetes", src: "Kubernetes.svg", size: 65, top: 58, left: 60 },
  { name: "Postman", src: "Postman.svg", size: 65, top: 68, left: 70 },
];

// Floating animation config
const floatTransition = {
  duration: 3,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-10"
    >
      <h2 className="text-3xl font-bold text-white mb-10">
        Tech: <span className="text-indigo-400">Skills.</span>
      </h2>

      {/* Container for floating logos */}
      {/* <div className="relative w-full max-w-5xl h-[500px]">
        {skillLogos.map((logo) => (
          <motion.div
            key={logo.name}
            className="absolute flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-md"
            style={{
              width: logo.size,
              height: logo.size,
              top: logo.top + "%",
              left: logo.left + "%",
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{ ...floatTransition, duration: 3 + Math.random() * 2 }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="w-[60%] h-[60%] object-contain"
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute rounded-full flex items-center justify-center"
          style={{ width: 110, height: 110, top: "38%", left: "42%" }}
          animate={{ y: [0, -12, 0] }}
          transition={floatTransition}
        >
          <img src="JavaScript.svg" alt="JavaScript" className="w-20 h-20" />
        </motion.div>
      </div> */}


      
      <style jsx>{`
        section::before {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.08) 0%,
            transparent 70%
          );
          top: -100px;
          left: -150px;
          border-radius: 50%;
          filter: blur(80px);
        }
        section::after {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;
          background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.06) 0%,
            transparent 80%
          );
          bottom: -150px;
          right: -200px;
          border-radius: 50%;
          filter: blur(80px);
        }
      `}</style>
    </section>
  );
}
