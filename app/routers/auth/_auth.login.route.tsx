import type { ActionFunctionArgs } from "@remix-run/node";
import React from "react";
import { loginEmailAction } from "~/features/auth/email-login/email-login.action";
import EmailLogin from "~/features/auth/email-login/email-login.ui";

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = await loginEmailAction(request);

  return data;
};

const LoginRoute: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <EmailLogin />
    </div>
  );
};

export default LoginRoute;
