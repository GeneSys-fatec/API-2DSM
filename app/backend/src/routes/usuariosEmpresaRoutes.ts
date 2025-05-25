import { FastifyInstance } from "fastify";
import * as usuariosEmpresaController from "../controllers/usuariosEmpresaController";

async function usuariosEmpresaRoutes(fastify: FastifyInstance) {
  fastify.get("/impactados", usuariosEmpresaController.getUsuariosImpactados);
  fastify.get("/total", usuariosEmpresaController.getUsuariosTotal);
}

export default usuariosEmpresaRoutes;
