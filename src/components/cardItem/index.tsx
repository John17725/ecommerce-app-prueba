import React from 'react'
import Link from 'next/link'
import { ProductoItemProps } from '../listItem/interfaceListItem'
import { inferProcedureInput } from '@trpc/server'
import type { AppRouter } from '../../server/trpc/router/_app' 
import Agregar from '../buttons/add'
import Editar from '../buttons/edit'
import Remover from '../buttons/remove'

import { trpc } from '../../utils/trpc'

const Tarjeta = ({ producto }: ProductoItemProps) => {
  const utils = trpc.useContext();
  // const productoInCarrito = trpc.carrito.byIdProduct.useQuery({productoId: producto.id})
  const deleteProducto = trpc.producto.deleteProd.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      await utils.producto.dataProductos.invalidate();
    },
  });
  const downStockProducto = trpc.producto.reducirStock.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      await utils.producto.dataProductos.invalidate();
    },
  });
  const addProductoCarrito = trpc.carrito.addProduct.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      await utils.producto.dataProductos.invalidate();
    },
  });
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
          {producto.existencia>0&&(
            <div 
              onClick={async()=>{
                try {
                  console.log('Carritoooo===>')
                  if(producto.existencia>0){
                    await downStockProducto.mutateAsync({id: producto.id,stock: producto.existencia});
                  }
                } catch (cause) {
                  console.error({ cause }, 'Failed to add post');
                }
              }}
            >
              <Agregar>
                Agregar al carrito
              </Agregar>
            </div>
          )}
          <div >
            <Link
              href={'/producto/editar/'+producto.slug}
            >
                <Editar>
                  Editar datos
                </Editar>
            </Link>
          </div>
          <div
            onClick={async()=>{
              console.log('deleteoo', typeof producto.id)
              try {
                await deleteProducto.mutateAsync({id: producto.id});
              } catch (cause) {
                console.error({ cause }, 'Failed to add post');
              }
            }}
          >
            <Remover>
              Borrar
            </Remover>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tarjeta