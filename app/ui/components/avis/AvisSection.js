'use client'

import AvisCarousel from "./AvisCarousel";
import { FaUser, FaCertificate } from "react-icons/fa";
import { PiStarFill, PiStarHalfFill, PiStar } from "react-icons/pi";

export default function AvisSection({ avisData }) {
    return (
        <section className="py-12 px-6 grid grid-rows-2">
            <h2 className="text-center text-4xl font-bold mb-16">
                Avis Clients
            </h2>

            <div className="flex justify-center">
                <a
                    href="https://g.page/r/CVdsgPurf4MiEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 py-2 px-12 bg-blue-500 text-white rounded-full hover:bg-blue-800 transition-colors"
                >
                    Publier un avis sur JMD
                </a>
            </div>

            <AvisCarousel data={avisData} />

        </section>
    );
}

export function AvisCard({ avis }) {
    return (
        <div className="p-6 w-86 flex flex-col items-start gap-4 text-center bg-gray-50 rounded-2xl">
            <div className="flex gap-4 mb-4">
                {<FaUser size={40} />}
                <div className="flex flex-col">
                    <h3 className="font-semibold">{avis.nom}</h3>
                    <h4 className="text-sm text-gray-400">{avis.profession}</h4>
                </div>
                <FaCertificate className="text-blue-500" />
            </div>
            <div className="flex gap-1">
                {/* On passe la note directement */}
                <Stars rating={avis.cote} />
            </div>

            <p className="text-gray-600 text-sm text-justify">{avis.description}</p>

        </div>
    );
}

function Stars({ rating = 3.5 }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => {
                const idx = i + 1;
                if (rating >= idx) {
                    return <PiStarFill key={i} size={18} className="text-amber-500" />;
                }
                if (rating >= idx - 0.5) {
                    return <PiStarHalfFill key={i} size={18} className="text-amber-500" />;
                }
                return <PiStar key={i} size={18} className="text-amber-500" />;
            })}
        </div>
    );
}
