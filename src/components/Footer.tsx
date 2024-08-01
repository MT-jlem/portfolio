import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6  w-full">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-2">Mustapha Jlem</h2>
          <p className="text-gray-400">&copy; 2024 All rights reserved</p>
        </div>
        <div className="flex justify-center items-center md:items-start md:flex-row">
          <a
            href="#hero"
            className="text-gray-400 hover:text-white mx-2 my-1 md:my-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white mx-2 my-1 md:my-0"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white mx-2 my-1 md:my-0"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white mx-2 my-1 md:my-0"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <a
            href="https://github.com/MT-jlem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.371 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.793-.261.793-.579v-2.17c-3.338.726-4.042-1.417-4.042-1.417-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.203.084 1.836 1.236 1.836 1.236 1.07 1.835 2.806 1.304 3.492.998.108-.775.419-1.305.763-1.606-2.665-.303-5.467-1.333-5.467-5.933 0-1.311.469-2.381 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.956-.266 1.983-.398 3.004-.404 1.021.006 2.048.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.652.243 2.873.119 3.176.77.839 1.235 1.909 1.235 3.22 0 4.61-2.807 5.626-5.479 5.921.432.373.816 1.103.816 2.222v3.293c0 .319.191.694.8.576C20.566 21.797 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://x.com/JlemMustapha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.385-1.83.645-2.825.759a4.92 4.92 0 002.163-2.723 9.86 9.86 0 01-3.127 1.197 4.905 4.905 0 00-8.356 4.463 13.921 13.921 0 01-10.109-5.13 4.822 4.822 0 001.523 6.548 4.92 4.92 0 01-2.224-.616c-.054 2.01 1.392 3.891 3.459 4.309a4.936 4.936 0 01-2.212.084c.623 1.951 2.432 3.377 4.576 3.416A9.867 9.867 0 010 19.54a13.897 13.897 0 007.548 2.213c9.142 0 14.307-7.721 13.995-14.646.963-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mustapha-jlem/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM7.53 20h-3v-9h3v9zM5.98 9.86c-.97 0-1.75-.8-1.75-1.78s.78-1.78 1.75-1.78c.97 0 1.75.8 1.75 1.78s-.78 1.78-1.75 1.78zM20 20h-3v-5.31c0-3.18-3.5-2.94-3.5 0v5.31h-3v-9h3v1.58c1.4-2.57 6.5-2.77 6.5 2.45v5.97z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
