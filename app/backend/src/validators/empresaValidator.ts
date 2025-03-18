import { z } from "zod";

export const alunoSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(11).max(11),
  base_monthly_fee: z.number().default(180),
});

export type AlunoInput = z.infer<typeof alunoSchema>; // infered type from schema
