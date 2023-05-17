import { z } from "zod";
import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const bodySchema = z.object({
    content: z.string(),
    isPublic: z.coerce.boolean().default(false),
    coverUrl: z.string(),
  });

  const { content, isPublic, coverUrl } = bodySchema.parse(body);

  const memory = await prisma.memory.create({
    data: {
      content,
      isPublic,
      coverUrl,
      userId: "",
    },
  });

  return memory;
});
