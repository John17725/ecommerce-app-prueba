import React from 'react'
import Remover from '../../components/buttons/remove'
import Link from 'next/link'
import Agregar from '../../components/buttons/add'

const index = () => {
    const productos = [
        {
            id: 1,
            nombre: 'alcatel',
            cantidad: 4,
            precio: .13,
        },
        {
            id: 2,
            nombre: 'nokia',
            cantidad: 4,
            precio: .90,
        },
        {
            id: 3,
            nombre: 'samsung',
            cantidad: 4,
            precio: .56,
        },
        {
            id: 4,
            nombre: 'xiaomi',
            cantidad: 4,
            precio: .50,
        },
    ]
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

                <div>
                    {productos.map((producto) => 
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
                                {producto.nombre}
                            </p>
                            <p className='flex justify-end ml-4'>
                                Precio unitario ${producto.precio}
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