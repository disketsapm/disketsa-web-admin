import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { protectAuthRoute } from "infra/auth/middleware";
import Logo from "~/components/logo";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = await protectAuthRoute(request);

  return token;
};

const AuthRouteLayout = () => {
  return (
    <div className="w-full grid-cols-2 grid h-screen">
      <div className="w-full flex flex-col justify-between items-center p-4">
        <div />
        <div className="w-full  px-40 flex flex-col gap-2 ">
          <div className="w-full flex-col flex gap-2">
            <div className="text-2xl font-bold">Sign In</div>
            <div className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </div>
          </div>
          <Outlet />
        </div>
        <div className="text-xs text-muted-foreground">powered by disketsa</div>
      </div>
      <div className="hidden bg-muted lg:flex lg:flex-col h-full lg:items-center lg:justify-center w-full gap-6">
        <Logo variant="medium" />
      </div>
    </div>
  );
};

export default AuthRouteLayout;
