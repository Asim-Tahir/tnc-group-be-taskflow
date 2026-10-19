import { Router } from "express";

import healthRouter from "./health.ts";

const apiRouter = Router({ mergeParams: true });

apiRouter.use("/health", healthRouter);

export default apiRouter;
