import { Router } from "express";

import healthRouter from "./health.ts";
import reportsRouter from "./reports.ts";
import tasksRouter from "./tasks.ts";

const apiRouter = Router({ mergeParams: true });

apiRouter.use("/health", healthRouter);
apiRouter.use("/reports", reportsRouter);
apiRouter.use("/tasks", tasksRouter);

export default apiRouter;
