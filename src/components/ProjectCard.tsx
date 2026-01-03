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
            justify-self-center mt-5 cursor-pointer
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
        <div className="flex mt-auto justify-between">
          <div className="px-6 pb-4 flex">
            <p className="text-sm font-semibold text-gray-700">Tech Stack:</p>
            <p className="text-sm text-gray-600 ml-3 inset-shadow-sm px-2 border-2 border-gray-200 rounded-3xl">
              React.js
            </p>
            <p className="text-sm text-gray-600 ml-3 inset-shadow-sm px-2 border-2 border-gray-200 rounded-3xl">
              Typescript
            </p>
            <p className="text-sm text-gray-600 ml-3 inset-shadow-sm px-2 border-2 border-gray-200 rounded-3xl">
              TailwindCSS
            </p>
          </div>
          <div className="px-6 pb-4 flex">
            <p className="text-sm text-gray-600 font-semibold">Click to view</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
