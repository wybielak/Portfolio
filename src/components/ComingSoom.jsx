import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function AnimatedText() {
    const text = "Wielkie rzeczy nadchodzą, już wkrótce!";
    const colors = ["text-mistGray", "text-softBeige", "text-silverBlue"];

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

    return (
        <div className="bg-darkBrown w-full flex flex-col items-center justify-center min-h-screen">

            <div className={`fixed top-0 left-0 w-full z-30 p-6 flex items-center justify-between  opacity-50`}>

                <h1 className="text-3xl fade-in-anim z-20"><p className="transition">Dawid Nowakowski</p></h1>

            </div>

            <div id="home" className="p-4 w-screen h-screen flex flex-col items-center justify-center">
                <p className="text-5xl md:text-6xl font-bold">
                    {letters.map((l) => (
                        <span
                            key={l.id}
                            className={`${l.visible ? l.color : "opacity-0"} transition-opacity duration-300`}
                        >
                            {l.char}
                        </span>
                    ))}
                </p>

                <p className="mt-24 flex flex-row text-6xl gap-x-16 opacity-50">
                    <a target="_blank" href="https://www.facebook.com/dawid.nowakowski.wybielak?locale=pl_PL"><FaFacebook /></a>
                    <a target="_blank" href="https://www.instagram.com/wybielak/"><FaInstagram /></a>
                </p>
            </div>
        </div>
    );
}
