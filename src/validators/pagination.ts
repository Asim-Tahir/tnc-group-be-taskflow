import * as z from "zod/mini";

import { paginationQuerySchema, type PaginationQuerySchema } from "#schema";

export function validatePaginationQuery<T extends object = object>(query: T): z.core.util.SafeParseResult<PaginationQuerySchema> {
  const result = paginationQuerySchema.safeParse(query);

  return result;
}

export async function validatePaginationQueryAsync<T extends object = object>(query: T): Promise<z.core.util.SafeParseResult<PaginationQuerySchema>> {
  const result = await paginationQuerySchema.safeParseAsync(query);

  return result;
}