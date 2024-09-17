import type { ClientActionFunctionArgs } from "@remix-run/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import { authSchema, AuthType } from "domain/auth";
import { getValidatedFormData } from "remix-hook-form";

export const loginEmailAction = async (
  request: ActionFunctionArgs["request"]
) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<AuthType>(request, zodResolver(authSchema));
  if (errors) {
    return json({ errors, defaultValues });
  }

  console.log({
    data,
  });

  return json({ data });
};
