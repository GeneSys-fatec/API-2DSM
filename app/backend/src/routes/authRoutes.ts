import { FastifyInstance } from "fastify";
import * as authController from "../controllers/authController";
import { verifyJWT } from "../middlewares/verifyJWT"; // Para rotas protegidas

const authRoute = async (fastify: FastifyInstance) => {
  fastify.post("/login", authController.login);
  fastify.post("/register", authController.register);

  // Rota pública de teste
  fastify.get("/test", async (request, reply) => {
    reply.send({ message: "Rota de teste funcionando!" });
  });

  // Rota protegida por JWT
  fastify.get("/protegido", { preHandler: verifyJWT }, async (request, reply) => {
    reply.send({ message: "Token válido!", user: request.user });
  });
};

export default authRoute;
