import User from "../models/userModel";
import { Op } from "sequelize";
import Estado from "../models/estadoModel";
import Cidade from "../models/cidadeModel";

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
  cpfUsuario: string;
  sexoUsuario: string;
  dataNasc?: string;
  telUsuario?: string;
  estadoUsuario: string;
  cidadeUsuario: string;
  ruaUsuario: string;
  numeroUsuario: string;
  rendaUsuario: string;
  escolaridadeUsuario: string;
  idEmpresaPatrocinio: number;
  idCidade?: number;
}) {
  try {
    // Verifica se o usuário já existe pelo email
    const existingUser = await User.findOne({ where: { emailUsuario: userData.emailUsuario } });
    if (existingUser) {
      throw new Error("Email já está em uso");
    }

    // Valida o CPF antes de qualquer operação
    const cpfValido = validateCPF(userData.cpfUsuario);
    if (!cpfValido) {
      throw new Error("CPF inválido");
    }

    // Busca o estado pelo ID e substitui pelo nome
    const estado = await Estado.findOne({ where: { id: userData.estadoUsuario } });

    if (!estado) {
      throw new Error("Estado não encontrado");
    }

    userData.estadoUsuario = estado.sigla;

    // Busca a cidade pelo nome e adiciona o ID dela no cadastro
    const cidade = await Cidade.findOne({ where: { nomeCidade: userData.cidadeUsuario } });

    if (!cidade) {
      throw new Error("Cidade não encontrada.");
    }

    userData.idCidade = cidade.idCidade;

    // Cria o usuário no banco de dados
    const newUser = await User.create(userData);
    return newUser;

  } catch (error: any) {
    console.error("Erro ao registrar usuário:", error.message);
    throw new Error(`Erro ao registrar usuário: ${error.message}`);
  }
}
