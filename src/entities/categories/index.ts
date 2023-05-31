import * as categoriesApiImpl from './api';
import * as categoriesLibImpl from './lib';
import * as categoriesModelImpl from './model';

export * as categoriesTypes from './types';

export const categoriesApi = categoriesApiImpl;
export const categoriesModel = categoriesModelImpl;
export const categoriesLib = categoriesLibImpl;
