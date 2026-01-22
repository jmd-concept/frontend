import axios from 'axios';

export const API_CONFIG = {
    development: {
        apiBaseUrl: process.env.NEXT_PUBLIC_DEV_BACKEND_URL || 'http://127.0.0.1:5000',
    },
    production: {
        apiBaseUrl: process.env.NEXT_PUBLIC_PRO_BACKEND_URL || 'https://api-production.com',
    },
};

const env = process.env.NODE_ENV || 'development';
const API_BASE_URL = API_CONFIG[env]?.apiBaseUrl || API_CONFIG.development.apiBaseUrl;

// INSTANCE
const http = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 50000,
});

// Intercepteurs pour la gestion globale des
/*
http.interceptors.response.use(
   (response) => response.data,
   async (error) => {
       if (error.message) {
           console.log("Erreur API", {
               status: error.response?.status,
               data: error.response?.data,
               url: error.response?.config?.url,
               headers: error.response?.headers,
               config: error.response?.config,
               statusText: error.response?.statusText,
           });
       } else if (error.request) {
           console.error('Pas de réponse du serveur:', error.request);
       } else if (error.response?.status === 401) {
           await refreshToken();
           return http(error.config);
       } else {
           console.error('Erreur de configuration:', error.message);
       }
       return Promise.reject(error);
   }
);
*/


export default http;

/* 
// Utilisation
http.get('/api/data/services', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
}).then(data => {
    console.log('Données reçues:', data);
    // Utilisez les données ici
})
    .catch(error => {
        console.error('Erreur lors de la récupération:', error);
    });
 */


/* 
http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
            console.error('Token expiré ou invalide');

            // Nettoyage complet
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            sessionStorage.clear();

            // Redirection sécurisée
            window.location.replace('/login');
        } else if (!error.response) {
            console.error('Erreur réseau ou serveur injoignable');
        } else if (status >= 500) {
            console.error('Erreur serveur :', status);
        }

        return Promise.reject(error);
    }
);
 */





/*
// Flag pour éviter les redirections multiples
let isLoggingOut = false;

const logout = () => {
    if (isLoggingOut) return;
    isLoggingOut = true;

    console.warn('Session expirée ou accès non autorisé');

    // Nettoyage sécurisé
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    // Redirection propre
    window.location.replace('/login');
};

http.interceptors.response.use(
    (response) => response,
    (error) => {
        // Erreur réseau (serveur down, CORS, timeout)
        if (!error.response) {
            console.error('Erreur réseau ou serveur indisponible');
            return Promise.reject({
                message: 'Problème de connexion au serveur',
            });
        }

        const { status } = error.response;

        // Auth invalide
        if (status === 401 || status === 403) {
            logout();
        }

        return Promise.reject(error);
    }
);
*/