import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs } from "@remix-run/node";
import { AxiosError } from "axios";
import { authSchema, AuthType } from "domain/auth";
import { loginWithEmailAPI } from "infra/api/auth/login.api";
import { storeTokenSession } from "infra/auth/session";
import { getValidatedFormData } from "remix-hook-form";
import { redirectWithToast } from "remix-toast";
import { typedjson } from "remix-typedjson";

export const loginEmailAction = async (
  request: ActionFunctionArgs["request"]
) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<AuthType>(request, zodResolver(authSchema));

  if (errors) {
    return typedjson({ errors, defaultValues });
  }

  try {
    const response = await loginWithEmailAPI(data);

    const sessionHeader = await storeTokenSession(response.data.data);

    return redirectWithToast(
      "/",
      {
        message: "Success",
        description: "You are now logged in",
        type: "success",
      },
      {
        headers: {
          "Set-Cookie": sessionHeader,
        },
      }
    );
  } catch (error) {
    const err = error as AxiosError<{
      errors: {
        message: string;
      }[];
    }>;

    const message = err?.response?.data?.errors?.[0]?.message;

    return redirectWithToast("/login", {
      message: "Error",
      description: message ? message : "Something went wrong",
      type: "error",
    });
  }
};
