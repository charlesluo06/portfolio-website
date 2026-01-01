import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData";

function Projects() {
  return (
    <div id="projects" className="h-[110vh] scroll-mt-20">
      <div className="items-center flex flex-col mt-20">
        <p className="text-[40px] font-semibold text-[#0084ff]">My Projects</p>
        <div className="drop-shadow-xl/25 bg-[#0084ff] ring-4 ring-white w-1/2 h-2 mt-2 rounded-full" />
      </div>

      <div className="w-2/3 mx-auto mt-7 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
