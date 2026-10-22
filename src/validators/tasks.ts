import * as z from "zod/mini";

import {
    taskAssigneeParamsSchema,
    taskCreateSchema,
    taskFilterQuerySchema,
    taskIdParamsSchema,
    taskPartialUpdateSchema,
    taskReportsStatusParamsSchema,
    taskSchema,
    taskSearchQuerySchema,
    taskSortationQuerySchema,
    taskUpdateSchema,
    type TaskAssigneeParamsSchema,
    type TaskCreateSchema,
    type TaskFilterQuerySchema,
    type TaskIdParamsSchema,
    type TaskPartialUpdateSchema,
    type TaskReportsStatusParamsSchema,
    type TaskSchema,
    type TaskSearchQuerySchema,
    type TaskSortationQuerySchema,
    type TaskUpdateSchema,
} from "#schema";

// #region Task
export function validateTask<T extends object = object>(task: T): z.core.util.SafeParseResult<TaskSchema> {
  const result = taskSchema.safeParse(task);

  return result;
}
export async function validateTaskAsync<T extends object = object>(task: T): Promise<z.core.util.SafeParseResult<TaskSchema>> {
  const result = await taskSchema.safeParseAsync(task);

  return result;
}

export function validateTasks<T extends object = object>(tasks: T[]): z.core.util.SafeParseResult<TaskSchema[]> {
  const result = z.array(taskSchema).safeParse(tasks);

  return result;
}
export async function validateTasksAsync<T extends object = object>(tasks: T[]): Promise<z.core.util.SafeParseResult<TaskSchema[]>> {
  const result = await z.array(taskSchema).safeParseAsync(tasks);

  return result;
}
// #endregion

// #region Task Create
export function validateTaskCreate<T extends object = object>(task: T): z.core.util.SafeParseResult<TaskCreateSchema> {
  const result = taskCreateSchema.safeParse(task);

  return result;
}
export async function validateTaskCreateAsync<T extends object = object>(task: T): Promise<z.core.util.SafeParseResult<TaskCreateSchema>> {
  const result = await taskCreateSchema.safeParseAsync(task);

  return result;
}
// #endregion

// #region Task Update
export function validateTaskUpdate<T extends object = object>(task: T): z.core.util.SafeParseResult<TaskUpdateSchema> {
  const result = taskUpdateSchema.safeParse(task);

  return result;
}
export async function validateTaskUpdateAsync<T extends object = object>(task: T): Promise<z.core.util.SafeParseResult<TaskUpdateSchema>> {
  const result = await taskUpdateSchema.safeParseAsync(task);

  return result;
}
// #endregion

// #region Task Partial Update
export function validateTaskPartialUpdate<T extends object = object>(task: T): z.core.util.SafeParseResult<TaskPartialUpdateSchema> {
  const result = taskPartialUpdateSchema.safeParse(task);

  return result;
}
export async function validateTaskPartialUpdateAsync<T extends object = object>(task: T): Promise<z.core.util.SafeParseResult<TaskPartialUpdateSchema>> {
  const result = await taskPartialUpdateSchema.safeParseAsync(task);

  return result;
}
// #endregion

// #region Task Filter
export function validateTaskFilterQuery<T extends object = object>(query: T): z.core.util.SafeParseResult<TaskFilterQuerySchema> {
  const result = taskFilterQuerySchema.safeParse(query);

  return result;
}
export async function validateTaskFilterQueryAsync<T extends object = object>(query: T): Promise<z.core.util.SafeParseResult<TaskFilterQuerySchema>> {
  const result = await taskFilterQuerySchema.safeParseAsync(query);

  return result;
}
// #endregion

// #region Task Sortation
export function validateTaskSortationQuery<T extends object = object>(query: T): z.core.util.SafeParseResult<TaskSortationQuerySchema> {
  const result = taskSortationQuerySchema.safeParse(query);

  return result;
}
export async function validateTaskSortationQueryAsync<T extends object = object>(query: T): Promise<z.core.util.SafeParseResult<TaskSortationQuerySchema>> {
  const result = await taskSortationQuerySchema.safeParseAsync(query);

  return result;
}
// #endregion

// #region Task Search
export function validateTaskSearchQuery<T extends object = object>(query: T): z.core.util.SafeParseResult<TaskSearchQuerySchema> {
  const result = taskSearchQuerySchema.safeParse(query);

  return result;
}
export async function validateTaskSearchQueryAsync<T extends object = object>(query: T): Promise<z.core.util.SafeParseResult<TaskSearchQuerySchema>> {
  const result = await taskSearchQuerySchema.safeParseAsync(query);

  return result;
}
// #endregion

// #region Task ID
export function validateTaskIdParams<T extends object = object>(params: T): z.core.util.SafeParseResult<TaskIdParamsSchema> {
  const result = taskIdParamsSchema.safeParse(params);

  return result;
}
export async function validateTaskIdParamsAsync<T extends object = object>(params: T): Promise<z.core.util.SafeParseResult<TaskIdParamsSchema>> {
  const result = await taskIdParamsSchema.safeParseAsync(params);

  return result;
}
// #endregion

// #region Task assignee
export function validateTaskAssigneeParams<T extends object = object>(params: T): z.core.util.SafeParseResult<TaskAssigneeParamsSchema> {
  const result = taskAssigneeParamsSchema.safeParse(params);

  return result;
}
export async function validateTaskAssigneeParamsParamsAsync<T extends object = object>(params: T): Promise<z.core.util.SafeParseResult<TaskAssigneeParamsSchema>> {
  const result = await taskAssigneeParamsSchema.safeParseAsync(params);

  return result;
}
// #endregioon

// #region Task Reports
export function validateTaskReportsStatusParams<T extends object = object>(params: T): z.core.util.SafeParseResult<TaskReportsStatusParamsSchema> {
  const result = taskReportsStatusParamsSchema.safeParse(params);

  return result;
}

export async function validateTaskReportsStatusParamsAsync<T extends object = object>(params: T): Promise<z.core.util.SafeParseResult<TaskReportsStatusParamsSchema>> {
  const result = await taskReportsStatusParamsSchema.safeParseAsync(params);

  return result;
}
// #endregion