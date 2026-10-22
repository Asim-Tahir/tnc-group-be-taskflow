import * as z from "zod/mini";
import type { Response } from "express";

/**
 * Send formatted {@link z zod} errors to JSON response.
 *
 * @example
 * ```ts
 * res.errors(result.error); // => res.json({ errors: [<zod error message>] });
 * res.status(500).errors(result.error); // => res.status(500).json({ success: false, errors: [<zod error message>] })
 * res.status(404).errors(result.error); // => res.status(400).json({ success: false, errors: [<zod error message>] })
 * ```
 */
export function errors<T = unknown>(
  this: Response,
  zodError: z.core.$ZodError<T>
): Response {
  const errors: string[] = [];

  for (const issue of zodError.issues) {
    errors.push(`${issue.path}: ${issue.message}`);
  }

  this.json({
    success: false,
    errors
  });

  return this;
}
