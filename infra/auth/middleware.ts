import { getTokenSession } from "infra/auth/session";
import { redirectWithToast } from "remix-toast";

export const protectAppRoute = async (request: Request) => {
  const token = await getTokenSession(request);

  if (!token.token) {
    return redirectWithToast("/login", {
      message: "Error",
      description: "You are not logged in",
      type: "error",
    });
  }
  return token;
};

export const protectAuthRoute = async (request: Request) => {
  const token = await getTokenSession(request);

  if (token.token) {
    return redirectWithToast("/", {
      message: "Error",
      description: "You are already logged in",
      type: "error",
    });
  }
  return token;
};
