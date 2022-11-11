import React from 'react'
import ListaElementos from '../../components/listItem'
import Crear from '../../components/buttons/create'
import Link from 'next/link'
import Remover from '../../components/buttons/remove'

import { trpc } from '../../utils/trpc'

const ListaProductos = () => {
  const productos = trpc.producto.dataProductos.useQuery();
  // console.log('<===>',productos)
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
                Ver carrito '{'counter products'}'
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
          <ListaElementos
            productos={[
              {
                id: 1,
                nombre: "xiaomi",
                slug: 'xiaomi-prod',
                descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de',
                existencia: 2,
                precio: 15.5
              },
              {
                id: 2,
                nombre: "alcatel",
                slug: 'alcatel-prod',
                descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de',
                existencia: 2,
                precio: 15.5
              },
              {
                id: 3,
                nombre: "samsung",
                slug: 'samsung-prod',
                descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de',
                existencia: 2,
                precio: 15.5
              }
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default ListaProductos