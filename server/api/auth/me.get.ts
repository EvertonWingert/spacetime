import prisma from "../../lib/prisma";
import { useValidateJwt } from "../../utils/useValidateJwt";

export default defineEventHandler(async (event) => {
  const { id } = useValidateJwt(event);

  const currentAuth = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
  });

  return {
    id: currentAuth.id,
    name: currentAuth.name,
    avatarUrl: currentAuth.avatarUrl,
  };
});
