import { createCookieSessionStorage } from "@remix-run/node";
import { AuthResponseType } from "domain/auth";

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
  const header = await commitSession(session);
  return header;
};

export const getTokenSession = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  return token;
};

export const destroyTokenSession = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.unset("token");
  const header = await commitSession(session);
  return header;
};
