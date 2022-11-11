export interface ProductoListProps {
    productos: Producto[];
}

export interface ProductoItemProps {
    producto: Producto;
}

export interface Producto {
    id: number;
    nombre: string;
    slug: string;
    descripcion: string;
    existencia: number;
    precio: number;
}