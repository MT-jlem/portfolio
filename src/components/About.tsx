import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-24"
    >
      <div className="max-w-2xl text-center md:flex-1 md:text-left">
        <p className="section-kicker">About me</p>
        <h2 className="section-title mt-2">Curious by default. Practical by design.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Hello, I&#39;m <strong className="font-semibold text-slate-800">Mustapha Jlem.</strong> I’m a software engineer who enjoys building full-stack applications and learning the systems behind them. I care about clear interfaces, sound foundations, and solutions that people can rely on.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Outside of coding, I’m usually exploring new places, reading about technology, or picking up a new hobby. I enjoy collaborating with people who are equally curious and motivated to make something worthwhile.
        </p>
      </div>
      <div className="relative hidden h-56 w-56 shrink-0 items-center justify-center rounded-3xl bg-teal-50 text-teal-700 shadow-sm ring-1 ring-teal-100 md:flex md:h-64 md:w-64 lg:h-72 lg:w-72">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1em"
          viewBox="0 0 640 512"
          className="h-24 w-24"
        >
          <path
            fill="currentColor"
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6m80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3l89.3 89.4l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3"
          />
        </svg>
      </div>
    </section>
  );
}
