import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <>
        <div style={{ backgroundImage: `url(${project.photo})` }} className='bg-image' >
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    </>
  )
}
