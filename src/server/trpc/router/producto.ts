import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const productoRouter = router({
  dataProductos: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query( async({ input }) => {
        const productos = await prisma?.producto.findMany()
        return {
            productos: productos
        }
    })
});
