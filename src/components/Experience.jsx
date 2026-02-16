import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">Experience</h2>
      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-800 p-5 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded object-contain flex-shrink-0 mt-0.5"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-base font-medium text-neutral-100">{exp.role}</h3>
                  <span className="text-sm text-neutral-500">{exp.year}</span>
                </div>
                <p className="text-sm text-neutral-400 whitespace-pre-line leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
