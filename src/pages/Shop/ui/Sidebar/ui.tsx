import { FC, useEffect, useState } from 'react';

import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import { Checkbox } from 'shared/ui/Checkbox';
import { Dropdown } from 'shared/ui/Dropdown';
import { Input } from 'shared/ui/Input';
import { RangeSlider } from 'shared/ui/RangeSlider';
import { Rating } from 'shared/ui/Rating';

import { useSelectedCheckbox } from '../../model';

const categoriesLinks = [
  {
    title: 'Mobile accessory',
    to: 'mobiles/accessory',
  },
  {
    title: 'Electronics',
    to: 'electronics',
  },
  {
    title: 'Smartphones ',
    to: 'mobiles/smartphones',
  },
  {
    title: 'Modern tech',
    to: 'modern',
  },
  {
    title: 'Clothings',
    to: 'clothings',
  },
];

const brands = [
  {
    label: 'Samsung',
    value: 'samsung',
  },
  { label: 'Apple', value: 'apple' },
  { label: 'Huawei', value: 'huawei' },
  { label: 'Pocco', value: 'pocco' },
  { label: 'Lenovo', value: 'lenovo' },
  { label: 'HTC', value: 'htc' },
  { label: 'Oppo', value: 'oppo' },
];

const features = [
  {
    label: 'Metallic',
    value: 'metallic',
  },
  { label: 'Plastic cover', value: 'plastic-cover' },
  { label: '8GB Ram', value: '8gb-ram' },
  { label: 'Super power', value: 'super-power' },
  { label: 'Large Memory', value: 'large-memory' },
  { label: 'Large battery', value: 'large-battery' },
];

const conditions = [
  {
    label: 'Any',
    value: 'any',
  },
  { label: 'Refurbished', value: 'refurbished' },
  { label: 'Brand new', value: 'brand-new' },
  { label: 'Old items', value: 'old-items' },
];

export const Sidebar: FC = () => {
  const price = {
    min: 0,
    max: 3000,
  };

  const [brandsSelected, handleBrandsChange] = useSelectedCheckbox();
  const [featuresSelected, handleFeaturesChange] = useSelectedCheckbox();
  const [conditionSelected, handleConditionChange] = useSelectedCheckbox();
  const [ratingSelected, handleRatingChange] = useSelectedCheckbox();

  const [userPrice, setUserPrice] = useState({
    min: price.min,
    max: price.max,
  });

  const [userFilters, setUserFilters] = useState({
    brands: brandsSelected,
    features: featuresSelected,
    condition: conditionSelected,
    rating: ratingSelected,
    price: {
      min: userPrice.min,
      max: userPrice.max,
    },
  });

  const handlePriceChange = () => {
    setUserFilters({
      ...userFilters,
      price: {
        min: userPrice.min,
        max: userPrice.max,
      },
    });
  };

  useEffect(() => {
    setUserFilters({
      ...userFilters,
      brands: brandsSelected,
      features: featuresSelected,
      condition: conditionSelected,
      rating: ratingSelected,
    });
  }, [brandsSelected, featuresSelected, conditionSelected, ratingSelected]);

  return (
    <>
      <Dropdown maxItems={3} title={'Category'}>
        {categoriesLinks.map(category => (
          <AppLink
            key={category.title}
            to={category.to}
            className={'text-gray-dark py-1.5'}>
            {category.title}
          </AppLink>
        ))}
      </Dropdown>
      <Dropdown maxItems={5} title={'Brands'} className={'gap-2'}>
        {brands.map(option => (
          <Checkbox
            key={option.value}
            value={option.value}
            isChecked={brandsSelected.includes(option.value)}
            onChange={handleBrandsChange}>
            {option.label}
          </Checkbox>
        ))}
      </Dropdown>
      <Dropdown maxItems={5} title={'Features'} className={'gap-2'}>
        {features.map(option => (
          <Checkbox
            key={option.value}
            value={option.value}
            isChecked={featuresSelected.includes(option.value)}
            onChange={handleFeaturesChange}>
            {option.label}
          </Checkbox>
        ))}
      </Dropdown>
      <Dropdown title={'Slider'} className={'pt-2 pb-3'}>
        <RangeSlider
          min={price.min}
          max={price.max}
          userPrice={userPrice}
          onChange={(min, max) => {
            setUserPrice(() => ({
              min,
              max,
            }));
          }}
          width={240}
        />

        <div className={'flex gap-4 my-4'}>
          <Input
            value={userPrice.min}
            onChange={e => {
              const newValue = Math.min(
                Math.max(+e.target.value, price.min),
                userPrice.max
              );
              setUserPrice({
                ...userPrice,
                min: newValue,
              });
            }}
            placeholder={'0'}
            className={'rounded-md py-2.5 bg-light'}
            min={price.min}
            max={userPrice.max}
          />
          <Input
            value={userPrice.max}
            onChange={e => {
              const newValue = Math.max(
                Math.min(+e.target.value, price.max),
                userPrice.min
              );
              setUserPrice({
                ...userPrice,
                max: newValue,
              });
            }}
            placeholder={'999999'}
            className={'rounded-md py-2.5  bg-light'}
            min={userPrice.min}
            max={price.max}
          />
        </div>
        <Button
          className={'text-blue bg-white bg-light max-w-[76px] w-full mx-auto'}
          onClick={handlePriceChange}>
          Apply
        </Button>
      </Dropdown>
      <Dropdown maxItems={5} title={'Condition'} className={'gap-2'}>
        {conditions.map(option => (
          <Checkbox
            key={option.value}
            circle
            checkedValue={option.value}
            value={option.value}
            isChecked={conditionSelected.includes(option.value)}
            onChange={handleConditionChange}>
            {option.label}
          </Checkbox>
        ))}
      </Dropdown>
      <Dropdown maxItems={5} title={'Ratings'} className={'gap-2'}>
        {[5, 4, 3, 2, 1].map(rating => (
          <Checkbox
            key={rating}
            value={`${rating}`}
            isChecked={ratingSelected.includes(`${rating}`)}
            onChange={handleRatingChange}>
            <Rating value={rating} />
          </Checkbox>
        ))}
      </Dropdown>
    </>
  );
};
