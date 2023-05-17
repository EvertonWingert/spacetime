import prisma from "../../lib/prisma";

export default defineEventHandler(async (event) => {
  const memories = await prisma.memory.findMany({
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
