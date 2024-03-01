import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Forneça um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatório")
})