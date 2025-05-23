'use client';
import Image from 'next/image';
import { MagicCard } from './ui/magic-card';
import { Link } from '@radix-ui/themes';
import { I_Experience } from '@/types/project';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import Title from './ui/Title';
import { useDarkMode } from '@/hooks/useDarkMode';
import { experienceData } from '@/utils/constant';

const Experience = () => {
    const { isDarkMode } = useDarkMode();
    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8'>
            <span className='mb-3'>
                <Title title='Experience' />
            </span>
            {
                experienceData.map((exp: I_Experience, idx) => (
                    <MagicCard key={idx} className="cursor-pointer h-fit dark:shadow-2xl !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                        <div className={`${exp.job_title === "Freelance" ? 'max-sm:ml-1 max-lg:ml-1' : ''} flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3`}>
                            <div className="w-24 flex items-center justify-center">
                                <Link href={exp.company_link} target='_blank'>
                                    <Image src={exp.company_logo} alt='company-logo' width={50} height={50} className='rounded-full' />
                                </Link>
                            </div>
                            <div className="w-full">
                                <div className={`${exp.job_title === "Freelance" ? 'max-sm:ml-2 max-lg:ml-2' : ''}`}>
                                    <div className={`flex w-[41vw] max-lg:w-full max-sm:w-full !justify-between max-sm:items-center ${bricolage_grotesque}`}>
                                        <div className='text-lg !leading-4 mb-1 max-sm:text-base font-semibold'>{exp.job_title}</div>
                                        <div className={`text-xs max-sm:text-[10px] max-sm:hidden`}>{exp.duration}</div>
                                    </div>
                                    <h2 className={`text-sm max-sm:text-xs ${inter}`}>{exp.company_name}</h2>
                                    <h2 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}>{exp.duration}</h2>
                                </div>
                                <div className="mt-3 max-sm:mt-2 text-sm max-sm:text-[11px]">
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                ))
            }
        </div>
    );
};

export default Experience;
