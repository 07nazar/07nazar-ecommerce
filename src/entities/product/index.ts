import * as productApiImpl from './api';
import * as productModelImpl from './model';

export * from './ui';
export * as productTypes from './types';

export const productApi = productApiImpl;
export const productModel = productModelImpl;
