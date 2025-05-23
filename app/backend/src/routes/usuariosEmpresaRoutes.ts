import { FastifyInstance } from "fastify";
import * as usuariosEmpresaController from "../controllers/usuariosEmpresaController";

async function usuariosEmpresaRoutes(fastify: FastifyInstance) {
  fastify.get("/impactados", usuariosEmpresaController.getUsuariosImpactados);
  fastify.get("/total", usuariosEmpresaController.getUsuariosTotal);
  fastify.get("/ultimos-7-dias", usuariosEmpresaController.getUsuariosUltimos7Dias);
}

export default usuariosEmpresaRoutes;
