import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

class Cidade extends Model {
  public idCidade!: number
  public nomeCidade!: string
  public estado_id!: number
  public latitude?: number; 
  public longitude?: number;
}

Cidade.init(
  {
    idCidade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeCidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Cidade",
    tableName: "cidade",
    timestamps: false,
  }
);

export default Cidade