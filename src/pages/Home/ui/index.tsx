import { RegionSuppliers } from 'pages/Home/ui/RegionSuppliers';
import { Hero } from 'widgets/Hero';
import { SubscribeNews } from 'widgets/SubscribeNews';

import { Categories } from './Categories';
import { DealsAndOffers } from './DealsAndOffers';
import { ExtraServices } from './ExtraServices';
import { RecommendedItems } from './Recommendation';
import { SendSuppliers } from './SendSuppliers';

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
