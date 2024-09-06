import GoogleIcon from "@/shared/components/icons/google-icons";
import { Button } from "@/shared/components/ui/button";
import React from "react";

// TODO: add gogole login via next auth

export default function Page() {
  return (
    <Button
      variant="outline"
      className="w-full h-[55px]"
      startContent={<GoogleIcon className="w-6 h-6" />}
    >
      Continue with Google
    </Button>
  );
}
