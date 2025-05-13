import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";
import { UserInput } from "../validators/userValidator";
import { UserType } from "../types/userTypes";



class User extends Model {
  public id!: number;
  public nomeUsuario!: string;
  public emailUsuario!: string;
  public senhaUsuario!: string;
  public dataNasc!: string | null;
  public telUsuario!: string | null;
  public idEmpresaPatrocinio!: number | null; // Permitir NULL
  public idCidade!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nomeUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senhaUsuario: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataNasc: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    telUsuario:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    idEmpresaPatrocinio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true, 
    },    
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
  },
  {
    sequelize,
    tableName: "usuarios",
    timestamps: true
  }
);

export const createUser = async (data: UserInput): Promise<UserType> => {
  const user = await User.create(data);
  return user.toJSON();
};

export const getUsers = async (): Promise<UserType[]> => {
  const user = await User.findAll();
  return user.map((user) => user.toJSON());
};

export const getUserById = async (id: number): Promise<UserType | null> => {
  const user = await User.findByPk(id);
  return user ? user.toJSON() : null;
};  

export const getUserByEmail = async (emailUsuario: string): Promise<UserType | null> => {
  const user = await User.findOne({ where: { emailUsuario } });
  return user ? user.toJSON() : null;
};

export const removeUser = async (id: number): Promise<number> => {
  return await User.destroy({ where: { id } });
};

export const updateUser = async (id: number, UserData: UserInput): Promise<UserType | null> => {
  const user = await User.findByPk(id);
  if (user) {
    await user.update(UserData);
    return user.toJSON();
  }
  return null;
};

export default User;
