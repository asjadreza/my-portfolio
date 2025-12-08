"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckIcon, InboxIcon, TvIcon } from "@heroicons/react/24/outline";
import { ReactTyped } from "react-typed";
import { FooterComponent } from "@/components/FooterComponent";
import { Navbar } from "@/components/Navbar";
import ExperienceTimeline from "@/components/Experience";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Skills from "@/components/Skills";
import ContactComponent from "@/components/Contact";

const projects = [
  {
    id: 1,
    title: "Beatdrop",
    desc: "Beatdrop is a full-stack music streaming platform with Next.js, TypeScript,and React, featuring secure JWT authentication, real-time audio playback,and cloud-based media management through Cloudinary integration.",
    github: "http://github.com/asjadreza/fe-beatdrop-prod",
    demo: "https://fe-beatdrop-prod.vercel.app/",
    img: "/thumbnail/coding.jpg",
    tech: ["React", "Next.js", "Node.js", "Express.js", "Postgresql", "prisma"],
  },
  {
    id: 2,
    title: "Weather-Web-App",
    desc: "A simple, pleasant-looking web application built with HTML, CSS, and JavaScript that displays real-time weather information for a given location. It offers a straightforward UI to fetch and show weather data, making it easy for users to check current conditions in their city.",
    github: "https://github.com/asjadreza/WeatherWebApp",
    demo: "https://weather-web-app-32ou.onrender.com/",
    img: "/thumbnail/coding.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Weather API"],
  },
  {
    id: 3,
    title: "Todo Web App",
    desc: "A simple web-based task manager built with Node.js and HTML/CSS/JS that lets users create a to-do list: add tasks, mark them complete, and remove tasks as needed. It provides a clean, minimalistic UI to help users stay organized and keep track of their daily tasks.",
    github: "https://github.com/asjadreza/todo-app",
    demo: "https://todo-app-a6r3.onrender.com/",
    img: "/thumbnail/coding.jpg",
    tech: ["EJS", "Express.js", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Snake-Game",
    desc: "A simple browser-based implementation of the classic Snake game using HTML, CSS, and JavaScript. It offers the core Snake gameplay: control a growing snake to eat food while avoiding collisions, all rendered in basic web technologies.",
    github: "https://github.com/asjadreza/Snake-Game/",
    demo: "https://asjadreza.github.io/Snake-Game/",
    img: "/thumbnail/coding.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    desc: "Simple browser-based Tic Tac Toe built with HTML, CSS, and vanilla JavaScript.Click to place X/O, automatic win detection with highlighted winning squares and a Restart button.",
    github: "https://github.com/asjadreza/tic-tac-toe",
    demo: "https://asjadreza.github.io/tic-tac-toe/",
    img: "/thumbnail/coding.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Simon game",
    desc: "Simon Game is a web-based memory game that challenges players to repeat increasingly complex sequences of colors and sounds. Built with HTML, CSS, and JavaScript, it offers an interactive and fun way to test and improve your memory skills.",
    github: "https://github.com/asjadreza/Simon_game",
    demo: "https://asjadreza.github.io/Simon_game/",
    img: "/thumbnail/coding.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function PortfolioPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // NEW: Ref to track cumulative scroll distance for trackpads
  const scrollAccumulator = useRef(0);

  // 1. Detect In-View AND Direction of Entry
  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          if (entry.boundingClientRect.top < 0) {
            setActiveIndex(projects.length - 1);
          } else {
            setActiveIndex(0);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  // 2. Handle Wheel Events (FIXED FOR TRACKPAD)
  useEffect(() => {
    const handleWheelGlobal = (e: WheelEvent) => {
      if (!sectionInView) return;

      const delta = e.deltaY;

      // BOUNDARY CHECK:
      // If at FIRST project and scrolling UP -> Let browser handle it (exit section)
      if (activeIndex === 0 && delta < 0) {
        // Important: Reset accumulator so we don't accidentally trigger later
        scrollAccumulator.current = 0;
        return;
      }

      // If at LAST project and scrolling DOWN -> Let browser handle it (exit section)
      if (activeIndex === projects.length - 1 && delta > 0) {
        scrollAccumulator.current = 0;
        return;
      }

      // We are "locked". Prevent default immediately to stop page scroll.
      e.preventDefault();
      e.stopPropagation();

      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }

      if (isAnimating) return;

      // --- LOGIC CHANGE START ---
      // Instead of checking delta directly, add to our accumulator.https://chatgpt.com/g/g-drpwu8nYs-ai-signature-generator
      // This absorbs the small, rapid events from trackpads.
      scrollAccumulator.current += delta;

      // Threshold: 60px is a sweet spot.
      // A standard mouse wheel 'click' is usually ~100px (triggers instantly).
      // A trackpad swipe is composed of many ~4px events.
      const SCROLL_THRESHOLD = 40;

      // Only trigger if we've accumulated enough scroll distance
      if (Math.abs(scrollAccumulator.current) > SCROLL_THRESHOLD) {
        setIsAnimating(true);

        // Determine direction based on the accumulated value, not just the single event
        const direction = scrollAccumulator.current > 0 ? 1 : -1;

        // Reset accumulator immediately to prevent double-firing
        scrollAccumulator.current = 0;

        setActiveIndex((prev) => {
          if (direction > 0) {
            // Scroll Down
            return Math.min(prev + 1, projects.length - 1);
          } else {
            // Scroll Up
            return Math.max(prev - 1, 0);
          }
        });

        setTimeout(() => {
          setIsAnimating(false);
          // Safety: ensure no lingering inertia triggers a jump after cooldown
          scrollAccumulator.current = 0;
        }, 650);
      }
      // --- LOGIC CHANGE END ---
    };

    // Note: 'passive: false' is required to use preventDefault()
    window.addEventListener("wheel", handleWheelGlobal, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelGlobal);
    };
  }, [sectionInView, activeIndex, isAnimating]);

  // 3. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionInView) return;
      if (isAnimating) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (activeIndex < projects.length - 1) {
          e.preventDefault();
          setIsAnimating(true);
          setActiveIndex((prev) => prev + 1);
          setTimeout(() => setIsAnimating(false), 650);
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (activeIndex > 0) {
          e.preventDefault();
          setIsAnimating(true);
          setActiveIndex((prev) => prev - 1);
          setTimeout(() => setIsAnimating(false), 650);
        }
      }
    };

    if (sectionInView) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sectionInView, isAnimating, activeIndex]);

  return (
    <main className="min-h-screen bg-[url('/looper.png')] bg-[#111]  bg-no-repeat">
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
            className="mt-4 text-slate-200 text-center text-sm sm:text-base text"
          >
            Results-oriented Software Developer with 2 years of experience
            building responsive, high-performance web applications. Skilled in
            modern JavaScript frameworks and clean UI/UX. Currently freelancing
            and open to new opportunities.
          </motion.p>
          <div className="mt-6 flex items-center justify-center flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 text-slate-200
               transition-transform duration-200 hover:scale-105 hover:bg-slate-100 hover:text-slate-950 text-sm sm:text-base text"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="#skills" className="max-w-7xl mx-auto px-6 py-12">
        <Skills />
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-6 py-12">
        <h2
          className="text-[20px] md:text-2xl  font-semibold mb-5"
          style={{ borderBottom: "1px solid white", display: "inline-block" }}
        >
          Experience
        </h2>
        <ExperienceTimeline />
      </section>

      {/* <section
        id="projects"
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 py-12 scroll-mt-10"
      >
        <h2
          className="text-[20px] md:text-2xl  font-semibold mb-8"
          style={{ borderBottom: "1px solid white", display: "inline-block" }}
        >
          Projects
        </h2>

        <div className="relative h-[260px] md:h-[300px] mx-3">
          {projects.map((p, index) => {
            const isPrimary = index === activeIndex;
            const isSecondary = index === activeIndex + 1;
            const isBefore = index < activeIndex;
            const isAfter = index > activeIndex + 1;

            const isVisible = isPrimary || isSecondary;

            // Position: left card (primary) & right card (secondary) on desktop
            let positionClasses = "";
            if (isSecondary) {
              // show second card only on md+ so mobile still looks clean
              positionClasses = "hidden md:block right-0 md:w-[48%]";
            } else if (isPrimary || isBefore) {
              positionClasses = "left-0 w-full md:w-[48%]";
            } else {
              positionClasses = "right-0 w-full md:w-[48%]";
            }

            // Animation state (similar feel to your old isActive/isBefore logic)
            let stateClasses = "";
            if (isVisible) {
              stateClasses =
                "opacity-100 translate-x-0 pointer-events-auto z-10";
            } else if (isBefore) {
              stateClasses =
                "opacity-0 -translate-x-1/3 pointer-events-none z-0";
            } else if (isAfter) {
              stateClasses =
                "opacity-0 translate-x-1/3 pointer-events-none z-0";
            }

            return (
              <div
                key={p.id}
                rel="noopener noreferrer"
                className={`
                group absolute top-0 bottom-0 glass rounded-xl border
                border-white/10
                shadow-[0_0_10px_rgba(255,255,255,0.05),0_0_20px_rgba(255,255,255,0.1)]
                hover:shadow-[0_0_15px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.15)]
                p-6 md:p-8 transition-all duration-300
                transform ${positionClasses} ${stateClasses}
              `}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold transition-colors">
                      {p.title}
                    </h3>
                    <div className="text-sm text-slate-400 mt-1">
                      UI / Frontend
                    </div>
                  </div>

                  <div className="flex gap-4 text-sm">
                    <span
                      onClick={() => window.open(p.github, "_blank")}
                      className="text-slate-400 cursor-pointer"
                    >
                      <GitHubIcon
                        sx={{
                          fontSize: 24,
                          color: "#8E9EB6",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#fff",
                            transform: "scale(1.1)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      />
                    </span>
                    <span
                      onClick={() => window.open(p.demo, "_blank")}
                      className="text-blue-400 cursor-pointer"
                    >
                      <LiveTvIcon
                        sx={{
                          fontSize: 24,
                          color: "#8E9EB6",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#fff",
                            transform: "scale(1.1)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      />
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 mt-4 hover:text-slate-200 transition-colors">
                  {p.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-slate-500 text-center w-full">
            <div>
              Project {activeIndex + 1} of {projects.length}
            </div>
            {activeIndex === 0 && (
              <div className="mt-1 opacity-50">
                Scroll Up to previous section
              </div>
            )}
            {activeIndex === projects.length - 1 && (
              <div className="mt-1 opacity-50">Scroll Down to next section</div>
            )}
          </div>
        </div>
      </section> */}

      <section
        id="projects"
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 py-12 scroll-mt-10"
      >
        <h2
          className="text-[20px] md:text-2xl font-semibold mb-8"
          style={{ borderBottom: "1px solid white", display: "inline-block" }}
        >
          Projects
        </h2>

        {/* ================= DESKTOP/TABLET SECTION ================= */}
        <div className="hidden md:block relative h-[260px] md:h-[300px] mx-3">
          {projects.map((p, index) => {
            const isPrimary = index === activeIndex;
            const isSecondary = index === activeIndex + 1;
            const isBefore = index < activeIndex;
            const isAfter = index > activeIndex + 1;
            const isVisible = isPrimary || isSecondary;

            let positionClasses = "";
            if (isSecondary) {
              positionClasses = "right-0 md:w-[48%]";
            } else if (isPrimary || isBefore) {
              positionClasses = "left-0 md:w-[48%]";
            } else {
              positionClasses = "right-0 md:w-[48%]";
            }

            let stateClasses = "";
            if (isVisible) {
              stateClasses =
                "opacity-100 translate-x-0 pointer-events-auto z-10";
            } else if (isBefore) {
              stateClasses =
                "opacity-0 -translate-x-1/3 pointer-events-none z-0";
            } else if (isAfter) {
              stateClasses =
                "opacity-0 translate-x-1/3 pointer-events-none z-0";
            }

            return (
              <div
                key={p.id}
                className={`
            absolute top-0 bottom-0 glass rounded-xl border border-white/10
            shadow-[0_0_10px_rgba(255,255,255,0.05),0_0_20px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.15)]
            p-6 md:p-8 transition-all duration-700 transform
            ${positionClasses} ${stateClasses}
          `}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="flex gap-3">
                    <GitHubIcon
                      onClick={() => window.open(p.github, "_blank")}
                      sx={{ cursor: "pointer" }}
                    />
                    <LiveTvIcon
                      onClick={() => window.open(p.demo, "_blank")}
                      sx={{ cursor: "pointer" }}
                    />
                  </div>
                </div>

                <p className="text-slate-300 mt-4">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-md bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-slate-500 text-center w-full">
            <div>
              Project {activeIndex + 1} of {projects.length}
            </div>
          </div>
        </div>

        {/* ================= MOBILE SECTION WITH BUTTONS ================= */}
        {(() => {
          const [mobileIndex, setMobileIndex] = useState(0);

          const next = () =>
            setMobileIndex((prev) => Math.min(prev + 1, projects.length - 1));
          const prev = () => setMobileIndex((prev) => Math.max(prev - 1, 0));

          const p = projects[mobileIndex];

          return (
            <div className="md:hidden flex flex-col gap-6 mt-6">
              <div className="glass rounded-xl border border-white/10 p-5 shadow-lg">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="flex gap-3">
                    <GitHubIcon
                      onClick={() => window.open(p.github, "_blank")}
                      sx={{ cursor: "pointer" }}
                    />
                    <LiveTvIcon
                      onClick={() => window.open(p.demo, "_blank")}
                      sx={{ cursor: "pointer" }}
                    />
                  </div>
                </div>

                <p className="text-slate-300 mt-3 text-sm sm:text-base text">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-md bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* <div className="text-center text-xs text-slate-400 mt-3">
                  {mobileIndex + 1} of {projects.length}
                </div> */}
              </div>
              {/* Buttons */}
                <div className="flex justify-center gap-3">
                  <button
                    // className="px-4 py-2 bg-white/10 rounded-lg disabled:opacity-20"
                    className="cursor-pointer"
                    disabled={mobileIndex === 0}
                    onClick={prev}
                  >
                    <NavigateBeforeIcon />
                  </button>
                  <button
                  className="cursor-pointer"
                    // className="px-4 bg-white/10 rounded-lg disabled:opacity-20"
                    disabled={mobileIndex === projects.length - 1}
                    onClick={next}
                  >
                    <NavigateNextIcon />
                  </button>
                </div>
            </div>
          );
        })()}
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <h2
          className="text-2xl font-semibold"
          style={{ borderBottom: "1px solid white", display: "inline-block" }}
        >
          Get in touch
        </h2>
        <p className="text-slate-400 mt-5">
          Interested in working together? Send a message — I usually reply
          within a day.
        </p>

        <ContactComponent />
      </section>

      {/* ---------- Footer ---------- */}
      <FooterComponent />
    </main>
  );
}
