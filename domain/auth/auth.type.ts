import { authSchema } from "domain/auth/auth.schema";
import * as zod from "zod";

export type AuthType = zod.infer<typeof authSchema>;

export type AuthResponseType = {
  data: {
    expires: number;
    refresh_token: string;
    access_token: string;
  };
};
