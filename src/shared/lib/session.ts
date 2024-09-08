"use server";

import { cookies } from "next/headers";
import { AUTH_USER, COOKIE_NAME } from "../constants/cookies";
import { Session } from "../types/middleware/session.type";

export const handleLogoutSession = async () => {
  cookies().delete(AUTH_USER);
  cookies().delete(COOKIE_NAME);
};

export const handleGetUserSession = async () => {
  const cookieStore = cookies();
  let token: Session | undefined = undefined;
  const cookie = cookieStore.get(COOKIE_NAME);

  if (cookie?.value) {
    token = JSON.parse(cookie?.value);
  }

  return token;
};
