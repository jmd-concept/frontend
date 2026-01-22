'use client'

import { useEffect, useState } from 'react';
import { Link } from "next/link";
//import Image from 'next/image';
import { motion } from 'framer-motion';
//import lg from 'public/images-service/reseaux-sociaux.png';
import { FaUserCircle, FaPhone, FaArrowDown } from 'react-icons/fa';


export const Hero = () => {
    return (
        <section
            id="hero"
            className="pt-36 pb-12 px-4 md:px-0 bg-no-repeat bg-\[url\(\'\/images\/arriere-plan-1\.png\'\)\]  lg:bg-size-[100%_100%] bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url('images/arriere-plan-1.png')"
            }}
        >
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-6">
                    1 - Solutions Digitales Complètes
                </h1>
                <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                    Création de contenu, développement web, marketing digital et design sur mesure pour propulser votre entreprise
                </p>
                <a
                    href='#devis'
                    className="bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors">
                    Demander un Devis
                </a>
            </div>
        </section>
    );
};

export default Hero;

export const Hero2 = ({ onSubscribe }) => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const fullText1 = "1 - Bienvenue chez JMD Concept";
    const fullText2 = "L'innovaton au service de votre visibilité" || "Votre partenaire pour une transformation digitale réussie";
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    useEffect(() => {
        if (index1 < fullText1.length) {
            setTimeout(() => {
                setText1(text1 + fullText1[index1]);
                setIndex1(index1 + 1);
            }, 100);
        } else if (index2 < fullText2.length) {
            setTimeout(() => {
                setText2(text2 + fullText2[index2]);
                setIndex2(index2 + 1);
            }, 50);
        }
    }, [index1, index2]);

    const handleScrollClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: "url('/images/arriere-plan-1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* <Image
                src={lg}
                alt="Background"
                fill
                placeholder="blur"
                quality={10}
                className="object-cover object-center z-0"
                sizes="10vw"
                priority
            /> */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/30"></div>

            {/* Animation ping */}
            {/* <div className="absolute top-20 left-24 w-20 h-20 bg-white/5 rounded-full animate-ping animation-delay-1000 hidden lg:block"></div> */}

            {/* Contenu */}
            <div className="relative z-10 container mx-auto px-4">
                {/* Texte animé 1 */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <span className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                        {text1}
                        <span className="animate-pulse">|</span>
                    </span>
                </motion.h1>

                {/* Carte centrale */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-16"
                >
                    {/* Texte animé 2 */}
                    <p className="text-xl md:text-2xl text-white text-center mb-12 font-medium drop-shadow-lg">
                        {text2}
                        <span className="animate-pulse">|</span>
                    </p>

                    {/* Boutons */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <a
                            href="#about"
                            onClick={(e) => handleScrollClick(e, 'about')}
                            className="flex items-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-2xl hover:bg-primary-800 transition-colors hover:scale-105 cursor-pointer"
                        >
                            <FaUserCircle size={20} />
                            <span className="font-semibold">Qui sommes-nous</span>
                        </a>

                        <a
                            href="#contact"
                            onClick={(e) => handleScrollClick(e, 'contact')}
                            className="flex items-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-2xl hover:bg-primary-800 transition-colors hover:scale-105 cursor-pointer"
                        >
                            <FaPhone size={20} />
                            <span className="font-semibold">Contactez-nous</span>
                        </a>
                    </div>
                </motion.div>

                {/* Statistiques */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    <div className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">150+</h3>
                        <p className="text-white/90">Clients satisfaits</p>
                    </div>
                    <div className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">10+</h3>
                        <p className="text-white/90">Partenaires</p>
                    </div>
                    <div className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">25+</h3>
                        <p className="text-white/90">Projets réalisés</p>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                >
                    <a
                        href="#about"
                        onClick={(e) => handleScrollClick(e, 'about')}
                        className="animate-bounce cursor-pointer"
                    >
                        <FaArrowDown className="text-white text-lg" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};