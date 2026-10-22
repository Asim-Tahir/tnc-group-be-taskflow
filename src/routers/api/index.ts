import { Router } from "express";

import healthRouter from "./health.ts";
import reportsRouter from "./reports.ts";

const apiRouter = Router({ mergeParams: true });

apiRouter.use("/health", healthRouter);
apiRouter.use("/reports", reportsRouter);

export default apiRouter;
