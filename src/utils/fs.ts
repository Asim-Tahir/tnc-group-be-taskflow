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
