import { Category, CategoryDto } from '../types';

export const mapCategory = (dto: CategoryDto): Category => ({
  id: dto.id,
  name: dto.name,
  parentId: dto.parentId,
  children: dto.children,
});
