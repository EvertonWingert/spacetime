import { z } from "zod";
import prisma from "../../../lib/prisma";
import { useValidateJwt } from "../../../utils/useValidateJwt";

export default defineEventHandler(async (event) => {
  const user = useValidateJwt(event);

  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(event.context.params);

  const memory = await prisma.memory.findUniqueOrThrow({
    where: {
      id,
    },
  });

  if (memory.userId !== user.id) {
    throw new Error("Not found");
  }

  return memory;
});
