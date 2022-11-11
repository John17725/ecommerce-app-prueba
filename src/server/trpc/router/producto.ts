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
      }))
    .query(async ({ ctx, input }) => {
        const { slug } = input;
        const producto = await ctx.prisma?.producto.findFirst({
            where: { slug }
        });

        return producto
    }),
  updateProduct: publicProcedure
    .input(z.object({
        id: z.number(),
        nombre: z.string(),
        descripcion: z.string(),
        existencia: z.number(),
        precio: z.number()
    }))
    .mutation(async({ input}) =>{
        const updateProd = await prisma?.producto.update({
            where: {
                id: input.id
            },
            data: {
                nombre: input.nombre,
                descripcion: input.descripcion,
                existencia: input.existencia,
                precio: input.precio,
            }
        })
        return updateProd;
    }),
  createProdut: publicProcedure
    .input(z.object({
        nombre: z.string(),
        descripcion: z.string(),
        slug: z.string(),
        existencia: z.number(),
        precio: z.number()
    }))
    .mutation(async({ input })=>{
        const create = await prisma?.producto.create({
            data: {
                nombre: input.nombre,
                slug: input.slug,
                descripcion: input.descripcion,
                existencia: input.existencia,
                precio: input.precio,
            }
        })
        return create
    }),
  deleteProd: publicProcedure
    .input(z.object({
        id: z.number()
    }))
    .mutation(async({ input }) => {
        const deleteProducto = await prisma?.producto.delete({
            where: {
                id: input.id
            }
        })

        return deleteProducto
    })
    
});
