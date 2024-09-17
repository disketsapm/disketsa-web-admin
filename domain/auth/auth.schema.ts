import * as zod from "zod";

export const authSchema = zod.object({
  email: zod.string().email().min(1),
  password: zod.string().min(1),
});
