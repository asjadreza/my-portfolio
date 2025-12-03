import React from "react";

export const Navbar = () => {
  return (
    <div>
      {/* Added fixed positioning, z-index, backdrop blur, and glass effect */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs bg-linear-to-b">
        <div className="max-w-460 mx-auto p-1 flex items-center justify-between">
          <a className="h-auto flex flex-row items-center" href="/">
            <span className="custom-font">Asjad</span>
          </a>

          {/* center/right: simple nav for larger screens */}
          <nav className="hidden md:flex gap-6 items-center text-slate-300">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            {/* resume CTA */}
            <a
              href="#"
              className="ml-4 inline-block px-3 py-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-500 text-white text-sm hover:opacity-90 transition-opacity"
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
        </div>
      </header>
      {/* Add spacing to prevent content from being hidden behind fixed navbar */}
      <div className="h-16"></div>
    </div>
  );
};