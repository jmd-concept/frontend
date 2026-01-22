'use client'

import React, { useState } from 'react';

const ServicesSection = ({ loading }) => {
    if (loading) {
        return (
            <section id="services" className="py-12 px-4 md:px-0">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
                    <div className="text-center">Chargement...</div>
                </div>
            </section>
        );
    }

    // Données par défaut si l'API ne répond pas
    const servicesData = [
        {
            id: 1,
            icon: "💻",
            title: "Développement Web",
            description: "Création de sites web et applications modernes, performants et adaptés à tous les appareils.",
            features: [
                "Sites vitrines responsifs",
                "Applications web sur mesure",
                "E-commerce sécurisé",
                "Optimisation SEO technique"
            ]
        },
        {
            id: 2,
            icon: "🎨",
            title: "Design Graphique",
            description: "Conception visuelle qui capte l'attention et renforce l'identité de votre marque.",
            features: [
                "Identité visuelle complète",
                "Charte graphique",
                "Design d'interface (UI/UX)",
                "Supports print et digital"
            ]
        },
        {
            "id": 3,
            "icon": "📱",
            "title": "Marketing Digital",
            "description": "Stratégies digitales pour augmenter votre visibilité et générer des leads qualifiés.",
            "features": [
                "Stratégie réseaux sociaux",
                "Campagnes publicitaires",
                "Email marketing",
                "Analyse de performance"
            ]
        },
        {
            "id": 4,
            "icon": "📝",
            "title": "Création de Contenu",
            "description": "Contenu engageant et optimisé pour communiquer efficacement avec votre audience.",
            "features": [
                "Rédaction web SEO",
                "Photos et vidéos professionnelles",
                "Blog et articles",
                "Stratégie éditoriale"
            ]
        },
        {
            "id": 5,
            "icon": "🔍",
            "title": "Référencement SEO",
            "description": "Améliorez votre visibilité sur les moteurs de recherche et attirez du trafic qualifié.",
            "features": [
                "Audit technique SEO",
                "Optimisation on-page",
                "Stratégie de backlinks",
                "Reporting mensuel"
            ]
        },
        {
            "id": 6,
            "icon": "📊",
            "title": "Consulting Digital",
            "description": "Accompagnement stratégique pour transformer votre présence digitale en succès commercial.",
            "features": [
                "Audit digital complet",
                "Plan stratégique personnalisé",
                "Formation équipe",
                "Suivi et ajustements"
            ]
        }
    ]

    return (
        <section className="py-16 bg-gray-50 bg-no-repeat bg-\[url\(\'\/images\/bg-wave\.svg\'\)\]  lg:bg-size-[100%_100%] bg-cover bg-center bg-fixed">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        2 - Nos Services
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Des solutions digitales complètes pour propulser votre entreprise vers le succès
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;


const ServiceCard = ({ service }) => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <div className={`bg-white rounded-xl shadow-lg p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${hoveredService === service.id
            ? 'border-sky-500'
            : 'border-white'
            }`}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
        >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-500 mb-4">{service.description}</p>
            <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition">
                En savoir plus
            </button>
        </div>
    );
};
