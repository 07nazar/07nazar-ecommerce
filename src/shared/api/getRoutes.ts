import routes from './routes.json';

export const getRoutes = () => JSON.parse(JSON.stringify(routes)).children;
