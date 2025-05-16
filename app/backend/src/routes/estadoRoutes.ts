import { FastifyInstance } from "fastify";
import { getEstados } from "../controllers/estadoController";

export default async function estadoRoutes(app: FastifyInstance) {
  app.get("/", getEstados)
}
