import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-10 py-16">
      {/* Title */}
      <div className="flex flex-col items-center">
        <p className="text-3xl sm:text-4xl font-semibold text-[#0084ff]">
          My Projects
        </p>
        <div className="drop-shadow-lg/25 bg-[#0084ff] ring-4 ring-white w-32 sm:w-56 md:w-1/2 h-1.5 mt-3 rounded-full" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
