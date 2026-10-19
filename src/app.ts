import express from "express";

import { loggerMiddleware } from "#middlewares";
import { loadDotEnv } from "#utils";

await loadDotEnv();

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

export default app;
