import React from 'react'
import Link from 'next/link'
import { ProductoItemProps } from '../listItem/interfaceListItem'
import Agregar from '../buttons/add'
import Editar from '../buttons/edit'

const Tarjeta = ({ producto }: ProductoItemProps) => {
  console.log('mensaje de card',producto)
  return (
    <>
      <div 
        className="p-6 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {producto.nombre}
        </h5>
        <p 
          className="mb-3 font-normal text-gray-700 dark:text-gray-400"
        >
          {producto.descripcion}
        </p>
        <p
          className='text-sm flex justify-end'
        >
          Piezas disponibles {producto.existencia}
        </p>

        <p
          className='text-xl flex justify-end'
        >
          ${producto.precio}
        </p>
        <div 
          className='flex'
        >
          <div>
            <Link 
              href={'/producto/'+producto.slug} 
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Detalles producto
            </Link>
          </div>
          <div >
            <Agregar>
              Agregar al carrito
            </Agregar>
          </div>
          <div >
            <Link
              href={'/producto/editar/'+producto.slug}
            >
                <Editar>
                  Editar datos
                </Editar>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tarjeta