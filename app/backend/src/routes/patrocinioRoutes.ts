import { FastifyInstance } from "fastify";
import { getEmpresasAprovadasPorUsuario } from "../controllers/patrocinioController";

export default async function patrocinioRoutes(app: FastifyInstance) {
  app.get("/", getEmpresasAprovadasPorUsuario);
}