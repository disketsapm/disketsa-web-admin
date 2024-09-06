import { userSchema } from "@/app/(modules)/users/_utils/user.zod";
import { z } from "zod";

export type IUserRequestBody = z.infer<typeof userSchema>;

export type IUserResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  phoneNumber?: string | null;
  address: string;
  roles: string;
  createdAt: Date;
  updatedAt: Date;
};

export type IErrorResponse = {
  message: string;
  error: string;
  status: number;
};
