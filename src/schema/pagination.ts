import * as z from "zod/mini";

import {
    PAGINATION_MAX_LIMIT,
    PAGINATION_MAX_PAGE,
    PAGINATION_MIN_LIMIT,
    PAGINATION_MIN_PAGE
} from "#constants";

export const paginationQuerySchema = z.partial(
  z.object({
    page: z.number().check(z.minimum(PAGINATION_MIN_PAGE), z.maximum(PAGINATION_MAX_PAGE)),
    limit: z.number().check(z.minimum(PAGINATION_MIN_LIMIT), z.maximum(PAGINATION_MAX_LIMIT))
  })
);

export type PaginationQuerySchema = z.infer<typeof paginationQuerySchema>;
