import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-8 py-12 px-6  md:flex-row md:justify-around md:gap-12 md:py-16 lg:gap-24"
    >
      <div className="text-center md:text-left md:flex-1">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl underline">
          About
        </h2>
        <p className="text-gray-600 mt-4 px-4 md:px-0 md:text-lg lg:text-xl max-w-2xl">
          Hello, I&#39;m<strong> Mustapha Jlem!</strong> I&#39;m a Software
          Engineering student who enjoys coding and creating exciting projects.
          With a strong emphasis on full-stack web development, particularly
          with new frameworks and technologies, I like developing efficient and
          user-friendly solutions.
        </p>
        <p className="text-gray-600 mt-4 px-4 md:px-0 md:text-lg lg:text-xl max-w-2xl">
          When I&#39;m not coding, you may find me visiting new places, reading
          tech blogs, or trying out new hobbies. I&#39;m constantly ready to
          learn new things and interact with like-minded individuals. Let&#39;s
          work together to create something fantastic!
        </p>
      </div>
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1em"
          viewBox="0 0 640 512"
          className="absolute inset-0 w-full h-full object-cover"
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
