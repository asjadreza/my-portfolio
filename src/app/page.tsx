"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckIcon, InboxIcon } from "@heroicons/react/24/outline";
import { ReactTyped } from "react-typed";
import { FooterComponent } from "@/components/FooterComponent";
import { Navbar } from "@/components/Navbar";
import ExperienceTimeline from "@/components/Experience";
import Typography from "@mui/material/Typography";
import Skills from "@/components/Skills";

const projects = [
  {
    id: 1,
    title: "Beatdrop",
    desc: "Real-time analytics dashboard with dynamic charts and filters.",
    github: "http://github.com/asjadreza/fe-beatdrop-prod",
    demo: "https://fe-beatdrop-prod.vercel.app/",
    tech: ["React", "D3", "Node"],
  },
  {
    id: 2,
    title: "Weather-Web-App",
    desc: "Pixel-perfect components, accessible, themeable.",
    github: "https://github.com/asjadreza/WeatherWebApp",
    demo: "https://weather-web-app-32ou.onrender.com/",
    tech: ["Next.js", "Tailwind"],
  },
  {
    id: 3,
    title: "Todo Web App",
    desc: "Product viewer with interactive rotation and annotations.",
    github: "https://github.com/asjadreza/todo-app",
    demo: "https://todo-app-a6r3.onrender.com/",
    tech: ["React.js", "JSX", "useState", "hooks"],
  },
  {
    id: 4,
    title: "Snake-Game",
    desc: "Product viewer with interactive rotation and annotations.",
    github: "https://github.com/asjadreza/Snake-Game/",
    demo: "https://asjadreza.github.io/Snake-Game/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Tic-Tac-Toe",
    desc: "Product viewer with interactive rotation and annotations.",
    github: "https://github.com/asjadreza/tic-tac-toe",
    demo: "https://asjadreza.github.io/tic-tac-toe/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Simon game",
    desc: "Product viewer with interactive rotation and annotations.",
    github: "https://github.com/asjadreza/Simon_game",
    demo: "https://asjadreza.github.io/Simon_game/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function PortfolioPage() {
  // const sectionRef = useRef<HTMLElement | null>(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [sectionInView, setSectionInView] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  // // Detect when the whole Projects section is in view
  // useEffect(() => {
  //   const ref = sectionRef.current;
  //   if (!ref) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setSectionInView(entry.isIntersecting);
  //     },
  //     { threshold: 0.3 }
  //   );

  //   observer.observe(ref);

  //   return () => observer.disconnect();
  // }, []);

  // // Prevent default page scroll when in projects section
  // useEffect(() => {
  //   const handleWheelGlobal = (e: WheelEvent) => {
  //     if (!sectionInView) return;

  //     // If we're at the first project and scrolling up, or
  //     // at the last project and scrolling down, prevent default
  //     if (activeIndex === 0 && e.deltaY < 0) {
  //       // At first project and scrolling up - allow normal scroll
  //       return;
  //     } else if (activeIndex === projects.length - 1 && e.deltaY > 0) {
  //       // At last project and scrolling down - allow normal scroll
  //       return;
  //     } else if (sectionInView) {
  //       // Otherwise, prevent the default scroll in this section
  //       e.preventDefault();
  //     }
  //   };

  //   const sectionElement = sectionRef.current;
  //   if (sectionElement) {
  //     sectionElement.addEventListener("wheel", handleWheelGlobal, {
  //       passive: false,
  //     });
  //   }

  //   return () => {
  //     if (sectionElement) {
  //       sectionElement.removeEventListener("wheel", handleWheelGlobal);
  //     }
  //   };
  // }, [sectionInView, activeIndex]);

  // // Handle scroll to move between projects
  // const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
  //   if (!sectionInView) return;
  //   if (isAnimating) return;

  //   const delta = e.deltaY;

  //   if (Math.abs(delta) < 15) return;

  //   // Check if we should handle the scroll or let it pass through
  //   if (activeIndex === 0 && delta < 0) {
  //     // At first project and scrolling up - let it go to previous section
  //     return;
  //   } else if (activeIndex === projects.length - 1 && delta > 0) {
  //     // At last project and scrolling down - let it go to next section
  //     return;
  //   }

  //   // Block default page scroll while switching cards
  //   e.preventDefault();
  //   e.stopPropagation();

  //   setIsAnimating(true);

  //   setActiveIndex((prev) => {
  //     if (delta > 0) {
  //       // Scroll down → next
  //       return prev < projects.length - 1 ? prev + 1 : prev;
  //     } else {
  //       // Scroll up → previous
  //       return prev > 0 ? prev - 1 : prev;
  //     }
  //   });

  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 650);
  // };

  // // Detect when the whole Projects section is in view
  // useEffect(() => {
  //   const ref = sectionRef.current;
  //   if (!ref) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setSectionInView(entry.isIntersecting);
  //     },
  //     { threshold: 0.3 }
  //   );

  //   observer.observe(ref);

  //   return () => observer.disconnect();
  // }, []);

  // // Handle wheel events globally when section is in view
  // useEffect(() => {
  //   const handleWheelGlobal = (e: WheelEvent) => {
  //     if (!sectionInView) return;
  //     if (isAnimating) return;

  //     const delta = e.deltaY;

  //     if (Math.abs(delta) < 15) return;

  //     // Check if we're at the boundaries
  //     if (activeIndex === 0 && delta < 0) {
  //       // At first project and scrolling up - let it go to previous section
  //       return;
  //     } else if (activeIndex === projects.length - 1 && delta > 0) {
  //       // At last project and scrolling down - let it go to next section
  //       return;
  //     }

  //     // Prevent default scroll behavior when cycling through projects
  //     e.preventDefault();
  //     e.stopPropagation();

  //     setIsAnimating(true);

  //     setActiveIndex((prev) => {
  //       if (delta > 0) {
  //         // Scroll down → next
  //         return prev < projects.length - 1 ? prev + 1 : prev;
  //       } else {
  //         // Scroll up → previous
  //         return prev > 0 ? prev - 1 : prev;
  //       }
  //     });

  //     setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 650);
  //   };

  //   // Add event listener to the window for global scroll capture
  //   window.addEventListener("wheel", handleWheelGlobal, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheelGlobal);
  //   };
  // }, [sectionInView, activeIndex, isAnimating]);

  // // Optional: Add keyboard navigation support
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (!sectionInView) return;
  //     if (isAnimating) return;

  //     if (e.key === "ArrowDown" || e.key === "ArrowRight") {
  //       e.preventDefault();
  //       setActiveIndex((prev) => {
  //         if (prev < projects.length - 1) {
  //           setIsAnimating(true);
  //           setTimeout(() => setIsAnimating(false), 650);
  //           return prev + 1;
  //         }
  //         return prev;
  //       });
  //     } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
  //       e.preventDefault();
  //       setActiveIndex((prev) => {
  //         if (prev > 0) {
  //           setIsAnimating(true);
  //           setTimeout(() => setIsAnimating(false), 650);
  //           return prev - 1;
  //         }
  //         return prev;
  //       });
  //     }
  //   };

  //   if (sectionInView) {
  //     window.addEventListener("keydown", handleKeyDown);
  //   }

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [sectionInView, isAnimating]);



  // const sectionRef = useRef<HTMLElement | null>(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [sectionInView, setSectionInView] = useState(false);
  // const [isAnimating, setIsAnimating] = useState(false);

  // // 1. Detect In-View AND Direction of Entry
  // useEffect(() => {
  //   const ref = sectionRef.current;
  //   if (!ref) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setSectionInView(entry.isIntersecting);

  //       if (entry.isIntersecting) {
  //         // Logic: Check the bounding client rect relative to the viewport
  //         // If boundingClientRect.top is negative, it means the top of the element 
  //         // is above the viewport, so we are scrolling UP from the bottom.
  //         if (entry.boundingClientRect.top < 0) {
  //           setActiveIndex(projects.length - 1);
  //         } else {
  //           // Otherwise, we are scrolling DOWN from the top.
  //           setActiveIndex(0);
  //         }
  //       }
  //     },
  //     { threshold: 0.4 } // Increased slightly to ensure user is "committed" to the section
  //   );

  //   observer.observe(ref);

  //   return () => observer.disconnect();
  // }, []);

  // // 2. Handle Wheel Events
  // useEffect(() => {
  //   const handleWheelGlobal = (e: WheelEvent) => {
  //     if (!sectionInView) return;

  //     // Small threshold to ignore tiny trackpad jitters
  //     if (Math.abs(e.deltaY) < 10) return;

  //     const delta = e.deltaY;
      
  //     // BOUNDARY CHECK:
  //     // If at FIRST project and scrolling UP -> Let browser handle it (leave section)
  //     if (activeIndex === 0 && delta < 0) return;
      
  //     // If at LAST project and scrolling DOWN -> Let browser handle it (leave section)
  //     if (activeIndex === projects.length - 1 && delta > 0) return;

  //     // If we are here, we are "locked" in the project cycle.
  //     e.preventDefault();
  //     e.stopPropagation();

  //     // Optional: Snap section to center if the user tries to scroll "inside" it
  //     // This prevents the section from being half-cut-off while cycling projects
  //     if (sectionRef.current) {
  //       sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }

  //     if (isAnimating) return;

  //     setIsAnimating(true);

  //     setActiveIndex((prev) => {
  //       if (delta > 0) {
  //         // Scroll Down -> Next Project
  //         return Math.min(prev + 1, projects.length - 1);
  //       } else {
  //         // Scroll Up -> Previous Project
  //         return Math.max(prev - 1, 0);
  //       }
  //     });

  //     // Animation cooldown
  //     setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 650);
  //   };

  //   window.addEventListener("wheel", handleWheelGlobal, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheelGlobal);
  //   };
  // }, [sectionInView, activeIndex, isAnimating]);

  // // 3. Keyboard Navigation (Unchanged mostly, but added boundaries)
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (!sectionInView) return;
  //     if (isAnimating) return;

  //     if (e.key === "ArrowDown" || e.key === "ArrowRight") {
  //       if (activeIndex < projects.length - 1) {
  //         e.preventDefault(); // Only prevent default if we have somewhere to go
  //         setIsAnimating(true);
  //         setActiveIndex((prev) => prev + 1);
  //         setTimeout(() => setIsAnimating(false), 650);
  //       }
  //     } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
  //       if (activeIndex > 0) {
  //         e.preventDefault();
  //         setIsAnimating(true);
  //         setActiveIndex((prev) => prev - 1);
  //         setTimeout(() => setIsAnimating(false), 650);
  //       }
  //     }
  //   };

  //   if (sectionInView) {
  //     window.addEventListener("keydown", handleKeyDown);
  //   }

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [sectionInView, isAnimating, activeIndex]);





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
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      if (isAnimating) return;

      // --- LOGIC CHANGE START ---
      // Instead of checking delta directly, add to our accumulator.
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

      <section id="#skills" className="max-w-7xl mx-auto px-6 py-12">
        <Skills />
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-6 py-12">
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            fontFamily: "'Poppins', sans-serif",
            borderBottom: "1px solid white",
            display: "inline-block",
          }}
        >
          Experience
        </Typography>

        {/* <span className="text-2xl font-semibold text-slate-100 border-b shrink-0">
            Experience
          </span> */}

        {/* <div className="text-sm flex items-center font-medium border-b border-slate-500 -mt-3.5"></div> */}

        <ExperienceTimeline />
      </section>

    <section
      id="projects"
      ref={sectionRef}
      className="max-w-5xl mx-auto px-6 py-16 flex items-center justify-center scroll-mt-10"
    >
      <div className="w-full max-w-3xl relative h-[260px] md:h-[300px]">
        {projects.map((p, index) => {
          const isActive = index === activeIndex;
          const isBefore = index < activeIndex;

          return (
            <a
              key={p.id}
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group absolute inset-0 glass rounded-xl border border-white/10 shadow-md
                p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                transform
                ${
                  isActive
                    ? "opacity-100 translate-x-0 pointer-events-auto z-10"
                    : isBefore
                    ? "opacity-0 -translate-x-1/3 pointer-events-none z-0"
                    : "opacity-0 translate-x-1/3 pointer-events-none z-0"
                }
              `}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                    {p.title}
                  </h3>
                  <div className="text-sm text-slate-400 mt-1">UI / Frontend</div>
                </div>

                <div className="flex gap-4 text-sm">
                  <span className="text-slate-400">Code</span>
                  <span className="text-blue-400">Live Demo →</span>
                </div>
              </div>

              <p className="text-slate-300 mt-4 text-sm md:text-base group-hover:text-slate-200 transition-colors">
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
            </a>
          );
        })}

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-slate-500 text-center w-full">
          <div>
            Project {activeIndex + 1} of {projects.length}
          </div>
          {activeIndex === 0 && (
            <div className="mt-1 opacity-50">Scroll Up to previous section</div>
          )}
          {activeIndex === projects.length - 1 && (
            <div className="mt-1 opacity-50">Scroll Down to next section</div>
          )}
        </div>
      </div>
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
