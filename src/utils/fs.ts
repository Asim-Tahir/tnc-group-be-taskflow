import fs from "node:fs/promises";
import type { PathLike } from "node:fs";

/**
 * Checks if a file exists at the given path.
 */
export async function isFileExists(filePath: PathLike): Promise<boolean> {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Read the file at the given path
 */
export async function readFile(filePath: PathLike): Promise<string> {
  try {
    const content = await fs.readFile(filePath, { flag: "r", encoding: "utf-8" });
  
    return content;
  } catch {
    return "";
  }
}
