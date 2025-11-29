import React from "react";

export const FooterComponent = () => {
  return (
    <div>
      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500">
        © {new Date().getFullYear()} Asjad Reza — Built with ❤️
      </footer>
    </div>
  );
};
