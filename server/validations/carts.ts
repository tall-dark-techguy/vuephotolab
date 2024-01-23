import { z } from "zod";

export const addToCartSchema = z.object({
  id: z.string(),
  title: z.string().min(0),
  price: z.number().min(0),
  quantity: z.number().min(0),
  image_url: z.string().url(),
});
