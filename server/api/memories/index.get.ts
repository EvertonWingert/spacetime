import prisma from "../../lib/prisma";
import { useValidateJwt } from "../../utils/useValidateJwt";

export default defineEventHandler(async (event) => {
  const user = useValidateJwt(event);

  const memories = await prisma.memory.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return memories.map((memory) => ({
    id: memory.id,
    coverUrl: memory.coverUrl,
    excerpt: memory.content.substring(0, 115).concat("..."),
  }));
});
