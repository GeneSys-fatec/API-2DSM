import { FastifyInstance } from "fastify";
import * as empresaController from "../controllers/empresaController";

const empresaRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/create", empresaController.createEmpresa);
  fastify.get("/", empresaController.getEmpresas);
  fastify.get("/:id", empresaController.getEmpresaById);
  fastify.delete("/:id", empresaController.removeEmpresa);
  fastify.patch("/:id", empresaController.updateEmpresa);
};

export default empresaRoutes;
