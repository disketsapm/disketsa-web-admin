import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@remix-run/react";
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

  return (
    <FormProvider {...form}>
      <Form
        reloadDocument
        method="POST"
        onSubmit={form.handleSubmit}
        action="/login"
      >
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan email anda" {...field} />
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
                  <FormLabel>Kata Sandi</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Masukan kata sandi anda"
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
          >
            Continue with Email
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
};

export default EmailLogin;
