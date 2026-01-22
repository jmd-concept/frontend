'use client';

import { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const subscriptionSchema = z.object({
    email: z.string().email('Email invalide'),
    name: z.string().min(2, 'Nom trop court').optional().or(z.literal('')),
    phone: z.string().optional().or(z.literal('')),
    company: z.string().optional().or(z.literal('')),
    acceptTerms: z.boolean().refine(val => val === true, {
        message: 'Vous devez accepter les conditions',
    }),
});

const SubscriptionModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(subscriptionSchema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name || '',
                    phone: data.phone || '',
                    company: data.company || '',
                    source: 'modal',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitSuccess(true);
                reset();
                setTimeout(() => {
                    onClose();
                    setSubmitSuccess(false);
                }, 3000);
            } else {
                setError(result.message || 'Une erreur est survenue');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur');
            console.error('Erreur abonnement:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-primary-600 to-primary-800 p-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                S'abonner à la newsletter
                            </h2>
                            <p className="text-primary-100 mt-1">
                                Ne ratez pas nos dernières offres
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <FaTimes className="text-white text-xl" />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    {submitSuccess ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCheck className="text-green-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Merci pour votre abonnement !
                            </h3>
                            <p className="text-gray-600">
                                Vous recevrez bientôt nos meilleures offres par email.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="votre@email.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom (optionnel)
                                </label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Téléphone (optionnel)
                                </label>
                                <input
                                    {...register('phone')}
                                    type="tel"
                                    placeholder="Votre numéro"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Entreprise (optionnel)
                                </label>
                                <input
                                    {...register('company')}
                                    type="text"
                                    placeholder="Nom de votre entreprise"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div className="pt-2">
                                <label className="flex items-start space-x-3">
                                    <input
                                        {...register('acceptTerms')}
                                        type="checkbox"
                                        className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                    />
                                    <span className="text-sm text-gray-600">
                                        Oui, j'accepte que JMD Concept et ses partenaires utilisent mes informations
                                        pour des communications personnalisées, de la publicité ciblée et l'optimisation des campagnes.
                                    </span>
                                </label>
                                {errors.acceptTerms && (
                                    <p className="mt-1 text-sm text-red-600">{errors.acceptTerms.message}</p>
                                )}
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Envoi en cours...' : "S'abonner"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-sm text-gray-500 text-center">
                        Vous pouvez vous désabonner à tout moment. Nous respectons votre vie privée.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;