import sqlite3 from "sqlite3";
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { Sequelize } from "sequelize";

// Patern Singleton: une seul instance de la base de données, que tout le monde peut se connecter pour intérrogerer la BD

const dbPath = join(dirname(fileURLToPath(import.meta.url)), 'data_jmd.sqlite');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath || '/var/www/app/data/data_jmd.sqlite',
    dialectModule: sqlite3,
    logging: false,
});

export default sequelize;
