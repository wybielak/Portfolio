import Menu from "./Menu";


export default function Home() {

    return (
        <>
            <div className="bg-gradient-darkbrown-olivegreen w-screen h-screen flex flex-col items-center justify-center">
                <div className="bg-david bg-opacity w-smaller-screen md:w-smaller-screen-pc h-smaller-screen md:h-smaller-screen-pc border-0 rounded-3xl flex flex-col items-center justify-between md:justify-center">
                    <h1 className="m-2 text-5xl md:text-9xl font-bold text-center">
                        <span>Dawid Nowakowski</span>
                        <p className="m-2 text-4xl md:text-8xl font-normal fade-in-anim">
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

                    <Menu />
                </div>
            </div>
        </>
    )
}
