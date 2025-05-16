import { FastifyRequest, FastifyReply } from "fastify";
import { buscarCidadesPorEstado } from "../services/cidadeService";

export const getCidadesPorEstado = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  try {
    const estadoId = Number(req.params.id)

    if (isNaN(estadoId)) {
      return reply.code(400).send({ message: "ID de estado inválido." })
    }

    const cidades = await buscarCidadesPorEstado(estadoId)

    if (cidades.length === 0) {
      return reply.code(404).send({ message: "Nenhuma cidade encontrada para esse estado." })
    }

    reply.code(200).send(cidades)

  } catch (error) {
    reply.code(500).send({ message: 'Erro ao buscar cidades.', error })
  }
};