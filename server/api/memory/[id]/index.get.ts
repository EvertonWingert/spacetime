import { z } from "zod";
import prisma from "../../../lib/prisma";

export default defineEventHandler(async (event) => {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsSchema.parse(event.context.params);

  const memory = await prisma.memory.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return memory;
});
