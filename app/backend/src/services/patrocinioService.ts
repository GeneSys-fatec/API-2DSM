import User from "../models/userModel";
import Empresa from "../models/empresaModel";
import RequisitoPatrocinio from "../models/patrocinioModel";
import { PatrocinioType } from "../types/patrocinioTypes";

export const verificarPatrocinioPorUsuario = async (idUser: number) => {
    const user = await User.findByPk(idUser);

    if (!user) throw new Error('Usuário não encontrado.');

    const requisitos = await RequisitoPatrocinio.findAll() as unknown as PatrocinioType[];

    const requisitosPorEmpresa: { [idEmpresa: string]: any[]} = {};

    requisitos.forEach(req => {
        if (!requisitosPorEmpresa[req.idEmpresa]) requisitosPorEmpresa[req.idEmpresa] = [];
        requisitosPorEmpresa[req.idEmpresa].push(req);
    })

    const empresasAprovadas: number[] = [];

    for (const [idEmpresa, condicoes] of Object.entries(requisitosPorEmpresa)) {
        const atendeTodas = condicoes.every((condicao: any) => {
            const valorUser = (user as any)[condicao.requisito];
            if (valorUser === undefined) return false;
            switch(condicao.operador) {
                case '=':
                    return valorUser == condicao.valor;
                case '<=':
                    return parseFloat(valorUser) <= parseFloat(condicao.valor);
                case '>=':
                    return parseFloat(valorUser) >= parseFloat(condicao.valor);
                case 'IN':
                    return condicao.valor.split(',').includes(valorUser);
                default:
                    return false;
            }
        });

        if (atendeTodas) empresasAprovadas.push(Number(idEmpresa));
    }

    const empresas = await Empresa.findAll({where: {id: empresasAprovadas}});
    return empresas;
}