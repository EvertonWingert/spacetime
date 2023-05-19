import { z } from "zod";
import prisma from "../../../lib/prisma";
import { useValidateJwt } from "../../../utils/useValidateJwt";

export default defineEventHandler(async (event) => {
  const user = useValidateJwt(event);

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(event.context.params);

  const body = await readBody(event);

  const bodySchema = z.object({
    content: z.string(),
    isPublic: z.coerce.boolean().default(false),
    coverUrl: z.string(),
  });

  const { content, isPublic, coverUrl } = bodySchema.parse(body);

  let memory = await prisma.memory.findUnique({
    where: {
      id,
    },
  });

  if (memory?.userId !== user.id) {
    throw new Error("Not found");
  }

  await prisma.memory.update({
    where: {
      id,
    },
    data: {
      content,
      isPublic,
      coverUrl,
      userId: "",
    },
  });

  return memory;
});
