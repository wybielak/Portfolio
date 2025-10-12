import React, { useEffect, useState } from 'react'
import { FaJs, FaPython, FaReact, FaUnity } from "react-icons/fa";
import Menu from "./Menu";
import { TbBrandCpp, TbBrandCSharp, TbMenu4 } from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { observer } from 'mobx-react-lite'
import { useStore } from '../mobx/Store'
import ProjectCard from './ProjectCard'


export default observer(function Home() {

    const { appStorage } = useStore()
    const [projects, setProjects] = useState([])
    const [description, setDescription] = useState("")

    const text = "Cześć! Stwórzmy razem twoją stronę lub aplikację internetową";
    const colors = ["text-mistGray", "text-softBeige", "text-silverBlue", "text-sageGreen"];

    const [letters, setLetters] = useState(
        text.split("").map((char, idx) => ({
            char,
            visible: false,
            color: colors[Math.floor(Math.random() * colors.length)],
            id: idx,
        }))
    );

    useEffect(() => {
        let remaining = [...letters.keys()];

        const interval = setInterval(() => {
            if (!remaining.length) return clearInterval(interval);

            const randIndex = Math.floor(Math.random() * remaining.length);
            const [letterIndex] = remaining.splice(randIndex, 1);

            setLetters(prev =>
                prev.map((l, idx) =>
                    idx === letterIndex ? { ...l, visible: true } : l
                )
            );
        }, 1);

        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     setProjects(appStorage.devProjects)
    //     setDescription(appStorage.devDesc)
    // }, [])

    return (
        <>
            <div className="bg-darkBrown w-full flex flex-col items-center justify-center">

                <Menu />

                <div id="home" className="bg-darkBrown w-screen h-screen flex flex-col items-center justify-center">
                    <p className="m-4 text-5xl md:text-6xl font-bold">
                        {letters.map((l) => (
                            <span key={l.id} className={`${l.visible ? l.color : "opacity-0"} transition-opacity duration-300`} >
                                {l.char}
                            </span>
                        ))}
                    </p>
                </div>

                <div id="about" className="bg-softBeige w-screen flex flex-col md:flex-row items-center justify-center">
                    
                    <div className='p-4 h-screen flex flex-col items-center justify-center gap-y-8'>
                        <p className="text-5xl md:text-6xl font-bold text-forestBrown">
                            Nazywam się Dawid Nowakowski.
                        </p>

                        <p className="text-3xl md:text-4xl font-bold text-forestBrown">
                            Informatyka jest moją pasją, ale również ścieżką kariery.
                        </p>

                        <p className="text-2xl md:text-3xl text-forestBrown">
                            Dokładam wszelkich starań, aby projekty tworzone dla ciebie zawsze były na najwyższym poziomie!
                        </p>
                    </div>

                    <div className="md:h-screen md:w-screen">
                        <img
                            src="/images/bg6.jpg"
                            alt=""
                            className="md:h-screen w-auto object-cover"
                        />
                    </div>

                </div>

                {/* <div id="about" className="p-4 w-screen h-screen flex flex-col items-center justify-center">

                    <div className="h-screen flex flex-col items-center justify-center">

                        <div className="flex flex-col md:flex-row flex-nowrap items-center justify-center w-11/12 lg:w-3/4">

                            <div className="p-5 m-5 bg-transparent opacity-90 border-0 rounded-3xl flex-1 flex flex-col items-center justify-evenly">
                                <h2 className="text-4xl font-bold text-center my-2">Hi, I&apos;m Dawid!</h2>
                                <p className="text-lg flex flex-col gap-y-3">
                                    <p>
                                        I am computer science engineer currently studying marketing and sales, while actively developing my careed in IT.
                                    </p>
                                    <p>
                                        I learn new things quickly and I am creative and efficient in managing my time.
                                        I am persistent and always bring my projects to completion.
                                    </p>
                                    <p>
                                        In my free time, I enjoy metalworking, woodworking, and making pizza, it is a great way to take a break from the IT world.
                                    </p>
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center flex-1">

                                <div className="p-5 m-5 bg-transparent opacity-90 border-0 rounded-3xl h-230px flex flex-col items-center justify-evenly">
                                    <h2 className="text-2xl font-bold text-center">My motto</h2>
                                    <p className="text-lg italic text-center">
                                        &quot;With the right amount of determination and time, you can achieve anything.&quot; <br /> ~ DNw
                                    </p>
                                </div>

                                <div className="p-5 m-5 bg-transparent opacity-90 border-0 rounded-3xl h-230px flex flex-col items-center justify-evenly">
                                    <h2 className="text-2xl font-bold text-center">My technologies</h2>
                                    <p className="text-4xl flex flex-wrap gap-3 items-center justify-center">
                                        <FaReact />
                                        <FaJs />
                                        <FaPython />
                                        <TbBrandCpp />
                                        <TbBrandCSharp />
                                        <FaUnity />
                                        <SiGodotengine />
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div> */}

                {/* <div id="projects" className="my-2 w-halfscreen flex flex-col items-center justify-start" >

                    <h1 className="mt-20 text-6xl font-bold">
                        Projects
                    </h1>

                    <div className='px-4 mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                </div> */}

            </div >
        </>
    )
})
