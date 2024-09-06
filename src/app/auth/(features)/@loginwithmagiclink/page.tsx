import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { Mail } from "lucide-react";
import React from "react";

// TODO: add magic link login via next auth

const Page = () => {
  return (
    <div className="grid gap-4">
      <Separator />

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          className="h-12"
          id="email"
          type="email"
          required
          placeholder="m@example.com"
        />
      </div>
      <Button
        type="submit"
        className="w-full h-[55px]"
        startContent={<Mail className="w-6 h-6" />}
      >
        Continue with Email
      </Button>
    </div>
  );
};

export default Page;
