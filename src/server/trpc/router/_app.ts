import { router } from "../trpc";
import { exampleRouter } from "./example";
import { productoRouter } from "./producto";
import { carritoRouter } from "./carrito";

export const appRouter = router({
  producto: productoRouter,
  carrito: carritoRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
