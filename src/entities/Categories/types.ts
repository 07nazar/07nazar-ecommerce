// Тип, который приходит с сервера
export type CategoryDto = {
  id: number;
  text: string;
  children?: Category[];
};

export type Category = {
  id: number;
  text: string;
  children?: Category[];
};
