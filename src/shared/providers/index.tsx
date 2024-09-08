"use client";

import ReactQueryProviders from "./react-hook-form.provider";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ReactQueryProviders>{children}</ReactQueryProviders>;
};

export default Providers;
