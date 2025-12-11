// import React from "react";

// export const Navbar = () => {
//   return (
//     <div>
//       {/* Added fixed positioning, z-index, backdrop blur, and glass effect */}
//       <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs bg-linear-to-b">
//         <div className="max-w-410 mx-auto flex items-center justify-between">
//           <a className="h-auto flex flex-row items-center" href="/">
//             <span className="custom-font">Asjad</span>
//           </a>

//           {/* center/right: simple nav for larger screens */}
//           <nav className="hidden md:flex gap-6 items-center text-slate-300">
//             <a href="#projects" className="hover:text-white transition-colors">
//               Projects
//             </a>
//             <a href="#experience" className="hover:text-white transition-colors">
//               Experience
//             </a>
//             <a href="#contact" className="hover:text-white transition-colors">
//               Contact
//             </a>
//           </nav>

//           {/* mobile menu button (no behaviour implemented - placeholder) */}
//           <button
//             className="md:hidden p-2 rounded-md glass"
//             aria-label="Open menu"
//           >
//             <svg
//               width="22"
//               height="22"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="text-slate-200"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </header>
//       {/* Add spacing to prevent content from being hidden behind fixed navbar */}
//       <div className="h-16"></div>
//     </div>
//   );
// };




"use client";
import React from "react";
import {
  HomeIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
export const Navbar = () => {
  return (
    <div>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs bg-linear-to-b">
        <div className="max-w-410 mx-auto flex items-center md:justify-between justify-center">
          <a className="h-auto flex flex-row items-center" href="/">
            <span className="custom-font">Asjad</span>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-slate-300">
            <a href="#projects" className="hover:text-white transition-colors text-[15px]">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors text-[15px]"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors text-[15px]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* SPACING FIX for desktop */}
      <div className="h-16 md:h-20"></div>

      {/* 🍔 Mobile Floating Menu */}
      <div
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-3
    bg-[#0f0f1a]/70 backdrop-blur-xl rounded-full shadow-lg flex items-center gap-6"
      >
        {/* <a href="/" className="p-2 rounded-full bg-white/10 text-white">
          <HomeIcon className="w-6 h-6" />
        </a> */}

        <a
          href="#projects"
          className="p-2 rounded-full text-slate-300 hover:text-white"
        >
          <BookOpenIcon className="w-6 h-6" />
        </a>

        <a
          href="#experience"
          className="p-2 rounded-full text-slate-300 hover:text-white"
        >
          <BriefcaseIcon className="w-6 h-6" />
        </a>

        <a
          href="#contact"
          className="p-2 rounded-full text-slate-300 hover:text-white"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
