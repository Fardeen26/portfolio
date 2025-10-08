import { Project } from '@/types/project';
import ProjectCard from '@/app/projects/components/ProjectCard';


const MobileApps = () => {
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

export default MobileApps;

const data: Project[] = [
    {
        logo: '/flashfeed.png',
        title: "flashfeed",
        description: "A Social media mobile application excatly like instagram. user can post stories, view stories, post images, comment, like, bookmark etc.",
        techStack: ["React Native", "Convex", "Expo", "typescript", "AsyncStorage"],
        link: "https://x.com/fardeentwt/status/1969781520589340872",
        source: "https://github.com/Fardeen26/flashfeed",
    },
    {
        logo: '/naia.png',
        title: "Naia Redesign",
        description: "A platform for upcycled fashion where users send old clothes to designers, get unique redesigns, and discover sustainable styles. work in progress...",
        techStack: ["React Native", "Supabase", "Redux Toolkit", "Open AI", "NativeWind", "AWS", "Shippo", "Mailgun", "Stripe"],
        link: "https://naiaredesign.com/",
        source: "#",
    }
];
