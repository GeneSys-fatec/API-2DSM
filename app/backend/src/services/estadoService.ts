import Estado from "../models/estadoModel";

export const buscarTodosEstados = async () => {
  try {
    const estados = await Estado.findAll({
      attributes: ["id", "nome", "sigla"],
    })

    return estados

  } catch (error) {
    console.error("Erro ao buscar estados:", error)
    throw new Error("Erro ao buscar estados.")
  }
};
