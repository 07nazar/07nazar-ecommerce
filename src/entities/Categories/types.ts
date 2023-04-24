export type Category = {
  id: number;
  text: string;
  to?: string;
  children?: Category[];
};
