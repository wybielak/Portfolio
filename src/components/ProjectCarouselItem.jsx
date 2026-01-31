import React, { useState } from "react";
import { FaGithub, FaGlobe, FaYoutube, FaReact, FaPython, FaUnity, FaJs, FaWordpressSimple, FaShoppingBasket } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function ProjectCarouselItem({ p, setZoomSrc }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

    const getCategoryIcon = (category) => {
        switch (category) {
            case "react": return <FaReact />;
            case "cpp": return <TbBrandCpp />;
            case "py": return <FaPython />;
            case "godot": return <SiGodotengine />;
            case "unity": return <FaUnity />;
            case "js": return <FaJs />;
            case "wp": return <FaWordpressSimple />;
            case "shop": return <FaShoppingBasket />;
            default: return null;
        }
    };

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setImgDimensions({ width: naturalWidth, height: naturalHeight });
        setImgLoaded(true);
    };

    return (
        <div className="min-w-full w-full shrink-0 flex items-center justify-center">
            <div className="relative overflow-visible px-5">

                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

                    <div className="absolute right-1/4 top-1/2 -translate-y-1/2 text-[25rem] text-deepBlue opacity-5">
                        {getCategoryIcon(p.category)}
                    </div>

                </div>

                <div className="relative z-10 flex items-center justify-center">

                    <div className="w-full flex flex-col md:flex-row gap-x-10 gap-y-5 items-center">

                        <div className="relative flex items-center justify-center gap-x-4">

                            <button onClick={() => setZoomSrc(p.photo)} className="cursor-zoom-in">
                                <img className="max-h-[55vh] w-full object-contain rounded-2xl shadow-xl" src={p.photo} alt={p.name} onLoad={handleImageLoad} draggable={false} />
                            </button>

                            <button onClick={() => setZoomSrc(p.photo_mobile)} className="cursor-zoom-in">
                                <img src={p.photo_mobile} alt={p.name} className="max-h-[100vh] w-full  object-contain rounded-2xl shadow-xl" draggable={false} />
                            </button>

                        </div>

                        <div className="flex flex-col gap-6">

                            <div>
                                <h2 className="text-4xl font-bold text-deepBlue leading-tight">{p.name}</h2>
                                <p className="text-xl text-deepBlue/70 font-semibold mt-2">{p.short_name}</p>
                            </div>

                            <p className="text-lg md:text-xl text-forestBrown/80 leading-relaxed">{p.description}</p>

                            <div className="flex text-deepBlue items-center gap-6 pt-2 text-5xl">
                                {p.youtube && <a href={p.youtube} target="_blank" rel="noreferrer" className="opacity-60 transition hover:opacity-90 hover:scale-105"><FaYoutube /></a>}
                                {p.directlink && <a href={p.directlink} target="_blank" rel="noreferrer" className="text-xl opacity-70 transition hover:opacity-90 hover:scale-105">Odwiedź stronę</a>}
                                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="opacity-70 transition hover:opacity-90 hover:scale-105"><FaGithub /></a>}
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
