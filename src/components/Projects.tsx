// import { useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Beatdrop",
//     desc: "Real-time analytics dashboard with dynamic charts and filters.",
//     github: "http://github.com/asjadreza/fe-beatdrop-prod",
//     demo: "https://fe-beatdrop-prod.vercel.app/",
//     tech: ["React", "D3", "Node"],
//   },
//   {
//     id: 2,
//     title: "Weather-Web-App",
//     desc: "Pixel-perfect components, accessible, themeable.",
//     github: "https://github.com/asjadreza/WeatherWebApp",
//     demo: "https://weather-web-app-32ou.onrender.com/",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 3,
//     title: "Todo Web App",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/todo-app",
//     demo: "https://todo-app-a6r3.onrender.com/",
//     tech: ["React.js", "JSX", "useState", "hooks"],
//   },
//   {
//     id: 4,
//     title: "Snake-Game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Snake-Game/",
//     demo: "https://asjadreza.github.io/Snake-Game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Tic-Tac-Toe",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/tic-tac-toe",
//     demo: "https://asjadreza.github.io/tic-tac-toe/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 6,
//     title: "Simon game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Simon_game",
//     demo: "https://asjadreza.github.io/Simon_game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export const Projects = () => {
//   const [showAll, setShowAll] = useState(false);
//   const displayedProjects = showAll ? projects : projects.slice(0, 3);

//   return (
//     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((p) => (
//         <a
//           key={p.id}
//           className="group block rounded-xl glass p-5 border border-white/6 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden relative"
//           href="#"
//         >
//           {/* Zoom effect background overlay */}
//           <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 scale-0 group-hover:scale-100" />

//           <div className="relative z-10 transition-transform duration-500 group-hover:scale-95">
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold">{p.title}</h3>
//               <div className="text-xs text-slate-400">UI / Frontend</div>
//             </div>

//             <p className="text-slate-300 mt-3 text-sm">{p.desc}</p>

//             <div className="mt-4 flex flex-wrap gap-2">
//               {p.tech.map((t) => (
//                 <span
//                   key={t}
//                   className="text-xs px-2 py-1 rounded-md bg-white/4"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// "use client";

// import { useEffect, useRef, useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Beatdrop",
//     desc: "Real-time analytics dashboard with dynamic charts and filters.",
//     github: "http://github.com/asjadreza/fe-beatdrop-prod",
//     demo: "https://fe-beatdrop-prod.vercel.app/",
//     tech: ["React", "D3", "Node"],
//   },
//   {
//     id: 2,
//     title: "Weather-Web-App",
//     desc: "Pixel-perfect components, accessible, themeable.",
//     github: "https://github.com/asjadreza/WeatherWebApp",
//     demo: "https://weather-web-app-32ou.onrender.com/",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 3,
//     title: "Todo Web App",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/todo-app",
//     demo: "https://todo-app-a6r3.onrender.com/",
//     tech: ["React.js", "JSX", "useState", "hooks"],
//   },
//   {
//     id: 4,
//     title: "Snake-Game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Snake-Game/",
//     demo: "https://asjadreza.github.io/Snake-Game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Tic-Tac-Toe",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/tic-tac-toe",
//     demo: "https://asjadreza.github.io/tic-tac-toe/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 6,
//     title: "Simon game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Simon_game",
//     demo: "https://asjadreza.github.io/Simon_game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export const Projects = () => {
//   const [visibleIndices, setVisibleIndices] = useState<number[]>([0, 1, 2]); // First 3 are visible initially
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const sectionTop = sectionRef.current.offsetTop;
//       const sectionHeight = sectionRef.current.offsetHeight;
//       const scrollY = window.scrollY + window.innerHeight;

//       // Calculate how far we've scrolled into the section (0 to 1)
//       const scrollProgress = Math.min(
//         Math.max((scrollY - sectionTop) / sectionHeight, 0),
//         1
//       );

