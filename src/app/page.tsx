"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckIcon, InboxIcon } from "@heroicons/react/24/outline";
import { ReactTyped } from "react-typed";
import { FooterComponent } from "@/components/FooterComponent";
import { Navbar } from "@/components/Navbar";
import ExperienceTimeline from "@/components/Experience";
import Typography from "@mui/material/Typography";

// --- Static data used in the page (projects, skills) ---
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "GSAP",
  "Node.js",
];

const projects = [
  {
    id: 1,
    title: "Interactive Dashboard",
    desc: "Real-time analytics dashboard with dynamic charts and filters.",
    tech: ["React", "D3", "Node"],
    url: "#",
  },
  {
    id: 2,
    title: "E‑commerce UI Kit",
    desc: "Pixel-perfect components, accessible, themeable.",
    tech: ["Next.js", "Tailwind"],
    url: "#",
  },
  {
    id: 3,
    title: "3D Product Showcase",
    desc: "Product viewer with interactive rotation and annotations.",
    tech: ["Three.js"],
    url: "#",
  },
  {
    id: 4,
    title: "3D Product Showcase",
    desc: "Product viewer with interactive rotation and annotations.",
    tech: ["Three.js"],
    url: "#",
  },
  {
    id: 5,
    title: "3D Product Showcase",
    desc: "Product viewer with interactive rotation and annotations.",
    tech: ["Three.js"],
    url: "#",
  },
  {
    id: 6,
    title: "3D Product Showcase",
    desc: "Product viewer with interactive rotation and annotations.",
    tech: ["Three.js"],
    url: "#",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Main page component ---
export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[url('/looper.png')] bg-linear-to-b to-black  bg-no-repeat">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="max-w-4xl mx-auto px-6 py-5 gap-8 ">
        <div className="flex items-center justify-center">
          <div className="p-0.5 rounded-full bg-linear-to-tr from-purple-500 via-pink-500 to-blue-500 mt-12">
            <img
              src="/Avatar.jpg"
              alt="Avatar"
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-center leading-tight"
          >
            <span className="block text-amber-50 font-medium mb-4 mt-5">
              Hello, I'm
            </span>
            <span className="inline-block text-4xl sm:text-7xl font-semibold text-white animate-bounce tracking-tighter">
              Asjad Reza
            </span>
            <span className="block text-xl sm:text-xl font-medium mt-2">
              <ReactTyped
                strings={[
                  "Software Developer",
                  "Frontend Developer",
                  "Gen AI Developer",
                  "DevOps Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-100 text-center "
          >
            Results-oriented Software Developer with 2 years of experience
            building responsive, high-performance web applications. Skilled in
            modern JavaScript frameworks and clean UI/UX. Currently freelancing
            and open to new opportunities.
          </motion.p>
          <div className="mt-6 flex items-center justify-center flex-wrap gap-3">
            {/* <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-500 shadow-md text-white 
               transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a> */}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 text-slate-200
               transition-transform duration-200 hover:scale-105 hover:bg-slate-100 hover:text-slate-950"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="skills flex items-center justify-center mb-5">
          <h6 className="font-semibold">What Skills I Have</h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Card */}
          <div className="p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-4 text-center text-slate-200">
              Frontend
            </h3>

            <div className="grid grid-cols-3 gap-3 place-items-center">
              <div className="flex flex-col items-center">
                <img src="HTML5.svg" className="w-9 h-9" alt="HTML" />
                <p>HTML5</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="CSS3.svg" className="w-9 h-9" alt="CSS3" />
                <p>CSS3</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="JavaScript.svg" className="w-9 h-9" alt="JS" />
                <p>Javascript</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="React.svg" className="w-9 h-9" alt="ReactJS" />
                <p>React.js</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="next.js.png" className="w-9 h-9" alt="Vue.js" />
                <p>Next.js</p>
              </div>
              <div className="flex flex-col items-center mt-2">
                <img src="Vue.js.svg" className="w-9 h-9" alt="VueJs" />
                <p>Vue js</p>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-4 text-center text-slate-200">
              Backend
            </h3>

            <div className="grid grid-cols-3 gap-3 place-items-center">
              <div className="flex flex-col items-center">
                <img src="Node.js.svg" className="w-9 h-9" alt="Node js" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="Express.svg"
                  className="w-9 h-9 bg-slate-50 rounded-full p-2"
                  alt="Express js"
                />
                <p>Express.js</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="PostgresSQL.svg" className="w-9 h-9" alt="Postgres" />
                <p>PostgresSQL</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="Postman.svg" className="w-9 h-9" alt="Postman" />
                <p>Postman</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="MongoDB.svg" className="w-9 h-9" alt="Mongo DB" />
                <p>MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="Python.svg" className="w-9 h-9" alt="Python" />
                <p>Python</p>
              </div>
            </div>
          </div>

          {/* Other Skills Card */}
          <div className="p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-4 text-center text-slate-200">
              Tools & Technologies
            </h3>

            <div className="grid grid-cols-3 gap-4 place-items-center">
              <div className="flex flex-col items-center">
                <img
                  src="Langchain.svg"
                  className="w-9 h-9 bg-slate-50 rounded-full p-2"
                  alt="Langchain"
                />
                <p>Langchain</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="Docker.svg" className="w-9 h-9" alt="Docker" />
                <p>Docker</p>
              </div>
              <div className="flex flex-col items-center mt-2">
                <img src="Azure.svg" className="w-9 h-9" alt="Azure" />
                <p>Azure</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="Kubernetes.svg"
                  className="w-9 h-9"
                  alt="Kubernetes"
                />
                <p>Kubernetes</p>
              </div>

              <div className="flex flex-col items-center">
                <img src="Redux.svg" className="w-9 h-9" alt="Redux" />
                <p>Redux</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="Sass.svg" className="w-9 h-9" alt="Sass" />
                <p>Sass</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Projects section ---------- */}
      {/* <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <p className="text-slate-400 mt-2">
          A few projects that show my approach to UI, animation and performance.
        </p>

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          animate="show"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => {
            const ref = useRef(null);
            const inView = useInView(ref, { margin: "-100px" }); // moved from once:true

            return (
              <motion.a
                key={p.id}
                ref={ref}
                variants={projectCardVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"} // re-animate on every scroll
                className="block rounded-xl glass p-5 border border-white/6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="text-xs text-slate-400">UI / Frontend</div>
                </div>

                <p className="text-slate-300 mt-3 text-sm">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-white/4"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </section> */}

      <section id="experience" className="max-w-7xl mx-auto px-6 py-12">
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 600, mb: 4 }}
        >
          Experience
        </Typography>

        <ExperienceTimeline />
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Get in touch</h2>
        <p className="text-slate-400 mt-2">
          Interested in working together? Send a message — I usually reply
          within a day.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact form (no real submission here) */}
          <form
            className="p-6 rounded-xl glass border border-white/6"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-xs text-slate-300">Name</label>
            <input
              className="w-full mt-1 p-3 rounded-md bg-white/5 border border-white/6 text-slate-100"
              placeholder="Your name"
            />

            <label className="block text-xs text-slate-300 mt-4">Email</label>
            <input
              className="w-full mt-1 p-3 rounded-md bg-white/5 border border-white/6 text-slate-100"
              placeholder="you@company.com"
            />

            <label className="block text-xs text-slate-300 mt-4">Message</label>
            <textarea
              className="w-full mt-1 p-3 rounded-md bg-white/5 border border-white/6 text-slate-100"
              rows={5}
              placeholder="Tell me about the project"
            />

            <div className="mt-4 flex items-center gap-3">
              {/* Submit button: currently prevents default. Hook this to EmailJS or your API when ready. */}
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-linear-to-r from-purple-600 to-indigo-500 text-white"
              >
                Send message
              </button>
              <button
                type="button"
                className="px-3 py-2 rounded-md border border-white/6 text-sm"
              >
                Download Resume
              </button>
            </div>
          </form>

          {/* Contact details card */}
          <div className="p-6 rounded-xl glass border border-white/6">
            <h3 className="font-semibold">Say hi</h3>
            <p className="text-slate-300 mt-2">
              Email:{" "}
              <a href="mailto:asjad@example.com" className="text-slate-200">
                asjad@example.com
              </a>
            </p>

            <div className="mt-4">
              <h4 className="text-sm text-slate-400 mb-2">Tools I use</h4>
              <div className="flex flex-wrap gap-2">
                {["VSCode", "Figma", "Git", "Vercel"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-white/4"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-slate-400">Availability</h4>
              {/* Small icon + text rows. Icons are decorative and accessible. */}
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                <CheckIcon className="w-4 h-4" /> Open to freelance projects
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                <InboxIcon className="w-4 h-4" /> Reply within 24-48 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <FooterComponent />
    </main>
  );
}
