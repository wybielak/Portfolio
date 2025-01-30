import { FaGithub, FaInstagram, FaJs, FaReact, FaTiktok, FaUnity, FaYoutube } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function ProjectCard({ project }) {

  return (
    <>
      <div className="mb-4 relative border-0 rounded-3xl">
        <img className="object-cover border-0 rounded-3xl" src={project.photo} alt={project.name} />

        <div className="p-8 absolute inset-0 flex flex-col items-start justify-between bg-black bg-opacity-40 text-white text-center border-0 rounded-3xl">

          <div className="w-full flex flex-row items-center justify-between">

            <h1 className="text-2xl font-bold">{project.date}</h1>

            <div className="flex flex-row flex-nowrap items-center justify-center gap-x-6 text-4xl">
              {project.github != "" && <a href={project.instagram} target="_blank"><FaGithub /></a>}
              {project.youtube != "" && <a href={project.instagram} target="_blank"><FaYoutube /></a>}
              {project.instagram != "" && <a href={project.instagram} target="_blank"><FaInstagram /></a>}
              {project.tiktok != "" && <a href={project.instagram} target="_blank"><FaTiktok /></a>}
            </div>

          </div>

          <div className="w-full flex flex-col items-start justify-start gap-y-2">

            <div className="flex flex-row flex-nowrap items-center justify-center text-4xl">
              {project.category == "react" && <FaReact />}
              {project.category == "cpp" && <TbBrandCpp />}
              {project.category == "godot" && <SiGodotengine />}
              {project.category == "unity" && <FaUnity />}
              {project.category == "js" && <FaJs />}
            </div>

            <h1 className="text-4xl font-bold text-left">{project.name}</h1>
            <p className="text-lg">{project.description}</p>

          </div>

        </div>
      </div>
    </>
  )
}
