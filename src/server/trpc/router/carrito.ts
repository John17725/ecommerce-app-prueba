import { z } from "zod";
import { Prisma } from "@prisma/client";
import { router, publicProcedure } from "../trpc";



export const carritoRouter = router({
  dataProductosCarrito: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query( async({ input }) => {
        const productos = await prisma?.carrito.findMany()
        return {
            productos: productos
        }
    }),
  addProduct: publicProcedure
    .input(z.object({
        idProd: z.number(),
        precioProd: z.number(),
        cantidad: z.number(),
        precioTotal: z.number(),
      }))
    .mutation(async ({ ctx, input }) => {
        const add = await prisma?.carrito.upsert({
          where: {
            productoId: input.idProd
          },
          update:{
            cantidad: input.cantidad+1,
          },
          create: {
            productoId: input.idProd,
            cantidad: input.cantidad,
            precioUnitario: input.precioProd,
            precioTotal: input.precioTotal,
          }
        })
    }),
  deleteProdCarrito: publicProcedure
    .input(z.object({
      id: z.number()
    }))
    .mutation(async({ input }) => {
      const deleteProducto = await prisma?.carrito.delete({
          where: {
              id: input.id
          }
      })

      return deleteProducto
    }),
  byIdProduct: publicProcedure
    .input(z.object({
        productoId: z.number(),
      }))
    .query(async ({ ctx, input }) => {
        const { productoId } = input;
        const producto = await ctx.prisma?.carrito.findUnique({
            where: { productoId }
        });

        return producto
  }),
});
