import { authSchema } from "@/shared/schemas/auth.schema";
import { z } from "zod";

export type Auth = z.infer<typeof authSchema>;
