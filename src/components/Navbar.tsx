'use client';
import React from 'react';
import { useContext } from 'react';
import { Link, Separator, Tooltip } from '@radix-ui/themes';
import { GitHubLogoIcon, SunIcon, MoonIcon, FileIcon, RowsIcon, LinkedInLogoIcon, CodeIcon, HomeIcon } from '@radix-ui/react-icons';
import { DarkModeContext } from '@/context/DarkModeContext';
import { usePathname } from 'next/navigation';
import { FaXTwitter } from 'react-icons/fa6';
import { IoPerson } from "react-icons/io5";
import { SiGeeksforgeeks } from "react-icons/si";


const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("darkModeContext is possibly undefined!");
    }
    return context;
};

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const pathname = usePathname();

    return (
        <nav className='w-full py-6 flex justify-center fixed top-0 z-50'>
            <div className="rounded-full w-[850px] max-lg:w-[800px] max-[400px]:w-[345px] max-[450px]:w-[400px] px-2 py-1 bg-white bg-opacity-10 backdrop-blur-md border dark:border-white/20 flex items-center justify-center dark:shadow-none shadow">
                <div className='flex justify-center px-2 items-center max-sm:gap-4 gap-8 max-[400px]:gap-4 max-[450px]:gap-5 transition-all'>

                    <Link href="/" underline='none'>
                        <Tooltip content="Home">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <HomeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}/>
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/projects">
                        <Tooltip content="Projects">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <CodeIcon className={`w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/projects' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`} />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/blogs">
                        <Tooltip content="Blog">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <RowsIcon className={`w-[16px] h-[16px] max-sm:w-[13px] max-sm:h-[13px] text-black dark:text-white ${pathname == '/blogs' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}/>
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="/about">
                        <Tooltip content="About">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <IoPerson className={`w-[18px] h-[18px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white ${pathname == '/about' ? 'dark:!text-[#FFC83D] !text-[#cc9e2b]' : ''}`}/>
                            </div>
                        </Tooltip>
                    </Link>

                        <Separator orientation='vertical' size={{sm: '1', lg: '2', xl: '2'}} className='bg-black dark:bg-gray-400' />
                    <Link href="https://drive.google.com/file/d/1BvmKeNsKERxnUUIRJcGf-grLydwr-yfn/view?usp=sharing" target='blank' underline='none'>
                        <Tooltip content="Resume">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <FileIcon className='w-[19px] h-[19px] max-sm:h-[15px] max-sm:w-[15px] text-black dark:text-white'/>
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://github.com/Fardeen26" target='blank'>
                        <Tooltip content="Github">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <GitHubLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://x.com/intent/follow?screen_name=fardeen14693425" target='blank'>
                        <Tooltip content="X">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <FaXTwitter className='w-[17px] h-[17px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://www.linkedin.com/in/fardeenmansoori/" target='blank'>
                        <Tooltip content="Linkedin">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <LinkedInLogoIcon className='w-[19px] h-[19px] max-sm:w-[15px] max-sm:h-[15px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Link href="https://www.geeksforgeeks.org/user/fardeenmanxtyn/" target='blank'>
                        <Tooltip content="Geeks for Geeks">
                            <div className='hover:px-3 max-sm:hover:px-2 py-2.5 max-sm:hidden dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all'>
                                <SiGeeksforgeeks className='h-[19px] w-[19px] text-black dark:text-white' />
                            </div>
                        </Tooltip>
                    </Link>

                    <Separator orientation='vertical' size={{sm: '1', lg: '2', xl: '2'}}  className='bg-black dark:bg-gray-400' />

                    <div className='hover:px-3 max-sm:hover:px-2 py-2.5 dark:hover:bg-[#262626] hover:bg-[#F4F4F5] rounded-full transition-all' onClick={toggleDarkMode}>
                        <div className='flex items-center'>
                            <button>
                                {isDarkMode ? <MoonIcon className='w-[18px] h-[18px] max-sm:w-[14px] max-sm:h-[14px]'/> : <SunIcon className='w-5 h-5 max-sm:w-[15px] max-sm:h-[15px]'/>}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
