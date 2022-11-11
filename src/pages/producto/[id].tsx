import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Editar from '../../components/buttons/edit'
import Remover from '../../components/buttons/remove'

import { trpc } from '../../utils/trpc'

const Productos = () => {
  const navigate = useRouter();
  const slug = useRouter().query.id as string;
  const producto = trpc.producto.bySlugProduct.useQuery({slug: slug})
  const utils = trpc.useContext();
  const deleteProducto = trpc.producto.deleteProd.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      navigate.push('/producto')
      await utils.producto.dataProductos.invalidate();
    },
  });
  if(producto.data?.nombre){
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
                  {producto.data.nombre}
                </div>
                <p className="text-gray-700 text-base">
                  {producto.data.descripcion}
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-xl text-gray-900 leading-none">${producto.data.precio}</p>
                  <p className="text-gray-800 leading-none">{producto.data.existencia} Piezas disponibles</p>
                </div>
              </div>
              <div
                className='flex justify-end'
              >
                <Link
                  href={'/producto/editar/'+producto.data.slug}
                >
                  <Editar>
                    Editar Producto
                  </Editar>
                </Link>
              </div>
              <div
                onClick={async()=>{
                  console.log('deleteoo', typeof producto.data?.id)
                  try {
                    await deleteProducto.mutateAsync({id: Number(producto.data?.id)});
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

export default Productos