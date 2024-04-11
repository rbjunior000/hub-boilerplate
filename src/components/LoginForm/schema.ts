import { z } from '@/utils'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
