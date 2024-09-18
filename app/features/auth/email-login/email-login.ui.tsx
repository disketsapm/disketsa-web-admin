import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useNavigation } from "@remix-run/react";
import { authSchema, AuthType } from "domain/auth";
import { Mail } from "lucide-react";
import { useRemixForm } from "remix-hook-form";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormProvider,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const EmailLogin = () => {
  const form = useRemixForm<AuthType>({
    mode: "onSubmit",
    resolver: zodResolver(authSchema),
  });
  const navigation = useNavigation();

  return (
    <FormProvider {...form}>
      <Form method="post" onSubmit={form.handleSubmit} action="/login">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[55px]"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-[55px]"
                      type="password"
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
            type="submit"
            className="w-full h-[55px]"
            startContent={<Mail className="w-6 h-6" />}
            isLoading={navigation.state === "submitting"}
          >
            Continue with Email
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
};

export default EmailLogin;
