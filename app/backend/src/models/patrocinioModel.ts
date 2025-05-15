import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";
import { PatrocinioType } from "../types/patrocinioTypes";

const RequisitoPatrocinio = sequelize.define<Model<PatrocinioType>>("RequisitoPatrocinio",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idEmpresa: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        requisito: {
            type: DataTypes.STRING,
            allowNull: false
        },
        operador: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
    tableName: "requisitoPatrocinio",
    timestamps: false
});

export default RequisitoPatrocinio;