//       // Determine which projects should be visible based on scroll progress
//       if (scrollProgress > 0.2 && !visibleIndices.includes(3)) {
//         setVisibleIndices(prev => [...prev, 3]);
//       }
//       if (scrollProgress > 0.4 && !visibleIndices.includes(4)) {
//         setVisibleIndices(prev => [...prev, 4]);
//       }
//       if (scrollProgress > 0.6 && !visibleIndices.includes(5)) {
//         setVisibleIndices(prev => [...prev, 5]);
//       }
//     };

//     // Use IntersectionObserver for each project card individually
//     const observers: IntersectionObserver[] = [];

//     projectRefs.current.forEach((ref, index) => {
//       if (ref && index >= 3) { // Only observe hidden projects (4th, 5th, 6th)
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting && !visibleIndices.includes(index)) {
//               // Add staggered reveal based on which project is visible
//               setTimeout(() => {
//                 setVisibleIndices(prev => [...prev, index]);
//               }, (index - 3) * 200); // Stagger the animation
//             }
//           },
//           {
//             threshold: 0.3,
//             rootMargin: "0px 0px -50px 0px"
//           }
//         );
//         observer.observe(ref);
//         observers.push(observer);
//       }
//     });

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Initial check

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observers.forEach(observer => observer.disconnect());
//     };
//   }, [visibleIndices]);

//   return (
//     <section id="projects" ref={sectionRef} className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold">Selected Projects</h2>
//       <p className="text-slate-400 mt-2">
//         A few projects that show my approach to UI, animation and performance.
//       </p>

//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((p, index) => {
//           const isVisible = visibleIndices.includes(index);

//           return (
//             <a
//               key={p.id}
//               ref={el => projectRefs.current[index] = el}
//               href={p.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`group block rounded-xl glass p-5 border border-white/6 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden relative transform transition-all duration-700 ${
//                 isVisible
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 translate-x-10"
//               }`}
//               style={{
//                 transitionDelay: index >= 3 ? `${(index - 3) * 150}ms` : "0ms",
//               }}
//             >
//               {/* Zoom effect background overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 scale-0 group-hover:scale-100" />

//               <div className="relative z-10 transition-transform duration-500 group-hover:scale-95">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-semibold">{p.title}</h3>
//                   <div className="text-xs text-slate-400">UI / Frontend</div>
//                 </div>

//                 <p className="text-slate-300 mt-3 text-sm">{p.desc}</p>

//                 <div className="flex items-center justify-between mt-4">
//                   <div className="flex flex-wrap gap-2">
//                     {p.tech.map((t) => (
//                       <span
//                         key={t}
//                         className="text-xs px-2 py-1 rounded-md bg-white/4"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-slate-400 hover:text-white ml-2"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </a>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// "use client";

// import { useEffect, useRef, useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Beatdrop",
//     desc: "Real-time analytics dashboard with dynamic charts and filters.",
//     github: "http://github.com/asjadreza/fe-beatdrop-prod",
//     demo: "https://fe-beatdrop-prod.vercel.app/",
//     tech: ["React", "D3", "Node"],
//   },
//   {
//     id: 2,
//     title: "Weather-Web-App",
//     desc: "Pixel-perfect components, accessible, themeable.",
//     github: "https://github.com/asjadreza/WeatherWebApp",
//     demo: "https://weather-web-app-32ou.onrender.com/",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 3,
//     title: "Todo Web App",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/todo-app",
//     demo: "https://todo-app-a6r3.onrender.com/",
//     tech: ["React.js", "JSX", "useState", "hooks"],
//   },
//   {
//     id: 4,
//     title: "Snake-Game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Snake-Game/",
//     demo: "https://asjadreza.github.io/Snake-Game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Tic-Tac-Toe",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/tic-tac-toe",
//     demo: "https://asjadreza.github.io/tic-tac-toe/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 6,
//     title: "Simon game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Simon_game",
//     demo: "https://asjadreza.github.io/Simon_game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export const Projects = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isSectionVisible, setIsSectionVisible] = useState(false);
//   const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Section is in view
//           setIsSectionVisible(true);
//           // Start revealing projects one by one
//           revealProjectsOneByOne();
//         } else {
//           // Section is out of view
//           setIsSectionVisible(false);
//           setVisibleProjects([]);
//         }
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of section is visible
//         rootMargin: "-50px 0px -50px 0px",
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const revealProjectsOneByOne = () => {
//     setVisibleProjects([]); // Reset first
//     projects.forEach((_, index) => {
//       setTimeout(() => {
//         setVisibleProjects(prev => [...prev, index]);
//       }, index * 200); // Stagger by 200ms for each project
//     });
//   };

//   // Reset animation when section becomes visible again
//   useEffect(() => {
//     if (isSectionVisible) {
//       revealProjectsOneByOne();
//     }
//   }, [isSectionVisible]);

//   return (
//     <section id="projects" ref={sectionRef} className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold">Selected Projects</h2>
//       <p className="text-slate-400 mt-2">
//         A few projects that show my approach to UI, animation and performance.
//       </p>

//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((p, index) => {
//           const isVisible = visibleProjects.includes(index);

//           return (
//             <div
//               key={p.id}
//               className={`relative overflow-hidden rounded-xl ${
//                 isVisible ? "animate-pop-in" : "opacity-0"
//               }`}
//               style={{
//                 animationDelay: `${index * 200}ms`,
//                 animationFillMode: "both",
//               }}
//             >
//               <a
//                 href={p.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group block glass p-5 border border-white/6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative"
//               >
//                 {/* Gradient overlay for pop effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 scale-0 group-hover:scale-100" />

//                 <div className="relative z-10">
//                   <div classN ame="flex items-center justify-between">
//                     <h3 className="font-semibold group-hover:text-blue-300 transition-colors duration-300">
//                       {p.title}
//                     </h3>
//                     <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
//                       UI / Frontend
//                     </div>
//                   </div>

//                   <p className="text-slate-300 mt-3 text-sm group-hover:text-slate-200 transition-colors duration-300">
//                     {p.desc}
//                   </p>

//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex flex-wrap gap-2">
//                       {p.tech.map((t) => (
//                         <span
//                           key={t}
//                           className="text-xs px-2 py-1 rounded-md bg-white/4 group-hover:bg-white/8 transition-colors duration-300"
//                         >
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-slate-400 hover:text-white ml-2 transition-colors duration-300"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <svg
//                         className="w-5 h-5"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           );
//         })}
//       </div>

//       {/* Add the animation styles */}
//       <style jsx>{`
//         @keyframes popIn {
//           0% {
//             opacity: 0;
//             transform: scale(0.8);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.05);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .animate-pop-in {
//           animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// "use client";

// import { useEffect, useRef, useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Beatdrop",
//     desc: "Real-time analytics dashboard with dynamic charts and filters.",
//     github: "http://github.com/asjadreza/fe-beatdrop-prod",
//     demo: "https://fe-beatdrop-prod.vercel.app/",
//     tech: ["React", "D3", "Node"],
//   },
//   {
//     id: 2,
//     title: "Weather-Web-App",
//     desc: "Pixel-perfect components, accessible, themeable.",
//     github: "https://github.com/asjadreza/WeatherWebApp",
//     demo: "https://weather-web-app-32ou.onrender.com/",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 3,
//     title: "Todo Web App",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/todo-app",
//     demo: "https://todo-app-a6r3.onrender.com/",
//     tech: ["React.js", "JSX", "useState", "hooks"],
//   },
//   {
//     id: 4,
//     title: "Snake-Game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Snake-Game/",
//     demo: "https://asjadreza.github.io/Snake-Game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Tic-Tac-Toe",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/tic-tac-toe",
//     demo: "https://asjadreza.github.io/tic-tac-toe/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 6,
//     title: "Simon game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Simon_game",
//     demo: "https://asjadreza.github.io/Simon_game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export const Projects = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     // Create an observer for each project
//     projectRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting && !visibleProjects.includes(index)) {
//               // Project comes into view - reveal it
//               setVisibleProjects(prev => [...prev, index]);
//             } else if (!entry.isIntersecting && visibleProjects.includes(index)) {
//               // Project goes out of view - hide it (optional)
//               setVisibleProjects(prev => prev.filter(i => i !== index));
//             }
//           },
//           {
//             threshold: 0.2, // Trigger when 20% of project is visible
//             rootMargin: "0px 0px -100px 0px", // Trigger slightly before it enters viewport
//           }
//         );

//         observer.observe(ref);
//         observers.push(observer);
//       }
//     });

//     return () => {
//       observers.forEach(observer => observer.disconnect());
//     };
//   }, [visibleProjects]);

//   return (
//     <section id="projects" ref={sectionRef} className="max-w-4xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold">Selected Projects</h2>
//       <p className="text-slate-400 mt-2">
//         A few projects that show my approach to UI, animation and performance.
//       </p>

//       {/* Single column layout with scroll-based reveal */}
//       <div className="mt-6 space-y-8">
//         {projects.map((p, index) => {
//           const isVisible = visibleProjects.includes(index);

//           return (
//             <div
//               key={p.id}
//               ref={el => projectRefs.current[index] = el}
//               className="min-h-[200px]"
//             >
//               <a
//                 href={p.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`group block glass p-6 border border-white/6 shadow-sm hover:shadow-md transition-all duration-700 overflow-hidden relative transform ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{
//                   transitionDelay: "200ms", // Slight delay for smoother reveal
//                 }}
//               >
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />

//                 <div className="relative z-10">
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                     <div>
//                       <h3 className="font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
//                         {p.title}
//                       </h3>
//                       <div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-300">
//                         UI / Frontend
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <a
//                         href={p.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-1 text-sm"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <svg
//                           className="w-4 h-4"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                         </svg>
//                         Code
//                       </a>
//                       <a
//                         href={p.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Live Demo →
//                       </a>
//                     </div>
//                   </div>

//                   <p className="text-slate-300 mt-3 text-sm group-hover:text-slate-200 transition-colors duration-300">
//                     {p.desc}
//                   </p>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {p.tech.map((t) => (
//                       <span
//                         key={t}
//                         className="text-xs px-3 py-1 rounded-md bg-white/4 group-hover:bg-white/8 transition-colors duration-300"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// "use client";

// import { useEffect, useRef, useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Beatdrop",
//     desc: "Real-time analytics dashboard with dynamic charts and filters.",
//     github: "http://github.com/asjadreza/fe-beatdrop-prod",
//     demo: "https://fe-beatdrop-prod.vercel.app/",
//     tech: ["React", "D3", "Node"],
//   },
//   {
//     id: 2,
//     title: "Weather-Web-App",
//     desc: "Pixel-perfect components, accessible, themeable.",
//     github: "https://github.com/asjadreza/WeatherWebApp",
//     demo: "https://weather-web-app-32ou.onrender.com/",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 3,
//     title: "Todo Web App",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/todo-app",
//     demo: "https://todo-app-a6r3.onrender.com/",
//     tech: ["React.js", "JSX", "useState", "hooks"],
//   },
//   {
//     id: 4,
//     title: "Snake-Game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Snake-Game/",
//     demo: "https://asjadreza.github.io/Snake-Game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Tic-Tac-Toe",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/tic-tac-toe",
//     demo: "https://asjadreza.github.io/tic-tac-toe/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 6,
//     title: "Simon game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Simon_game",
//     demo: "https://asjadreza.github.io/Simon_game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export const Projects = () => {
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     projectRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting && !visibleProjects.includes(index)) {
//               setVisibleProjects((prev) => [...prev, index]);
//             } else if (!entry.isIntersecting && visibleProjects.includes(index)) {
//               setVisibleProjects((prev) => prev.filter((i) => i !== index));
//             }
//           },
//           { threshold: 0.5 }
//         );

//         observer.observe(ref);
//         observers.push(observer);
//       }
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, [visibleProjects]);

//   return (
//     <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
//       {/* Scroll snap container */}
//       <div className="mt-8 snap-y snap-mandatory scroll-smooth">
//         {projects.map((p, index) => {
//           const isVisible = visibleProjects.includes(index);

//           return (
//             <div
//               key={p.id}
//               ref={(el) => (projectRefs.current[index] = el)}
//               className="min-h-screen snap-start flex items-start pt-16 px-4"
//             >
//               <a
//                 href={p.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`group block glass w-full max-w-3xl p-8 rounded-xl border border-white/10 shadow-md transition-all duration-700 transform ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: "250ms" }}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div>
//                     <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
//                       {p.title}
//                     </h3>
//                     <div className="text-sm text-slate-400 mt-1">
//                       UI / Frontend
//                     </div>
//                   </div>

//                   <div className="flex gap-4 text-sm">
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-slate-400 hover:text-white transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Code
//                     </a>
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-400 hover:text-blue-300 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Live Demo →
//                     </a>
//                   </div>
//                 </div>

//                 <p className="text-slate-300 mt-4 text-sm group-hover:text-slate-200 transition-colors">
//                   {p.desc}
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs px-3 py-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// "use client";

// import { useEffect, useRef, useState } from "react";

// const projects = [
//   {
//     id: 1,
//     title: "Beatdrop",
//     desc: "Real-time analytics dashboard with dynamic charts and filters.",
//     github: "http://github.com/asjadreza/fe-beatdrop-prod",
//     demo: "https://fe-beatdrop-prod.vercel.app/",
//     tech: ["React", "D3", "Node"],
//   },
//   {
//     id: 2,
//     title: "Weather-Web-App",
//     desc: "Pixel-perfect components, accessible, themeable.",
//     github: "https://github.com/asjadreza/WeatherWebApp",
//     demo: "https://weather-web-app-32ou.onrender.com/",
//     tech: ["Next.js", "Tailwind"],
//   },
//   {
//     id: 3,
//     title: "Todo Web App",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/todo-app",
//     demo: "https://todo-app-a6r3.onrender.com/",
//     tech: ["React.js", "JSX", "useState", "hooks"],
//   },
//   {
//     id: 4,
//     title: "Snake-Game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Snake-Game/",
//     demo: "https://asjadreza.github.io/Snake-Game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 5,
//     title: "Tic-Tac-Toe",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/tic-tac-toe",
//     demo: "https://asjadreza.github.io/tic-tac-toe/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
//   {
//     id: 6,
//     title: "Simon game",
//     desc: "Product viewer with interactive rotation and annotations.",
//     github: "https://github.com/asjadreza/Simon_game",
//     demo: "https://asjadreza.github.io/Simon_game/",
//     tech: ["HTML", "CSS", "JavaScript"],
//   },
// ];

// export const Projects = () => {
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

//   useEffect(() => {
//     const observers: IntersectionObserver[] = [];

//     projectRefs.current.forEach((ref, index) => {
//       if (ref) {
//         const observer = new IntersectionObserver(
//           ([entry]) => {
//             if (entry.isIntersecting && !visibleProjects.includes(index)) {
//               setVisibleProjects((prev) => [...prev, index]);
//             } else if (
//               !entry.isIntersecting &&
//               visibleProjects.includes(index)
//             ) {
//               setVisibleProjects((prev) => prev.filter((i) => i !== index));
//             }
//           },
//           { threshold: 0.5 }
//         );

//         observer.observe(ref);
//         observers.push(observer);
//       }
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, [visibleProjects]);

