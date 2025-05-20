import { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Banco de dados simulado (em memória)
const usersDB: {
  id: number;
  nomeUsuario: string;
  emailUsuario: string;
  passwordHash: string;
  cpfUsuario: string;
  sexoUsuario: string;
  dataNasc: string;
  telUsuario: string;
  idEmpresaPatrocinio: number;
  estadoUsuario: string;
  cidadeUsuario: string;
  ruaUsuario: string;
  numeroUsuario: string;
  rendaUsuario: string;
  escolaridadeUsuario: string;
  idCidade: number;
}[] = [];

let nextId = 1;

export async function register(req: FastifyRequest, reply: FastifyReply) {
  try {
    const {
      nomeUsuario,
      emailUsuario,
      senhaUsuario,
      cpfUsuario,
      sexoUsuario,
      dataNasc,
      telUsuario,
      idEmpresaPatrocinio,
      estadoUsuario,
      cidadeUsuario,
      ruaUsuario,
      numeroUsuario,
      rendaUsuario,
      escolaridadeUsuario,
      idCidade,
    } = req.body as any;

    const userExists = usersDB.find((u) => u.emailUsuario === emailUsuario);
    if (userExists) {
      return reply.status(400).send({ message: "E-mail já cadastrado" });
    }

    const passwordHash = await bcrypt.hash(senhaUsuario, 10);

    const newUser = {
      id: nextId++,
      nomeUsuario,
      emailUsuario,
      passwordHash,
      cpfUsuario,
      sexoUsuario,
      dataNasc,
      telUsuario,
      idEmpresaPatrocinio,
      estadoUsuario,
      cidadeUsuario,
      ruaUsuario,
      numeroUsuario,
      rendaUsuario,
      escolaridadeUsuario,
      idCidade,
    };

    usersDB.push(newUser);

    return reply.status(201).send({ message: "Usuário registrado com sucesso" });
  } catch (err) {
    console.error("Erro no registro:", err);
    return reply.status(500).send({ message: "Erro interno ao registrar" });
  }
}

export async function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { email, password } = request.body as { email: string; password: string };

    const user = usersDB.find((u) => u.emailUsuario === email);
    if (!user) {
      return reply.status(401).send({ message: "Usuário não encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return reply.status(401).send({ message: "Senha incorreta" });
    }

  } catch (err) {
    console.error("Erro no login:", err);
    return reply.status(500).send({ message: "Erro interno ao fazer login" });
  }
}
