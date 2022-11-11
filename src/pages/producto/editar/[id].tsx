import Link from "next/link"
import { useState } from "react"
import Remover from "../../../components/buttons/remove"
import { useRouter } from "next/router"
import { Prisma } from "@prisma/client"

import { trpc  } from '../../../utils/trpc'

const EditarProducto = () => {
    const slug = useRouter().query.id as string;
    const producto = trpc.producto.bySlugProduct.useQuery({slug: slug})
    const [nombreProd, setNombreProd] = useState(producto.data?.nombre?producto.data?.nombre:"")
    const [descripcionProd, setDescripcionProd] = useState(producto.data?.descripcion?producto.data?.descripcion:"")
    const [existenciaProd, setExistenciaProd] = useState(producto.data?.existencia?producto.data?.existencia:"")
    const [precioProd, setPrecioProd] = useState(producto.data?.precio?producto.data?.precio:"")
    const handleUpdateProd = (event: any) =>{
        event.preventDefault();
        // if(producto.data?.id){
            const updateProd = trpc.producto.updateProduct.useQuery(
                {
                    id: producto.data?.id,
                    nombre: nombreProd,
                    descripcion: descripcionProd,
                    existencia: existenciaProd,
                    precio: new Prisma.Decimal(precioProd)
                }
            )
            console.log('Casdasd',updateProd)
        // }
        
    } 
    if(producto.data?.id){
        return (
            <>
                <div className="mt-6 mb-4 ml-4 w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
                    <Link
                        href={'/producto'}
                    >
                        <Remover>
                            Cancelar
                        </Remover>
                    </Link>
                    <div className="mb-2 text-gray-700 text-m font-bold">
                        <p>Editar Producto 'prod'</p>
                    </div>
                    <form 
                        className="grid grid-cols-2 gap-4 "
                        onSubmit={()=>handleUpdateProd}
                    >
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
                                id="username"
                                defaultValue={nombreProd} 
                                onChange={(event: any) => setNombreProd(event.target.value)}
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
                                id="Descripcion" 
                                defaultValue={descripcionProd}
                                onChange={(event) => setDescripcionProd(event.target.value)}
                                type="text" 
                                placeholder="Descripcion"
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
                            id="Existencias" 
                            defaultValue={existenciaProd}
                            onChange={(event) => setExistenciaProd(event.target.value)}
                            type="number" 
                            placeholder="Existencias"
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
                            id="username" 
                            type="number"
                            defaultValue={precioProd}
                            onChange={(event) => setPrecioProd(event.target.value)}
                            placeholder="Username"
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