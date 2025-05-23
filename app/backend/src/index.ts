import fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import empresaRoutes from "./routes/empresaRoutes";
import localizacaoEstadoRoutes from "./routes/localizacaoEstadoRoutes";
import authRoutes from "./routes/authRoutes"; // Rota de login básico
import usuariosEmpresaRoutes from "./routes/usuariosEmpresaRoutes";
import indicadoresRoutes from "./routes/indicadoresRoutes";
import patrocinioRoutes from "./routes/patrocinioRoutes";
import cidadeRoutes from "./routes/cidadeRoutes";
import estadoRoutes from "./routes/estadoRoutes";

dotenv.config();

const port = process.env.SERVER_PORT || 3005;

const app = fastify();

// Configuração do CORS
app.register(cors, {
  origin: (origin, callback) => {
    const allowedOrigins = ["http://localhost:3000"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Não permitido pelo CORS"), false);
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

// Registra rotas
app.register(authRoutes, { prefix: "/auth" }); 
app.register(empresaRoutes, { prefix: "/empresa" });
app.register(localizacaoEstadoRoutes, { prefix: "/localizacao-estado" });
app.register(usuariosEmpresaRoutes, { prefix: "/usuarios-empresa" });
app.register(indicadoresRoutes, { prefix: "/indicadores" });
app.register(patrocinioRoutes, { prefix: "/empresas-aprovadas/:id" });
app.register(cidadeRoutes, {prefix: "/cidades/:id"});
app.register(estadoRoutes, {prefix: "/estados"});

const start = async () => {
  try {
    await app.listen({ port: Number(port) });
    console.log(`Server running on port ${port}`);
  } catch (err) {
    console.error("Erro ao iniciar servidor:", err);
    process.exit(1);
  }
};

start();