import { FastifyInstance } from "fastify";
import * as alunoController from "../controllers/empresaController";

const alunoRoutes = async (fastify: FastifyInstance) => {
  fastify.post("/create", alunoController.createAluno);
  fastify.get("/", alunoController.getAlunos);
  fastify.get("/:id", alunoController.getAlunoById);
  fastify.delete("/:id", alunoController.removeAluno);
  fastify.patch("/:id", alunoController.updateAluno);
};

export default alunoRoutes;
