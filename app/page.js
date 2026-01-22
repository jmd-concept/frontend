'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
//import { api } from './api/backend/route';
import { avisData } from "./api/dataAvis/avis";
import { dataServices, teamMembers, dataPromotions } from "./api/backend/route";

// Charger les composants dynamiquement pour éviter l'hydratation
const GoogleTranslate = dynamic(() => import('./ui/utils/GoogleTranslate'), { ssr: false })
const HeaderComponent = dynamic(() => import('./ui/components/Header'), { ssr: false });
const HeroComponent = dynamic(() => import('./ui/components/Hero'), { ssr: false });
import { Hero2 } from './ui/components/Hero';

const AboutComponent = dynamic(() => import('./ui/components/About'), { ssr: false })
const TeamComponent = dynamic(() => import('./ui/components/ChartVisiteurs'), { ssr: false })
const PromotionComponent = dynamic(() => import('./ui/components/Promotions'), { ssr: false })
const ModalComponent = dynamic(() => import('./ui/components/SubscriptionModal'), { ssr: false })
const ContactComponent = dynamic(() => import('./ui/components/ContactComponent'), { ssr: false })
const ServiceCard = dynamic(() => import('./ui/components/ServiceCard'), { ssr: false })
const AvisSection = dynamic(() => import('./ui/components/avis/AvisSection'), { ssr: false })
const ServicesComponent = dynamic(() => import('./ui/components/ServicesComponent'), { ssr: false })
const FormulaireDevisComponent = dynamic(() => import('./ui/components/FormulaireDevis'), { ssr: false });
const FooterComponent = dynamic(() => import('./ui/components/Footer'), { ssr: false });

export default function Home() {
    const [services1, setServices1] = useState([]);
    const [services2, setServices2] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [mounted, setMounted] = useState(false);
    const [isSubModalOpen, setIsSubModalOpen] = useState(false);
    const [team, setTeam] = useState([]);
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        fetchData();
        fetchServices();
        setMounted(true);
    }, []);

    const fetchData = async () => {
        setLoading(true)
        setError(null)

        try {
            /*const [teamRes, servicesRes, promotionsRes] = await Promise.all([
                api.getTeam(),
                api.getServices(),
                api.getPromotions()
            ]);

            if (teamRes.success) setTeam(teamRes.data || []);
            if (servicesRes.success) setServices1(servicesRes.data || []);
            if (promotionsRes.success) setPromotions(promotionsRes.data || []);
            */
        } catch (error) {
            console.error('Erreur chargement données:', error);
            setError('Impossible de charger les données. Veuillez réessayer.');
            //Données de secours
            setTeam(teamMembers)
            setServices1(dataServices)
            setPromotions(dataPromotions)/* [
                {
                    id: 1,
                    name: 'Développement Web',
                    description: 'Création de sites web sur mesure et applications modernes',
                    icon: '💻'
                },
                {
                    id: 2,
                    name: 'SEO & SEA',
                    description: 'Optimisation pour les moteurs de recherche et publicités',
                    icon: '📈'
                },
                {
                    id: 3,
                    name: 'Design UX/UI',
                    description: 'Interfaces utilisateur intuitives et esthétiques',
                    icon: '🎨'
                }
            ] */
        } finally {
            setLoading(false);
        }
    };

    const fetchServices = async () => {
        try {
            /*  const response = await api.getServices()
             setServices2(response); */
        } catch (error) {
            console.error('Erreur chargement services:', error);
            // Données de secours
            setServices2([
                { id: 1, name: 'Développement Web', description: 'Sites web sur mesure' },
                { id: 2, name: 'Création de contenus', description: 'créer Contenu visuelle' },
                { id: 3, name: 'Design Graphique', description: 'Identité visuelle complète' },
                { id: 4, name: 'Stratégie digital', description: 'Stratégie projet et accompagnement' },
                { id: 5, name: 'SEO & SEA', description: 'Optimisation pour les moteurs de recherche' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) return null; // Évite l'hydratation

    // if (!loading) {
    //     return (
    //         <div className="min-h-screen bg-gradient-t-b from-gray-50 to-white flex items-center justify-center">
    //             <div className="text-center">
    //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
    //                 <p className="mt-4 text-gray-600">Chargement...</p>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="min-h-screen bg-gradient-t-b from-gray-50 to-white">
            <header>{/* 
                <GoogleTranslate /> */}

                <IndexVisiteur />
                <HeaderComponent />

                {/*<Header2 onSubscribe={() => setIsSubModalOpen(true)} /> */}
            </header>
            <main>
                <HeroComponent />
                <Hero2 onSubscribe={() => setIsSubModalOpen(true)} />

                <AboutComponent />

                {error && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-4 my-8">
                        <div className="flex">
                            <div className="shrink-0">
                                <span className="text-yellow-400">⚠️</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                <PromotionComponent promotions={promotions} loading={loading} />
                <TeamComponent team={team} loading={loading} />

                <ServiceCard loading={loading} />
                <ServicesComponent services={services1} loading={loading} />

                <AvisSection avisData={avisData} />

                {/** Blog */}
                {/* <Post /> */}

                {/* <DynamicSubscriptionPlans /> */}
                <ContactComponent />
                <FormulaireDevisComponent services={services2} />
            </main>
            <FooterComponent />

            <ModalComponent
                isOpen={isSubModalOpen}
                onClose={() => setIsSubModalOpen(false)}
            />
        </div>
    );
}


export function IndexVisiteur() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        fetch("/api/visiteur", { method: "POST" });
    }, []);

    setTimeout(() => setVisible(false), 2000);

    if (visible === true) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h1>Bienvenue sur le site 🚀</h1>
                <p>Votre visite est enregistrée.</p>
            </div>
        );
    }
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
                fetch('http://localhost:5001/api/data/services').then(res => res.json()),
                fetch('http://localhost:5001/api/data/team').then(res => res.json()),
                fetch('http://localhost:5001/api/data/promotions').then(res => res.json())
            ]);

            if (servicesRes.success) setServices(servicesRes.data);
            if (teamRes.success) setTeam(teamRes.data);
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
