import { z } from "zod";

export const usuarioSchema = z.object({
  nomeUsuario: z.string().min(3),
  emailUsuario: z.string(),
  senhaUsuario: z.string(),
  dataNasc: z.date(),
  telUsuario: z.string().url(),
  idEmpresaPatrocinio: z.string().url(),
  idCidade: z.number(),
  createdAt: z.string().optional(),
});

export type UserInput = z.infer<typeof usuarioSchema>;
