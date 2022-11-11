import React from 'react'
import { ProductoListProps } from "./interfaceListItem";
import CardItem from "../cardItem"

const ListaElementos = ({ productos }: ProductoListProps) => {
    console.log('lista',productos)
    if(!productos?.length){
        return(
            <>
            sss
                {/* <CardItem
                    mensaje={'Hola mundo'}
                /> */}
            </>
        )
    }
    return(
        <>
            {
                productos.map((producto) => {
                   <div
                    key={producto.id}
                   >
                    <CardItem
                        producto={producto}
                    />
                   </div>
                })
            }
        </>
    )
}

export default ListaElementos
