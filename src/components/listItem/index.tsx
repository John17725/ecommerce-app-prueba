import React from 'react'
import { ProductoListProps } from "./interfaceListItem";
import Tarjeta from "../cardItem"

const ListaElementos = ({ productos }: ProductoListProps) => {
    return(
        <>
            
            {
                productos.map((producto) => 
                   <div
                    className='flex justify-center mt-3 mb-3'
                    key={producto.id}
                   >
                    <Tarjeta
                        producto={producto}
                    />
                   </div>
                )
            }
        </>
    )
}

export default ListaElementos
