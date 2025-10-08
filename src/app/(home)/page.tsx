import dynamic from "next/dynamic"

const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const GitGraph = dynamic(() => import("./components/GitGraph"), { ssr: false });
const HomeRouteBlogs = dynamic(() => import("@/components/HomeRouteBlogs"), { ssr: false });
import InitialLanding from "./components/InitialLanding"

export default function Home() {
  return (
    <div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
      <InitialLanding />

      <div className="w-full flex justify-center mt-8">
        <Experience />
      </div>

      <div className="w-full flex justify-center mt-8">
        <HomeRouteBlogs />
      </div>

      <div className="w-full flex justify-center">
        <GitGraph />
      </div>

      <div className="w-full flex justify-center mt-12">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-12">
        <Education />
      </div>

      <div className="w-full flex justify-center mt-8" id="contact-section">
        <Contact />
      </div>
    </div>
  )
}
