'use client';

import { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiCheck, FiChevronDown, FiTrash2 } from 'react-icons/fi';

const dataServices = [
    { id: 1, name: 'Développement Web', description: 'Sites web sur mesure' },
    { id: 2, name: 'Création de contenus', description: 'créer Contenu visuelle' },
    { id: 3, name: 'Design Graphique', description: 'Identité visuelle complète' },
    { id: 4, name: 'Stratégie digital', description: 'Stratégie projet et accompagnement' },
    { id: 5, name: 'SEO & SEA', description: 'Optimisation pour les moteurs de recherche' },
]

const devisSchema = z.object({
    companyName: z.string().min(2, 'Nom de société requis'),
    contactName: z.string().min(2, 'Nom de contact requis'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(10, 'Téléphone invalide'),
    projectDescription: z.string().min(20, 'Description trop courte'),
    budgetRange: z.enum(['<500', '500-1000', '1000-5000', '5000-10000', '>10000']),
    timeline: z.enum(['urgent', '1-3_months', '3-6_months', '6+_months']),
    notes: z.string().optional(),
});

const FormulaireDevis = ({ services }) => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [devisNumber, setDevisNumber] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(devisSchema),
    });

    const budgetOptions = [
        { value: '<500', label: 'Moins de 5 00$' },
        { value: '500-1000', label: '5 00$ - 1 000$' },
        { value: '1000-5000', label: '1 000$ - 5 000$' },
        { value: '5000-10000', label: '5 000$ - 10 000$' },
        { value: '>10000', label: 'Plus de 10 000$' },
    ];

    const timelineOptions = [
        { value: 'urgent', label: 'Urgent (1 mois)' },
        { value: '1-3_months', label: '1-3 mois' },
        { value: '3-6_months', label: '3-6 mois' },
        { value: '6+_months', label: 'Plus de 6 mois' },
    ];

    const addService = (service) => {
        const exists = selectedServices.find(s => s.serviceId === service.id);
        if (!exists) {
            setSelectedServices([
                ...selectedServices,
                {
                    serviceId: service.id,
                    name: service.name,
                    quantity: 1,
                    customPrice: service.basePrice,
                    notes: ''
                }
            ]);
        }
    };

    const removeService = (serviceId) => {
        setSelectedServices(selectedServices.filter(s => s.serviceId !== serviceId));
    };

    const updateService = (serviceId, field, value) => {
        setSelectedServices(selectedServices.map(service =>
            service.serviceId === serviceId
                ? { ...service, [field]: value }
                : service
        ));
    };

    const calculateTotal = () => {
        return selectedServices.reduce((total, service) => {
            return parseInt(total) + parseInt(service.customPrice * service.quantity);
        }, 0);
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const devisData = {
                ...data,
                services: selectedServices.map(({ serviceId, quantity, customPrice, notes }) => ({
                    serviceId,
                    quantity,
                    customPrice,
                    notes
                }))
            };

            const response = await api.createDevis(devisData)

            setSubmitSuccess(true);
            setDevisNumber(response.data.data.quoteNumber);
            reset();
            setSelectedServices([]);

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            console.error('Erreur soumission devis:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="devis" className="py-20 bg-linear-to-br from-sky-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Demandez un devis gratuit
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Décrivez votre projet et recevez un devis personnalisé sous 24h
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulaire */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Société *
                                    </label>
                                    <input
                                        {...register('companyName')}
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                        placeholder="Nom de votre société"
                                    />
                                    {errors.companyName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom *
                                    </label>
                                    <input
                                        {...register('contactName')}
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                        placeholder="Votre nom"
                                    />
                                    {errors.contactName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                        placeholder="votre@email.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Téléphone *
                                    </label>
                                    <input
                                        {...register('phone')}
                                        type="tel"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                        placeholder="082 81 20 851"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description du projet *
                                </label>
                                <textarea
                                    {...register('projectDescription')}
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                    placeholder="Décrivez votre projet en détail..."
                                />
                                {errors.projectDescription && (
                                    <p className="mt-1 text-sm text-red-600">{errors.projectDescription.message}</p>
                                )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Budget estimé *
                                    </label>
                                    <select
                                        {...register('budgetRange')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                    >
                                        {budgetOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Délai souhaité *
                                    </label>
                                    <select
                                        {...register('timeline')}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                    >
                                        {timelineOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Notes supplémentaires
                                </label>
                                <textarea
                                    {...register('notes')}
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                                    placeholder="Informations complémentaires..."
                                />
                            </div>

                            <div className="pt-6 border-t">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Services sélectionnés
                                    </h3>
                                    <div className="text-xl font-bold text-sky-600">
                                        Total: {calculateTotal().toLocaleString()}$
                                    </div>
                                </div>

                                {/* Liste des services sélectionnés */}
                                <div className="space-y-3 mb-4">
                                    {selectedServices.map((service) => (
                                        <div
                                            key={service.serviceId}
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                        >
                                            <div className="flex-1">
                                                <h4 className="font-medium text-gray-900">{service.name}</h4>
                                                <div className="flex items-center space-x-4 mt-2">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-sm text-gray-600">Quantité:</span>
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            value={service.quantity}
                                                            onChange={(e) => updateService(service.serviceId, 'quantity', parseInt(e.target.value))}
                                                            className="w-16 px-2 py-1 text-sm border rounded"
                                                        />
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-sm text-gray-600">Prix unitaire:</span>
                                                        <input
                                                            type="number"
                                                            value={service.customPrice}
                                                            onChange={(e) => updateService(service.serviceId, 'customPrice', parseFloat(e.target.value))}
                                                            className="w-24 px-2 py-1 text-sm border rounded"
                                                        />
                                                        <span className="text-sm text-gray-600">$</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeService(service.serviceId)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                                            >
                                                <FiTrash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Bouton d'ajout de service */}
                                <div className="relative">
                                    <select
                                        onChange={(e) => {
                                            const service = dataServices.find(s => s.id === parseInt(e.target.value));
                                            if (service) addService(service);
                                            e.target.value = '';
                                        }}
                                        className="w-full px-4 py-2 rounded-lg border border-dashed border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition appearance-none bg-white"
                                    >
                                        <option value="">Ajouter un service...</option>
                                        {dataServices.map((service) => (
                                            <option key={service.id} value={service.id}>
                                                {service.name} - {service.basePrice}$
                                            </option>
                                        ))}
                                    </select>
                                    <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Demander mon devis gratuit'}
                            </button>

                            {submitSuccess && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center space-x-2 text-green-700">
                                        <FiCheck className="w-5 h-5" />
                                        <div>
                                            <p className="font-semibold">Devis créé avec succès !</p>
                                            <p className="text-sm">
                                                Votre devis #{devisNumber} a été envoyé. Nous vous contacterons sous 24h.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Informations */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Comment fonctionne notre processus ?
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Analyse du projet</h4>
                                        <p className="text-gray-600 text-sm">
                                            Notre équipe étudie votre besoin et vos objectifs.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Proposition détaillée</h4>
                                        <p className="text-gray-600 text-sm">
                                            Nous vous envoyons un devis personnalisé avec planning.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Validation & démarrage</h4>
                                        <p className="text-gray-600 text-sm">
                                            Après votre accord, nous lançons le projet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-sky-600 rounded-2xl shadow-xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-4">Pourquoi choisir JMD Concept ?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2">
                                    <FiCheck className="w-5 h-5" />
                                    <span>Devis gratuit et sans engagement</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FiCheck className="w-5 h-5" />
                                    <span>Réponse sous 24 heures</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FiCheck className="w-5 h-5" />
                                    <span>Équipe d'experts certifiés</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FiCheck className="w-5 h-5" />
                                    <span>Support 7j/7 pendant le projet</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FiCheck className="w-5 h-5" />
                                    <span>Garantie satisfaction 100%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormulaireDevis;