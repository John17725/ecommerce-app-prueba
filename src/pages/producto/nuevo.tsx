import Link from "next/link"
import Remover from "../../components/buttons/remove"
import { inferProcedureInput } from "@trpc/server"
import type { AppRouter } from "../../server/trpc/router/_app"
import { trpc } from "../../utils/trpc"

const NuevoProducto = () => {
    const  randomNumberInRange = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const utils = trpc.useContext();
    const addProd = trpc.producto.createProdut.useMutation({
        async onSuccess() {
          // refetches posts after a post is added
          await utils.producto.dataProductos.invalidate();
        },
      });
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
                    <p>Nuevo Producto</p>
                </div>
                <form className="grid grid-cols-2 gap-4 " onSubmit={async(e) =>{
                    e.preventDefault();
                    const $form = e.currentTarget;
                    const values = Object.fromEntries(new FormData($form));
                    type Input = inferProcedureInput<AppRouter['producto']['createProdut']>;
                    //    ^?
                    const input: Input = {
                        nombre: values.nombre as string,
                        slug: values.nombre+'-prod' as string,
                        descripcion: values.descripcion as string,
                        existencia: Number(values.existencia),
                        precio: Number(values.precio),
                    };
                    try {
                        await addProd.mutateAsync(input);
                        console.log(input)
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
                        name="precio" 
                        type="number"
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
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NuevoProducto