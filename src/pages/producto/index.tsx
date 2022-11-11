import React from 'react'
import ListaElementos from '../../components/listItem'
import Crear from '../../components/buttons/create'
import Link from 'next/link'
import Remover from '../../components/buttons/remove'

import { trpc } from '../../utils/trpc'

const ListaProductos = () => {
  const productos = trpc.producto.dataProductos.useQuery();
  return (
    <>
      <div
        
      >
        <div
          className='flex justify-center flex-col mt-8 mb-8'
        >
          <div
            className='flex justify-end'
          >
            <Link
              href={'/carrito'}
            >
              <Remover>
                Ver carrito
              </Remover>
            </Link>
          </div>
          <div
            className='flex justify-center mt-2 mb-2'
          >
            <div
              className='ml-3'
            >
              <Link
                href={'/producto/nuevo'}
              >
                <Crear>
                  Registrar nuevo producto
                </Crear>
              </Link>
            </div>
          </div>
          {productos.data?.productos?(
            <ListaElementos
              productos={productos.data?.productos}
            />
          ):(
            <>
              <p className='text-lg'>Cargando...</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ListaProductos