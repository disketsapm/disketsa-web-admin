"use client";
import { Button } from "@/shared/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type ISidebarData = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

const SidebarData: ISidebarData[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    href: "/",
  },
];

export default function Sidebar() {
  const path = usePathname();
  const router = useRouter();

  const parts = path.split("/").slice(1, 3); // Split and take parts after the first slash
  const slicedPath = `/${parts.join("/")}`; // Join them back with a slash

  return (
    <div className="hidden border-r bg-muted/40 md:block w-[280px]">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="">Disketsa Super Apps</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 gap-2 text-sm font-medium lg:px-4">
            {SidebarData?.map((item, index) => {
              return (
                <Button
                  onClick={() => router.push(item?.href)}
                  startContent={item?.icon}
                  key={`sidebar-data-${index}`}
                  className="flex items-center justify-start"
                  variant={slicedPath === item?.href ? "default" : "ghost"}
                >
                  {item?.title}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
