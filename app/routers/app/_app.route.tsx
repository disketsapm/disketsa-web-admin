import { Outlet } from "@remix-run/react";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

const AppRouteLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full h-full flex">
        <Sidebar />
        <main className="grid pl-[65px] flex-1 gap-4 overflow-auto p-4 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppRouteLayout;
