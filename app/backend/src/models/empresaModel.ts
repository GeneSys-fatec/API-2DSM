import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";
import { EmpresaInput } from "../validators/empresaValidator";
import { EmpresaType } from "../types/empresaTypes";

class Empresa extends Model {
  public id!: number;
  public nameSponsor!: string;
  public descriptionTitle!: string;
  public descriptionSponsor!: string;
  public exclusiveUrl!: string;
  public sponsorLogo!: string;
  public site_web!: string;
  public urlSponsor!: string;
  public whatsapp!: string;
  public facebook?: string;
  public instagram?: string;
  public linkedin?: string;
  public tiktok?: string;
  public kawai?: string;
  public x?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Empresa.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nameSponsor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptionTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptionSponsor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    exclusiveUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sponsorLogo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_web: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    urlSponsor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tiktok: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    kawai: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    x: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true, // Permite valor NULL
    },    
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true, // Permite valor NULL
    },
  },
  {
    sequelize,
    tableName: "empresa",
    timestamps: true
  }
);

export const createEmpresa = async (data: EmpresaInput): Promise<EmpresaType> => {
  const empresa = await Empresa.create(data);
  return empresa.toJSON();
};

export const getEmpresas = async (): Promise<EmpresaType[]> => {
  const empresas = await Empresa.findAll();
  return empresas.map((empresa) => empresa.toJSON());
};

export const getEmpresaById = async (id: number): Promise<EmpresaType | null> => {
  const empresa = await Empresa.findByPk(id);
  return empresa ? empresa.toJSON() : null;
};

export const getEmpresaByExclusiveUrl = async (exclusiveUrl: string): Promise<EmpresaType | null> => {
  const empresa = await Empresa.findOne({ where: { exclusiveUrl } });
  return empresa ? empresa.toJSON() : null;
};

export const removeEmpresa = async (id: number): Promise<number> => {
  return await Empresa.destroy({ where: { id } });
};

export const updateEmpresa = async (id: number, empresaData: EmpresaInput): Promise<EmpresaType | null> => {
  const empresa = await Empresa.findByPk(id);
  if (empresa) {
    await empresa.update(empresaData);
    return empresa.toJSON();
  }
  return null;
};

export default Empresa;
