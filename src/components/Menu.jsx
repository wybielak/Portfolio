import { useEffect, useState } from 'react'

export default function Menu() {

    const MENU = [
        { label: "START", link: "#home" },
        { label: "O MNIE", link: "#about" },
        { label: "PROJEKTY", link: "#projects" },
        { label: "KONTAKT", link: "#contact" },
    ]

    const [menuActive, setMenuActive] = useState(false)

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(prevState => !prevState)
        console.log(menuActive)
    }

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-30 py-6 px-8 flex items-center justify-between md:backdrop-blur-sm transition-colors duration-300 ${scrolling ? "bg-black/30" : "bg-black/0"} ${menuActive ? "backdrop-blur-none" : "backdrop-blur-sm"}`}>

                <h1 className="text-3xl fade-in-anim z-20"><p className="transition">DN</p></h1>

                <button onClick={toggleMenu} className="relative w-8 h-6 flex flex-col justify-between items-center md:hidden fade-in-anim z-20">
                    <span className={`h-[3px] w-full bg-softBeige rounded-sm transition-all ease-in-out ${menuActive ? "rotate-45 translate-y-[10px]" : ""}`}></span>
                    <span className={`h-[3px] w-10/12 bg-softBeige rounded-sm transition-all ease-in-out ${menuActive ? "scale-x-0" : "scale-x-100"}`}></span>
                    <span className={`h-[3px] w-full bg-softBeige rounded-sm transition-all ease-in-out ${menuActive ? "-rotate-45 -translate-y-[10px]" : ""}`}></span>
                </button>


                <div className={`fixed top-0 left-0 h-full w-full bg-charcoal bg-opacity-40 backdrop-blur-md md:backdrop-blur-none md:bg-transparent md:static md:h-auto md:w-auto flex flex-col md:flex-row justify-center items-center gap-16 transition-transform duration-500 ease-in-out fade-in-anim md:translate-x-0 ${menuActive ? "translate-x-0" : "-translate-x-full"}`}>
                    {MENU.map(({label, link}) => (
                        <span key={label} ><button type="button" onClick={toggleMenu} className="text-2xl md:text-xl tracking-widest transition hover:opacity-70 hover:scale-110"><a href={link}>{label}</a></button></span>
                    ))}
                </div>

            </div>
        </>
    )
}
