import { FastifyRequest, FastifyReply } from "fastify";
import * as empresaService from "../services/empresaService";
import { empresaSchema, EmpresaInput } from "../validators/empresaValidator";
import { Params } from "../types/paramTypes";

// create empresa
export const createEmpresa = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const empresaData: EmpresaInput = empresaSchema.parse(req.body); // validate data

    const empresa = await empresaService.createEmpresa(empresaData);
    reply.code(201).send(empresa); // Corrigido para Fastify
  } catch (error) {
    reply.code(400).send({ message: "Invalid data", error });
  }
};

// get all empresas
export const getEmpresas = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const empresas = await empresaService.getEmpresa();
    if (!empresas.length) {
      return reply.code(404).send({ message: "No empresas found" });
    }
    reply.code(200).send(empresas);
  } catch (error) {
    reply.code(500).send({ message: "Internal server error", error });
  }
};

// get empresa by id
export const getEmpresaById = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  try {
    const id = req.params.id;
    const empresa = await empresaService.getEmpresaById(id);

    if (!empresa) {
      return reply.code(404).send({ message: "Empresa not found" });
    }

    reply.code(200).send(empresa);
  } catch (error) {
    reply.code(500).send({ message: "Internal server error", error });
  }
};

// remove empresa
export const removeEmpresa = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  try {
    const id = req.params.id;
    const empresa = await empresaService.getEmpresaById(id);

    if (!empresa) {
      return reply.code(404).send({ message: "Empresa not found" });
    }

    await empresaService.removeEmpresa(id);
    return reply.code(200).send({ message: "Empresa was removed successfully" });
  } catch (error) {
    reply.code(500).send({ message: "Internal server error", error });
  }
};

// update empresa by id
export const updateEmpresa = async (
  req: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) => {
  try {
    const id = req.params.id;
    const empresaExists = await empresaService.getEmpresaById(id);

    if (!empresaExists) {
      return reply.code(404).send({ message: "Empresa not found" });
    }

    const empresaData: EmpresaInput = empresaSchema.parse(req.body); // validate data
    const updatedEmpresa = await empresaService.updateEmpresa(id, empresaData);

    return reply.code(200).send({ message: "Empresa was updated successfully", updatedEmpresa });
  } catch (error) {
    reply.code(400).send({ message: "Invalid data or update failed", error });
  }
};
