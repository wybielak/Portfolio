import React, { useEffect, useState } from 'react'
import { FaJs, FaPython, FaReact, FaUnity, FaWordpressSimple } from "react-icons/fa";
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

    useEffect(() => {
        setProjects(appStorage.devProjects)
        setDescription(appStorage.devDesc)
    }, [])

    return (
        <>
            <div className="bg-darkBrown w-full flex flex-col items-center justify-center">

                <Menu />

                <div id="home" className="bg-darkBrown w-screen h-screen flex flex-col items-center justify-center">
                    <p className="m-8 text-5xl md:text-6xl font-bold">
                        {letters.map((l) => (
                            <span key={l.id} className={`${l.visible ? l.color : "opacity-0"} transition-opacity duration-300`} >
                                {l.char}
                            </span>
                        ))}
                    </p>
                </div>

                <div id="about" className="bg-softBeige w-screen flex flex-col lg:flex-row items-center justify-center">

                    <div className='p-8 h-screen flex flex-col items-center justify-center gap-y-8'>
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

                    <img
                        src="/images/bg6.jpg"
                        alt="Photo of Dawid"
                        className="lg:h-screen w-auto object-cover"
                    />

                </div>

                <div id="motto" className="bg-silverBlue w-screen h-screen flex flex-col lg:flex-row items-center justify-center">

                    <div className='p-8 h-screen flex flex-col items-center justify-center gap-y-8'>
                        <p className="text-3xl md:text-4xl text-forestGreen">
                            W życiu kieruję się zasadą
                        </p>

                        <p className="text-4xl md:text-5xl font-bold text-forestGreen">
                            &quot;Mając odpowiednio dużo czasu i determinacji, możesz osiągnąć wszystko.&quot;
                        </p>

                        <p className="text-2xl self-end md:text-3xl text-forestGreen">
                            Dawid Nowakowski
                        </p>
                    </div>

                </div>

                <div id="motto" className="bg-forestGreen p-8 w-screen h-screen flex flex-col items-center justify-evenly">

                        <h2 className="text-5xl text-center">Zobacz z jakich technologii korzystam</h2>
                        <p className="text-5xl md:text-7xl flex flex-wrap gap-8 items-center justify-center">
                            <FaPython />
                            <FaJs />
                            <TbBrandCpp />
                            <TbBrandCSharp />
                        </p>
                        <p className="text-5xl md:text-7xl flex flex-wrap gap-8 items-center justify-center">
                            
                            <FaReact />
                            <FaWordpressSimple />
                            <SiGodotengine />
                            <FaUnity />
                        </p>

                </div>

                <div id="projects" className="bg-softBeige p-8 w-screen  flex flex-col items-center justify-start" >

                    <h1 className="mt-20 text-6xl font-bold text-forestGreen">
                        Sprawdź moje poprzednie projekty
                    </h1>

                    <div className='px-4 mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>

                </div>

            </div >
        </>
    )
})
