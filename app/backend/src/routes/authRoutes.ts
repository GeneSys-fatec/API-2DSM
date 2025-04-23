import { FastifyInstance } from "fastify";

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/login", async (request, reply) => {
    const { username, password } = request.body as {
      username: string;
      password: string;
    };

    if (username === "admin" && password === "1234") {
      const token = fastify.jwt.sign({ user: username });
      return { token };
    }

    return reply.status(401).send({ error: "Credenciais inválidas" });
  });
}
