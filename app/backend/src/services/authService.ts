import User from "../models/userModel";
import { Op } from "sequelize";

export async function validateUser(username: string, password: string) {
  const user = await User.findOne({ where: { nomeUsuario: { [Op.eq]: username } } });
  if (!user || user.senhaUsuario !== password) {
    throw new Error("Credenciais inválidas");
  }
  return user;
}

export function validateCPF(cpf: string): boolean {
  if (typeof cpf !== 'string') return false;
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  const cpfArray = cpf.split('').map(d => parseInt(d));

  const calcularDigito = (posicaoFinal: number) => {
    let soma = 0;
    for (let i = 0; i < posicaoFinal - 1; i++) {
      soma += cpfArray[i] * (posicaoFinal - i);
    }
    const resultado = (soma * 10) % 11;
    return resultado === 10 ? 0 : resultado;
  };

  const digito1 = calcularDigito(10);
  const digito2 = calcularDigito(11);

  return digito1 === cpfArray[9] && digito2 === cpfArray[10];
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

    const cpfValido = validateCPF(userData.cpfUsuario);
    if (!cpfValido) {
      throw new Error("CPF inválido");
    }

    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error(`Erro ao registrar usuário`);
  }
}