import { FastifyInstance } from "fastify";
import * as indicadoresController from "../controllers/indicadoresController";

async function indicadoresRoutes(fastify: FastifyInstance) {
  fastify.get("/lojas", indicadoresController.getEmpresaLojas);
  fastify.get("/comunidades", indicadoresController.getEmpresaComunidades);
  fastify.get("/patrocinados", indicadoresController.getEmpresaPatrocinados);
}

export default indicadoresRoutes;