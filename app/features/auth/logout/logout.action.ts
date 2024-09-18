import { logoutAPI } from "infra/api/auth/logout.api";
import {
  getTokenSession,
  redirectWithClearedSessions,
} from "infra/auth/session";

export const logoutAction = async (request: Request) => {
  const token = await getTokenSession(request);
  await logoutAPI(token.refresh_token);
  return redirectWithClearedSessions();
};
