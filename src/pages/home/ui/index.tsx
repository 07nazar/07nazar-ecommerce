import { Hero } from 'widgets/hero';
import { SubscribeNews } from 'widgets/subscribe-news';

import { Categories } from './categories';
import { DealsAndOffers } from './deals-and-offers';
import { ExtraServices } from './extra-services';
import { RecommendedItems } from './recommendation';
import { RegionSuppliers } from './region-suppliers';
import { SendSuppliers } from './send-suppliers';

export const Home = () => (
  <>
    <Hero />
    <DealsAndOffers />
    <Categories />
    <SendSuppliers />
    <RecommendedItems />
    <ExtraServices />
    <RegionSuppliers />
    <SubscribeNews />
  </>
);
