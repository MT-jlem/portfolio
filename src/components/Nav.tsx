"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-col justify-around shadow-md md:flex-row">
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
        <ul className="flex flex-col gap-6 items-center w-full md:flex-row md:justify-center md:items-center pt-4 md:pt-0 md:w-auto font-medium">
          <li>
            <Link href="#main" onClick={() => setMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setMenu(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#education" onClick={() => setMenu(false)}>
              Education
            </Link>
          </li>
          <li>
            <Link href="#project" onClick={() => setMenu(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#Contact" onClick={() => setMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
