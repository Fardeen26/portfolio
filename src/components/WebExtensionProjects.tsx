import ProjectCard from "@/app/projects/components/ProjectCard";
import { webExtensionProjects } from "@/data/coldmailai-projects";

const WebExtensionProjects = () => {
  return (
    <div className="mt-8 flex h-fit w-full flex-col items-center px-64 pb-8 max-[1285px]:px-40 max-[1025px]:px-4 max-lg:px-0 max-sm:mt-4 max-sm:px-4">
      <div className="ml-14 mt-4 flex w-full flex-col flex-wrap items-center gap-4 px-32 max-[350px]:mr-5 max-[321px]:mr-10 max-lg:ml-0 max-lg:px-0 max-sm:ml-0 max-sm:px-0 lg:flex-row">
        {webExtensionProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WebExtensionProjects;
