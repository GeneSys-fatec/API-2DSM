import { FastifyInstance } from "fastify";
import * as localizacaoController from "../controllers/localizacaoEstadoController";

async function localizacaoRoutes(fastify: FastifyInstance) {
  fastify.get("/", localizacaoController.getQuantidadesPorEstado);
}

export default localizacaoRoutes;