import { products } from "./products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    for(let product of products){
        await prisma.producto.create({
            data: product
        });
    }
}

main().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})