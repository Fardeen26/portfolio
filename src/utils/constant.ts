import { I_Education, I_Experience, I_YoutubeVideo } from "@/types/project";

export const experienceData: I_Experience[] = [
    {
        company_link: "https://naiaredesign.com/",
        company_logo: "/naia.png",
        company_name: "Naia Redesign",
        duration: "aug 2025 - present",
        job_title: "Founding Engineer",
        description: ""
    },
    {
        company_link: "https://www.adobe.com/",
        company_logo: "/adobe.png",
        company_name: "Adobe Inc.",
        duration: "2024 - present",
        job_title: "Adobe Developer Champion",
        description: "see the adobe work here: https://100xaddons.com"
    },
    {
        company_link: "https://x.com/fardeentwt",
        company_logo: "/freelance-icon.webp",
        company_name: "building full stack apps",
        duration: "2024 - early 2025",
        job_title: "Freelance",
        description: ""
    },
    {
        company_link: "https://x.com/fardeentwt",
        company_logo: "/stealth-startup.jpeg",
        company_name: "Stealth Startup",
        duration: "feb 2024 - june 2024",
        job_title: "Full Stack Development - TA",
        description: ""
    }
];

export const educationData: I_Education[] = [
    {
        institute_link: "https://www.uok.ac.in/",
        institute_logo: "/uok.gif",
        course_title: "Bachelors of Computer Application",
        ending_date: " sep 2025",
        institute_name: "University of Kota",
        cgpa: 8.5,
        description: ""
    }

];

/** Replace `videoId` with yours from the watch URL (`youtube.com/watch?v=VIDEO_ID`). */
export const youtubeVideosData: I_YoutubeVideo[] = [
    { videoId: "lm02Mowy9uo" },
    { videoId: "2361QhkPWrk" },
    { videoId: "p5qvmxwkg8k" },
];
