# Create T3 App

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

We also [roll our own docs](https://beta.create.t3.gg) with some summary information and links to the respective documentation.

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

## How do I deploy this?

Follow our deployment guides for [Vercel](https://beta.create.t3.gg/en/deployment/vercel) and [Docker](https://beta.create.t3.gg/en/deployment/docker) for more information.


# Configuracion de entorno

- PostgreSQL v15 (En contenedor docker)
- node@v18.10.0
- npm@8.19.2


### Levantamiento de contenedor docker para bd

Descargar la imagen de la version mas reciente de postgresql para docker
```bash
docker pull postgres 
```
Posterior a la descarga levantamos un contenedor con postgres

```bash
docker run -e POSTGRES_USER=usuario -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mitiendita -p 5432:5432 -d postgres
```
## Pasos para lanzar el proyecto
```
~$ yarn install
~$ yarn dev
~$ npx prisma migrate dev
```