import { styleText } from "node:util";

import { logger, loadDotEnv } from "#utils";

await loadDotEnv();

import { PORT } from "#env";

import "#lib/express";
import "#lib/zod";

import app from "#src/app";

app.listen(PORT, () => {
  logger.log(`server is running on ${styleText(["grey", "underline"], `http://localhost:${PORT}`)}`);
});
