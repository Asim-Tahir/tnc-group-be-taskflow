import { styleText } from "node:util";

import { logger } from "#utils";
import { PORT } from "#constants";

import app from "./app.ts";

app.listen(PORT, () => {
  logger.log(`server is running on ${styleText(["grey", "underline"], `http://localhost:${PORT}`)}`);
});
