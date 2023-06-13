import { baseApi } from 'shared/api';

type LoginResponse = {
  message: string;
  accessToken: string;
};

export const sessionApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation<
      LoginResponse,
      { email: string; password: string }
    >({
      query: credentials => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { endpoints, useLoginUserMutation } = sessionApi;
