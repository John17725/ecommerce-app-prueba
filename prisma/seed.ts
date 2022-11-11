import { products } from "./products";
import { productsCarrito } from "./carrito";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    for(let product of products){
        await prisma.producto.create({
            data: product
        });
    }
    for(let item of productsCarrito){
        await prisma.carrito.create({
            data: item
        });
    }

}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})