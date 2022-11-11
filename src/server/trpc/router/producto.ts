import { z } from "zod";
import { Prisma } from "@prisma/client";
import { router, publicProcedure } from "../trpc";



export const productoRouter = router({
  dataProductos: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query( async({ input }) => {
        const productos = await prisma?.producto.findMany()
        return {
            productos: productos
        }
    }),
  bySlugProduct: publicProcedure
    .input(z.object({
        slug: z.string(),
      }),)
    .query(async ({ ctx, input }) => {
        const { slug } = input;
        const producto = await ctx.prisma?.producto.findFirst({
            where: { slug }
        });

        return producto
    })
});
