import React from "react";
import BackgroundAuth from "../_components/background-auth";

type ILayoutProps = {
  loginwithmagiclink: React.ReactNode;
  loginwithgoogle: React.ReactNode;
  loginwithemail: React.ReactNode;
};

export default function Layout({
  loginwithmagiclink,
  loginwithgoogle,
  loginwithemail,
}: ILayoutProps) {
  return (
    <div className="w-full grid-cols-2 grid h-full">
      <div className="w-full flex flex-col justify-between items-center p-4">
        <div />
        <div className="w-full  px-40 flex flex-col gap-2 ">
          <div className="w-full flex-col flex gap-2">
            <div className="text-2xl font-bold">Sign In</div>
            <div className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </div>
          </div>
          {loginwithgoogle}
          {loginwithemail}
        </div>
        <div className="text-xs text-muted-foreground">powered by disketsa</div>
      </div>
      <BackgroundAuth />
    </div>
  );
}
