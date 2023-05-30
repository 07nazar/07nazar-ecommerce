import { CategoryDto, CategoryWithAdditionalInfo } from '../types';

export const mapCategoryWithInfo = (
  dto: CategoryDto
): CategoryWithAdditionalInfo => ({
  id: dto.id,
  name: dto.name,
  image: dto.image,
  children: dto.children,
  minPrice: dto.minPrice,
});
