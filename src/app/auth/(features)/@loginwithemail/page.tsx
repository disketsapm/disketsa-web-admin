"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { authSchema } from "@/shared/schemas/auth.schema";
import { Auth } from "@/shared/types/middleware/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import useLoginWithEmailMutation from "../../_hooks/useLoginWithEmail";

const Page = () => {
  const form = useForm<Auth>({
    resolver: zodResolver(authSchema),
  });

  const { mutate, isPending } = useLoginWithEmailMutation();

  const onSubmit = (data: Auth) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="h-12"
                    placeholder="m@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="h-12"
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          isLoading={isPending}
          type="submit"
          className="w-full h-[55px]"
          startContent={<Mail className="w-6 h-6" />}
        >
          Continue with Email
        </Button>
      </form>
    </Form>
  );
};

export default Page;
