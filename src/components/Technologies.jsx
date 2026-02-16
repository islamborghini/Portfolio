import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNode, FaAws, FaDocker } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiExpress, SiJavascript, SiCplusplus } from "react-icons/si";
import { DiDjango, DiPostgresql } from "react-icons/di";

const skills = [
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
  { icon: FaPython, name: "Python", color: "text-yellow-400" },
  { icon: SiCplusplus, name: "C++", color: "text-blue-500" },
  { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { icon: FaNode, name: "Node.js", color: "text-green-500" },
  { icon: SiExpress, name: "Express", color: "text-neutral-300" },
  { icon: DiDjango, name: "Django", color: "text-green-600" },
  { icon: DiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
  { icon: FaAws, name: "AWS", color: "text-orange-400" },
  { icon: FaDocker, name: "Docker", color: "text-blue-400" },
];

const Technologies = () => {
  return (
    <section id="technologies">
      <h2 className="text-3xl font-medium text-neutral-100 mb-6">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {skills.map(({ icon: Icon, name, color }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 rounded-lg border border-neutral-800 p-4 hover:border-neutral-700 transition-colors"
          >
            <Icon className={`text-3xl ${color}`} />
            <span className="text-sm text-neutral-400">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
