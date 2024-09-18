import { AxiosError } from "axios";
import { AuthResponseType, AuthType } from "domain/auth";
import { DirectusAxiosAdapter } from "infra/axios/directus.axios";

const service = new DirectusAxiosAdapter();

export const loginWithEmailAPI = async (body: AuthType) => {
  try {
    const response = await service.sendPostRequest<AuthType, AuthResponseType>(
      "/auth/login",
      body
    );

    return response;
  } catch (error) {
    throw error;
  }
};
