'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

// Charger les composants dynamiquement pour éviter l'hydratation
const DynamicHeader = dynamic(() => import('./ui/components/Header'), { ssr: false });
const DynamicHero = dynamic(() => import('./ui/components/Hero'), { ssr: false });
const DynamicServices = dynamic(() => import('./ui/components/ServicesComponent'), { ssr: false });
const DynamicQuoteForm = dynamic(() => import('./ui/components/FormulaireDevis'), { ssr: false });
const DynamicSubscriptionPlans = dynamic(() => import('./ui/components/SubscriptionPlans'), { ssr: false });
const DynamicFooter = dynamic(() => import('./ui/components/Footer'), { ssr: false });

export default function Home() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('/services');
            setServices(response.data.data);
        } catch (error) {
            console.error('Erreur chargement services:', error);
            // Données de secours
            setServices([
                { id: 1, name: 'Développement Web', description: 'Sites web sur mesure' },
                { id: 2, name: 'Design Graphique', description: 'Identité visuelle complète' },
                { id: 3, name: 'SEO', description: 'Optimisation pour les moteurs de recherche' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    // Ne pas rendre pendant l'hydratation
    if (!mounted) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Chargement...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <DynamicHeader />
            <main>
                <DynamicHero />
                <DynamicServices services={services} loading={loading} />
                <DynamicSubscriptionPlans />
                <DynamicQuoteForm services={services} />
            </main>
            <DynamicFooter />
        </div>
    );
}

/*
import { useState, useEffect } from 'react';
import Header from './ui/components/Header';
import Hero from './ui/components/Hero';
import About from './ui/components/About';
import Services from './ui/components/Services';
import Team from './ui/components/Team';
import Promotions from './ui/components/Promotions';
import Contact from './ui/components/Contact';
import Footer from './ui/components/Footer';
import SubscriptionModal from './ui/components/SubscriptionModal';

export default function Home() {
    const [isSubModalOpen, setIsSubModalOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [team, setTeam] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [servicesRes, teamRes, promotionsRes] = await Promise.all([
                fetch('http://localhost:5000/api/data/services').then(res => res.json()),
                fetch('http://localhost:5000/api/data/team').then(res => res.json()),
                fetch('http://localhost:5000/api/data/promotions').then(res => res.json())
            ]);

            if (servicesRes.success) setServices(servicesRes.data);
            if (teamRes.success) setTeam(teamRes.data);/
            if (promotionsRes.success) setPromotions(promotionsRes.data);
        } catch (error) {
            console.error('Erreur chargement données:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header onSubscribe={() => setIsSubModalOpen(true)} />
            <main>
                <Hero onSubscribe={() => setIsSubModalOpen(true)} />
                <About />
                <Services services={services} loading={loading} />
                <Promotions promotions={promotions} loading={loading} />
                <Team team={team} loading={loading} />
                <Contact />
            </main>
            <Footer onSubscribe={() => setIsSubModalOpen(true)} />

            <SubscriptionModal
                isOpen={isSubModalOpen}
                onClose={() => setIsSubModalOpen(false)}
            />
        </div>
    );
}
*/