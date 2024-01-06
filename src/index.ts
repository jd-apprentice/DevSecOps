import { Elysia } from "elysia";
import os from "os";
import { version, name } from "#package";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/health", () => {
    return {
      name,
      version,
      system: os.type(),
      uptime: process.uptime().toFixed(2),
      timestamp: new Date().toLocaleString(),
    }
  })
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
