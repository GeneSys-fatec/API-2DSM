import { FastifyRequest, FastifyReply } from "fastify";
import { buscarTodosEstados } from "../services/estadoService";

export const getEstados = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const estados = await buscarTodosEstados();
    reply.code(200).send(estados);

  } catch (error) {
    reply.code(500).send({ message: 'Erro ao buscar estados.', error })
  }
};