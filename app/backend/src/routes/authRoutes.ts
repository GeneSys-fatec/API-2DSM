import { FastifyInstance } from "fastify";
import {register, login} from "../controllers/authController"

const authRoute = async (fastify: FastifyInstance)=> {
  fastify.post("/login", login);
  fastify.post("/register", register);
  fastify.get("/test", async (request, reply) => {
    reply.send({ message: "Rota de teste funcionando!" });
  });
};

export default authRoute