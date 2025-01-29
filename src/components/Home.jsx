import Menu from "./Menu";


export default function Home() {

    return (
        <>
            <div className="bg-gradient-darkbrown-olivegreen w-full h-screen flex flex-col items-center justify-center">
                <div className="bg-david-front bg-opacity w-smaller-screen md:w-smaller-screen-pc h-smaller-screen md:h-smaller-screen-pc border-0 rounded-3xl flex flex-col items-center justify-center md:justify-end">

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
            </div>
        </>
    )
}
