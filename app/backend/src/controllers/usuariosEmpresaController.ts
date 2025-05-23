import { FastifyRequest, FastifyReply } from 'fastify';
import db from '../database/db';

export const getUsuariosImpactados = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const [rows] = await db.query(
      `SELECT 
        idEmpresaPatrocinio,
        DATE_FORMAT(createdAt, '%Y-%m') AS mes,
        COUNT(*) AS total_usuarios
      FROM usuarios
      GROUP BY idEmpresaPatrocinio, mes
      ORDER BY idEmpresaPatrocinio, mes;`
    );

    reply.send(rows);
  } catch (error) {
    console.error('Erro ao buscar usuários impactados:', error);
    reply.status(500).send({ error: 'Erro ao buscar dados' });
  }
};

export const getUsuariosTotal = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const [rows] = await db.query(
      `SELECT idEmpresaPatrocinio, count(createdAt) as Total
       FROM usuarios
       GROUP BY idEmpresaPatrocinio;`
    );

    reply.send(rows);
  } catch (error) {
    console.error('Erro ao buscar total de usuários:', error);
    reply.status(500).send({ error: 'Erro ao buscar dados' });
  }
};

export const getUsuariosUltimos7Dias = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const [rows] = await db.query(
      `SELECT idEmpresaPatrocinio, count(createdAt) as Total7dias
       FROM usuarios
       WHERE createdAt >= NOW() - INTERVAL 7 DAY
       GROUP BY idEmpresaPatrocinio;`
    );

    reply.send(rows);
  } catch (error) {
    console.error('Erro ao buscar usuários dos últimos 7 dias:', error);
    reply.status(500).send({ error: 'Erro ao buscar dados' });
  }
};
