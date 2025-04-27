import { FastifyInstance } from 'fastify';
import db from '../database/db';

async function quantidadesPorEstadoRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    try {
      const [rows] = await db.query(
        `SELECT 
        l.idempresapatrocinio,
        c.estado AS estado,
        COUNT(DISTINCT u.id) AS quantidadeUsuarios,
        COUNT(DISTINCT l.idLojas) AS quantidadeLojas
        FROM cidade c
        LEFT JOIN usuarios u ON c.idCidade = u.idCidade
        LEFT JOIN lojas l ON c.idCidade = l.idCidade
        GROUP BY l.idempresapatrocinio, c.estado`
      );

      reply.send(rows);
    } catch (error) {
      console.error('Erro ao buscar quantidades por estado:', error);
      reply.status(500).send({ error: 'Erro ao buscar dados' });
    }
  });
}

export default quantidadesPorEstadoRoutes;