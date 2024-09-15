import React from "react";

type ILogoProps = {
  variant?: "small" | "medium" | "large";
  classnames?: {
    container: string;
    logo: string;
  };
};

const LogoIcon = () => {
  return (
    <div className="flex items-center justifyt-center rounded-full border-logo w-10 h-10 p-2 border-2">
      <div className=" w-full h-full rounded-full bg-logo" />
    </div>
  );
};

const Logo: React.FC<ILogoProps> = ({ variant = "small" }) => {
  if (variant === "small") {
    return <LogoIcon />;
  }

  if (variant === "medium") {
    return (
      <div className="flex gap-2 items-center">
        <LogoIcon />
        <img
          src="/images/logo/logo-font.svg"
          className="w-20 h-20"
          alt="logo-font"
        />
      </div>
    );
  }

  return <></>;
};

export default Logo;