//   return (
//     <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
//       {/* Scroll snap container - remove snap behavior if not needed */}
//       <div className="space-y-8 md:space-y-12">
//         {projects.map((p, index) => {
//           const isVisible = visibleProjects.includes(index);

//           return (
//             <div
//               key={p.id}
//               ref={(el) => (projectRefs.current[index] = el)}
//               className="flex items-center justify-center min-h-[30vh] md:min-h-[40vh]"
//             >
//               <a
//                 href={p.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`group block glass w-full max-w-3xl p-6 md:p-8 rounded-xl border border-white/10 shadow-md transition-all duration-700 transform ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: "250ms" }}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div>
//                     <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
//                       {p.title}
//                     </h3>
//                     <div className="text-sm text-slate-400 mt-1">
//                       UI / Frontend
//                     </div>
//                   </div>

//                   <div className="flex gap-4 text-sm">
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-slate-400 hover:text-white transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Code
//                     </a>
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-400 hover:text-blue-300 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Live Demo →
//                     </a>
//                   </div>
//                 </div>

//                 <p className="text-slate-300 mt-4 text-sm md:text-base group-hover:text-slate-200 transition-colors">
//                   {p.desc}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs px-3 py-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };



"use client";

import { useEffect, useRef, useState } from "react";

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

