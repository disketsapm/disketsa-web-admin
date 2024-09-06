import LogoIcon from "@/shared/components/icons/logo-icons";
import React from "react";

// TODO: add footer in the bottom of background

const BackgroundAuth: React.FC = () => {
  return (
    <div className="hidden bg-black lg:flex lg:flex-col h-full lg:items-center lg:justify-center w-full gap-6">
      <LogoIcon type="grayscale" iconClassnames="w-14 h-14" />
      <div className="w-full text-sm text-white font-semibold px-60"></div>
    </div>
  );
};

export default BackgroundAuth;
