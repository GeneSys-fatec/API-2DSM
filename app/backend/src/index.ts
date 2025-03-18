import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import alunoRoutes from "./routes/empresaRoutes";

dotenv.config();

const port = process.env.SERVER_PORT || 3005;

const app = fastify();

app.register(cors, {
  origin: (origin, callback) => {
    const allowedOrigins = ["http://localhost:3000"]; // Lista de origens permitidas
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Permitir requisição
    } else {
      callback(new Error("Not allowed by CORS")); // Bloquear requisição
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  credentials: true, // Permitir cookies ou cabeçalhos de autenticação
});

// Registro das rotas
app.register(alunoRoutes, { prefix: "/alunos" });

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
