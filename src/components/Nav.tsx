"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <nav className="flex flex-col justify-around shadow-md md:flex-row fixed top-0 left-0 z-10 right-0 bg-white">
      <button
        className="md:hidden absolute top-5 left-5"
        onClick={() => setMenu(!menu)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="flex justify-around items-center h-16  ">
        <h1 className="font-bold text-xl italic font-PlayfairDisplay">
          <Link href="#main">Mustapha Jlem</Link>
        </h1>
      </div>

      <div
        className={`${
          menu ? "block" : "hidden"
        }  responsive-div flex-col items-center bg-white w-screen absolute top-16 left-0 md:justify-center md:w-fit md:static md:flex md:flex-row md:h-auto`}
      >
        <ul className="flex flex-col gap-6 items-center w-full pt-4 font-medium md:flex-row md:justify-center md:items-center md:pt-0 md:w-auto">
          <li className="p-3 hover:bg-slate-100 hover:rounded">
            <Link href="#main" onClick={() => setMenu(false)}>
              Home
            </Link>
          </li>
          <li className="p-3 hover:bg-slate-100 hover:rounded">
            <Link href="#about" onClick={() => setMenu(false)}>
              About
            </Link>
          </li>
          <li className="p-3 hover:bg-slate-100 hover:rounded">
            <Link href="#education" onClick={() => setMenu(false)}>
              Education
            </Link>
          </li>
          <li className="p-3 hover:bg-slate-100 hover:rounded">
            <Link href="#project" onClick={() => setMenu(false)}>
              Projects
            </Link>
          </li>
          <li className="p-3 hover:bg-slate-100 hover:rounded ">
            <Link href="#contact" onClick={() => setMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
