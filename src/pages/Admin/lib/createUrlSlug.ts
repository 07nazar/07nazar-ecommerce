export const createUrlSlug = (name: string) =>
  `${name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/[^a-z0-9-]/g, '')}`;
