import { z } from "zod";

export const usuarioSchema = z.object({
  nomeUsuario: z.string().min(3),
  emailUsuario: z.string(),
  senhaUsuario: z.string(),
  cpfUsuario: z.string(),
  sexoUsuario: z.string(),
  dataNasc: z.date(),
  telUsuario: z.string().url(),
  idEmpresaPatrocinio: z.string().url(),
  estadoUsuario: z.string(),
  cidadeUsuario: z.string(),
  ruaUsuario: z.string(),
  numeroUsuario: z.string(),
  rendaUsuario: z.string(),
  escolaridadeUsuario: z.string(),
  idCidade: z.number(),
  createdAt: z.string().optional(),
});

export type UserInput = z.infer<typeof usuarioSchema>;
