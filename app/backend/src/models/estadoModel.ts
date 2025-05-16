import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

class Estado extends Model {
  public id!: number;
  public nome!: string;
  public sigla!: string;
}

Estado.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sigla: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Estado",
    tableName: "estados",
    timestamps: false,
  }
);

export default Estado