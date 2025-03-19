import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// console.log(
//   process.env.DB_DATABASE,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   process.env.DB_HOST,
//   process.env.DB_PORT
// );

// Configuração do Sequelize para MySQL
const sequelize = new Sequelize(
  process.env.DB_DATABASE!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: Number(process.env.DB_PORT), 
    logging: false, 
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados MySQL com sucesso!"))
  .then(() => sequelize.sync({ alter: true })) // sync model with db
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

export default sequelize;
