import { FastifyRequest, FastifyReply } from 'fastify';
import db from '../database/db';

export const getQuantidadesPorEstado = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const [rows] = await db.query(
      `SELECT 
        l.idempresapatrocinio,
        e.sigla AS estado,
        COUNT(DISTINCT u.id) AS quantidadeUsuarios,
        COUNT(DISTINCT l.idLojas) AS quantidadeLojas
      FROM cidade c
      JOIN estados e ON c.estado_id = e.id
      LEFT JOIN usuarios u ON c.idCidade = u.idCidade
      LEFT JOIN lojas l ON c.idCidade = l.idCidade
      GROUP BY l.idempresapatrocinio, e.sigla`
    );

    reply.send(rows);
  } catch (error) {
    console.error('Erro ao buscar quantidades por estado:', error);
    reply.status(500).send({ error: 'Erro ao buscar dados' });
  }
};
