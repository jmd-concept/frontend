'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandPointRight } from 'react-icons/fa6';
import { FaDatabase, FaCode, FaVideo, FaChartLine, FaGraduationCap, FaPrint } from 'react-icons/fa';

const ServicesComponent = ({ services, loading }) => {
    const [hoveredService, setHoveredService] = useState(null);

    // Données par défaut si l'API ne répond pas
    const defaultServices = [
        {
            id: 1,
            title: 'Boostage de vos produits',
            description: 'Boostage pour la promotion de vos produits',
            icon: 'chart-line',
            details: [
                'Boostage promotionnel de vos produits',
                'Création de pages réseaux sociaux',
                'Gestion et suivi de vos promotions',
            ],
            image: './images-service/reseaux-sociaux.png'
        },
        {
            id: 2,
            title: 'Création de contenus Professionnelle',
            description: 'Production de contenu digital de qualité',
            icon: 'video',
            details: [
                'Production audiovisuelle (vidéos, teasers, podcasts)',
                'Visuels publicitaires (affiches, flyers, bannières, cartes de visite)',
                'Gestion et animation des réseaux sociaux',
            ],
            image: 'images-service/contenu.png'
        },
        {
            id: 3,
            title: 'Conception de sites web et applications',
            description: 'Développement web et intégration IA',
            icon: 'code',
            details: [
                'Sites vitrines, blogs, E-commerce, Portfolio',
                'Création ChatBot & Modul d\'automatisation',
                'Applications mobiles (Android & IOS)',
                'SO, SEA et Maintenance'
            ],
            image: 'images-service/site-web.png'
        },
        {
            id: 4,
            title: 'Création de base de données et BI',
            description: 'Solutions de gestion de données',
            icon: 'database',
            details: [
                'Modélisation et conception de bases de données',
                'Conception Eentrepôt de données et processus ETL',
                'Analyse et visualisation des données',
                'Sécurisation et sauvegarde des données'
            ],
            image: 'images-service/database.jpg'
        },
        {
            id: 5,
            title: 'Formations professionnelles',
            description: 'Formations dans divers domaines digitaux',
            icon: 'graduation-cap',
            details: [
                'Création de contenues',
                'Développement web',
                'Base de données...',
            ],
            button: <FaGraduationCap size={20} />,
            image: 'images-service/formation.jpg'
        },
        {
            id: 6,
            title: 'Imprimerie moderne',
            description: 'Services d\'impression professionnelle',
            icon: 'print',
            details: ['Service d\'impression à venir...'],
            image: 'images-service/printer.jpg'
        }
    ];

    const servicesToDisplay = services && services.length > 0 ? services : defaultServices;

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'chart-line': return <FaChartLine className="w-8 h-8 text-sky-700" />;
            case 'video': return <FaVideo className="w-8 h-8 text-sky-700" />;
            case 'code': return <FaCode className="w-8 h-8 text-sky-700" />;
            case 'database': return <FaDatabase className="w-8 h-8 text-sky-700" />;
            case 'graduation-cap': return <FaGraduationCap className="w-8 h-8 text-sky-700" />;
            case 'print': return <FaPrint className="w-8 h-8 text-sky-700" />;
            default: return <FaCode className="w-8 h-8 text-sky-700" />;
        }
    };

    return (
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        2 - NOS SERVICES
                    </h2>
                    <p className="text-md text-gray-600 max-w-3xl mx-auto">
                        Nous vous proposons nos meilleurs services à un coût abordable et adaptatif
                    </p>
                </motion.div>

                {/* Services Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gray-200 rounded-xl h-80"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesToDisplay.map((service, index) => (
                            <motion.div
                                key={service.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div
                                    className={`bg-white rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${hoveredService === service.id
                                        ? 'border-sky-500'
                                        : 'border-white'
                                        }`}
                                    onMouseEnter={() => setHoveredService(service.id)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    <div className="p-5">
                                        {/* Service Header */}
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="shrink-0">
                                                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                                                    <div className="text-sky-600">
                                                        {getIcon(service.icon)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-500">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Service Details */}
                                        <ul className="space-y-2 mb-6">
                                            {service.details && service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}

                                            {/* Lien vers les formations */}
                                            {service.id === 5 && ( // Seulement pour la formation
                                                <div className='flex items-center mt-4'>
                                                    <FaHandPointRight className="text-sky-600 mr-2" />
                                                    <Link
                                                        href='#contact'
                                                        className='text-sm text-sky-600 underline hover:text-sky-800 transition-colors'
                                                    >
                                                        Demander une formation personnalisée
                                                    </Link>
                                                </div>
                                            )}
                                        </ul>

                                        {/* Service Image */}
                                        {service.image && (
                                            <div className="mt-6">
                                                <div className="relative w-full h-full lg:h-32 overflow-hidden rounded-lg">
                                                    {/** Utilisateur de Image de Next.js pour l'optimisation */}
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                                        onError={(e) => e.target.src = '/images-service/default-service/jpg'} //Image de sécours
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Effect */}
                                    {hoveredService === service.id && (
                                        <div className="absolute inset-0 border border-sky-100 rounded-xl pointer-events-none"></div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-26 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <div className="p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-sky-600 mb-2">99%</div>
                        <div className="text-gray-600">Satisfaction client</div>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-sky-600 mb-2">24/7</div>
                        <div className="text-gray-600">Support technique</div>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-sky-600 mb-2">1 An</div>
                        <div className="text-gray-600">Garantie sur nos services</div>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-sky-600 mb-2">30j</div>
                        <div className="text-gray-600">Délai de remboursement</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesComponent;