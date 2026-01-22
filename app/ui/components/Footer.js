'use client';

import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaArrowUp, FaClock, FaMapMarked } from 'react-icons/fa';
import Link from 'next/link';

const Footer = ({ onSubscribe }) => {
    const currentYear = new Date().getFullYear();

    // Fonction pour le défilement fluide vers les sections
    const scrollToSection = (id) => {
        if (typeof window !== 'undefined') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer id="contact" className="bg-sky-950! text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src="/images/logo.png"
                                alt="JMD Concept"
                                className="w-18 h-18 rounded-full border-none border-white"
                            />
                            <div>
                                <h3 className="text-xl font-bold">JMD Concept</h3>
                                <p className="text-sky-200 text-sm">L'innovantion au service de votre visibilité</p>
                            </div>
                        </div>
                        <p className="text-sky-200 mb-8">
                            Ne manquez aucune offre, abonnez-vous!
                        </p>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-12 py-2 bg-white text-sky-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors hover:scale-105"
                        >
                            S&apos;Abonner
                        </button>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 pb-2 border-b border-white/20">
                            Contactez-nous
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-sky-300" />
                                <span>+243 828120851</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaWhatsapp className="text-sky-300" />
                                <a
                                    href="https://wa.me/243828120851"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-sky-200 transition-colors"
                                >
                                    WhatsApp: +243 828120851
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-sky-300" />
                                <a
                                    href="mailto:jmdconcept3@gmail.com"
                                    className="hover:text-sky-200 transition-colors"
                                >
                                    jmdconcept3@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Réseaux sociaux */}
                        <div className="mt-6 pt-6 border-t border-white/20">
                            <h5 className="font-semibold mb-4">Suivez-nous</h5>
                            <div className="flex space-x-3">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61581381020725"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    <FaFacebook size={18} />
                                </a>
                                <a
                                    href="https://www.instagram.com/invites/contact/?igsh=1ov6g05h5lnxk&utm_content=zjmjfv7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
                                >
                                    <FaInstagram size={18} />
                                </a>
                                <a
                                    href="https://wa.me/243824499881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                                >
                                    <FaWhatsapp size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Liens rapides - Utilisation de next/link avec hash */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 pb-2 border-b border-white/20">
                            Liens rapides
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/#services"
                                    className="hover:text-sky-200 transition-colors cursor-pointer block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('services');
                                    }}
                                >
                                    Nos Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#promotions"
                                    className="hover:text-sky-200 transition-colors cursor-pointer block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('promotions');
                                    }}
                                >
                                    Nos Promotions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#team"
                                    className="hover:text-sky-200 transition-colors cursor-pointer block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('team');
                                    }}
                                >
                                    Notre Équipe
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="hover:text-sky-200 transition-colors cursor-pointer block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('contact');
                                    }}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#about"
                                    className="hover:text-sky-200 transition-colors cursor-pointer block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection('about');
                                    }}
                                >
                                    À propos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Informations */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 pb-2 border-b border-white/20">
                            Informations
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold"><FaMapMarked /> Adresse</p>
                                <p className="text-sky-200 text-sm mt-1">
                                    8, Chapelle, Lemba/ Righini, Kinshasa, RD Congo
                                    <br />
                                    Réf: École Sainte Famille
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold"><FaClock /> Horaires </p>
                                <p className="text-sky-200 text-sm mt-1">
                                    Lun - Ven: 8h30 - 16h00
                                    <br />
                                    Sam: 8h00 - 12h00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left">
                            <p className="text-sky-300 text-sm">
                                © {currentYear} <span className="font-bold">JMD Concept</span> — Tous droits réservés
                            </p>
                            <div className="mt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                                <Link
                                    href="/politique-confidentialite"
                                    className="text-sky-300 text-xs hover:text-white transition-colors"
                                >
                                    Politique de confidentialité
                                </Link>
                                <Link
                                    href="/conditions-utilisation"
                                    className="text-sky-300 text-xs hover:text-white transition-colors"
                                >
                                    Conditions d&apos;utilisation
                                </Link>

                                <Link
                                    href="/mentions-legales"
                                    className="text-sky-300 text-xs hover:text-white transition-colors"
                                >
                                    Voir nos mentions légales
                                </Link>
                            </div>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="mt-4 md:mt-0 px-6 py-2 rounded-xl hover:bg-sky-600 border border-white/20 transition-colors flex items-center justify-center"
                            aria-label="Retour en haut"
                        >
                            <FaArrowUp />
                            <span className="ml-2 hidden md:inline">Retour en haut</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;