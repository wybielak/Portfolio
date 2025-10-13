import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {

    const [loading, setLoading] = useState(true);
    const strokeWidth = 5;

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);

    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }} // szybkie zanikanie
                    className="fixed inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "#2E2B1F" }}
                >
                    <motion.svg
                        viewBox="0 0 500 250"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3/4 md:w-1/5 h-auto"
                    >
                        {/* Litera D */}
                        <motion.path
                            d="M90 200 L90 50 L170 50 Q240 50 240 125 Q240 200 170 200 Z"
                            fill="none"
                            stroke="#8DA06E"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 1 }}
                            animate={{ pathLength: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Litera N */}
                        <motion.path
                            d="M300 200 L300 50 L400 200 L400 50"
                            fill="none"
                            stroke="#60694A"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 1 }}
                            animate={{ pathLength: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        {/* Okrąg */}
                        <motion.circle
                            cx="250"
                            cy="125"
                            r="120"
                            fill="none"
                            stroke="#8DA06E"
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
