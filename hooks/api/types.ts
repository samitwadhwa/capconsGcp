import { ZodIssue } from "zod";

export enum ApiErrorTypes {
  ValidationError = "ValidationFailure",
  BadRequestError = "BadRequest",
  UnauthorizedError = "UnauthorizedError",
  ForbiddenError = "PermissionDenied",
}

export type CApiErrors =
  | {
      error: ApiErrorTypes.ValidationError;
      message: ZodIssue[];
      statusCode: 403;
    }
  | { error: ApiErrorTypes.ForbiddenError; message: string; statusCode: 401 }
  | { statusCode: 400; message: string; error: ApiErrorTypes.BadRequestError };
