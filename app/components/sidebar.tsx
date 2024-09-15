import { DashboardIcon } from "@radix-ui/react-icons";
import { SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  key: string;
};

const navItems: NavItem[] = [
  {
    key: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    href: "/",
  },
];

const navBottomItems: NavItem[] = [
  {
    key: "settings",
    title: "Settings",
    icon: <SettingsIcon />,
    href: "/",
  },
];

const Sidebar = () => {
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-[92.5vh] flex-col justify-between border-r">
      <nav className="grid gap-1 p-2">
        {navItems?.map((item) => {
          return (
            <Tooltip key={item.key}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label={item?.title}
                >
                  {item?.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {item?.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <nav className=" grid gap-1 p-2">
        {navBottomItems?.map((item) => {
          return (
            <Tooltip key={item.key}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label={item?.title}
                >
                  {item?.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {item?.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
