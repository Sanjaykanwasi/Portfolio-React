import React from "react";
import { useRef } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectReff = useRef(null);
  return (
    <div>
      <section className="pt-16" id="projects" ref={projectReff}>
        <div className="px-4">
          <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
            Projects
          </h2>
          <div className="flex flex-wrap justify-center">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
              >
                <div className="flex-grow overflow-hidden rounded-lg border  border-purple-300/20">
                  <a
                    href={project.link}
                    target="_blank"
                    className="relative z-10 block"
                    style={{ pointerEvents: "auto" }}
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.imgSrc}
                      className="h-60 w-full object-center object-cover"
                      alt={project.title || "Project Image"}
                    />{" "}
                  </a>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-medium lg:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-4">{project.description}</p>
                    <div className="mb-4">
                      <strong>Tech Stack:</strong>
                      <ul>
                        {project.techStack.map((tech, index) => (
                          <li
                            className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                            key={index}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
