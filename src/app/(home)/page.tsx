"use client"

import ProjectCardList from "../projects/components/ProjectCardList"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import { motion } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import GitGraph from "./components/GitGraph"
import AddOnProjects from "@/components/AddOnProjects"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0"
    >
      <HeroSection />

      <div className="w-full flex justify-center mt-24">
        <Experience />
      </div>

      <div className="w-full flex justify-center">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center">
        <AddOnProjects />
      </div>

      <GitGraph />

      <div className="w-full flex justify-center mt-8">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-8">
        <Education />
      </div>

      {/*
        <div className="mt-4">
          <Coursework />
        </div> 
      */}

      <div className="w-full flex justify-center mt-8" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  )
}
