import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import empresaRoutes from "./routes/empresaRoutes";
import quantidadesPorEstadoRoutes from "./routes/localizacaoEstadoRoutes";
import authRoutes from "./routes/authRoutes"; // rota de login

dotenv.config();

const port = process.env.SERVER_PORT || 3005;
const secret = process.env.JWT_SECRET || "chave_padrao_segura";

const app = fastify();

// CORS
app.register(cors, {
  origin: (origin, callback) => {
    const allowedOrigins = ["http://localhost:3000"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, "Not allowed by CORS");
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

// JWT
app.register(jwt, {
  secret,
});

// Middleware global para autenticar
app.decorate("authenticate", async function (request: any, reply: any) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: "Token inválido ou ausente" });
  }
});

// Rotas
app.register(authRoutes, { prefix: "/auth" }); // login
app.register(empresaRoutes, { prefix: "/empresa" });
app.register(quantidadesPorEstadoRoutes, { prefix: "/localizacao-estado" });

// Inicializa servidor
const start = async () => {
  try {
    await app.listen({ port: Number(port) });
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

// Tipagem do Fastify
declare module "fastify" {
  interface FastifyInstance {
    authenticate: any;
  }
}
