import { createDirectus, rest, authentication } from "@directus/sdk";

const directus = createDirectus(process.env.NEXT_PUBLIC_API as string)
  .with(authentication("cookie", { credentials: "include", autoRefresh: true }))
  .with(rest({ credentials: "include" }));

export default directus;
