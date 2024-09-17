import { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/react";
import { authSchema, AuthType } from "domain/auth";
import { getValidatedFormData } from "remix-hook-form";
import LoginWithEmail from "~/features/auth/components/login-with-email";
import { zodResolver } from "@hookform/resolvers/zod";

const authResolver = zodResolver(authSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<AuthType>(request, authResolver);
  if (errors) {
    return json({ errors, defaultValues });
  }

  console.log({
    data,
  });

  return json({ data });
};

const Auth = () => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <LoginWithEmail />
    </div>
  );
};

export default Auth;
