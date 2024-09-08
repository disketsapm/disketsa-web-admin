import { toast } from "@/shared/hooks/use-toast";
import directus from "@/shared/lib/directus";
import { Auth } from "@/shared/types/middleware/auth.type";
import { login } from "@directus/sdk";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const loginWithEmail = async ({ data }: { data: Auth }) => {
  try {
    const response = await directus.request(login(data.email, data.password));

    return response;
  } catch (error) {
    throw error;
  }
};

const useLoginWithEmailMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: Auth) => {
      return await loginWithEmail({ data });
    },

    onSuccess: () => {
      router.push("/");
      toast({
        title: "Login Successful",
        description: "You have successfully logged in",
      });
    },
    onError: () => {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again",
      });
    },
  });
};

export default useLoginWithEmailMutation;
