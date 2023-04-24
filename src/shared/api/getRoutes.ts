import routes from './routes.json';

interface MenuItem {
  id: number;
  text: string;
  to: string;
  children?: MenuItem[];
}

export const getRoutes = (): MenuItem[] =>
  JSON.parse(JSON.stringify(routes)).children;
