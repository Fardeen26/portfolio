'use client'
import Avatar from "./components/Avatar";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from 'react-scroll';
import Coursework from "@/components/Coursework";
import { inter, bricolage_grotesque } from '@/utils/fonts';
import Contact from "@/components/Contact";
import { motion } from "framer-motion"
// import { GithubGraph } from "@/components/ui/github";
// import Title from "@/components/ui/Title";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <Avatar />
          </div>
          <div className="mt-4 px-32 max-sm:px-4">
            <h1 className={`!text-[3rem] mt-2 max-sm:!text-[1.6rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque}`}>
              Hi, I&apos;m Fardeen Mansoori
            </h1>
            <h1 className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}>i break things, learn fast, and make shit happen. deep into code and cs—anything that pushes the limits. history, curiosity, cricket, and great books shaped me. still chasing mastery.
              <br />
              If you’re working on something real, let’s talk.
            </h1>
          </div>
          <div className="mt-8 flex gap-4">
            <Link href="https://cal.com/fardeen26/15min" target='_blank'>
              <RainbowButton>
                Book a meet
              </RainbowButton>
            </Link>
            <RainbowButton>
              <ScrollLink to="contact-section" activeClass="active" smooth={true} offset={-120} duration={1100}>Get in touch</ScrollLink>
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-24 max-lg:mt-16">
        <ProjectCardList />
      </div>

      {/* <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
        <Title title="GitHub Contributions" />
        <Link href={'https://github.com/Fardeen26'} target="_blank">
          <GithubGraph
            username="Fardeen26"
            blockMargin={2}
            colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
          />
        </Link>
      </div> */}

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

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}
