'use client'

import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { AvisCard } from "./AvisSection";

export default function AvisCarousel({ data, autoPlay = true }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % data.length);
    const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(next, 10 * 1000);
        return () => clearInterval(timer);
    }, [autoPlay, data.length]);

    // Récupérer 3 avis autour de l’index courant
    const getSlides = () => {
        const slides = [];
        for (let i = 0; i < 3; i++) {
            slides.push(data[(index + i) % data.length]);
        }
        return slides;
    };

    const slides = getSlides();

    return (
        <div className="relative flex flex-col items-center justify-center gap-6">
            {/* Contrôles */}
            <div className="flex items-center gap-6">
                <button
                    onClick={prev}
                    className="p-4 text-gray-400 hover:bg-gray-200 rounded-full"
                >
                    <FaAngleLeft size={24} />
                </button>

                {/* Affichage des 3 avis */}
                <div className="flex flex-col gap-6 xl:flex-row">
                    {slides.map((avis, i) => (
                        <AvisCard key={i} avis={avis} />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="p-4 text-gray-400 hover:bg-gray-200 rounded-full"
                >
                    <FaAngleRight size={24} />
                </button>
            </div>

            {/* Indicateurs */}
            <div className="flex gap-2 mt-4">
                {data.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-2 rounded-full cursor-pointer transition-all 
                            ${i === index ? "bg-amber-500 scale-110" : "bg-gray-300"}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}
