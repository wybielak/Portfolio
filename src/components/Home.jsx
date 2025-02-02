import { FaJs, FaReact, FaUnity } from "react-icons/fa";
import Menu from "./Menu";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";


export default function Home() {

    return (
        <>
            <div className="bg-gradient-darkbrown-olivegreen w-full flex flex-col items-center justify-center">
                <div className="my-2 bg-david-front bg-opacity w-smaller-screen md:w-smaller-screen-pc h-smaller-screen md:h-smaller-screen-pc border-0 rounded-3xl flex flex-col items-center justify-center md:justify-end">

                    <div className="m-2 p-4 w-smaller-screen md:w-smaller-screen-pc h-smaller-screen md:h-halfscreen flex flex-col items-center justify-around">
                        <h1 className="text-2xl md:text-9xl w-full text-center flex flex-row md:flex-col justify-between items-start md:items-center">
                            <p className="flex flex-wrap font-bold md:font-normal flex-col md:flex-row">
                                <span>D</span>
                                <span>a</span>
                                <span>w</span>
                                <span>i</span>
                                <span>d</span>
                                <span>&nbsp;</span>
                                <span>N</span>
                                <span>o</span>
                                <span>w</span>
                                <span>a</span>
                                <span>k</span>
                                <span>o</span>
                                <span>w</span>
                                <span>s</span>
                                <span>k</span>
                                <span>i</span>
                            </p>
                            <p className="md:m-2 text-2xl md:text-6xl fade-in-anim tracking-widest flex flex-col md:flex-row">
                                <span>p</span>
                                <span>o</span>
                                <span>r</span>
                                <span>t</span>
                                <span>f</span>
                                <span>o</span>
                                <span>l</span>
                                <span>i</span>
                                <span>o</span>
                            </p>
                        </h1>

                        <Menu animSwitch={true} />
                    </div>
                </div>

                <div className="my-2 bg-david-back bg-opacity w-smaller-screen md:w-smaller-screen-pc lg:h-smaller-screen-pc border-0 rounded-3xl flex flex-col items-center justify-center">

                    <div className="lg:h-smaller-screen-pc flex flex-col items-center justify-center">

                        <h1 className="text-4xl md:text-6xl w-full text-center m-5 mt-10 ">About me</h1>

                        <div className="flex flex-col lg:flex-row flex-nowrap items-center justify-center w-11/12 md:w-2/3">

                            <div className="p-5 m-5 bg-gradient-darkbrown-olivegreen opacity-90 border-0 rounded-3xl flex-1 h-500px flex flex-col items-center justify-evenly">
                                <h2 className="text-4xl font-bold text-center">I&apos;m Dawid</h2>
                                <p className="text-lg lg:text-xl flex flex-col gap-y-3">
                                    <p>
                                        I am currently studying computer science, but beyond my studies, I actively focus on my career development.
                                    </p>
                                    <p>
                                        I learn new things quickly and I am creative and efficient in managing my time.
                                        I am persistent and always see my projects through to completion.
                                    </p>
                                    <p>
                                        In my free time, I enjoy metalworking, woodworking, and making pizza, it is a great way to take a break from the IT world.
                                    </p>
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center flex-1">

                                <div className="p-5 m-5 bg-gradient-olivegreen-darkbrown opacity-90 border-0 rounded-3xl h-230px flex flex-col items-center justify-around">
                                    <h2 className="text-2xl font-bold text-center">Lorem ipsum2</h2>
                                    <p>
                                        Lorem ipsum dolor sit amen.Lorem ipsum dolor sit amen.Lorem ipsum dolor sit amen.
                                        Lorem ipsum dolor sit amen.Lorem ipsum dolor sit amen.Lorem ipsum dolor sit amen.
                                        Lorem ipsum dolor sit amen.
                                    </p>
                                </div>

                                <div className="p-5 m-5 bg-gradient-olivegreen-darkbrown opacity-90 border-0 rounded-3xl h-230px flex flex-col items-center justify-around">
                                    <h2 className="text-2xl font-bold text-center">My technologies</h2>
                                    <p className="text-6xl flex flex-wrap gap-3 items-center justify-center">
                                        <FaReact />
                                        <FaJs />
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
