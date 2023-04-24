export const calculateRating = (ratings: number[]): number => {
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
};
