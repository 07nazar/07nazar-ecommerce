import { FC } from 'react';

import { BrandsBlock } from './Brands';
import { CategoryBlock } from './CategoryBlock';
import { ConditionsBlock } from './Conditions';
import { FeaturesBlock } from './FeaturesProduct';
import { PriceRangeBlock } from './PriceRange';
import { RatingBlock } from './Rating';

export const SidebarFilters: FC = () => (
  <>
    <CategoryBlock />
    <BrandsBlock />
    <FeaturesBlock />
    <PriceRangeBlock />
    <ConditionsBlock />
    <RatingBlock />
  </>
);
