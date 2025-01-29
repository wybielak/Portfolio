
export default function ProjectCard({ project }) {

  return (
    <>
      <div className="mb-4 relative border-0 rounded-3xl">

        <img className="object-cover border-0 rounded-3xl" src={project.photo} alt={project.name} />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center border-0 rounded-3xl">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="mt-2 text-sm">{project.description}</p>
        </div>

      </div>
    </>
  )
}
