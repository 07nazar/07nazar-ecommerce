// import {
//   createListenerMiddleware,
//   type TypedStartListening,
// } from '@reduxjs/toolkit';

// import { sessionApi } from 'entities/Session/model';
// import { invalidateAccessToken } from 'shared/api/invalidateTokenEvent';

// export const invalidateAccessTokenListener = createListenerMiddleware();

// export type TypedListening = TypedStartListening<RootState, AppDispatch>;

// export const startInvalidateAccessTokenListener =
//   invalidateAccessTokenListener.startListening as TypedListening;

// startInvalidateAccessTokenListener({
//   actionCreator: invalidateAccessToken,
//   effect: async (_, api) => {
//     const [refreshToken, {}] = sessionApi.useRefreshTokenMutation();
//     const { accessToken } = api.getState().session;

//     try {
//       const result = await refreshToken({ tokens: { accessToken } });
//     } catch (error) {
//       console.log(error);
//     }
//   },
// });
