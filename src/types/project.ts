export type Project = {
    logo: string,
    title: string,
    description: string,
    techStack?: string[],
    link?: string,
    source?: string
};

export interface I_Heading {
    title: string
}

export interface I_Education {
    institute_link?: string,
    institute_logo: string,
    course_title: string,
    ending_date: string,
    institute_name: string,
    cgpa: number,
    description: string
}

export interface I_Experience {
    company_link: string,
    company_logo: string,
    company_name: string,
    duration: string,
    job_title: string,
    description: string
}

export interface I_YoutubeVideo {
    /** 11-character id from youtube.com/watch?v=… */
    videoId: string;
    title?: string;
}

export interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export interface I_Coursework {
    course_link: string,
    course_company_logo: string,
    course_title: string,
    duration: string,
    course_company_name: string,
    description: string
}

export interface I_About {
    year: number,
    events: string[]
}

export interface ApiResponse {
    success: boolean;
    message: string;
};

export interface Blog {
    id: string;
    title: string;
    author: string;
    createdAt: string;
    image_public_id: string;
    content: string;
}