// export const Projects = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [sectionInView, setSectionInView] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Detect when the whole Projects section is in view
//   useEffect(() => {
//     const ref = sectionRef.current;
//     if (!ref) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setSectionInView(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(ref);

//     return () => observer.disconnect();
//   }, []);

//   // Handle scroll to move between projects
//   const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
//     if (!sectionInView) return;
//     if (isAnimating) return;

//     const delta = e.deltaY;

//     // Avoid tiny scroll noise
//     if (Math.abs(delta) < 15) return;

//     // Prevent page scroll while we’re changing cards
//     e.preventDefault();
//     e.stopPropagation();

//     setIsAnimating(true);

//     setActiveIndex((prev) => {
//       if (delta > 0) {
//         // Scroll down → next project
//         return prev < projects.length - 1 ? prev + 1 : prev;
//       } else {
//         // Scroll up → previous project
//         return prev > 0 ? prev - 1 : prev;
//       }
//     });

//     // Lock scroll changes for animation duration
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 650); // slightly more than CSS duration
//   };

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="max-w-5xl mx-auto px-6 py-16 min-h-screen flex items-center justify-center"
//     >
//       <div
//         className="w-full max-w-3xl relative h-[260px] md:h-[300px]"
//         onWheel={handleWheel}
//       >
//         {projects.map((p, index) => {
//           const isActive = index === activeIndex;
//           const isBefore = index < activeIndex;

