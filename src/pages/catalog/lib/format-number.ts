export const formatNumber = (value: number) => {
  const smartFloatRegex = /\B(?=(\d{3})+(?!\d))/g;
  return value.toString().replace(smartFloatRegex, ',');
};
