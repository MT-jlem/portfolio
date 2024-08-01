import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Mini Docker Project",
      description:
        "Created Docker-based infrastructure with custom Dockerfiles and configured services using bash scripts, running all services with Docker Compose.",
      imageUrl: "/docker-project.png",
      projectLink: "https://github.com/MT-jlem/inception",
    },
    {
      title: "Web Server",
      description:
        "Developed a custom HTTP server in C++ with NGINX-like configuration, supporting multiple HTTP methods and non-blocking I/O operations.",
      imageUrl: "/web-server.webp",
      projectLink: "https://github.com/MT-jlem/webserv",
    },
    {
      title: "Full-Stack Web Application",
      description:
        "Built a real-time multiplayer Pong site with NestJS, Next.js, PostgreSQL, featuring chat, user profiles, OAuth login, and two-factor authentication",
      imageUrl: "/pingPongGame.png",
      projectLink: "https://github.com/abdelbarimessah/ft_transcendence",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-8 py-12 px-6 md:py-16 lg:px-24"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl underline">
          Projects
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full object-cover"
              style={{ height: "200px" }}
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="px-6 py-4 flex-1 flex flex-col">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base mb-auto">
                {project.description}
              </p>
            </div>
            <div className="px-6 py-4 mb-4">
              <a
                href={project.projectLink}
                className="rounded bg-black p-3 text-white border-2 border-black transition-transform transform hover:scale-105"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
