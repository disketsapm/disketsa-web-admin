import directus from "@/shared/lib/directus";
import { Auth } from "@/shared/types/middleware/auth.type";
import { login } from "@directus/sdk";

const loginWithEmail = async ({ data }: { data: Auth }) => {
  try {
    const response = await directus.request(login(data.email, data.password));

    return response;
  } catch (error) {
    throw error;
  }
};

const useLoginWithEmail = () => {};
