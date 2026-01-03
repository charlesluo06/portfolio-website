import type { Project } from "../data/projectData";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <div>
      <div
        className="
            bg-white w-full h-115 rounded-3xl overflow-hidden shadow-lg/30
            flex flex-col
            transition-all duration-300 ease-out
            hover:-translate-y-3 hover:shadow-xl/40 hover:ring-2 hover:ring-[#0084ff]
            justify-self-center mt-5 cursor-pointer border-2 border-gray-200
          "
      >
        <div className="h-3/7 relative border-b-3 border-gray-300 shadow-md/20">
          <img className="h-full w-full object-cover" src={project.img} />

          <div className="absolute top-3 right-5 bg-white text-[#0084ff] text-sm px-3 py-1 rounded-full shadow-md/20">
            {project.type}
          </div>
        </div>

        <div className="text-center px-10">
          <p className="py-4 font-semibold text-[25px] text-[#0084ff]">
            {project.title}
          </p>
          <p className="wrap-break-word text-gray-800">{project.desc}</p>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto flex items-end justify-between gap-4 px-6 pb-4">
          {/* Left: label + chips */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Tech Stack:
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-gray-600 px-2 border-2 border-gray-200 rounded-3xl inset-shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: fixed text */}
          <div className="shrink-0 whitespace-nowrap">
            <p className="text-sm text-gray-600 font-semibold">Click to view</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
