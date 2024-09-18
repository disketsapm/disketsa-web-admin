import { createCookieSessionStorage } from "@remix-run/node";
import { AuthResponseType } from "domain/auth";
import { redirectWithToast } from "remix-toast";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "authentication",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: [""],
      secure: process.env.NODE_ENV === "production",
    },
  });

export const storeTokenSession = async (
  auth_data: AuthResponseType["data"]
) => {
  const session = await getSession();
  session.set("token", auth_data.access_token);
  session.set("refresh_token", auth_data.refresh_token);
  session.set("expires", auth_data.expires);

  const header = await commitSession(session);
  return header;
};

export const getTokenSession = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const refresh_token = session.get("refresh_token");
  const expires = session.get("expires");

  return {
    token,
    refresh_token,
    expires,
  };
};

export async function redirectWithClearedSessions(): Promise<Response> {
  const session = await getSession();
  session.unset("token");
  session.unset("refresh_token");
  session.unset("expires");

  return redirectWithToast(
    "/login",
    {
      message: "Success",
      description: "You are now logged out",
      type: "success",
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}
