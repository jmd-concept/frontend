import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class Visiteur extends Model { }

Visiteur.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        visite_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize: sequelize,
        tableName: "visiteurs",
        timestamps: false,
    }
);

export default Visiteur;
