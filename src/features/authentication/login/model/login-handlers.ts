import {
  MutationTrigger,
  TypedUseMutationResult,
} from '@reduxjs/toolkit/dist/query/react/buildHooks';

import { sessionApi } from 'entities/session';

type ResultType = typeof sessionApi.endpoints.loginUser.Types.ResultType;
type TypeBaseQuery = typeof sessionApi.endpoints.loginUser.Types.BaseQuery;

type TypeBody = typeof sessionApi.endpoints.loginUser.Types.QueryArg;
type TypeLoginUser = MutationTrigger<
  typeof sessionApi.endpoints.loginUser.Types.MutationDefinition
>;
type TypeResult = TypedUseMutationResult<ResultType, TypeBody, TypeBaseQuery>;

export const login = async (
  body: TypeBody,
  loginUser: TypeLoginUser,
  result: TypeResult
) => {
  try {
    if (typeof loginUser === 'function') {
      loginUser(body);
    }

    if ('error' in result && result.error) {
      // Обработка ошибки
      throw new Error('Login error');
    }

    // Обработка успешного ответа
  } catch (error) {
    // Обработка ошибки при выполнении запроса

    throw new Error('Login error');
  }
};
