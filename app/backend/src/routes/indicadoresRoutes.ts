import { FastifyInstance } from 'fastify';
import db from '../database/db';

async function empresaLojas   (fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        try {
            const [rows] = await db.query(
                `SELECT count(idLojas) as quantidadelojas, idEmpresaPatrocinio
                FROM lojas
                GROUP BY idEmpresaPatrocinio;`
            );
            reply.send(rows);
        } catch (error) {
            console.error('Erro ao buscar indicador:', error);
            reply.status(500).send({ error: 'Erro ao buscar dados' });
        }
    });
}

async function empresaComunidades   (fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        try {
            const [rows] = await db.query(
                `SELECT count(idComunidades) as quantidadeComunidades, idEmpresaPatrocinio
                FROM comunidades
                GROUP BY idEmpresaPatrocinio;`
            );
            reply.send(rows);
        } catch (error) {
            console.error('Erro ao buscar indicador:', error);
            reply.status(500).send({ error: 'Erro ao buscar dados' });
        }
    });
}

async function empresaPatrocinados   (fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        try {
            const [rows] = await db.query(
                `SELECT count(idPatrocinado) as quantidadePatrocinados, idEmpresaPatrocinio
                FROM patrocinados
                GROUP BY idEmpresaPatrocinio;`
            );
            reply.send(rows);
        } catch (error) {
            console.error('Erro ao buscar indicador:', error);
            reply.status(500).send({ error: 'Erro ao buscar dados' });
        }
    });
}


export {empresaLojas, empresaComunidades, empresaPatrocinados};
