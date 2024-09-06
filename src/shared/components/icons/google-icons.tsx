import BaseImage from "@/shared/components/base-image";
import React from "react";

type GoogleIconProps = {
  className?: string;
};

const GoogleIcon: React.FC<GoogleIconProps> = ({ className }) => {
  return (
    <BaseImage
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
      className={className}
    />
  );
};

export default GoogleIcon;
