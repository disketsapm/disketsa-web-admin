import { NextResponse } from "next/server";
import {
  BaseResponses,
  BaseErrorResponses,
} from "../types/base_response.types";

export async function handleBaseResponseSuccess<T>({
  data,
  message,
  status,
  meta,
}: BaseResponses<T>): Promise<NextResponse> {
  return NextResponse.json({ data, message, status, meta }, { status: status });
}

export async function handleBaseResponseError({
  message,
  status,
  error,
}: BaseErrorResponses): Promise<NextResponse> {
  return NextResponse.json(
    {
      message,
      status,
      error: error instanceof Error ? error.message : String(error),
    },
    { status }
  );
}
