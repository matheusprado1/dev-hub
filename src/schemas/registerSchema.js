import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty("E-mail é obrigatorio"),
  email: z
    .string()
    .nonempty("E-mail é obrigatorio")
    .email("Forneça um e-mail válido"),
  password: z
    .string()
    .nonempty("E-mail é obrigatorio"),
  bio: z
    .string()
    .nonempty("E-mail é obrigatorio"),
  contact: z
    .string()
    .nonempty("E-mail é obrigatorio"),
  course_module: z
    .string()
    .nonempty("E-mail é obrigatorio"),
})