import { router } from "../trpc";
import { exampleRouter } from "./example";
import { productoRouter } from "./producto";

export const appRouter = router({
  example: exampleRouter,
  producto: productoRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
