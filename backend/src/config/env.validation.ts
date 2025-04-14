import { z } from 'zod';

export const envSchema = z.object({
  WHATSAPP_NUMBER: z
    .string()
    .min(10, 'Número de WhatsApp inválido (mínimo 10 dígitos)')
    .regex(/^\d+$/, 'Número de WhatsApp deve conter apenas dígitos'),
});
