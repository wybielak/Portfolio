import { useState } from "react";
import { FaGithub, FaInstagram, FaJs, FaPython, FaReact, FaTiktok, FaUnity, FaWordpressSimple, FaYoutube } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function ProjectCard({ project }) {

  const [isLoaded, setIsLoaded] = useState(false)
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target
    setImgDimensions({ width: naturalWidth, height: naturalHeight })
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <div className="h-60 w-full bg-gray-300 animate-pulse rounded-3xl"></div>}

      <div className={`flex flex-col ${imgDimensions.width > imgDimensions.height ? "sm:col-span-2" : ""} ${imgDimensions.height > imgDimensions.width ? "sm:row-span-2" : ""}`}>
        <div className={`${imgDimensions.width > imgDimensions.height ? "" : "mb-4"} relative border-0 rounded-3xl ${!isLoaded ? "hidden" : ""}`} >

          <img className={`object-cover border-0 ${imgDimensions.width > imgDimensions.height ? "rounded-t-3xl sm:rounded-3xl" : "rounded-3xl"} w-full h-full`} src={project.photo} alt={project.name} onLoad={handleImageLoad} />

          <div className={`p-4 absolute inset-0 flex flex-col items-start justify-between bg-charcoal bg-opacity-60 text-center border-0 ${imgDimensions.width > imgDimensions.height ? "rounded-t-3xl sm:rounded-3xl" : "rounded-3xl"}`}>

            <div className="w-full flex flex-row items-center justify-between">

              <h1 className="text-2xl sm:text-xl lg:text-2xl font-bold">{project.date}</h1>

              <div className="flex flex-row flex-nowrap items-center justify-center gap-x-4 sm:gap-x-2 md:gap-x-4 text-3xl sm:text-2xl lg:text-3xl">
                {project.github && <a href={project.github} target="_blank"><FaGithub /></a>}
                {project.youtube && <a href={project.youtube} target="_blank"><FaYoutube /></a>}
                {project.instagram && <a href={project.instagram} target="_blank"><FaInstagram /></a>}
                {project.tiktok && <a href={project.tiktok} target="_blank"><FaTiktok /></a>}
              </div>

            </div>

            <div className="w-full flex flex-col items-start justify-start gap-y-2">

              <div className="flex flex-row flex-nowrap items-center justify-center text-3xl sm:text-2xl md:text-3xl">
                {project.category === "react" && <FaReact />}
                {project.category === "cpp" && <TbBrandCpp />}
                {project.category === "py" && <FaPython />}
                {project.category === "godot" && <SiGodotengine />}
                {project.category === "unity" && <FaUnity />}
                {project.category === "js" && <FaJs />}
                {project.category === "wp" && <FaWordpressSimple />}
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-left">{project.name}</h1>

              <div className={`${imgDimensions.width > imgDimensions.height ? "hidden sm:flex" : ""}`}>
                <p className="text-md lg:text-lg text-left">{project.description}</p>
              </div>

            </div>

          </div>

        </div>

        <div className={`${imgDimensions.width > imgDimensions.height ? "sm:hidden" : "hidden"} bg-black bg-opacity-40 mb-4 border-0 rounded-b-3xl p-6`}>
          <p className="text-md text-left">{project.description}</p>
        </div>
      </div>
    </>
  )
}
