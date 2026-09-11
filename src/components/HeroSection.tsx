import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto mt-16 flex w-full max-w-7xl flex-col items-center gap-10 overflow-hidden bg-gradient-to-br from-white via-white to-teal-50/70 px-6 py-16 md:flex-row md:gap-16 md:px-10 md:py-24"
    >
      {/* <div className="relative w-full max-w-m overflow-hidden rounded-full pb-[100%] border-4 border-gray-300 shadow-lg md:w-96 md:h-96"> */}
      <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-full border-8 border-white shadow-2xl ring-1 ring-teal-100 md:order-2 md:h-72 md:w-72 lg:h-80 lg:w-80">
        {" "}
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src="/profile.jpg"
          alt="Mustapha Jlem picture"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="max-w-2xl text-center md:flex-1 md:text-left">
        <p className="section-kicker mb-4">Software engineer · full-stack developer</p>
        <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
          Hi, I&#39;m Mustapha Jlem
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
          I build thoughtful, reliable web experiences and enjoy turning complex problems into clear, useful products.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
          {['TypeScript', 'Next.js', 'Node.js', 'Docker'].map((skill) => (
            <span key={skill} className="rounded-full border border-teal-100 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">{skill}</span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link href="#contact" className="rounded-lg bg-teal-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
              Contact
          </Link>
          {/* <button className="m-2 rounded border-black border-2 p-3 text-black transition-transform transform hover:scale-105">
            Resume
          </button> */}
          <a
            href="/Mustapha_Jlem_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
