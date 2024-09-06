import { cn } from "@/shared/lib/clsx";
import Image from "next/image";
import React from "react";

const BaseImage: React.FC<{
  src: string;
  className?: string;
  alt?: string;
  priority?: boolean;
}> = ({ src, className, alt, priority }) => {
  return (
    <div className={cn("relative w-10 h-10", className)}>
      <Image src={src} alt={alt ? alt : ""} fill priority={priority} />
    </div>
  );
};

export default BaseImage;
