import { FastifyRequest, FastifyReply } from "fastify";
import * as alunoService from "../services/empresaService";
import { alunoSchema, AlunoInput } from "../validators/empresaValidator";
import { Params } from "../types/paramTypes";

// create aluno
export const createAluno = async (req: FastifyRequest, reply: FastifyReply) => {
  const alunoData: AlunoInput = alunoSchema.parse(req.body); // valid data

  const alunoExists = await alunoService.getAlunoByEmail(alunoData.email);

  if (alunoExists) {
    return reply.status(406).send({ message: "Aluno already exists" });
  }

  const aluno = await alunoService.createAluno(alunoData);
  reply.status(201).send(aluno);
};

// get all alunos
export const getAlunos = async (req: FastifyRequest, reply: FastifyReply) => {
  const alunos = await alunoService.getAlunos();
  if (alunos.length === 0) {
    return reply.status(404).send({ message: "Alunos Not Found" });
  }
  reply.status(200).send(alunos);
};

// get aluno by id
export const getAlunoById = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  const id = req.params.id;
  const aluno = await alunoService.getAlunoById(id);

  if (!aluno) {
    return reply.status(404).send({ message: "Aluno Not Found" });
  }

  reply.status(200).send(aluno);
};

// remove aluno
export const removeAluno = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  const id = req.params.id;
  const aluno = await alunoService.getAlunoById(id);

  if (!aluno) {
    return reply.status(404).send({ message: "Aluno Not Found" });
  }

  await alunoService.removeAluno(id);
  return reply.status(200).send({ message: "Aluno was removed" });
};

// update aluno by id
export const updateAluno = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  const id = req.params.id;
  const alunoExists = await alunoService.getAlunoById(id);

  if (!alunoExists) {
    return reply.status(404).send({ message: "Aluno Not Found" });
  }

  const alunoData: AlunoInput = alunoSchema.parse(req.body);
  const updateAluno = await alunoService.updateAluno(id, alunoData);
  return reply.status(200).send({ message: "Alunos was updated" });
};
