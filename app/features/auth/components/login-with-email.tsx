import { Form, json } from "@remix-run/react";
import { Mail } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useRemixForm, getValidatedFormData } from "remix-hook-form";
import { authSchema, AuthType } from "domain/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs } from "@remix-run/node";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormProvider,
} from "~/components/ui/form";

const authResolver = zodResolver(authSchema);

const LoginWithEmail = () => {
  const form = useRemixForm<AuthType>({
    mode: "onSubmit",
    resolver: authResolver,
  });

  return (
    <FormProvider {...form}>
      <Form method="POST" onSubmit={form.handleSubmit} action="/auth">
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

export default LoginWithEmail;
