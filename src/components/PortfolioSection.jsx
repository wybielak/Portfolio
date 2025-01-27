import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { observer } from 'mobx-react-lite'
import { useStore } from '../mobx/Store'

export default observer(function PortfolioSection({ title }) {

    const { appStorage } = useStore()
    const [projects, setProjects] = useState([])
    const [description, setDescription] = useState("")

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
        <div className="bg-gradient-darkbrown-olivegreen w-screen h-screen flex flex-col items-center justify-start">
            <div className="my-2 bg-david-back bg-opacity w-smaller-screen md:w-smaller-screen-pc h-halfscreen border-0 rounded-3xl flex flex-col items-center justify-start md:justify-around">

                <Menu animSwitch={false} />

                <div className='my-16'>
                    <h1 className='text-5xl md:text-8xl text-center'>
                        {title}
                    </h1>

                    <p className='text-2xl text-center'>
                        {description}
                    </p>
                </div>

            </div>
        </div>
    )
})
