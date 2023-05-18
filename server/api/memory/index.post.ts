import { z } from "zod";
import prisma from "../../lib/prisma";
import { useValidateJwt } from "../../utils/useValidateJwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = useValidateJwt(event);

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
      userId: user.id,
    },
  });

  return memory;
});