//           return (
//             <a
//               key={p.id}
//               href={p.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`
//                 group absolute inset-0 glass rounded-xl border border-white/10 shadow-md
//                 p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
//                 transform
//                 ${isActive
//                   ? "opacity-100 translate-x-0 pointer-events-auto"
//                   : isBefore
//                   ? "opacity-0 -translate-x-1/3 pointer-events-none"
//                   : "opacity-0 translate-x-1/3 pointer-events-none"}
//               `}
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div>
//                   <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
//                     {p.title}
//                   </h3>
//                   <div className="text-sm text-slate-400 mt-1">
//                     UI / Frontend
//                   </div>
//                 </div>

//                 <div className="flex gap-4 text-sm">
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-slate-400 hover:text-white transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Code
//                   </a>
//                   <a
//                     href={p.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-blue-300 transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Live Demo →
//                   </a>
//                 </div>
//               </div>

//               <p className="text-slate-300 mt-4 text-sm md:text-base group-hover:text-slate-200 transition-colors">
//                 {p.desc}
//               </p>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-3 py-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </a>
//           );
//         })}

//         {/* Small hint text at bottom (optional) */}
//         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-500">
//           Scroll to browse projects ({activeIndex + 1}/{projects.length})
//         </div>
//       </div>
//     </section>
//   );
// };


