import { useStore } from "../mobx/Store";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaGithub, FaGlobe, FaInstagram, FaTiktok, FaYoutube,
    FaReact, FaPython, FaUnity, FaJs, FaWordpressSimple,
    FaShoppingBasket
} from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function ProjectDetails({ projectId, onClose }) {
    const { appStorage } = useStore();
    const [projects, setProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setImgDimensions({ width: naturalWidth, height: naturalHeight });
        setIsLoaded(true);
    };

    useEffect(() => {
        setProjects(appStorage.devProjects);
    }, [appStorage.devProjects]);

    const project = projects.find((p) => p.id === projectId);
    if (!project) return null;

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

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose()}
        >
            <motion.div
                className="relative bg-deepBlue p-8 flex items-start justify-center max-w-3xl h-screen md:h-auto w-screen md:w-full rounded-lg text-white overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                
                <div className="absolute -left-52 -bottom-52 inset-0 flex items-end justify-start text-[55rem] text-white opacity-5 z-60 pointer-events-none select-none">
                    {getCategoryIcon(project.category)}
                </div>

                <div className="flex flex-col items-start justify-center relative z-10">
                    {!isLoaded && <div className="my-5 h-60 rounded-lg w-full bg-gray-300 animate-pulse"></div>}

                    <motion.div
                        className={`${!isLoaded ? "hidden" : ""} my-5 flex items-center justify-center cursor-zoom-in`}
                    >
                        <motion.img
                            className={`${imgDimensions.width > imgDimensions.height ? "w-full" : "w-1/3"} rounded-lg shadow-lg`}
                            src={project.photo}
                            alt={project.name}
                            onLoad={handleImageLoad}
                            onClick={() => setIsZoomed(true)}
                            whileHover={{ scale: 1.03 }}
                        />
                    </motion.div>

                    <h1 className="text-5xl font-bold">{project.name}</h1>
                    <h2 className="text-3xl font-bold mt-2">{project.short_name}</h2>
                    <p className="text-xl mt-5">{project.description}</p>

                    <div className="mt-5 w-full flex flex-row items-center justify-between">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 cursor-pointer rounded-lg w-fit bg-evil text-white transition hover:scale-105 shadow-lg"
                        >
                            Zamknij
                        </button>
                        <div className="cursor-pointer text-6xl self-end flex flex-row gap-x-5">
                            {project.youtube && <a href={project.youtube} target="_blank" className='opacity-60 transition hover:opacity-90 hover:scale-105'><FaYoutube /></a>}
                            {project.directlink && <a href={project.directlink} target="_blank" className='opacity-70 transition hover:opacity-90 hover:scale-105'><FaGlobe /></a>}
                        </div>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                    >
                        <motion.img
                            src={project.photo}
                            alt={project.name}
                            className="block w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-zoom-out"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                            draggable={false}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
