import { FaJs, FaPython, FaReact, FaUnity } from "react-icons/fa";
import Menu from "./Menu";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";
import { FaAnglesDown } from "react-icons/fa6";


export default function Home() {

    return (
        <>
            <div className="bg-gradient-darkbrown-olivegreen w-full flex flex-col items-center justify-center">
                <div className="my-2 bg-david-front bg-opacity w-smaller-screen md:w-smaller-screen-pc h-smaller-screen md:h-smaller-screen-pc border-0 rounded-3xl flex flex-col items-center justify-center md:justify-end">

                    <span className="absolute bottom-5 left-5 text-xl fade-in-slower-anim">
                        <span>
                            <a href="#aboutme" className="flex flex-row items-center justify-center gap-x-2">
                                <FaAnglesDown />
                                <span className="hidden md:block" >About me</span>
                            </a>
                        </span>
                    </span>

                    <div className="md:m-8 p-4 w-smaller-screen md:w-smaller-screen-pc h-smaller-screen md:h-halfscreen flex flex-col items-center justify-between md:justify-around">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl w-full text-center flex flex-col justify-between items-center">
                            <p className="flex">
                                Dawid Nowakowski
                            </p>
                        </h1>

                        <Menu animSwitch={true} />
                    </div>
                </div>

                <div id="aboutme" className="my-2 bg-david-back bg-opacity-darker w-smaller-screen md:w-smaller-screen-pc md:h-smaller-screen-pc border-0 rounded-3xl flex flex-col items-center justify-center">

                    <div className="lg:h-smaller-screen-pc flex flex-col items-center justify-center">

                        <h1 className="text-4xl md:text-6xl w-full text-center m-5 mt-10 ">About me</h1>

                        <div className="flex flex-col md:flex-row flex-nowrap items-center justify-center w-11/12 lg:w-3/4">

                            <div className="p-5 m-5 bg-transparent opacity-90 border-0 rounded-3xl flex-1 h-500px flex flex-col items-center justify-evenly">
                                <h2 className="text-4xl font-bold text-center my-2">Hi, I&apos;m Dawid!</h2>
                                <p className="text-lg flex flex-col gap-y-3">
                                    <p>
                                        I am currently studying computer science, but beyond my studies, I actively focus on my career development.
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

                </div>

            </div>
        </>
    )
}
