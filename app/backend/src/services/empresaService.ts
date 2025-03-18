import * as alunoModel from "../models/empresaModel";
import { Empresa } from "../types/empresaTypes";

export const createAluno = async (alunoData: Empresa) => {
  return await alunoModel.createAluno(alunoData);
};

export const getAlunos = async () => {
  return await alunoModel.getAlunos();
};

export const getAlunoById = async (id: number) => {
  return await alunoModel.getAlunoById(id);
};

export const getAlunoByEmail = async (email: string) => {
  return await alunoModel.getAlunoByEmail(email);
};

export const removeAluno = async (id: number) => {
  return await alunoModel.removeAluno(id);
};

export const updateAluno = async (id: number, alunoData: Empresa) => {
  return await alunoModel.updateAluno(id, alunoData);
};
