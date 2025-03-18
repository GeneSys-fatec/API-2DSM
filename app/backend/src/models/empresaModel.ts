import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";
import { AlunoInput } from "../validators/empresaValidator";
import { AlunoType } from "../types/empresaTypes";

class Aluno extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public base_monthly_fee!: number;
  public total_monthly_fee!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_monthly_fee: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_monthly_fee: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "alunos", // Nome da tabela no banco
  }
);

export const createAluno = async (data: AlunoInput): Promise<AlunoType> => {
  const aluno = await Aluno.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    base_monthly_fee: data.base_monthly_fee,
    total_monthly_fee: data.base_monthly_fee, // + product price,
  });
  return aluno;
};

export const getAlunos = async (): Promise<AlunoType[]> => {
  return await Aluno.findAll();
};

export const getAlunoById = async (id: number): Promise<AlunoType | null> => {
  return await Aluno.findByPk(id);
};

export const getAlunoByEmail = async (
  email: string
): Promise<AlunoType | null> => {
  return await Aluno.findOne({ where: { email } });
};

export const removeAluno = async (id: number): Promise<number> => {
  return await Aluno.destroy({ where: { id } });
};

export const updateAluno = async (
  id: number,
  alunoData: AlunoInput
): Promise<Aluno | null> => {
  const aluno = await Aluno.findByPk(id);
  if (aluno) {
    await aluno.update({
      name: alunoData.name,
      email: alunoData.email,
      phone: alunoData.phone,
      base_monthly_fee: alunoData.base_monthly_fee,
      total_monthly_fee: alunoData.base_monthly_fee,
    });
    return aluno;
  }
  return null;
};

export default Aluno;
