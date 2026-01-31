import React, { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Menu from "./Menu";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../mobx/Store";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import ProjectsCarousel from "./ProjectsCarousel";

export default observer(function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { appStorage } = useStore();

    const [projects, setProjects] = useState([]);
    const [showPhone, setShowPhone] = useState(false);

    const text = "Tworzę strony i aplikacje, które zarabiają i budują zaufanie";
    const colors = ["text-mistGray", "text-softBeige", "text-silverBlue", "text-sageGreen"];

    const initialLetters = useMemo(
        () =>
            text.split("").map((char, idx) => ({
                char,
                visible: false,
                color: colors[Math.floor(Math.random() * colors.length)],
                id: idx,
            })),
        [text]
    );

    const [letters, setLetters] = useState(initialLetters);

    const shortText = (t) => {
        return t.length > 50 ? t.slice(0, 50) + "..." : t
    }

    useEffect(() => {
        setLetters(initialLetters);

        let remaining = [...Array(initialLetters.length).keys()];
        const interval = setInterval(() => {
            if (!remaining.length) return clearInterval(interval);

            const randIndex = Math.floor(Math.random() * remaining.length);
            const [letterIndex] = remaining.splice(randIndex, 1);

            setLetters((prev) => prev.map((l, idx) => (idx === letterIndex ? { ...l, visible: true } : l)));
        }, 20);

        return () => clearInterval(interval);
    }, [initialLetters]);

    useEffect(() => {
        setProjects(appStorage.devProjects || []);
    }, [appStorage.devProjects]);

    return (
        <>
            <div className="bg-darkBrown flex flex-col items-center justify-center">

                <Menu />

                <section id="home" className="bg-darkBrown p-8 w-full h-full md:h-screen flex flex-col items-center justify-center relative overflow-hidden">
                    <p className="text-5xl md:text-6xl mt-20 md:mt-0 font-bold text-center max-w-5xl">
                        {letters.map((l) => (
                            <span key={l.id} className={`${l.visible ? l.color : "opacity-0"} transition-opacity duration-300`}>
                                {l.char}
                            </span>
                        ))}
                    </p>

                    <motion.p
                        className="mt-8 text-xl md:text-2xl text-softBeige/80 text-center max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Strony wizytówki, landing page’e i aplikacje webowe. Szybka wycena, sprawna współpraca i wsparcie po wdrożeniu.
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        <a href="#contact" className="px-6 py-3 rounded-xl bg-mossGreen text-darkBrown font-semibold transition-colors duration-300 hover:bg-sageGreen text-center">
                            Darmowa wycena
                        </a>
                        <a href="#projects" className="px-6 py-3 rounded-xl bg-white/10 text-softBeige font-semibold transition hover:bg-white/15 text-center">
                            Zobacz realizacje
                        </a>
                    </motion.div>

                    <div className="pointer-events-none absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-deepBlue/20 blur-3xl -translate-x-1/3 -translate-y-1/3" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-sageGreen/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
                </section>

                <section id="offer" className="bg-darkBrown w-full h-full md:h-screen flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="w-full max-w-6xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 z-10">
                        <div className="flex flex-col justify-center gap-y-8">
                            <motion.h2
                                className="text-5xl md:text-6xl font-bold text-mossGreen leading-tight"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Oferta
                            </motion.h2>

                            <motion.p
                                className="text-xl md:text-xl text-softBeige/80"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.15 }}
                            >
                                Projektuję i wdrażam strony oraz aplikacje webowe, które są szybkie, czytelne i przyjazne dla użytkownika.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 pt-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                            >
                                <a href="#contact" className="px-6 py-3 rounded-xl bg-mossGreen text-darkBrown font-semibold transition-colors duration-300 hover:bg-sageGreen text-center">
                                    Darmowa wycena
                                </a>
                                <a href="#projects" className="px-6 py-3 rounded-xl bg-white/10 text-softBeige font-semibold transition hover:bg-white/15 text-center">
                                    Zobacz realizacje
                                </a>
                            </motion.div>
                        </div>

                        <div className="flex flex-col justify-center gap-y-8">
                            <motion.div
                                className="flex flex-wrap gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                            >
                                {["Szybkie ładowanie", "Responsywność", "Podstawy SEO", "Wsparcie po wdrożeniu", "UX", "Przyjazny interface"].map((item) => (
                                    <span key={item} className="px-4 py-2 rounded-full bg-white/10 text-softBeige text-lg border border-white/10">
                                        {item}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div
                                className="rounded-3xl bg-white/5 border border-white/10 shadow-xl p-8"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >

                                <h3 className="text-2xl font-bold text-softBeige mb-6">Co mogę dla Ciebie zrobić</h3>

                                <ul className="text-lg text-softBeige/80 space-y-4">
                                    <li className="flex gap-3">
                                        <span className="mt-2 w-2 h-3 rounded-full bg-softBeige/40" />
                                        <span><b>Strona firmowa</b> - czytelna oferta, budowanie zaufania i kontakt.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 w-2 h-3 rounded-full bg-softBeige/40" />
                                        <span><b>Landing page</b> - jedna usługa, jedno CTA, pod kampanię lub sprzedaż.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 w-2 h-3 rounded-full bg-softBeige/40" />
                                        <span><b>Aplikacja webowa</b> - logowanie, panel zarządznia, API, integracje.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="mt-2 w-2 h-3 rounded-full bg-softBeige/40" />
                                        <span><b>Wdrożenie i opieka</b> - domena, hosting, rozwój, wsparcie techniczne.</span>
                                    </li>
                                </ul>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <a href="#colab" className="px-6 py-3 rounded-xl bg-white/10 text-softBeige font-semibold transition hover:bg-white/15 text-center">
                                        Zobacz etapy współpracy
                                    </a>
                                    <a href="#contact" className="px-6 py-3 rounded-xl bg-mossGreen text-darkBrown font-semibold transition-colors duration-300 hover:bg-sageGreen text-center">
                                        Napisz do mnie
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute top-0 right-0 w-[20rem] h-[20rem] rounded-full bg-sageGreen/5 blur-3xl -translate-x-1/3 translate-y-1/3" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-deepBlue/20 blur-3xl translate-x-1/3 -translate-y-1/3" />
                </section>

                <section id="colab" className="bg-darkBrown p-8 w-full h-full md:h-screen flex flex-col items-center justify-center gap-y-10 relative overflow-hidden">
                    <motion.h2
                        className="text-5xl mt-10 font-bold text-mossGreen text-center"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Jak wygląda współpraca?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-sageGreen text-center max-w-3xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Oferuję tworzenie witryn internetowych i aplikacji dopasowanych do Twoich potrzeb. Współpraca przebiega w trzech prostych etapach:
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition text-center">
                            <h3 className="text-xl font-semibold text-sageGreen mb-2">1. Ustalenie założeń</h3>
                            <p className="text-softBeige text-lg">Omawiamy cel, zakres, wygląd i priorytety.</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition text-center">
                            <h3 className="text-xl font-semibold text-sageGreen mb-2">2. Realizacja</h3>
                            <p className="text-softBeige text-lg">Tworzę projekt zgodnie z ustaleniami. Na bieżąco możesz zobaczyć efekty prac.</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition text-center">
                            <h3 className="text-xl font-semibold text-sageGreen mb-2">3. Wdrożenie</h3>
                            <p className="text-softBeige text-lg">Publikacja, konfiguracja i wsparcie.</p>
                        </div>
                    </motion.div>

                    <motion.a
                        href="#contact"
                        className="my-10 px-6 py-3 rounded-xl bg-mossGreen text-darkBrown font-semibold transition-colors duration-300 hover:bg-sageGreen"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        Skontaktuj się
                    </motion.a>

                    <div className="pointer-events-none absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full bg-deepBlue/20 blur-3xl -translate-x-1/3" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-sageGreen/10 blur-3xl translate-x-1/3" />
                </section>

                <section id="projects" className="bg-softBeige w-full relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 right-0 w-[30rem] h-[30rem] md:w-[36rem] md:h-[36rem] rounded-full bg-deepBlue/10 blur-3xl -translate-x-1/4 -translate-y-1/4" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full bg-forestGreen/10 blur-3xl translate-x-1/4 -translate-y-1/4" />

                    <div className="w-full sm:max-w-7xl mx-auto py-16 lg:py-24 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.h1
                                className="text-5xl md:text-6xl font-bold text-deepBlue"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Efekty współprac
                            </motion.h1>

                            <motion.p
                                className="mt-6 text-xl md:text-xl text-forestBrown/70"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                Zobacz przykładowe realizacje - od landingów po aplikacje webowe.
                            </motion.p>
                        </div>

                        <ProjectsCarousel projects={projects} />

                        <motion.div
                            className="mt-14 flex justify-center"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <a href="#contact" className="px-6 py-3 rounded-xl bg-deepBlue text-softBeige font-semibold transition hover:opacity-90 text-center">
                                Chcę podobny projekt
                            </a>
                        </motion.div>
                    </div>
                </section>

                <section id="about" className="bg-softBeige w-full h-full lg:h-screen flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-deepBlue/20 blur-3xl translate-x-1/4 -translate-y-1/4" />

                    <div className="w-full max-w-6xl mx-auto px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="flex flex-col gap-y-8">
                            <motion.p
                                className="text-5xl md:text-6xl font-bold text-forestBrown leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                Nazywam się Dawid Nowakowski
                            </motion.p>

                            <motion.p
                                className="text-xl md:text-xl font-semibold text-forestBrown/90"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                Przeprowadzę twoją stronę lub aplikację od pomysłu do wdrożenia.
                            </motion.p>

                            <motion.p
                                className="text-xl md:text-xl text-forestBrown/80 max-w-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Stawiam na jakość, szybkość działania i przejrzysty proces. Chcę, żeby Twoja strona nie tylko wyglądała dobrze,
                                ale realnie pomagała w zdobywaniu klientów.
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.25 }}
                            >
                                <div className="rounded-2xl bg-white/60 border border-forestBrown/10 p-5 shadow-sm">
                                    <p className="text-md text-forestBrown/60">Podejście</p>
                                    <p className="text-xl font-semibold text-forestBrown">Komunikacja</p>
                                    <p className="mt-2 text-md text-forestBrown/70">Jasny zakres i komunikacja.</p>
                                </div>

                                <div className="rounded-2xl bg-white/60 border border-forestBrown/10 p-5 shadow-sm">
                                    <p className="text-md text-forestBrown/60">Standard</p>
                                    <p className="text-xl font-semibold text-forestBrown">Jakość</p>
                                    <p className="mt-2 text-md text-forestBrown/70">Czysty kod i dobre praktyki programistyczne.</p>
                                </div>

                                <div className="rounded-2xl bg-white/60 border border-forestBrown/10 p-5 shadow-sm">
                                    <p className="text-md text-forestBrown/60">Efekt</p>
                                    <p className="text-xl font-semibold text-forestBrown">Wynik</p>
                                    <p className="mt-2 text-md text-forestBrown/70">Strona, która działa i sprzedaje.</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            <img
                                src="/images/bg6.jpg"
                                alt="Dawid Nowakowski"
                                className="w-full max-w-xl rounded-3xl shadow-2xl object-cover object-center border-4 border-forestBrown/10"
                            />
                        </motion.div>
                    </div>
                </section>

                <section id="motto" className="bg-silverBlue w-full relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-0 w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full bg-forestGreen/10 blur-3xl -translate-x-1/4 -translate-y-1/4" />
                    <div className="pointer-events-none absolute bottom-0 right-0 w-[30rem] h-[30rem] md:w-[36rem] md:h-[36rem] rounded-full bg-charcoal/10 blur-3xl translate-x-1/4 -translate-y-1/4" />

                    <div className="w-full max-w-5xl mx-auto px-8 py-20 lg:py-28 relative z-10">
                        <motion.p
                            className="text-2xl md:text-4xl text-forestGreen"
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            W życiu kieruję się zasadą
                        </motion.p>

                        <motion.div
                            className="mt-6 rounded-3xl bg-white/50 border border-forestGreen/10 shadow-xl p-10 md:p-12"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <p className="text-5xl md:text-6xl leading-none text-forestGreen/40 select-none">“</p>

                            <p className="mt-4 text-2xl md:text-4xl font-bold text-forestGreen text-center leading-snug">
                                Mając odpowiednio dużo czasu i determinacji, możesz osiągnąć wszystko.
                            </p>

                            <div className="mt-8 flex items-center justify-end">
                                <div className="h-px w-12 bg-forestGreen/30 mr-4" />
                                <p className="text-lg md:text-xl font-semibold text-forestGreen">Dawid Nowakowski</p>
                            </div>
                        </motion.div>

                        <motion.p
                            className="mt-8 text-base md:text-lg text-forestGreen/70 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            Konsekwencja i dobrze zaplanowany proces stanowią klucz do sukcesu.
                        </motion.p>
                    </div>
                </section>

                <section id="contact" className="bg-darkBrown w-full h-full lg:h-screen flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 right-0 w-[34rem] h-[34rem] rounded-full bg-mossGreen/10 blur-3xl -translate-x-1/4 -translate-y-1/4" />
                    <div className="pointer-events-none absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-deepBlue/20 blur-3xl translate-x-1/4 -translate-y-1/4" />

                    <div className="w-full max-w-6xl mx-auto px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <motion.div
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <img
                                src="/images/bg7.jpg"
                                alt="Dawid Nowakowski"
                                className="w-full max-w-xl rounded-3xl shadow-2xl object-cover object-center border-4 border-white/10"
                            />
                        </motion.div>

                        <div className="flex flex-col justify-center gap-y-8 text-softBeige">
                            <div className="space-y-4">
                                <motion.h2
                                    className="text-4xl md:text-6xl font-bold leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                >
                                    Porozmawiajmy o Twoim projekcie
                                </motion.h2>

                                <motion.p
                                    className="text-xl md:text-xl text-softBeige/80 max-w-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                >
                                    Napisz krótko co potrzebujesz (strona, aplikacja), a wrócę z propozycją i wyceną.
                                </motion.p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a href="mailto:dawidnowakowski87@gmail.com" className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
                                    <p className="text-sm text-softBeige/60">Email</p>
                                    <p className="text-lg md:text-xl font-semibold break-all">dawidnowakowski87@gmail.com</p>
                                    <p className="mt-2 text-sm text-softBeige/70">Najszybszy kontakt - otrzymasz odpowiedź do 24 godzin.</p>
                                </a>

                                {showPhone ? (
                                    <a href="tel:+48696776531" className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
                                        <p className="text-sm text-softBeige/60">Telefon</p>
                                        <p className="text-lg md:text-xl font-semibold">+48 696 776 531</p>
                                        <p className="mt-2 text-sm text-softBeige/70">Preferujesz rozmowę? Zadzwoń lub napisz SMS.</p>
                                    </a>
                                ) : (
                                    <button onClick={() => setShowPhone(true)} className="text-left rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
                                        <p className="text-sm text-softBeige/60">Telefon</p>
                                        <p className="text-lg md:text-xl font-semibold">+48 ••• pokaż numer</p>
                                        <p className="mt-2 text-sm text-softBeige/70">Kliknij, aby wyświetlić numer.</p>
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                <a href="mailto:dawidnowakowski87@gmail.com?subject=Wycena%20projektu" className="px-6 py-3 rounded-xl bg-mossGreen text-darkBrown font-semibold transition-colors duration-300 hover:bg-sageGreen text-center">
                                    Poproś o wycenę
                                </a>

                                <div className="flex items-center gap-6 text-5xl">
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dawid.nowakowski.wybielak?locale=pl_PL" className="opacity-60 transition hover:opacity-90">
                                        <FaFacebook />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/wybielak/" className="opacity-60 transition hover:opacity-90">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                            <p className="text-sm text-softBeige/60">
                                Wycena jest darmowa i niezobowiązująca. Możemy zacząć od krótkiej rozmowy i opisu potrzeb.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {searchParams.get("project") && (
                <ProjectDetails projectId={searchParams.get("project")} onClose={() => setSearchParams({})} />
            )}
        </>
    );
});
