import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const PostSchema = z.object({
  title: z
    .string()
    .min(1, "Name is required")
    .max(100, "title is 100 characters max"),
  description: z.string().optional(),
  tag: z.enum(["Good", "Bad"], { message: "Tag is either Good or Bad" }),
});

// class is required for using DTO as a type
export class PostsDto extends createZodDto(PostSchema) {}
