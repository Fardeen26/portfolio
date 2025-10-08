import { Project } from '@/types/project';
import ProjectCard from '@/app/projects/components/ProjectCard';


const AddOnProjects = () => {
    return (
        <div className='w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-8 max-sm:mt-4 pb-8'>
            <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
                {data.map((project: Project, idx: number) => (
                    <ProjectCard
                        key={idx}
                        logo={project.logo}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        link={project.link}
                        source={project.source}
                    />
                ))}
            </div>

        </div>
    )
}

export default AddOnProjects;

const data: Project[] = [
    {
        logo: '/GlowUp.png',
        title: "GlowUp",
        description: "An image Editor that adds dynamic lighting and glow effects to images. It allows users to adjust light color, intensity, and placement to enhance their visuals.",
        techStack: [],
        link: "https://adobesparkpost.app.link/TR9Mb7TXFLb?mode=private&claimCode=wi362jjg7:KP697XGS",
        source: "#",
    },
    {
        logo: '/rephrasely.png',
        title: "Rephresely",
        description: "An Add-On that allows users to enhance or improve their design texts directly in Express with a one-click replace feature without changing design of the text.",
        techStack: [],
        link: "https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=w5hm59hg2",
        source: "#",
    },
    {
        logo: '/Paletify.png',
        title: "Paletify AI",
        description: "An Add-On that generates color palettes using AI based on user ideas. mood or theme. It allows creators to instantly find cohesive colors for their designs.",
        techStack: [],
        link: "https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=wg41j5048",
        source: "#",
    },
    {
        logo: '/textify.png',
        title: "Textify",
        description: "An Add-On for Adobe Express that converts images to text using OCR technology. It allows users to extract text from images and use it in their designs.",
        techStack: [],
        link: "https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=wj497gjkg",
        source: "#",
    },
    {
        logo: '/codify.png',
        title: "Codify",
        description: "An Add-On for Adobe Express that generates code snippets from images using AI technology. It allows users to create code snippets for their designs.",
        techStack: [],
        link: "https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=wl0487nnk",
        source: "#",
    }
];
