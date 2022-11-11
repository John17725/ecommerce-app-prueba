import React from 'react'
import ListaElementos from '../../components/listItem'

const ListaProductos = () => {
  return (
    <div>
      <h1>ssssss</h1>
      <div>
        <ListaElementos
          productos={[
            {
              id: 1,
              nombre: "polla",
              slug: 'polla-prod',
              descripcion: 'Pollos a la le',
              existencia: 2,
              precio: 15.5
            }
          ]}
        />
      </div>
    </div>
  )
}

export default ListaProductos