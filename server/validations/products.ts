import { z } from "zod";

export const addProductSchema = z.object({
  image_url: z.string().url(),
  title: z.string().min(4),
  description: z.string().min(4).max(100),
  price: z.number().min(0),
  quantity: z.number().min(0),
});
