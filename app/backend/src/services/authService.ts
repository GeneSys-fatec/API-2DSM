import  User  from "../models/userModel";
import { Op } from "sequelize";

export async function validateUser(username: string, password: string) {
    const user = await User.findOne({ where: { nomeUsuario: { [Op.eq]: username } } });
    if (!user || user.senhaUsuario !== password) {
        throw new Error("Credenciais inválidas");
    }
    return user;
}



export async function registerUser(userData: {
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
    cpfUsuario: string,
    sexoUsuario: string,
    dataNasc?: string;
    telUsuario?: string;
    estadoUsuario: string,
    cidadeUsuario: string,
    ruaUsuario: string,
    numeroUsuario: string,
    rendaUsuario: string,
    escolaridadeUsuario: string,
    idEmpresaPatrocinio: number;
    idCidade?: number;
  }) {
    try {
      const existingUser = await User.findOne({ where: { emailUsuario: userData.emailUsuario } });
      if (existingUser) {
        throw new Error("Email já está em uso");
      }
  
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error(`Erro ao registrar usuário`);
    }
  }