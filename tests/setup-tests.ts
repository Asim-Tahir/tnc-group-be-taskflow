import { loadDotEnv } from "#utils";
import type { IncomingMessage, Server, ServerResponse } from "http";

let server: Server<typeof IncomingMessage, typeof ServerResponse>;

/**
 * Setup shared resources, state, or environment
 * Run servers, create files, prepare databases, etc.
 */
export async function globalSetup() {
  await loadDotEnv();

  const { default: app } = await import("#src/app");
  const { PORT } = await import("#env");

  server = app.listen(PORT);
  await new Promise((resolve) => server.once("listening", resolve));

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Test server did not bind to a TCP port");
  }
}

/**
 * Clean up resources, state, or environment
 * Close servers, remove files, disconnect from databases, etc.
 */
export async function globalTeardown() {
  await new Promise<void>((resolve, reject) => {
    if (server) {
      server.close((error) => error ? reject(error) : resolve());
    }
  });
}