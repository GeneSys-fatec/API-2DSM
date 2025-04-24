import { FastifyInstance } from 'fastify';
import db from '../database/db';

async function usuariosImpactadosDados(fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
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
            console.error('Erro ao buscar quantidades por estado:', error);
            reply.status(500).send({ error: 'Erro ao buscar dados' });
        }
    });
}

export default usuariosImpactadosDados;