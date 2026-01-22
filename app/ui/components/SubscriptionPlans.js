'use client';

import { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

const SubscriptionPlans = () => {
    const [selectedPlan, setSelectedPlan] = useState('pro');
    const [billingCycle, setBillingCycle] = useState('yearly');

    const plans = [
        {
            id: 'basic',
            name: 'Basique',
            description: 'Pour les petites entreprises',
            price: {
                monthly: 99,
                quarterly: 269,
                yearly: 999
            },
            features: [
                'Site web vitrine',
                'Hébergement basique',
                'Support email',
                'Mises à jour mensuelles',
                'Nom de domaine inclus',
                'Certificat SSL'
            ],
            notIncluded: [
                'Support téléphonique',
                'Développements sur mesure',
                'Formation avancée'
            ],
            popular: false
        },
        {
            id: 'pro',
            name: 'Professionnel',
            description: 'Pour les entreprises en croissance',
            price: {
                monthly: 199,
                quarterly: 539,
                yearly: 1999
            },
            features: [
                'Site web e-commerce',
                'Hébergement avancé',
                'Support prioritaire',
                'Mises à jour hebdomadaires',
                'Analyse SEO mensuelle',
                'Backup quotidien',
                'CDN intégré',
                'API personnalisée'
            ],
            notIncluded: [
                'Support 24/7',
                'Développements complexes'
            ],
            popular: true
        },
        {
            id: 'enterprise',
            name: 'Entreprise',
            description: 'Solution complète sur mesure',
            price: {
                monthly: 399,
                quarterly: 1079,
                yearly: 3999
            },
            features: [
                'Application sur mesure',
                'Hébergement dédié',
                'Support 24/7',
                'Développements continus',
                'Formation équipe',
                'Maintenance complète',
                'SLA garantie',
                'Audit sécurité'
            ],
            notIncluded: [],
            popular: false
        }
    ];

    const billingCycles = [
        { id: 'monthly', label: 'Mensuel', discount: 0 },
        { id: 'quarterly', label: 'Trimestriel', discount: 10 },
        { id: 'yearly', label: 'Annuel', discount: 20 }
    ];

    const handleSubscribe = async (planId) => {
        // Dans une application réelle, on redirigerait vers la page de paiement
        // ou on appellerait l'API pour créer l'abonnement
        console.log('Abonnement sélectionné:', planId, billingCycle);
        alert(`Fonctionnalité d'abonnement en cours de développement`);
    };

    return (
        <section id="subscriptions" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Nos offres d'abonnement
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choisissez l'abonnement qui correspond à vos besoins.
                        Bénéficiez d'un support continu et de mises à jour régulières.
                    </p>
                </div>

                {/* Sélecteur de cycle de facturation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        {billingCycles.map((cycle) => (
                            <button
                                key={cycle.id}
                                onClick={() => setBillingCycle(cycle.id)}
                                className={`px-6 py-2 rounded-md font-medium transition-colors ${billingCycle === cycle.id
                                    ? 'bg-white shadow text-primary-600'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {cycle.label}
                                {cycle.discount > 0 && (
                                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                        -{cycle.discount}%
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Plans */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-xl ${plan.popular
                                ? 'border-primary-500 shadow-lg scale-105'
                                : 'border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Le plus populaire
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                <p className="text-gray-600 mt-2">{plan.description}</p>

                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {plan.price[billingCycle]}$
                                    </span>
                                    <span className="text-gray-600">
                                        /{billingCycle === 'monthly' ? 'mois' : billingCycle === 'quarterly' ? 'trimestre' : 'an'}
                                    </span>
                                </div>

                                {billingCycle === 'yearly' && plan.price.yearly < plan.price.monthly * 12 && (
                                    <div className="mt-2 text-green-600 text-sm">
                                        Économisez {plan.price.monthly * 12 - plan.price.yearly}$ par an !
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 mb-8">
                                <h4 className="font-semibold text-gray-900">Ce qui est inclus :</h4>
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-3">
                                        <FiCheck className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}

                                {plan.notIncluded.length > 0 && (
                                    <>
                                        <h4 className="font-semibold text-gray-900 mt-6">
                                            Non inclus :
                                        </h4>
                                        {plan.notIncluded.map((feature) => (
                                            <div key={feature} className="flex items-center space-x-3">
                                                <FiX className="w-5 h-5 text-red-500 shrink-0" />
                                                <span className="text-gray-500 line-through">{feature}</span>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>

                            <button
                                onClick={() => handleSubscribe(plan.id)}
                                className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                {plan.popular ? 'Commencer maintenant' : 'Choisir cette offre'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Informations complémentaires */}
                <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600 mb-2">30 jours</div>
                            <div className="text-gray-700">Garantie satisfait ou remboursé</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600 mb-2">24/7</div>
                            <div className="text-gray-700">Support technique disponible</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600 mb-2">Flexible</div>
                            <div className="text-gray-700">Changement de plan à tout moment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionPlans;