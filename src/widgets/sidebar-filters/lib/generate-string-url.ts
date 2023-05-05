export const generateStringURL = (params: string | string[]): string => {
  if (Array.isArray(params)) {
    return params
      .map(value => value.replace(/ /g, '-'))
      .join('+')
      .toLowerCase();
  }
  return params.replace(/ /g, '-').toLowerCase();
};
