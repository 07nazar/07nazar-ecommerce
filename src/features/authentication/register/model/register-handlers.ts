import {
  MutationTrigger,
  TypedUseMutationResult,
} from '@reduxjs/toolkit/dist/query/react/buildHooks';

import { userApi } from 'entities/user';

type ResultType = typeof userApi.endpoints.registerUser.Types.ResultType;
type TypeBaseQuery = typeof userApi.endpoints.registerUser.Types.BaseQuery;

type TypeBody = typeof userApi.endpoints.registerUser.Types.QueryArg;
type TypeRegisterUser = MutationTrigger<
  typeof userApi.endpoints.registerUser.Types.MutationDefinition
>;
type TypeResult = TypedUseMutationResult<ResultType, TypeBody, TypeBaseQuery>;

export const register = async (
  body: TypeBody,
  registerUser: TypeRegisterUser,
  result: TypeResult
) => {
  try {
    if (typeof registerUser === 'function') {
      registerUser(body);
    }

    if ('error' in result && result.error) {
      // Обработка ошибки
      throw new Error('Unknown error');
    }

    // Обработка успешного ответа
  } catch (error) {
    // Обработка ошибки при выполнении запроса

    throw new Error('Unknown error');
  }
};
