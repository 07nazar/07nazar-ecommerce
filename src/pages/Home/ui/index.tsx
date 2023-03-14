import { Hero } from 'widgets/Hero';
import { SubscribeNews } from 'widgets/SubscribeNews';

import { categoriesHome } from '../lib';

import { Categories } from './Categories';
import { DealsAndOffers } from './DealsAndOffers';
import { ExtraServices } from './ExtraServices';
import { RecommendedItems } from './RecommendedItems';
import { RegionSuppliers } from './RegionSuppliers';
import { SendSuppliers } from './SendSuppliers';

export const Home = () => (
  <>
    <Hero />
    <DealsAndOffers />
    {categoriesHome.map(category => (
      <Categories
        key={category.title}
        title={category.title}
        link={category.link}
        image={category.image}>
        {category.items}
      </Categories>
    ))}
    <SendSuppliers />
    <RecommendedItems />
    <ExtraServices />
    <div className={'my-8'}>
      <RegionSuppliers />
    </div>
    <SubscribeNews />
  </>
);
