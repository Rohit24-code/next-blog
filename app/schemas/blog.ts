import z from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long").max(50),
  content: z.string().min(10, "Content must be at least 10 characters long"),
  image: z.instanceof(File),
});

export type PostSchemaType = z.infer<typeof postSchema>;
