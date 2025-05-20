import { FastifyInstance } from "fastify";
import * as authController from "../controllers/authController";

const authRoute = async (fastify: FastifyInstance) => {
  fastify.post("/login", authController.login);
  fastify.post("/register", authController.register);
  fastify.get("/test", async (request, reply) => {
    reply.send({ message: "Rota de teste funcionando!" });
  });

};

export default authRoute;
