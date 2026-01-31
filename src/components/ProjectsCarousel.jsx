import React, { useMemo, useRef, useState } from "react";
import ProjectCarouselItem from "./ProjectCarouselItem";

export default function ProjectsCarousel({ projects }) {
    const items = useMemo(() => projects ?? [], [projects]);
    const [active, setActive] = useState(0);
    const [zoomSrc, setZoomSrc] = useState("");
    const scrollerRef = useRef(null);

    const prev = () => setActive((a) => (a - 1 + items.length) % items.length);
    const next = () => setActive((a) => (a + 1) % items.length);
    const dotGo = (idx) => setActive(idx);

    const scrollToIndex = (idx) => {
        const el = scrollerRef.current;
        if (!el) return;
        const track = el.firstElementChild; // <-- to jest ten div.flex w środku
        if (!track) return;
        const slide = track.children[idx];
        if (!slide) return;
        slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    };

    const prevMobile = () => {
        const idx = (active - 1 + items.length) % items.length;
        setActive(idx);
        scrollToIndex(idx);
    };

    const nextMobile = () => {
        const idx = (active + 1) % items.length;
        setActive(idx);
        scrollToIndex(idx);
    };

    const dotGoMobile = (idx) => {
        setActive(idx);
        scrollToIndex(idx);
    };

    const onMobileScroll = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const w = el.clientWidth || 1;
        const idx = Math.round(el.scrollLeft / w);
        if (idx !== active) setActive(idx);
    };

    if (!items.length) return null;

    return (
        <div className="w-full mt-10">
            {/* MOBILE controls */}
            <div className="flex lg:hidden items-center justify-center gap-4 mb-8">
                <button onClick={prevMobile} className="px-2 sm:px-4 py-2 rounded-xl bg-white/60 text-deepBlue font-semibold hover:bg-white/80 transition">Poprzedni</button>

                <div className="flex items-center gap-1 sm:gap-2">
                    {items.map((_, idx) => (
                        <button key={idx} onClick={() => dotGoMobile(idx)} className={`${idx === active ? "w-10 bg-deepBlue" : "w-2.5 bg-deepBlue/30"} h-2.5 rounded-full transition-all`} />
                    ))}
                </div>

                <button onClick={nextMobile} className="px-2 sm:px-4 py-2 rounded-xl bg-white/60 text-deepBlue font-semibold hover:bg-white/80 transition">Następny</button>
            </div>

            {/* DESKTOP controls */}
            <div className="hidden lg:flex items-center justify-center gap-4 mb-8">
                <button onClick={prev} className="px-2 sm:px-4 py-2 rounded-xl bg-white/60 text-deepBlue font-semibold hover:bg-white/80 transition">Poprzedni</button>

                <div className="flex items-center gap-1 sm:gap-2">
                    {items.map((_, idx) => (
                        <button key={idx} onClick={() => dotGo(idx)} className={`${idx === active ? "w-10 bg-deepBlue" : "w-2.5 bg-deepBlue/30"} h-2.5 rounded-full transition-all`} />
                    ))}
                </div>

                <button onClick={next} className="px-2 sm:px-4 py-2 rounded-xl bg-white/60 text-deepBlue font-semibold hover:bg-white/80 transition">Następny</button>
            </div>

            {/* MOBILE: scroll */}
            <div ref={scrollerRef} onScroll={onMobileScroll} className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory lg:hidden">
                <div className="flex w-full">
                    {items.map((p) => (
                        <div key={p.id} className="min-w-full w-full shrink-0 snap-start">
                            <ProjectCarouselItem p={p} setZoomSrc={setZoomSrc} />
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP: transform */}
            <div className="w-full overflow-hidden hidden lg:block">
                <div className="flex w-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
                    {items.map((p) => (
                        <ProjectCarouselItem key={p.id} p={p} setZoomSrc={setZoomSrc} />
                    ))}
                </div>
            </div>

            {zoomSrc && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]" onClick={() => setZoomSrc("")}>
                    <img src={zoomSrc} alt="" className="block w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-zoom-out" onClick={(e) => { e.stopPropagation(); setZoomSrc(""); }} draggable={false} />
                </div>
            )}
        </div>
    );
}
