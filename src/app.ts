import express from "express";

import { loggerMiddleware, notFoundErrorMiddleware, errorMiddleware } from "#middlewares";
import { apiRouter } from "#routers";

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/v1", apiRouter);

app.use(notFoundErrorMiddleware);
app.use(errorMiddleware);

export default app;
