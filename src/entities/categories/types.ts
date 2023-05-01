// Тип, который приходит с сервера
export type CategoryDto = {
  id: number;
  text: string;
  image: string;
  minPrice: number;
  children?: CategoryDto[];
};

export type Category = {
  id: number;
  text: string;
  children?: Category[];
};

export type CategoryWithAdditionalInfo = {
  id: number;
  text: string;
  image: string;
  minPrice: number;
  children?: CategoryWithAdditionalInfo[];
};
