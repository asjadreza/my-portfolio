import { useState } from "react";
import { Typography } from "@mui/material";

// Define a type for skills with optional bg property
type Skill = {
  name: string;
  icon: string;
  bg?: string;
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills: Skill[] = [
    { name: "HTML5", icon: "HTML5.svg" },
    { name: "CSS3", icon: "CSS3.svg" },
    { name: "Javascript", icon: "JavaScript.svg" },
    { name: "React.js", icon: "React.svg" },
    { name: "Next.js", icon: "next.js.png" },
    { name: "Vue.js", icon: "Vue.js.svg" },
    { name: "Nuxt.js", icon: "Nuxt JS.svg" },
    { name: "Bootstrap", icon: "Bootstrap.svg" },
    { name: "Material UI", icon: "Material UI.svg" },
    { name: "Redux", icon: "Redux.svg" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", icon: "Node.js.svg" },
    {
      name: "Express.js",
      icon: "Express.png",
    },
    { name: "PostgreSQL", icon: "PostgresSQL.svg" },
    { name: "Postman", icon: "Postman.svg" },
    { name: "MongoDB", icon: "MongoDB.svg" },
    { name: "Python", icon: "Python.svg" },
  ];

  const otherSkills: Skill[] = [
    {
      name: "Langchain",
      icon: "Langchain.svg",
    },
    { name: "Docker", icon: "Docker.svg" },
    { name: "Azure", icon: "Azure.svg" },
    { name: "Kubernetes", icon: "Kubernetes.svg" },
    { name: "Redux", icon: "Redux.svg" },
    { name: "Sass", icon: "Sass.svg" },
  ];

  const getActiveSkills = (): Skill[] => {
    switch (activeTab) {
      case "frontend":
        return frontendSkills;
      case "backend":
        return backendSkills;
      case "other":
        return otherSkills;
      default:
        return frontendSkills;
    }
  };

  const getTabTitle = (): string => {
    switch (activeTab) {
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "other":
        return "Tools & Technologies";
      default:
        return "Frontend";
    }
  };

  return (
    <div className="skills flex flex-col items-center justify-center mb-8">
      <div className="w-full max-w-7xl mb-4">
        <div className="text-sm flex md:flex-row flex-col items-start font-medium border-slate-500">
          {/* <h2 className="text-2xl font-semibold text-slate-100 border-b shrink-0"> */}
          <h2 className="text-[20px] md:text-5xl font-semibold text-slate-100 shrink-0">
            SKILLS
          </h2>
         
          {/* <div className="flex flex-col items-start">
            <h2 className="text-[20px] md:text-5xl mb-8 font-semibold text-slate-100 border-b shrink-0">
            SKILLS
          </h2>
          <p className="text-3xl font-normal bg-linear-to-r from-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            What I know
          </p>
          </div> */}
          <div className="flex-1 flex w-full mt-4 md:mt-0 justify-center items-center">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <button
                  onClick={() => setActiveTab("frontend")}
                  className={`md:text-[14px] sm:text-[12px] text-[12px] inline-block p-4 cursor-pointer rounded-t-lg border-b-2 transition-all duration-200 ${
                    activeTab === "frontend"
                      ? "text-slate-50 border-slate-50"
                      : "text-slate-300 border-transparent hover:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  Frontend
                </button>
              </li>
              <li className="me-2">
                <button
                  onClick={() => setActiveTab("backend")}
                  className={`md:text-[14px] sm:text-[12px] text-[12px] inline-block p-4 cursor-pointer rounded-t-lg border-b-2 transition-all duration-200 ${
                    activeTab === "backend"
                      ? "text-slate-50 border-slate-50"
                      : "text-slate-300 border-transparent hover:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  Backend
                </button>
              </li>
              <li className="me-2">
                <button
                  onClick={() => setActiveTab("other")}
                  className={`md:text-[14px] sm:text-[12px] text-[12px] inline-block p-4 cursor-pointer rounded-t-lg border-b-2 transition-all duration-200 ${
                    activeTab === "other"
                      ? "text-slate-50 border-slate-50"
                      : "text-slate-300 border-transparent hover:text-slate-300 hover:border-slate-300"
                  }`}
                >
                  Other Tech
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Display - Simple horizontal layout */}
      <div className="flex justify-start mt-8">
        <div className="w-full max-w-7xl">
          {/* Horizontal skills list */}
          <div className="flex justify-center md:justify-start flex-wrap gap-10">
            {getActiveSkills().map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-200"
              >
                <div className={`mb-3 ${skill.bg ? skill.bg : ""}`}>
                  <img
                    src={skill.icon}
                    className="w-10 h-10"
                    alt={skill.name}
                  />
                </div>
                <p className="text-slate-300 text-center text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
