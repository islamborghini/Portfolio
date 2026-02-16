import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">Projects</h2>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-neutral-800 p-5 hover:border-neutral-700 transition-colors block"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {project.image && (
                <div className="w-full sm:w-40 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded object-cover w-full sm:w-40 h-auto"
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-base font-medium text-neutral-100 mb-1 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-2.5 py-0.5 rounded-full border border-neutral-700 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
