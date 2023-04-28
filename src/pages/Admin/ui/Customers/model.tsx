import { userTypes } from 'entities/User';

// TODO добавить в тип юзера поле issuedDate

export type AdminUser = Pick<userTypes.Seller, 'id' | 'name' | 'photo'> & {
  issuedDate: string;
  supplierCompany: null | string;
};

export const usersFromServer: AdminUser[] = [
  {
    id: 'id1',
    name: 'Jordan StevensonJordan StevensonJordan StevensonJordan Stevenson',
    photo:
      'https://store-images.s-microsoft.com/image/apps.34105.14348611860757069.72daddf9-ac16-47e6-831f-05173225ecd0.64c16614-2bc0-4d50-9daf-5d8c6eb627d0',
    issuedDate: '22 Oct 2019',
    supplierCompany: null,
  },
  {
    id: 'id2',
    name: 'Jordan StevensonJordan StevensonJordan StevensonJordan Stevenson',
    photo:
      'https://store-images.s-microsoft.com/image/apps.34105.14348611860757069.72daddf9-ac16-47e6-831f-05173225ecd0.64c16614-2bc0-4d50-9daf-5d8c6eb627d0',
    issuedDate: '22 Oct 2019',
    supplierCompany: 'Company 1',
  },
  {
    id: 'id3',
    name: 'Jordan StevensonJordan StevensonJordan StevensonJordan Stevenson',
    photo:
      'https://store-images.s-microsoft.com/image/apps.34105.14348611860757069.72daddf9-ac16-47e6-831f-05173225ecd0.64c16614-2bc0-4d50-9daf-5d8c6eb627d0',
    issuedDate: '22 Oct 2019',
    supplierCompany: 'Company 1',
  },
];
