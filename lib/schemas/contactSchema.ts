import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().min(1).max(255),
  subject: z.string().min(1).max(255),
  message: z.string().min(1).max(255),
});
