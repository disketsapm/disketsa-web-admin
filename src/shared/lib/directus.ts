import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(process.env.NEXT_PUBLIC_API as string).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  }),
);

export default directus;
