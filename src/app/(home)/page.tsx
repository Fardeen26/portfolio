'use client'
import Avatar from "./components/Avatar";
import BlurIn from "@/components/ui/blur-in";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link } from "@radix-ui/themes";
import Coursework from "@/components/Coursework";
  
export default function Home() {
  return (
    <>
    <div className="w-full flex justify-center py-5 pt-28 dark:bg-black">
      <div className="w-2/3 max-sm:w-full flex flex-col items-center">
        <div className="">
          <Avatar />
        </div>
        <div className="mt-3 px-32 max-sm:px-2">
          <BlurIn
            word="Hi, I&apos;m Fardeen Mansoori👋"
            className="!text-[3rem] max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center !bricolage-grotesque"
          />
          <BlurIn
              word="I specialize in building Web2 and Web3 apps from the ground up. With hands-on experience in full-stack development and blockchain technology, I turn complex ideas into scalable solutions. Check out my work or catch me on Twitter for current updates and the occasional meme."
              className="mt-1 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6"
          />
        </div>
        <div className="mt-10">
          <Link href="https://twitter.com/fardeen14693425" target="blank">
            <RainbowButton>Get in touch</RainbowButton>
          </Link>
        </div>
      </div>
      
    </div>
      <div className="w-full flex justify-center mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Experience />
      </div>
      
      <div className="w-full flex justify-center mt-4">
        <Education />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Coursework />
      </div>
    </>
  );
}