// export const Projects = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [sectionInView, setSectionInView] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Detect when the whole Projects section is in view
//   useEffect(() => {
//     const ref = sectionRef.current;
//     if (!ref) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setSectionInView(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(ref);

//     return () => observer.disconnect();
//   }, []);

//   // Handle scroll to move between projects
//   // const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
//   //   if (!sectionInView) return;
//   //   if (isAnimating) return;

//   //   const delta = e.deltaY;

//   //   if (Math.abs(delta) < 15) return;

//   //   // Block default page scroll while switching cards
//   //   e.preventDefault();
//   //   e.stopPropagation();

//   //   setIsAnimating(true);

//   //   setActiveIndex((prev) => {
//   //     if (delta > 0) {
//   //       // Scroll down → next
//   //       return prev < projects.length - 1 ? prev + 1 : prev;
//   //     } else {
//   //       // Scroll up → previous
//   //       return prev > 0 ? prev - 1 : prev;
//   //     }
//   //   });

//   //   setTimeout(() => {
//   //     setIsAnimating(false);
//   //   }, 650);
//   // };

//   const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
//   const isLast = activeIndex === projects.length - 1;
//   const isFirst = activeIndex === 0;

//   // If we haven't reached the last project while scrolling down → block page scroll
//   if (e.deltaY > 0 && !isLast) {
//     e.preventDefault();
//     e.stopPropagation();
//   }

