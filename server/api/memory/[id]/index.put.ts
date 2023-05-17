import {z} from "zod";
import prisma from "../../../lib/prisma";
export default defineEventHandler(async (event) => {

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

    const memory = await prisma.memory.update({
        where:{
            id
        },
        data: {
            content,
            isPublic,
            coverUrl,
            userId: "",
        },
    });

    return memory;
})
