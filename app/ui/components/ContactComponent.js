'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Nom trop court'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(10, 'Numéro de téléphone invalide'),
    message: z.string().min(10, 'Message trop court'),
});

const ContactComponent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitSuccess(true);
                reset();
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                setError(result.error || 'Une erreur est survenue');
            }
        } catch (err) {
            setError('Erreur de connexion au serveur');
            console.error('Erreur contact:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discutons de votre besoins. Notre équipe est à votre écoute.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 max-w-6xl mx-auto">
                    {/* Formulaire de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-full bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-sky-600 mb-6 text-center">
                            Envoyez-nous un message
                        </h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                                    placeholder="Votre nom"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
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
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
                                        placeholder="+243 XX XXX XX XX"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    {...register('message')}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition resize-none"
                                    placeholder="Décrivez votre projet ou votre demande..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>

                            {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}

                            {submitSuccess && (
                                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-sm text-green-700">
                                        ✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                        </form>

                        {/* Réseaux sociaux */}
                        <div className="mt-4 pt-8 border-t border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                                Suivez-nous
                            </h4>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61581381020725"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition-colors"
                                >
                                    <FaFacebook size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/invites/contact/?igsh=1ov6g05h5lnxk&utm_content=zjmjfv7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-800 transition-colors"
                                >
                                    <FaInstagram size={20} />
                                </a>
                                <a
                                    href="https://wa.me/243838120851"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-green-600 text-white rounded-full hover:bg-green-800 transition-colors"
                                >
                                    <FaWhatsapp size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Informations de contact et carte */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Carte */}
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <div className="h-72">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.0920271207074!2d15.312747375250122!3d-4.3938767469200135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a375303531b4d%3A0x210519bf269af263!2ssainte%20famille!5e0!3m2!1sfr!2scd!4v1759545256713!5m2!1sfr!2scd"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation JMD Concept"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center space-x-8">
                                    <FaMapMarkerAlt className="text-sky-600" size={30} />
                                    <div>
                                        <p className="font-semibold text-gray-900">Notre adresse</p>
                                        <p className="text-gray-600 text-sm">
                                            8, Chapelle, Lemba/ Righini, Kinshasa, RD Congo
                                            <br />
                                            Réf: École Sainte Famille
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Informations de contact */}
                        <div className="bg-white rounded-xl shadow-xl p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Informations de contact
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-6">
                                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                        <FaPhone className="text-sky-600 hover:text-sky-900" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">Téléphone</p>
                                        <a
                                            href="tel:+243828120851"
                                            className="text-sky-600 text-sm hover:text-sky-700 transition-colors"
                                        >
                                            +243 828120851
                                        </a>
                                    </div>
                                </div>

                                {/* <div className="flex items-center space-x-6">
                                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                        <FaWhatsapp className="text-sky-600 hover:text-sky-900" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">WhatsApp</p>
                                        <a
                                            href="https://wa.me/243828120851"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sky-600 text-sm hover:text-sky-700 transition-colors"
                                        >
                                            +243 828120851
                                        </a>
                                    </div>
                                </div> */}

                                <div className="flex items-center space-x-6">
                                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-sky-600 hover:text-sky-900" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">Email</p>
                                        <a
                                            href="mailto:jmdconcept3@gmail.com"
                                            className="text-sky-600 text-sm hover:text-sky-700 transition-colors"
                                        >
                                            jmdconcept3@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-5 border-t border-gray-100">
                                    <p className="text-gray-600 text-sm">
                                        <strong>Horaires d'ouverture :</strong><br />
                                        Lundi - Vendredi: 8h00 - 18h00<br />
                                        Samedi: 9h00 - 13h00<br />
                                        Dimanche: Fermé
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;