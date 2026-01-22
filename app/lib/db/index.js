import sequelize from "./config/sequelize";
import Visiteur from "./models/visiteur";

let initialized = false;

async function initDB() {
    try {
        console.log('Connexion à la base de données établie avec succès.');
        await sequelize.authenticate();

        if (!initialized) {
            await sequelize.sync({ force: false });
            initialized = true;
        }
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données:', error);
        throw error;
    }
}

export {
    initDB,
    Visiteur
}
