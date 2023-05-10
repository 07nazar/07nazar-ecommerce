import * as userApiImpl from './api';
import * as userModelImpl from './model';

export * from './ui';
export * as userTypes from './types';

export const userApi = {
  usersFromServer: userApiImpl.usersFromServer,
  sellerFromServer: userApiImpl.sellerFromServer,
  useGetUserByIdQuery: userApiImpl.useGetUserByIdQuery,
  useGetUsersQuery: userApiImpl.useGetUsersQuery,
  useLoginUserMutation: userApiImpl.useLoginUserMutation,
  useRegisterUserMutation: userApiImpl.useRegisterUserMutation,
  useDeleteUserMutation: userApiImpl.useDeleteUserMutation,
};

export const userModel = {
  reducer: userModelImpl.reducer,
  userSlice: userModelImpl.userSlice,
};
