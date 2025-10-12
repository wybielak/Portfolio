import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaJs, FaPython, FaReact, FaUnity, FaWordpressSimple } from "react-icons/fa";
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
        }, 20);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setProjects(appStorage.devProjects)
        setDescription(appStorage.devDesc)
    }, [])

    return (
        <>
            <div className="bg-darkBrown flex flex-col items-center justify-center">

                <Menu />

                <div id="home" className="bg-darkBrown p-8 w-full h-screen flex flex-col items-center justify-center">

                    <p className="text-5xl md:text-6xl font-bold">
                        {letters.map((l) => (
                            <span key={l.id} className={`${l.visible ? l.color : "opacity-0"} transition-opacity duration-300`} >
                                {l.char}
                            </span>
                        ))}
                    </p>

                </div>

                <div id="about" className="bg-softBeige w-full flex flex-col lg:flex-row items-center justify-center">

                    <div className='p-8 h-screen flex flex-col items-center justify-center gap-y-8'>
                        <p className="text-5xl md:text-6xl font-bold text-forestBrown">
                            Nazywam się Dawid Nowakowski
                        </p>

                        <p className="text-3xl md:text-4xl font-bold text-forestBrown">
                            Informatyka jest moją pasją, ale również ścieżką kariery
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

                <div id="motto" className="bg-silverBlue p-8 w-full h-screen flex flex-col items-center justify-center gap-y-8">

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

                <div id="technologies" className="bg-forestGreen p-8 w-full h-halfscreen flex flex-col items-center justify-evenly">

                    <h2 className="text-5xl text-center">Zobacz z jakich technologii korzystam</h2>
                    <p className="text-5xl md:text-7xl flex flex-wrap gap-8 items-center justify-center">
                        <a href="https://www.python.org" target="_blank"><FaPython /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><FaJs /></a>
                        <a href="https://isocpp.org" target="_blank"><TbBrandCpp /></a>
                        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank"><TbBrandCSharp /></a>
                    </p>

                    <p className="text-5xl md:text-7xl flex flex-wrap gap-8 items-center justify-center">
                        <a href="https://react.dev" target="_blank"><FaReact /></a>
                        <a href="https://wordpress.org" target="_blank"><FaWordpressSimple /></a>
                        <a href="https://godotengine.org" target="_blank"><SiGodotengine /></a>
                        <a href="https://unity.com" target="_blank"><FaUnity /></a>
                    </p>

                </div>

                <div id="projects" className="bg-softBeige p-8 w-full  flex flex-col items-center justify-start" >

                    <h1 className="mt-20 text-6xl font-bold text-forestGreen">
                        Sprawdź moje poprzednie projekty
                    </h1>

                    <h2 className="mt-20 text-3xl text-forestGreen">
                        Sekcja w przygotowaniu!
                    </h2>

                    {/* <div className='px-4 mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div> */}

                </div>

                <div id="contact" className="bg-darkBrown w-full flex flex-col lg:flex-row items-center justify-center">

                    <img
                        src="/images/bg6.jpg"
                        alt="Photo of Dawid"
                        className="lg:h-screen w-auto object-cover"
                    />

                    <div className='p-8 h-screen flex flex-col items-center justify-center gap-y-8'>
                        
                        <p className='my-8 flex flex-col gap-y-8'>
                            <h2 className="text-5xl text-center">Napisz do mnie!</h2>
                            <h2 className="text-3xl text-center">Razem wyniesiemy twoją stronę na wyższy poziom</h2>
                        </p>

                        <div className='flex flex-col items-center justify-between w-full'>

                            <p className="my-8 flex flex-col items-center text-xl md:text-2xl gap-y-1">
                                <a href="mailto:dawidnowakowski87@gmail.com" className='opacity-50 transition hover:opacity-60 hover:scale-105'>dawidnowakowski87@gmail.com</a>
                                <a href="tel:+48123456789" className='opacity-50 transition hover:opacity-60 hover:scale-105'>+48 696 776 531</a>
                            </p>

                            <p className="my-8 flex flex-row text-6xl gap-x-16">
                                <a target="_blank" href="https://www.facebook.com/dawid.nowakowski.wybielak?locale=pl_PL" className='opacity-50 transition hover:opacity-60 hover:scale-110'><FaFacebook /></a>
                                <a target="_blank" href="https://www.instagram.com/wybielak/" className='opacity-50 transition hover:opacity-60 hover:scale-110'><FaInstagram /></a>
                            </p>

                        </div>

                    </div>

                </div>

            </div >
        </>
    )
})
