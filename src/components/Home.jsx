import React, { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaJs, FaPython, FaReact, FaUnity, FaWordpressSimple } from "react-icons/fa";
import Menu from "./Menu";
import { TbBrandCpp, TbBrandCSharp, TbMenu4 } from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";
import { Navigate, NavLink, useSearchParams } from "react-router-dom";
import { observer } from 'mobx-react-lite'
import { useStore } from '../mobx/Store'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";
import { button, div } from 'framer-motion/client';
import ProjectDetails from './ProjectDetails';


export default observer(function Home() {

    const [searchParams, setSearchParams] = useSearchParams();

    const { appStorage } = useStore()
    const [projects, setProjects] = useState([])
    const [description, setDescription] = useState("")

    const [showPhone, setShowPhone] = useState(false);

    const text = "Cześć! Stwórzmy razem twoją stronę lub aplikację internetową"
    const colors = ["text-mistGray", "text-softBeige", "text-silverBlue", "text-sageGreen"]

    const [letters, setLetters] = useState(
        text.split("").map((char, idx) => ({
            char,
            visible: false,
            color: colors[Math.floor(Math.random() * colors.length)],
            id: idx,
        }))
    );

    useEffect(() => {
        let remaining = [...letters.keys()]

        const interval = setInterval(() => {
            if (!remaining.length) return clearInterval(interval)

            const randIndex = Math.floor(Math.random() * remaining.length)
            const [letterIndex] = remaining.splice(randIndex, 1)

            setLetters(prev =>
                prev.map((l, idx) =>
                    idx === letterIndex ? { ...l, visible: true } : l
                )
            )
        }, 20)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setProjects(appStorage.devProjects)
    }, [])

    return (
        <>
            <div className="bg-darkBrown flex flex-col items-center justify-center">

                <Menu />

                <div id="home" className="bg-darkBrown p-8 w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
                    <p className="text-5xl md:text-6xl font-bold">
                        {letters.map((l) => (
                            <span key={l.id} className={`${l.visible ? l.color : "opacity-0"} transition-opacity duration-300`}>
                                {l.char}
                            </span>
                        ))}
                    </p>

                    <div className="pointer-events-none absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-deepBlue/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 w-[24rem] h-[24rem] rounded-full bg-sageGreen/10 blur-3xl" />
                </div>


                <div
                    id="about"
                    className="bg-softBeige w-full h-full md:h-screen flex flex-col lg:flex-row items-center justify-between relative overflow-hidden"
                >
                    {/* Rozmyte tło */}
                    <div className="pointer-events-none absolute -top-5 -right-24 w-[20rem] h-[20rem] rounded-full bg-forestGreen/15 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 w-[22rem] h-[22rem] rounded-full bg-forestBrown/10 blur-3xl" />

                    {/* Tekst */}
                    <div className="p-8 lg:w-1/2 flex flex-col items-start justify-center gap-y-8 z-20">
                        <motion.p
                            className="text-5xl md:text-6xl font-bold text-forestBrown"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0 }}
                        >
                            Nazywam się Dawid Nowakowski
                        </motion.p>

                        <motion.p
                            className="text-3xl md:text-4xl font-bold text-forestBrown"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Informatyka jest moją ścieżką kariery, ale również pasją
                        </motion.p>

                        <motion.p
                            className="text-2xl md:text-3xl text-forestBrown"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Dokładam wszelkich starań, aby projekty tworzone dla Ciebie zawsze były na najwyższym poziomie.
                        </motion.p>
                    </div>

                    {/* Zdjęcie */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center items-center p-8 z-10"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/images/bg6.jpg"
                            alt="Dawid Nowakowski"
                            className="w-full max-w-xl rounded-3xl shadow-2xl object-cover object-center border-4 border-forestBrown/10"
                        />
                    </motion.div>
                </div>


                <div
                    id="colab"
                    className="bg-darkBrown p-8 w-full h-full md:h-screen flex flex-col items-center justify-center gap-y-10 relative overflow-hidden"
                >
                    <motion.h2
                        className="text-5xl mt-10 font-bold text-mossGreen text-center"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Jak wygląda współpraca?
                    </motion.h2>

                    <motion.p
                        className="text-2xl text-sageGreen text-center max-w-3xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Oferuję tworzenie witryn internetowych, aplikacji i programów dopasowanych do Twoich potrzeb.
                        Współpraca przebiega w trzech prostych etapach:
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-4">
                        <motion.div
                            className="rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                        >
                            <h3 className="text-2xl font-semibold text-sageGreen mb-2">1. Ustalenie założeń</h3>
                            <p className="text-softBeige text-lg">
                                Omawiamy, co ma powstać. Strona, aplikacja lub program. Określamy funkcje i wygląd.
                            </p>
                        </motion.div>

                        <motion.div
                            className="rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <h3 className="text-2xl font-semibold text-sageGreen mb-2">2. Realizacja</h3>
                            <p className="text-softBeige text-lg">
                                Tworzę projekt zgodnie z ustaleniami. Na bieżąco możesz zobaczyć efekty prac.
                            </p>
                        </motion.div>

                        <motion.div
                            className="rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition text-center"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            <h3 className="text-2xl font-semibold text-sageGreen mb-2">3. Wdrożenie</h3>
                            <p className="text-softBeige text-lg">
                                Gotowy projekt trafia do dystrybucji. Pomagam też z konfiguracją i wsparciem.
                            </p>
                        </motion.div>
                    </div>

                    <motion.a
                        href="#contact"
                        className="my-10 px-6 py-3 rounded-xl bg-mossGreen text-darkBrown font-semibold transition-colors duration-300 hover:bg-sageGreen"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        Skontaktuj się
                    </motion.a>


                    <div className="pointer-events-none absolute -top-20 -left-20 w-[28rem] h-[28rem] rounded-full bg-deepBlue/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -right-20 w-[24rem] h-[24rem] rounded-full bg-sageGreen/10 blur-3xl" />
                </div>

                <div id="projects" className="bg-softBeige p-8 w-full  flex flex-col items-center justify-start relative overflow-hidden" >

                    <motion.h1
                        className="mt-20 text-6xl font-bold text-deepBlue"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0 }}
                    >
                        Sprawdź moje poprzednie projekty
                    </motion.h1>

                    <motion.div
                        className='mx-4 my-24 flex flex-col justify-center md:flex-row flex-wrap gap-8'
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className='w-72 h-96 flex flex-col justify-between rounded-2xl bg-deepBlue/90 transition shadow-xl hover:scale-105 hover:bg-deepBlue/100 hover:cursor-pointer'
                                onClick={() => setSearchParams({ project: project.id })}
                            >
                                {/* <div className="text-5xl self-end m-4">
                                    {project.category === "react" && <FaReact />}
                                    {project.category === "cpp" && <TbBrandCpp />}
                                    {project.category === "py" && <FaPython />}
                                    {project.category === "godot" && <SiGodotengine />}
                                    {project.category === "unity" && <FaUnity />}
                                    {project.category === "js" && <FaJs />}
                                    {project.category === "wp" && <FaWordpressSimple />}
                                </div> */}

                                <div className="text-2xl self-end m-4">
                                    <p>project_id: {project.id}</p>
                                </div>

                                <h1 className='text-3xl self-start font-semibold m-4'>
                                    {project.short_name}
                                </h1>
                            </div>
                        ))}
                    </motion.div>

                    <div className="pointer-events-none absolute -top-20 -right-20 w-[20rem] h-[20rem] rounded-full bg-forestGreen/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -right-20 w-[22rem] h-[22rem] rounded-full bg-deepBlue/10 blur-3xl" />

                    {/* <div className='px-4 mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div> */}

                </div>

                {/* <div id="technologies" className="bg-forestGreen p-8 w-full h-halfscreen flex flex-col items-center justify-evenly relative overflow-hidden">

                    <h2 className="text-5xl text-center">Zobacz z jakich technologii korzystam</h2>

                    <p className="text-5xl md:text-7xl flex flex-wrap gap-8 items-center justify-center !text-deepBlue">
                        <motion.a
                            href="https://www.python.org"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <FaPython />
                        </motion.a>

                        <motion.a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <FaJs />
                        </motion.a>

                        <motion.a
                            href="https://isocpp.org"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <TbBrandCpp />
                        </motion.a>

                        <motion.a
                            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <TbBrandCSharp />
                        </motion.a>
                    </p>

                    <p className="text-5xl md:text-7xl flex flex-wrap gap-8 items-center justify-center">
                        <motion.a
                            href="https://react.dev"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <FaReact />
                        </motion.a>

                        <motion.a
                            href="https://wordpress.org"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <FaWordpressSimple />
                        </motion.a>

                        <motion.a
                            href="https://godotengine.org"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <SiGodotengine />
                        </motion.a>

                        <motion.a
                            href="https://unity.com"
                            target="_blank"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <FaUnity />
                        </motion.a>
                    </p>

                    <div className="pointer-events-none absolute -top-16 -left-20 w-[22rem] h-[22rem] rounded-full bg-silverBlue/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-16 -right-20 w-[20rem] h-[20rem] rounded-full bg-deepBlue/15 blur-3xl" />

                </div> */}

                <div id="motto" className="bg-silverBlue p-8 w-full h-screen flex flex-col items-center justify-center gap-y-8 relative overflow-hidden" >
                    <motion.p
                        className="text-3xl md:text-4xl text-forestGreen"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0 }}
                    >
                        W życiu kieruję się zasadą
                    </motion.p>

                    <motion.p
                        className="text-4xl md:text-5xl font-bold text-forestGreen text-center"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        &quot;Mając odpowiednio dużo czasu i determinacji, możesz osiągnąć wszystko.&quot;
                    </motion.p>

                    <motion.p
                        className="text-2xl self-end md:text-3xl text-forestGreen"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Dawid Nowakowski
                    </motion.p>

                    <div className="pointer-events-none absolute -top-28 -left-20 w-[24rem] h-[24rem] rounded-full bg-forestGreen/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -right-20 w-[20rem] h-[20rem] rounded-full bg-charcoal/15 blur-3xl" />

                </div>

                <div
                    id="contact"
                    className="bg-darkBrown w-full flex flex-col lg:flex-row items-center justify-center relative overflow-hidden"
                >
                    {/* Rozmyte tło */}
                    <div className="pointer-events-none absolute -bottom-16 -right-24 w-[26rem] h-[26rem] rounded-full bg-mossGreen/5 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-16 w-[22rem] h-[22rem] rounded-full bg-sageGreen/10 blur-3xl" />

                    {/* Zdjęcie – w tym samym stylu co ABOUT */}
                    <motion.div
                        className="lg:w-1/2 flex justify-center items-center p-8 z-10"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="/images/bg7.jpg"
                            alt="Dawid Nowakowski"
                            className="w-full max-w-xl rounded-3xl shadow-2xl object-cover object-center border-4 border-forestBrown/10"
                        />
                    </motion.div>

                    {/* Tekst – wyśrodkowany pionowo jak w oryginale */}
                    <div className="p-8 w-auto h-screen flex flex-col items-center justify-center gap-y-8 z-20">
                        <div className="my-8 flex flex-col gap-y-6 text-center">
                            <h2 className="text-5xl font-bold">Napisz do mnie!</h2>
                            <h3 className="text-3xl">Razem wyniesiemy twoją stronę na wyższy poziom</h3>
                        </div>

                        <div className="flex flex-col items-center justify-between w-full">
                            <p className="my-8 flex flex-col items-center text-xl md:text-2xl gap-y-1">
                                <a
                                    href="mailto:dawidnowakowski87@gmail.com"
                                    className="opacity-70 transition hover:opacity-100"
                                >
                                    dawidnowakowski87@gmail.com
                                </a>
                                {showPhone ? (
                                    <a
                                        href="tel:+48696776531"
                                        className="opacity-70 transition hover:opacity-100"
                                    >
                                        +48 696 776 531
                                    </a>
                                ) : (
                                    <button
                                        onClick={() => setShowPhone(true)}
                                        className="opacity-70 transition hover:opacity-100"
                                    >
                                        +48 ••• pokaż numer
                                    </button>
                                )}
                            </p>

                            <p className="my-8 flex flex-row text-6xl gap-x-16">
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/dawid.nowakowski.wybielak?locale=pl_PL"
                                    className="opacity-60 transition hover:opacity-90"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/wybielak/"
                                    className="opacity-60 transition hover:opacity-90"
                                >
                                    <FaInstagram />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>


            </div >

            {searchParams.get("project") && (
                <ProjectDetails
                    projectId={searchParams.get("project")}
                    onClose={() => setSearchParams({})}
                />
            )}
        </>

    )
})
