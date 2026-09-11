"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "#main", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#main" onClick={closeMenu} className="text-lg font-bold tracking-tight text-slate-950 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
          Mustapha Jlem<span className="text-teal-700">.</span>
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-600 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="ml-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
            Contact
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600">
                {item.label}
              </Link>
            ))}
            <Link href="#contact" onClick={closeMenu} className="mt-2 rounded-lg bg-teal-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
