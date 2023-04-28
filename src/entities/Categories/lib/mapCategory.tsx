import { Category, CategoryDto } from '../types';

export const mapCategory = (dto: CategoryDto): Category => ({
  id: dto.id,
  text: dto.text,
  children: dto.children,
});
