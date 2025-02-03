import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { observer } from 'mobx-react-lite'
import { useStore } from '../mobx/Store'
import ProjectCard from './ProjectCard'

export default observer(function PortfolioSection({ title }) {

    const { appStorage } = useStore()
    const [ projects, setProjects ] = useState([])
    const [ description, setDescription ] = useState("")

    useEffect(() => {
        if (title == "Dev") {
            setProjects(appStorage.devProjects)
            setDescription(appStorage.devDesc)
        } else if (title == "Workshop") {
            setProjects(appStorage.workshopProjects)
            setDescription(appStorage.workshopDesc)
        } else if (title == "Pizza") {
            setProjects(appStorage.pizzaProject)
            setDescription(appStorage.pizzaDesc)
        }
    }, [title])

    return (
        <div className="bg-gradient-darkbrown-olivegreen w-full flex flex-col items-center justify-start">
            <div className="my-2 p-4 bg-david-back bg-opacity-darker w-smaller-screen md:w-smaller-screen-pc h-halfscreen border-0 rounded-3xl flex flex-col items-center justify-start md:justify-evenly">

                <Menu animSwitch={false} />

                <div className='mt-8 mb-16 flex flex-col items-center justify-center gap-y-2'>
                    <h1 className='text-5xl md:text-8xl text-center font-bo'>
                        {title}
                    </h1>

                    <p className='text-xl md:text-2xl text-center w-11/12 md:w-8/12'>
                        {description}
                    </p>
                </div>
            </div>
            <div className='w-halfscreen px-4 mb-16 -mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
})
