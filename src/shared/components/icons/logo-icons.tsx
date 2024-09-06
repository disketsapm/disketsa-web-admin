import BaseImage from "@/shared/components/base-image";
import { cn } from "@/shared/lib/clsx";
import React from "react";

type ILogoIconProps = {
  type: "grayscale" | "black";
  classnames?: string;
  iconClassnames?: string;
};
// TODO: add logos for dark mode

const LogoIcon: React.FC<ILogoIconProps> = ({
  type,
  classnames,
  iconClassnames,
}) => {
  return (
    <div className={cn("flex items-center gap-2", classnames)}>
      {type === "grayscale" ? (
        <BaseImage
          src="/logo/logo-grayscale.svg"
          alt="logo"
          className={iconClassnames}
        />
      ) : (
        <BaseImage
          src="/logo/logo-black.svg"
          alt="logo"
          className={iconClassnames}
        />
      )}
      <p className="text-white font-bold text-2xl">Disketsa Super Apps</p>
    </div>
  );
};

export default LogoIcon;
