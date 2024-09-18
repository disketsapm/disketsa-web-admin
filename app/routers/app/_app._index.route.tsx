import { ActionFunctionArgs } from "@remix-run/node";
import React from "react";
import ComingSoonPlaceholder from "~/components/coming-soon-placeholder";
import { logoutAction } from "~/features/auth/logout/logout.action";

export const action = async ({ request }: ActionFunctionArgs) => {
  const logout = await logoutAction(request);

  return logout;
};

const AppRoute: React.FC = () => {
  return (
    <div className="">
      <ComingSoonPlaceholder />
    </div>
  );
};

export default AppRoute;
