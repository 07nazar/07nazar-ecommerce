// Тип, который приходит с сервера
export type CategoryDto = {
  id: string;
  name: string;
  image: string;
  parentId: string;
  minPrice: number;
  children?: CategoryDto[];
};

export type Category = {
  id: string;
  name: string;
  parentId: string;
  productsCount: number;
  children?: Category[];
};

export type CategoryWithAdditionalInfo = {
  id: string;
  name: string;
  image: string;
  minPrice: number;
  children?: CategoryWithAdditionalInfo[];
};
