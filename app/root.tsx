import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";

import { TooltipProvider } from "./components/ui/tooltip";
import "./tailwind.css";
import { Toaster } from "~/components/ui/toaster";
import { getToast } from "remix-toast";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { useEffect } from "react";
import { useToast } from "~/hooks/use-toast";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Extracts the toast from the request
  const { toast, headers } = await getToast(request);
  // Important to pass in the headers so the toast is cleared properly
  return typedjson({ toast }, { headers });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const initialToastServer = useTypedLoaderData<typeof loader>();
  const { toast: clientToast } = useToast();

  const serverToast = initialToastServer?.toast;

  useEffect(() => {
    if (serverToast) {
      clientToast({
        title: serverToast.message,
        variant: serverToast.type === "error" ? "destructive" : "default",
        description: serverToast.description,
      });
    }
  }, [serverToast]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <Outlet />
    </TooltipProvider>
  );
}
