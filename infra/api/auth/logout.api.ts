import { DirectusAxiosAdapter } from "infra/axios/directus.axios";

const service = new DirectusAxiosAdapter();

export const logoutAPI = async (refreshToken: string): Promise<void> => {
  try {
    await service.sendPostRequest<{ refresh_token: string }, void>(
      "/auth/logout",
      { refresh_token: refreshToken }
    );
  } catch (error) {
    throw error;
  }
};
