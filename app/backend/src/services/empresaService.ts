import * as EmpresaModel from "../models/empresaModel";
import { EmpresaType } from "../types/empresaTypes";

export const createEmpresa = async (empresaData: EmpresaType) => {
  return await EmpresaModel.createEmpresa(empresaData);
};

export const getEmpresa = async () => {
  return await EmpresaModel.getEmpresas();
};

export const getEmpresaById = async (id: number) => {
  return await EmpresaModel.getEmpresaById(id);
};

export const removeEmpresa = async (id: number) => {
  return await EmpresaModel.removeEmpresa(id);
};

export const updateEmpresa = async (id: number, EmpresaData: EmpresaType) => {
  return await EmpresaModel.updateEmpresa(id, EmpresaData);
};
