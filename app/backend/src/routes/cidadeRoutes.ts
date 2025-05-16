import { FastifyInstance } from "fastify";
import { getCidadesPorEstado } from "../controllers/cidadeController";

export default async function cidadeRoutes(app: FastifyInstance) {
  app.get("/", getCidadesPorEstado)
}