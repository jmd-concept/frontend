'use client'

import React from 'react';
import Image from 'next/image';

const Promotions = ({ promotions, loading }) => {
    return (
        <section id="promotion" className="py-16 bg-gray-50">

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Promotions
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nos promotions
                    </p>
                </div>

                {loading &&
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="./images-service/ia.png"
                                alt="Équipe JMD Concept"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                }

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-60 md:h-80 lg:h-59 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="./images-service/ia.png"
                            alt="Équipe JMD Concept"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotions;