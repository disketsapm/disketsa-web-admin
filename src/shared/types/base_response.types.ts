// Define the Meta type
export type Meta = {
  limit?: number;
  offset?: number;
  count?: number;
};

// Define the BaseResponseSuccessParams type
export type BaseResponses<T> = {
  message: string;
  data?: T;
  status: number;
  meta?: Meta;
};

export type BaseParams = {
  limit: number;
  offset: number;
  orderBy: string;
  sortBy: string;
};

export type BaseErrorResponses = {
  message: string;
  error: string | { message: string };
  status: number;
};
