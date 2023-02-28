import { Hero } from 'widgets/Hero'
import { RequestsForm } from 'widgets/RequestsForm'
import { SubscribeNews } from 'widgets/SubscribeNews'

import formBg from '../assets/formBg.jpg'
import { categoriesHome } from '../lib'

import { Categories } from "./Categories";
import { DealsAndOffers } from "./DealsAndOffers";
import { RegionSuppliers } from "./RegionSuppliers";

export const Home = () => (
    <>
        <Hero />
        <DealsAndOffers />
        {categoriesHome.map((category) => (
            <Categories
                key={category.title}
                title={category.title}
                link={category.link}
                image={category.image}>
                {category.items}
            </Categories>
        ))}
        <div
            style={{
                backgroundImage: `url("${formBg}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="w-full flex justify-between p-10 mb-40">
            <div className="flex flex-col  gap-3 ">
                <h2 className="text-4xl text-white font-medium">
                    An easy way to send <br /> requests to all suppliers
                </h2>
                <p className="text-base text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmod tempor
                    incididunt.
                </p>
            </div>
            <RequestsForm />
        </div>
        <div className={"my-8"}>
            <RegionSuppliers />
        </div>
        <SubscribeNews />
    </>
)