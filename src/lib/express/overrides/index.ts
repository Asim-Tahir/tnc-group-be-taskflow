import app from "#src/app";

import { paginate } from "./request/index.ts";

// #region Request
app.request.paginate = paginate;
// #endregion
