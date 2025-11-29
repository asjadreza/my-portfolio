import React from "react";

export const Navbar = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold">
            AR
          </div>
          <div>
            {/* Author name and tagline */}
            <h1 className="font-semibold">Asjad Reza</h1>
            <p className="text-xs text-slate-400 -mt-0.5">
              Frontend Engineer — React · Next.js · Vue
            </p>
          </div>
        </div>

        {/* center/right: simple nav for larger screens */}
        <nav className="hidden md:flex gap-6 items-center text-slate-300">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
          {/* resume CTA */}
          <a
            href="#"
            className="ml-4 inline-block px-3 py-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-500 text-white text-sm"
          >
            Resume
          </a>
        </nav>

        {/* mobile menu button (no behaviour implemented - placeholder) */}
        <button
          className="md:hidden p-2 rounded-md glass"
          aria-label="Open menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-slate-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>
    </div>
  );
};