//   // If we haven't reached the first project while scrolling up → block page scroll
//   if (e.deltaY < 0 && !isFirst) {
//     e.preventDefault();
//     e.stopPropagation();
//   }

//   // If currently animating, prevent action
//   if (isAnimating) return;

//   const delta = e.deltaY;
//   if (Math.abs(delta) < 15) return;

//   // Only animate if moving within range
//   if ((delta > 0 && !isLast) || (delta < 0 && !isFirst)) {
//     setIsAnimating(true);

//     setActiveIndex((prev) => {
//       if (delta > 0) return Math.min(prev + 1, projects.length - 1);
//       else return Math.max(prev - 1, 0);
//     });

//     setTimeout(() => setIsAnimating(false), 650);
//   }
// };


//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="max-w-5xl mx-auto px-6 py-16 flex items-center justify-center"
//       onWheel={handleWheel} // ⬅️ moved here
//     >
//       <div className="w-full max-w-3xl relative h-[260px] md:h-[300px]">
//         {projects.map((p, index) => {
//           const isActive = index === activeIndex;
//           const isBefore = index < activeIndex;

//           return (
//             <a
//               key={p.id}
//               href={p.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`
//                 group absolute inset-0 glass rounded-xl border border-white/10 shadow-md
//                 p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
//                 transform
//                 ${
//                   isActive
//                     ? "opacity-100 translate-x-0 pointer-events-auto"
//                     : isBefore
//                     ? "opacity-0 -translate-x-1/3 pointer-events-none"
//                     : "opacity-0 translate-x-1/3 pointer-events-none"
//                 }
//               `}
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div>
//                   <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
//                     {p.title}
//                   </h3>
//                   <div className="text-sm text-slate-400 mt-1">
//                     UI / Frontend
//                   </div>
//                 </div>

//                 <div className="flex gap-4 text-sm">
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-slate-400 hover:text-white transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Code
//                   </a>
//                   <a
//                     href={p.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:text-blue-300 transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     Live Demo →
//                   </a>
//                 </div>
//               </div>

//               <p className="text-slate-300 mt-4 text-sm md:text-base group-hover:text-slate-200 transition-colors">
//                 {p.desc}
//               </p>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-3 py-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </a>
//           );
//         })}

//         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-500">
//           Scroll to browse projects ({activeIndex + 1}/{projects.length})
//         </div>
//       </div>
//     </section>
//   );
// };




// export const Projects = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [sectionInView, setSectionInView] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Detect when the whole Projects section is in view
//   useEffect(() => {
//     const ref = sectionRef.current;
//     if (!ref) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setSectionInView(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(ref);

//     return () => observer.disconnect();
//   }, []);

//   // Prevent default page scroll when in projects section
//   useEffect(() => {
//     const handleWheelGlobal = (e: WheelEvent) => {
//       if (!sectionInView) return;
      
//       // If we're at the first project and scrolling up, or
//       // at the last project and scrolling down, prevent default
//       if (activeIndex === 0 && e.deltaY < 0) {
//         // At first project and scrolling up - allow normal scroll
//         return;
//       } else if (activeIndex === projects.length - 1 && e.deltaY > 0) {
//         // At last project and scrolling down - allow normal scroll
//         return;
//       } else if (sectionInView) {
//         // Otherwise, prevent the default scroll in this section
//         e.preventDefault();
//       }
//     };

