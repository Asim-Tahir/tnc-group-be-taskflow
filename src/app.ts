import express from "express";

import { loadDotEnv } from "#utils";

await loadDotEnv();

const app = express();

app.use(express.json());

export default app;
