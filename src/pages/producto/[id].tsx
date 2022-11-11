import React from 'react'
import Link from 'next/link'
import Editar from '../../components/buttons/edit'

const Productos = () => {
  const prod = {
    id: 1,
    nombre: "xiaomi",
    slug: 'xiaomi-prod',
    descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de',
    existencia: 2,
    precio: 15.5
  }
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        <div className=" w-full lg:max-w-full lg:flex">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                Detalles de producto
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {prod.nombre}
              </div>
              <p className="text-gray-700 text-base">
                {prod.descripcion}
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-xl text-gray-900 leading-none">$ {prod.precio}</p>
                <p className="text-gray-800 leading-none">{prod.existencia} Piezas disponibles</p>
              </div>
            </div>
            <div
              className='flex justify-end'
            >
              <Link
                href={'/producto/editar/'+prod.slug}
              >
                <Editar>
                  Editar Producto
                </Editar>
              </Link>
            </div>    
          </div>
        </div>
      </div>
    </>
  )
}

export default Productos