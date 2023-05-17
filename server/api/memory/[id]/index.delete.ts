import {z} from "zod";
import prisma from "../../../lib/prisma";

export default defineEventHandler(async (event) => {
    const paramsSchema = z.object({
        id: z.string().uuid(),
    });

    const {id} = paramsSchema.parse(event.context.params);

    await prisma.memory.delete({
        where: {
            id,
        }
    })

    return {
        message: "Memory deleted successfully",
    }
})
