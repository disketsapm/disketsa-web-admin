"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function ReactQueryProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
