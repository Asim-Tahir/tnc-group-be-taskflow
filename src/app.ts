import express from "express";

import { loggerMiddleware, notFoundErrorMiddleware, errorMiddleware } from "#middlewares";
import { apiRouter, swaggerRouter } from "#routers";

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/swagger", swaggerRouter);
app.use("/api/v1", apiRouter);

app.use(notFoundErrorMiddleware);
app.use(errorMiddleware);

export default app;
