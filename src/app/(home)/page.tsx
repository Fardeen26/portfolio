import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import GitGraph from "./components/GitGraph"
import AddOnProjects from "@/components/AddOnProjects"
import HomeRouteBlogs from "@/components/HomeRouteBlogs"
import InitialLanding from "./components/InitialLanding"

export default function Home() {
  return (
    <div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
      <InitialLanding />

      <div className="w-full flex justify-center mt-12">
        <HomeRouteBlogs />
      </div>

      <div className="w-full flex justify-center">
        <AddOnProjects />
      </div>

      <div className="w-full flex justify-center mt-8">
        <Experience />
      </div>

      <GitGraph />

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
