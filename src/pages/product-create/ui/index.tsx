import { Form, Formik } from 'formik';

import { productTypes, productApi } from 'entities/product';
import { useAlert } from 'shared/lib/hooks';

import { productCreateSchema } from '../lib';

import { AdvantagesList } from './advantages-list';
import { Description } from './description';
import { ImagesUpload } from './images-upload';
import { NameDeliveryBlock } from './name-delivery-block';
import { PriceBlock } from './price-block';
import { QuantityCategoryBlock } from './quantity-category-block';
import { SubmitButton } from './submit-button';

const initialValues: productTypes.NewProductType = {
  name: 'dasdawdaw',
  description:
    'dasdawdawdasdawdawdasdawdawdasdawdadasdasdasdasdawdasdawdawdasdawdawdasdawdawdasdawdawdasdawdawdasdawdaw',
  quantity: '312',
  price: {
    old: '523',
    current: '634',
  },
  advantages: ['dasdawdawdasdawdawdasdawdawdasdawdawdasdawdaw'],
  category: '',
  deliveryCost: '11',
  additionalPhotos: null,
  mainPhoto: null,
};

export const ProductCreate = () => {
  const [createProduct, { isLoading, isError, isSuccess }] =
    productApi.useCreateProductMutation();
  const { showAlert } = useAlert();
  const onSubmit = (values: productTypes.NewProductType) => {
    console.log(values);
    createProduct(values);

    if (isSuccess) {
      showAlert({ message: 'Product successful created', type: 'success' });
    }

    if (isError) {
      showAlert({ message: 'Error, please try again', type: 'error' });
    }
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
        <SubmitButton isLoading={isLoading} />
      </Form>
    </Formik>
  );
};
