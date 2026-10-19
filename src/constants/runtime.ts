import { cwd } from "node:process";

/**
 * Current environment
 */
export const ENV = process.env.NODE_ENV || "development";

/**
 * Current working directory
 */
export const CWD = cwd();