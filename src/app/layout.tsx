"use client";

import { Inter as FontSans } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import { cn } from "@/shared/lib/clsx";
import Providers from "@/shared/providers";
import { Toaster } from "@/shared/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
