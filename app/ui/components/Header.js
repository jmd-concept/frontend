'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
//import Image from 'next/image';
//import logo_jmd from 'public/images/logo2.png';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes, FaHome } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navItems = [
        { label: <FaHome size={26} />, href: '/' },
        { label: 'Services', href: '#services' },
        { label: 'Promotions', href: '#promotion' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="w-screen fixed top-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="w-full mx-auto py-2"> {/*{ name: 'Équipe', target: 'team' }, */}
                <div className="w-full flex items-center justify-between gap-2">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-18 h-18 ml-20 bg-white/90 rounded-full flex items-center justify-center">
                            {/* <Image
                                src={logo_jmd}
                                alt='JMD Logo'
                                width={100} height={100}
                                className="rounded-full border-white"
                            /> */}
                        </div>
                        <span className="text-md font-bold text-gray-900">JMD Concept</span>
                    </Link>

                    {/* Navigation Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-md text-gray-700 hover:text-sky-600 transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Boutons */}
                    <div className="flex items-center space-x-4 mr-20">
                        {isLoggedIn ? (
                            <Link
                                href="/lib/admin/dashboard"
                                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                            >
                                <FiUser className="w-4 h-4" />
                                <span>Mon Espace</span>
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/lib/login/login"
                                    className="hidden md:block px-4 py-2 text-sky-600 hover:text-sky-700 font-medium cursor-pointer"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href="/lib/login/register"
                                    className="hidden md:block px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium cursor-pointer"
                                >
                                    S'inscrire
                                </Link>
                                <Link
                                    href="/lib/admin/dashboard"
                                    className="hidden md:flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
                                >
                                    <FiUser className="w-4 h-4" />
                                    <span>Dashboard</span>
                                </Link>
                            </>
                        )}

                        {/* Menu Mobile */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                        >
                            {isMenuOpen ? (
                                <FiX className="w-6 h-6" />
                            ) : (
                                <FiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-700 hover:text-sky-600 py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t">
                                {isLoggedIn ? (
                                    <Link
                                        href="/lib/admin/dashboard"
                                        className="block py-2 text-center bg-sky-600 text-white rounded-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Mon Espace
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href="/lib/login/login"
                                            className="block py-2 text-center text-sky-600 border border-sky-600 rounded-lg mb-2  cursor-pointer"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Connexion
                                        </Link>
                                        <Link
                                            href="/lib/login/register"
                                            className="block py-2 text-center bg-sky-600 text-white rounded-lg cursor-pointer"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            S'inscrire
                                        </Link>
                                    </>
                                )}
                            </div>

                            <div className='pt-4 border-t flex justify-center space-x-4'>
                                <Link href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaFacebook size={18} />
                                </Link>
                                <Link href="#" className="p-2 bg-red-600 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaInstagram size={18} />
                                </Link>
                                <Link href="#" className="p-2 bg-green-600 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaWhatsapp size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;


/*
export const Header2 = ({ onSubscribe }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: <FaHome />, target: 'hero' },
        { name: 'Services', target: 'services' },
        { name: 'Promotions', target: 'promotions' },
        { name: 'Contact', target: 'contact' },
    ];

    return (
        <header className={`fixed top-20 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo *//*}
<Link
href="#hero"
onClick={(e) => handleScrollClick(e, 'hero')}
className="flex items-center space-x-3 cursor-pointer"
>
<div className="w-22 h-22 rounded-full overflow-hidden border-2 border-primary-500">
<img
src="images/logo2.png"
alt="JMD Concept"
className="w-full h-full object-cover border-white"
/>
</div>
<div>
<h1 className="text-xl font-bold text-gray-900">JMD Concept</h1>
<p className="text-xs text-primary-600">L'innovantation au service de votre visibilité</p>
</div>
</Link>

{/* Navigation Desktop *//*}
<nav className="hidden md:flex items-center space-x-8">
    {navItems.map((item) => (
        <Link
            key={item.name}
            href={`#${item.target}`}
            onClick={(e) => handleScrollClick(e, item.target)}
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium cursor-pointer"
        >
            {item.name}
        </Link>
    ))}
</nav>

{/* ... rest of your component remains the same *//*}

{/* Menu Mobile *//*}
{isMenuOpen && (
    <div className="md:hidden mt-4 pb-4 animate-fade-in">
        <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg">
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={`#${item.target}`}
                    onClick={(e) => handleScrollClick(e, item.target)}
                    className="text-gray-700 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    {item.name}
                </Link>
            ))}

            {/* ... rest of mobile menu *//*}
</div>
</div>
)}
</div>
</div>
</header>
);
};
*/