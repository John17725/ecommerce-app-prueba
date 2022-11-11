import React from 'react'
import Remover from '../../components/buttons/remove'
import Link from 'next/link'
import Agregar from '../../components/buttons/add'

import { trpc } from '../../utils/trpc'

const index = () => {
    const productos = trpc.carrito.dataProductosCarrito.useQuery();
    console.log(productos)
    return (
        <>
            <div
                className='mt-6'
            >
                <Link
                    href={'/producto'}
                >
                    <Agregar>
                        Volver
                    </Agregar>
                </Link>
                <div
                    className='flex justify-center'
                >
                    <h2>Productos en carrito</h2>
                </div>
                {
                    productos.data?.productos?(
                        <div>
                            {productos.data?.productos.map((producto) => 
                                <div
                                key={producto.id}
                                className='max-md flex mt-3 mb-3'
                                >
                                    <p className='flex justify-end ml-4'>
                                        {producto.id}
                                    </p>
                                    <p className='flex justify-end ml-4'>
                                        Cantidad: {producto.cantidad}
                                    </p>
                                    <p className='flex justify-end ml-4'>
                                        Producto a comprar {producto.productoId}
                                    </p>
                                    <p className='flex justify-end ml-4'>
                                        Precio unitario ${producto.precioUnitario}
                                    </p>
                                    <div 
                                        className='ml-4'
                                    >
                                        <Remover>
                                            Quitar
                                        </Remover>
                                    </div>
                                </div>
                            )}
                        </div>

                    ):
                    (
                        <>
                            <p>Cargando...</p>
                        </>
                    )
                }
                <div
                    className='flex justify-end'
                >
                    precio total $
                </div>
            </div>
        </>
    )
}

export default index