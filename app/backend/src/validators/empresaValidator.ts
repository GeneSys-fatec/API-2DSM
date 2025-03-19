import { z } from "zod";

export const empresaSchema = z.object({
  nameSponsor: z.string().min(3),
  descriptionTitle: z.string(),
  descriptionSponsor: z.string(),
  exclusiveUrl: z.string(),
  sponsorLogo: z.string().url(),
  site_web: z.string().url(),
  urlSponsor: z.string().url(),
  whatsapp: z.string().url(), // Verificar se precisa de formato URL
  facebook: z.string().url().optional(),
  instagram: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  tiktok: z.string().url().optional(),
  kawai: z.string().url().optional(),
  x: z.string().url().optional(),
  createdAt: z.string().optional(),
});

export type EmpresaInput = z.infer<typeof empresaSchema>;
