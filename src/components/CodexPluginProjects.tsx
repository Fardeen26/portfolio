import { Project } from '@/types/project';
import ProjectCard from '@/app/projects/components/ProjectCard';

const CodexPluginProjects = () => {
    return (
        <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-8 max-sm:mt-4 pb-8'>
            <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
                {data.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
};

export default CodexPluginProjects;

const data: Project[] = [
    {
        logo: '/explainer-video-logo.png',
        title: 'explainer video',
        description: 'A storyboard-driven explainer video plugin that turns ideas into polished, narrated videos with generated visuals, captions, and overlays.',
        techStack: ['TypeScript', 'Remotion', 'FFmpeg', 'MCP'],
        source: 'https://github.com/Fardeen26/explainer-video',
    },
];
