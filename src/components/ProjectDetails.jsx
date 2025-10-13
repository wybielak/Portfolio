import { useStore } from "../mobx/Store";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

export default function ProjectDetails({ projectId, onClose }) {
    const { appStorage } = useStore();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(appStorage.devProjects);
    }, [appStorage.devProjects]);

    const project = projects.find((p) => p.id === projectId);

    if (!project) return null; // jeśli projekt nie istnieje, nie pokazuj modalu

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // klik w tło zamyka modal
        >
            <motion.div
                className="bg-darkBrown p-8 rounded-md max-w-3xl w-full text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // klik wewnątrz modalu nie zamyka go
            >

                <div className="mt-4">
                    <h1 className="text-5xl font-bold">{project.name}</h1>
                    <h2 className="text-3xl font-bold">{project.short_name}</h2>
                    <p className="text-xl mt-4">{project.description}</p>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block text-blue-500 hover:underline"
                        >
                            Zobacz projekt
                        </a>
                    )}

                    <button
                        onClick={onClose}
                        className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Zamknij
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
