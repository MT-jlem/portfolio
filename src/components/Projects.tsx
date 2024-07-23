import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A brief description of the project goes here. It can include the tech stack, purpose, and any other relevant information.",
      imageUrl: "/web-server.webp",
      projectLink: "#",
    },
    {
      title: "Project Two",
      description:
        "A brief description of the project goes here. It can include the tech stack, purpose, and any other relevant information.",
      imageUrl: "/web-server.webp",
      projectLink: "#",
    },
    {
      title: "Project Two",
      description:
        "A brief description of the project goes here. It can include the tech stack, purpose, and any other relevant information.",
      imageUrl: "/pingPongGame.png",
      projectLink: "#",
    },
    // Add more projects here
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-8 py-12 px-6 mt-12 md:py-16 lg:px-24"
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
