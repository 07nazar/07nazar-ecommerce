import { Form, Formik, FormikValues } from 'formik';

import { productCreateSchema } from '../lib';

import { AdvantagesList } from './advantages-list';
import { Description } from './description';
import { ImagesUpload } from './images-upload';
import { NameDeliveryBlock } from './name-delivery-block';
import { PriceBlock } from './price-block';
import { QuantityCategoryBlock } from './quantity-category-block';
import { SubmitButton } from './submit-button';

type NewProductType = {
  name: string;
  description: string;
  quantity: string;
  price: {
    old: string;
    current: string;
  };
  advantages: string[];
  category: string;
  deliveryCost: string;
  additionalPhotos: FileList[];
  mainPhoto: File | null;
};

export const ProductCreate = () => {
  const initialValues: NewProductType = {
    name: '',
    description: '',
    quantity: '',
    price: {
      old: '',
      current: '',
    },
    advantages: [''],
    category: '',
    deliveryCost: '',
    additionalPhotos: [],
    mainPhoto: null,
  };
  const onSubmit = (values: FormikValues) => {
    console.log('submit');
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={productCreateSchema}
      onSubmit={onSubmit}>
      <Form className={'mt-8 flex flex-col items-start gap-4 sm:px-4'}>
        <NameDeliveryBlock />
        <Description />
        <QuantityCategoryBlock />
        <PriceBlock />
        <AdvantagesList />
        <ImagesUpload />
        <SubmitButton />
      </Form>
    </Formik>
  );
};
