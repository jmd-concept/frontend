import http from './api.js';

// Méthodes utilitaires
export const get = (url, config = {}) => http.get(url, config);
export const post = (url, data, config = {}) => http.post(url, data, config);
export const put = (url, data, config = {}) => http.put(url, data, config);
export const del = (url, config = {}) => http.delete(url, config);
export const patch = (url, data, config = {}) => http.patch(url, data, config);

export const api = {
    // Test de connexion
    health: async () => {
        try {
            const response = await http.get('/api/health');
            return response.data;
        } catch (error) {
            console.error('Health check error:', error);
            return { success: false, error: error.message };
        }
    },

    getServices: async () => {
        try {
            const response = await http.get('/api/data/services');
            return {
                success: true,
                data: response.data || []
            };
        } catch (error) {
            console.error('Get services error:', error);
            return {
                success: false,
                error: error.message,
                data: []
            };
        }
    },

    getTeam: async () => {
        try {
            const response = await http.get('/api/data/team');
            return {
                success: true,
                data: response.data || []
            };
        } catch (error) {
            console.error('Get team error:', error);
            return {
                success: false,
                error: error.message,
                data: []
            };
        }
    },

    getPromotions: async () => {
        try {
            const response = await http.get('/api/data/promotions');
            return {
                success: true,
                data: response.data || []
            };
        } catch (error) {
            console.error('Get promotions error:', error);
            return {
                success: false,
                error: error.message,
                data: []
            };
        }
    },

    subscribe: async (email, name) => {
        try {
            const response = await http.post('/api/subscribe', { email, name });
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Subscribe error:', error);
            return {
                success: false,
                error: error.response?.data?.message || error.message
            };
        }
    },

    contact: async (formData) => {
        try {
            const response = await http.post('/api/contact', formData);
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Contact error:', error);
            return {
                success: false,
                error: error.response?.data?.message || error.message
            };
        }
    },

    createDevis: async (devisData) => {
        try {
            const response = await http.post('/api/createDevis', devisData);
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Create devis error:', error);
            return {
                success: false,
                error: error.response?.data?.message || error.message
            };
        }
    }
};

export const fetchDataExpress = async (endpoint, options = {}) => {
    return fetch(`${API_BASE_URL}/${endpoint}`, options);
};

/* 
// Utilisation
api.getServices().then(data => {
    console.log('Données reçues:', data);
    // Utilisez les données ici
})
    .catch(error => {
        console.error('Erreur lors de la récupération:', error);
    });

 */

export const dataServices = [
    {
        title: 'Boostage de vos produits',
        description: 'Boostage pour la promotion de vos produits',
        icon: 'fa-chart-line',
        details: [
            'Boostage pour la promotion de vos produits',
            'Création de comptes virtuel mobile money',
            'Gestion et suivi de vos promotions'
        ],
        image: '/assets/photos/reseaux-sociaux.png'
    },
    {
        title: 'Création de contenus Professionnelle',
        description: 'Production de contenu digital de qualité',
        icon: 'fa-video-camera',
        details: [
            'Production audiovisuelle (vidéos, teasers, podcasts)',
            'Gestion et animation des réseaux sociaux',
            'Visuels publicitaires (affiches, flyers, bannières, cartes de visite)'
        ],
        image: '/assets/photos/contenu.png'
    },
    {
        title: 'Conception de sites web et applications',
        description: 'Développement web et intégration IA',
        icon: 'fa-code',
        details: [
            'Sites vitrines, blogs, e-commerce, SPA, MPA...',
            'Portfolio profesionnel & Création de ChatBot',
            'Applications mobiles (Android)',
            'Optimisation de sites existants et Maintenance'
        ],
        image: '/assets/photos/site-web.png'
    },
    {
        title: 'Conception de base de données et BI',
        description: 'Solutions de gestion de données',
        icon: 'fa-database',
        details: [
            'Modélisation et conception de bases de données',
            'Conception d\'entrepôt de données et processus ETL',
            'Analyse et visualisation des données',
            'Sécurisation et sauvegarde des données'
        ],
        image: '/assets/photos/database.jpg'
    },
    {
        title: 'Formations professionnelles',
        description: 'Formations dans divers domaines digitaux',
        icon: 'fa-graduation-cap',
        details: [
            'Création de contenues profesionnel',
            'Conception de sites et applications web',
            'Modelisation et conception de base de données',
            'Formation à l\'utilisation des bases de données'
        ],
        image: '/assets/photos/formation.jpg'
    },
    {
        title: 'Imprimerie moderne',
        description: 'Services d\'impression professionnelle',
        icon: 'fa-print',
        details: ['Service d\'impression à venir...'],
        image: '/assets/photos/printer.jpg'
    }
];

// Membres de l'équipe
export const teamMembers = [
    {
        name: 'Merdi BANGONGO',
        role: 'Développeur Informatique de formation',
        image: '/assets/jmd/team/merdi.jpg',
        facebook: 'https://www.facebook.com/profile.php?id=61581381020725',
        whatsapp: 'https://wa.me/243824499881',
        email: 'merdibangongo@gmail.com'
    },
    {
        name: 'Josué EDJUKU',
        role: 'Designer Graphiste et Montage vidéo de formation',
        image: '/assets/jmd/team/josue.png',
        facebook: 'https://www.facebook.com/profile.php?id=61581381020725',
        whatsapp: 'https://wa.me/243859118386',
        email: 'josueedjuku98@gmail.com'
    },
    {
        name: 'Dany BANANI',
        role: 'Développeur Informatique de formation',
        image: '/assets/jmd/team/dany.png',
        facebook: 'https://www.facebook.com/profile.php?id=61581381020725',
        whatsapp: 'https://wa.me/24382061748',
        email: 'bananidany5@gmail.com'
    },
    {
        name: 'Willy MWAMUKASA',
        role: 'Communicologue et Marketing digitale de formation',
        image: '/assets/jmd/team/willy.png',
        facebook: 'https://www.facebook.com/profile.php?id=61581381020725',
        whatsapp: 'https://wa.me/243825341894',
        email: 'willmsmwamukasa@gmail.com'
    }
];

// Promotions
export const dataPromotions = [
    {
        title: 'Offre Spéciale -30%',
        description: 'Réduction sur nos services',
        image: '/assets/jmd/affiche/Affiche_offre_pour_affiche.jpg'
    },
    {
        title: 'Conception Web',
        description: 'Création de sites web professionnels',
        image: '/assets/jmd/affiche/jmd-concept_affiche_conception_web.jpg'
    },
    {
        title: 'Création de Contenus',
        description: 'Contenus digitaux de qualité',
        image: '/assets/jmd/affiche/jmd-concept_affiche_contenus.png'
    },
    {
        title: 'Base de Données',
        description: 'Solutions de gestion de données',
        image: '/assets/jmd/affiche/jmd-concept_affiche_database.jpg'
    }
];
