import { getTokenSession } from "infra/auth/session";
import { redirectWithToast } from "remix-toast";

export const middleware = async (request: Request) => {
  const token = await getTokenSession(request);

  if (!token) {
    return redirectWithToast("/login", {
      message: "Error",
      description: "You are not logged in",
      type: "error",
    });
  }
  return token;
};
