import { FastifyRequest, FastifyReply } from "fastify";
import { registerUser } from "../services/authService";
import User from "../models/userModel"; 
import { userInfo } from "node:os";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const userData = req.body as {
      nomeUsuario: string;
      emailUsuario: string;
      senhaUsuario: string;
      dataNasc?: string;
      telUsuario?: string;
      idEmpresaPatrocinio: number;
      idCidade: number;
    };

    const newUser = await registerUser(userData);
    reply.code(201).send({ message: "Usuário registrado com sucesso", user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      // Verifica se o erro é do tipo Error e acessa a mensagem
      reply.code(400).send({ message: error.message });
    } else {
      // Caso contrário, envia uma mensagem genérica
      reply.code(400).send({ message: "Erro desconhecido" });
    }
  }
};

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as { email: string; password: string };
  
    try {
      const user = await (email);
  
      if (!user) {
        return reply.code(404).send({ message: "Usuário não encontrado" });
      }
  
      if (user.senhaUsuario !== password) {
        return reply.code(401).send({ message: "Senha incorreta" });
      }
  
      return reply.code(200).send({ message: "Login bem-sucedido", user });
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      return reply.code(500).send({ message: "Erro no servidor" });
    }
  };