import Link from "next/link"
import { useState } from "react"
import { inferProcedureInput } from "@trpc/server"
import type { AppRouter } from "../../../server/trpc/router/_app"
import Remover from "../../../components/buttons/remove"
import { useRouter } from "next/router"
import { Prisma } from "@prisma/client"

import { trpc  } from '../../../utils/trpc'

const EditarProducto = () => {
    const nav = useRouter();
    const slug = useRouter().query.id as string;
    const producto = trpc.producto.bySlugProduct.useQuery({slug: slug})
    const utils = trpc.useContext();
    const updateProd = trpc.producto.updateProduct.useMutation({
        async onSuccess() {
          // refetches posts after a post is added
          nav.push('/producto');
          await utils.producto.dataProductos.invalidate();
        },
    });
    if(producto.data?.id){
        return (
            <>
                <div className="mt-6 mb-4 ml-4 w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <Link
                        href={'/producto'}
                    >
                        <Remover>
                            Volver
                        </Remover>
                    </Link>
                    <div className="mb-2 text-gray-700 text-m font-bold">
                        <p>Editar Producto</p>
                    </div>
                    <form className="grid grid-cols-2 gap-4 " onSubmit={async(e) =>{
                        e.preventDefault();
                        const $form = e.currentTarget;
                        const values = Object.fromEntries(new FormData($form));
                        // console.log('values',values)
                        type Input = inferProcedureInput<AppRouter['producto']['updateProduct']>;
                        //    ^?
                        const input: Input = {
                            id: Number(producto.data?.id),
                            nombre: values.nombre as string,
                            descripcion: values.descripcion as string,
                            existencia: Number(values.existencia),
                            precio: Number(values.precio),
                        };
                        try {
                            await updateProd.mutateAsync(input);
                            // console.log(input)
                            $form.reset();
                        } catch (cause) {
                            console.error({ cause }, 'Failed to add prod');
                        }
                    }}>
                        <div className="mb-4">
                            <label 
                                className="
                                block 
                                text-gray-700 
                                text-sm 
                                font-bold 
                                mb-2">
                                Nombre
                            </label>
                            <input 
                                className="
                                    shadow 
                                    appearance-none 
                                    border rounded 
                                    w-full py-2 px-3 
                                    text-gray-700 
                                    leading-tight 
                                    focus:outline-none 
                                    focus:shadow-outline" 
                                id="nombre"
                                defaultValue={producto.data?.nombre}
                                name="nombre" 
                                type="text" 
                                placeholder="Cheetos"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Descripcion
                            </label>
                            <input 
                                className="
                                    shadow 
                                    appearance-none 
                                    border rounded 
                                    w-full py-2 px-3 
                                    text-gray-700 
                                    leading-tight 
                                    focus:outline-none 
                                    focus:shadow-outline" 
                                id="descripcion" 
                                name="descripcion" 
                                defaultValue={producto.data?.descripcion}
                                type="text" 
                                placeholder="descripcion"
                            />
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Existencias
                        </label>
                        <input 
                            className="
                                shadow 
                                appearance-none 
                                border rounded 
                                w-full py-2 px-3 
                                text-gray-700 
                                leading-tight 
                                focus:outline-none 
                                focus:shadow-outline" 
                            id="existencia" 
                            defaultValue={producto.data?.existencia}
                            name="existencia" 
                            type="number" 
                        />
                        </div>
                        <div className="mb-4">
                        <label 
                            className="
                                block 
                                text-gray-700 
                                text-sm 
                                font-bold mb-2"
                        >
                            precio
                        </label>
                        <input 
                            className="
                                shadow 
                                appearance-none 
                                border rounded 
                                w-full py-2 px-3 
                                text-gray-700 
                                leading-tight 
                                focus:outline-none 
                                focus:shadow-outline" 
                            id="precio" 
                            type="number"
                            defaultValue={Number(producto.data?.precio)}
                            name="precio" 
                        />
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                className="
                                    bg-blue-500 
                                    hover:bg-blue-700 
                                    text-white 
                                    font-bold py-2 
                                    px-4 rounded 
                                    focus:outline-none 
                                    focus:shadow-outline" 
                                type="submit"
                            >
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    return (
        <>
            <p>Cargando...</p>
        </>
    )
}

export default EditarProducto