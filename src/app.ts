import express from "express";

import { loggerMiddleware, notFoundErrorMiddleware } from "#middlewares";
import { loadDotEnv } from "#utils";
import { apiRouter } from "#routers";

await loadDotEnv();

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/v1", apiRouter);

app.use(notFoundErrorMiddleware);

export default app;
