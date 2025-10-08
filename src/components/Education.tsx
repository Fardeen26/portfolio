'use client';

import { MagicCard } from './ui/magic-card';
import Image from 'next/image';
import { Link } from '@radix-ui/themes';
import { I_Education } from '@/types/project';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import Title from './ui/Title';
import { useDarkMode } from '@/hooks/useDarkMode';
import { educationData } from '@/utils/constant';

const Education = () => {
    const { isDarkMode } = useDarkMode()

    return (
        <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-3 flex flex-col items-center mt-4 pb-8'>
            <Title title='Education' />

            {
                educationData.map((edu: I_Education, idx) => (
                    <MagicCard key={idx} className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none" gradientColor={`${isDarkMode ? '#262626' : 'rgba(197, 241, 241, 0.4)'}`}>
                        <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
                            <div className="w-24 flex items-center justify-center">
                                <Link href={edu.institute_link} target='_blank'>
                                    <Image src={edu.institute_logo} alt='institute-logo' width={50} height={50} className='rounded-full' />
                                </Link>
                            </div>
                            <div className="w-full">
                                <div>
                                    <div className={`flex items-center w-[41vw] max-lg:w-full max-sm:w-full justify-between ${bricolage_grotesque}`}>
                                        <h1 className='text-lg leading-4 mb-1 max-sm:text-base font-semibold'>{edu.course_title}</h1>
                                        <span className='text-xs max-sm:text-[10px] max-sm:hidden'>{edu.ending_date}</span>
                                    </div>
                                    <h2 className={`text-sm max-sm:text-xs ${inter}`}>{edu.institute_name}</h2>
                                    <h2 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}>{edu.ending_date}</h2>
                                </div>
                                <div className="mt-3 max-sm:mt-2 text-sm max-sm:text-[11px]">
                                    <p>{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                ))
            }
        </div>
    );
};

export default Education;
