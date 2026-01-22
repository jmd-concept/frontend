'use client'

import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        À propos de <span className="text-blue-600">JMD Concept</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nous sommes une équipe de passionnés spécialisés dans la création
                        de solutions digitales innovantes pour propulser votre entreprise
                        à l&apos;ère numérique.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative m-4 h-82 md:h-105 lg:h-82 rounded-2xl overflow-hidden">
                        {/* <Image
                            src="images/logo-jmd.jpg"
                            alt="Équipe JMD Concept"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        /> */}

                        <video
                            src="/images/presentation.mp4"
                            controls autoPlay loop muted
                            alt="Présentation JMD Concept"
                            className="object-cover bg-cover bg-center h-full"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Notre Mission
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Chez JMD Concept, nous croyons que chaque entreprise mérite
                            une présence digitale exceptionnelle. Notre mission est de
                            transformer vos idées en solutions concrètes grâce à notre
                            expertise technique et créative.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        Innovation et Qualité
                                    </h4>
                                    <p className="text-gray-600">
                                        Nous combinons technologies de pointe et design moderne
                                        pour créer des solutions qui font la différence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        Approche Collaborative
                                    </h4>
                                    <p className="text-gray-600">
                                        Nous travaillons main dans la main avec vous pour
                                        comprendre vos besoins et atteindre vos objectifs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                        Support Continu
                                    </h4>
                                    <p className="text-gray-600">
                                        Notre engagement ne s&apos;arrête pas à la livraison.
                                        Nous offrons un support et des mises à jour régulières.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Contactez-nous
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                        <div className="text-gray-600">Projets réalisés</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
                        <div className="text-gray-600">Clients satisfaits</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
                        <div className="text-gray-600">Experts dédiés</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
                        <div className="text-gray-600">Satisfaction client</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;