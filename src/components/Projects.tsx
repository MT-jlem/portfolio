export default function Projects() {
  const projects = [
    {
      title: "Mini Docker Project",
      description:
        "Created Docker-based infrastructure with custom Dockerfiles and configured services using bash scripts, running all services with Docker Compose.",
      imageUrl: "/docker-project.png",
      projectLink: "https://github.com/MT-jlem/inception",
      technologies: ["Docker", "Bash", "Compose"],
    },
    {
      title: "Web Server",
      description:
        "Developed a custom HTTP server in C++ with NGINX-like configuration, supporting multiple HTTP methods and non-blocking I/O operations.",
      imageUrl: "/web-server.webp",
      projectLink: "https://github.com/MT-jlem/webserv",
      technologies: ["C++", "HTTP", "Nginx"],
    },
    {
      title: "Full-Stack Web Application",
      description:
        "Built a real-time multiplayer Pong site with NestJS, Next.js, PostgreSQL, featuring chat, user profiles, OAuth login, and two-factor authentication",
      imageUrl: "/pingPongGame.png",
      projectLink: "https://github.com/abdelbarimessah/ft_transcendence",
      technologies: ["Next.js", "NestJS", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-slate-100 px-6 py-16 md:py-24 lg:px-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title mt-2">
          Projects
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-slate-600">A selection of systems and applications built with an emphasis on practical engineering and maintainable design.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.projectLink}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="flex flex-1 flex-col px-6 py-5">
              <h3 className="mb-3 text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mb-auto leading-7 text-slate-600">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">{technology}</span>
                ))}
              </div>
            </div>
            <div className="px-6 pb-6">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              >
                View project <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
