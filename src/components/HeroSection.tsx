import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 p-6 mt-12 md:flex-row md:justify-around md:gap-12 md:p-16 lg:gap-24">
      {/* <div className="relative w-full max-w-m overflow-hidden rounded-full pb-[100%] border-4 border-gray-300 shadow-lg md:w-96 md:h-96"> */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-gray-300 shadow-lg">
        {" "}
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={"profile.jpg"}
          alt="Mustapha Jlem picture"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left md:flex-1">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Hi, I&#39;m Mustapha Jlem
        </h2>
        <p className="text-xl font-semibold text-gray-700 mt-2 md:text-2xl lg:text-3xl">
          I&#39;m a Software Engineer
        </p>
        <p className="text-gray-600 mt-4 px-4 md:px-0 md:text-lg lg:text-xl">
          I enjoy coding and understanding how things work.
        </p>
        <div className="mt-6">
          <Link href="#contact">
            <button className="m-2 rounded bg-black p-3 text-white border-2 border-black transition-transform transform hover:scale-105">
              Contact
            </button>
          </Link>
          {/* <button className="m-2 rounded border-black border-2 p-3 text-black transition-transform transform hover:scale-105">
            Resume
          </button> */}
          <a
            href="/Mustapha_Jlem_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="m-2 rounded border-black border-2 p-3 text-black transition-transform transform hover:scale-105 inline-block"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