//     const sectionElement = sectionRef.current;
//     if (sectionElement) {
//       sectionElement.addEventListener('wheel', handleWheelGlobal, { passive: false });
//     }

//     return () => {
//       if (sectionElement) {
//         sectionElement.removeEventListener('wheel', handleWheelGlobal);
//       }
//     };
//   }, [sectionInView, activeIndex]);

//   // Handle scroll to move between projects
//   const handleWheel = (e: React.WheelEvent<HTMLElement>) => {
//     if (!sectionInView) return;
//     if (isAnimating) return;

//     const delta = e.deltaY;

//     if (Math.abs(delta) < 15) return;

//     // Check if we should handle the scroll or let it pass through
//     if (activeIndex === 0 && delta < 0) {
//       // At first project and scrolling up - let it go to previous section
//       return;
//     } else if (activeIndex === projects.length - 1 && delta > 0) {
//       // At last project and scrolling down - let it go to next section
//       return;
//     }

//     // Block default page scroll while switching cards
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

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className="max-w-7xl mx-auto px-6 py-16 flex items-center justify-center"
//       onWheel={handleWheel}
//     >
      
//     </section>
//   );
// };


//    <section
//         id="projects"
//         ref={sectionRef}
//         className="max-w-7xl mx-auto px-6 py-16 items-center justify-center"
//         onWheel={handleWheel}
//       >
//         <h2 className="text-2xl font-semibold">Selected Projects</h2>
//         <p className="text-slate-400 mt-2">
//           A few projects that show my approach to UI, animation and performance.
//         </p>

//         {/* <Projects />  */}

//         <div className="w-full max-w-3xl relative h-[260px] md:h-[300px]">
//           {projects.map((p, index) => {
//             const isActive = index === activeIndex;
//             const isBefore = index < activeIndex;

//             return (
//               <a
//                 key={p.id}
//                 href={p.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`
//                 group absolute inset-0 glass rounded-xl border border-white/10 shadow-md
//                 p-6 md:p-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
//                 transform
//                 ${
//                   isActive
//                     ? "opacity-100 translate-x-0 pointer-events-auto"
//                     : isBefore
//                     ? "opacity-0 -translate-x-1/3 pointer-events-none"
//                     : "opacity-0 translate-x-1/3 pointer-events-none"
//                 }
//               `}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div>
//                     <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
//                       {p.title}
//                     </h3>
//                     <div className="text-sm text-slate-400 mt-1">
//                       UI / Frontend
//                     </div>
//                   </div>

//                   <div className="flex gap-4 text-sm">
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-slate-400 hover:text-white transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Code
//                     </a>
//                     <a
//                       href={p.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-400 hover:text-blue-300 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Live Demo →
//                     </a>
//                   </div>
//                 </div>

//                 <p className="text-slate-300 mt-4 text-sm md:text-base group-hover:text-slate-200 transition-colors">
//                   {p.desc}
//                 </p>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs px-3 py-1 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </a>
//             );
//           })}

//           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-500">
//             Scroll to browse projects ({activeIndex + 1}/{projects.length})
//             {activeIndex === projects.length - 1 &&
//               " - Scroll down to continue"}
//           </div>
//         </div>
//       </section>



      {/* <section
        id="projects"
        ref={sectionRef}
        className="max-w-5xl mx-auto px-6 py-16 flex items-center justify-center"
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
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : isBefore
                    ? "opacity-0 -translate-x-1/3 pointer-events-none"
                    : "opacity-0 translate-x-1/3 pointer-events-none"
                }
              `}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                      {p.title}
                    </h3>
                    <div className="text-sm text-slate-400 mt-1">
                      UI / Frontend
                    </div>
                  </div>

                  <div className="flex gap-4 text-sm">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo →
                    </a>
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

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs text-slate-500 text-center">
            <div>
              Scroll anywhere to browse projects ({activeIndex + 1}/
              {projects.length})
            </div>
            {activeIndex === projects.length - 1 && (
              <div className="mt-1">
                Scroll down to continue to next section
              </div>
            )}
          </div>
        </div>
      </section> */}

