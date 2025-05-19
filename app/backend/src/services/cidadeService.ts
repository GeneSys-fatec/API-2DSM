import Cidade from "../models/cidadeModel";

export const buscarCidadesPorEstado = async (estadoId: number) => {
  try {
    const cidades = await Cidade.findAll({
      where: { estado_id: estadoId },
      attributes: ["idCidade", "nomeCidade"]
    })

    return cidades

  } catch (error) {
    console.error("Erro ao buscar cidades:", error)
    throw new Error("Erro ao buscar cidades.")
  }
};
