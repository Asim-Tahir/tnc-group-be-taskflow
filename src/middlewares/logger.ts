import { styleText } from "node:util";

import type { RequestHandler } from "express";

import { logger } from "#utils";

/**
 * Log request method and original URL
 */
const loggerMiddleware: RequestHandler = (req, _res, next) => {
  const reqMethod = req.method;
  const reqOriginalUrl = req.originalUrl;
  const timestamp = new Date().toISOString();
  const reqIp = req.ip || req.socket.remoteAddress || "::1";

  const styledTimestamp = styleText("gray", timestamp);
  const styledReqIp = styleText(["dim", "underline"], reqIp);
  const styledReqOriginalUrl = styleText("cyan", reqOriginalUrl);

  let styledReqMethod = "";

  switch (reqMethod) {
    case "GET":
      styledReqMethod = styleText(["bgGreen", "black"], ` ${reqMethod} `);
      break;

    case "POST":
      styledReqMethod = styleText(["bgBlue", "black"], ` ${reqMethod} `);
      break;

    case "PUT":
      styledReqMethod = styleText(["bgYellow", "black"], ` ${reqMethod} `);
      break;

    case "PATCH":
      styledReqMethod = styleText(["bgYellowBright", "black"], ` ${reqMethod} `);
      break;

    case "DELETE":
      styledReqMethod = styleText(["bgRedBright", "white"], ` ${reqMethod} `);
      break;

    case "QUERY":
      styledReqMethod = styleText(["bgMagenta", "whiteBright"], ` ${reqMethod} `);
      break;

    default:
      styledReqMethod = styleText(["bgGray", "whiteBright"], ` ${reqMethod} `);
      break;
  }

  logger.log(`[${styledTimestamp}] ${styledReqMethod} ${styledReqOriginalUrl} from ${styledReqIp}`);

  next();
}

export default loggerMiddleware;
