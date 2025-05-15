import { FastifyRequest, FastifyReply } from "fastify";
import { verificarPatrocinioPorUsuario } from "../services/patrocinioService";
import { Params } from "../types/paramTypes";

export const getEmpresasAprovadasPorUsuario = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return reply.code(400).send({ message: "ID de usuário inválido." });
    }

    const empresas = await verificarPatrocinioPorUsuario(id);
    reply.code(200).send(empresas);
  } catch (error) {
    reply.code(500).send({ message: 'Erro ao buscar empresas aprovadas.', error});
  }
};