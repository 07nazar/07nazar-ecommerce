import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const productCreateSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, 'Минимальная длина - 5 символов')
    .max(35, 'Слишком длинное название')
    .required('Название продукта обязательно'),
  description: yup
    .string()
    .min(100, 'Минимальная длина описания - 100 символов')
    .max(2500, 'Максимальная длина описания - 2500 символов')
    .required('Описание продукта обязательно'),
  quantity: yup.string().required('Количество продукта обязательно'),
  price: yup.object().shape({
    old: yup.string(),
    current: yup.string().required('Текущая цена продукта обязательна'),
  }),
  advantages: yup
    .array()
    .of(
      yup
        .string()
        .min(10, 'Длина меньше 10 символов')
        .max(150, 'Длина превышает 150 символов')
        .required('Поле не заполнено')
    )
    .min(1, 'Необходимо указать хотя бы одно преимущество продукта')
    .max(5, 'Макс. число преимуществ достигнуто'),
  category: yup.string().required('Категория продукта обязательна'),
  deliveryCost: yup.string().required('Стоимость доставки обязательна'),
  additionalPhotos: yup
    .mixed<FileList>()
    .test(
      'fileCount',
      'Минимальное количество дополнительных фото - 2',
      files => files && files?.length >= 2
    )
    .test(
      'fileFormat',
      'Допустимые форматы файлов: jpg, jpeg, png',
      value =>
        value &&
        Object.values(value).every(file =>
          SUPPORTED_FORMATS.includes(file.type)
        )
    ),
  mainPhoto: yup
    .mixed<File>()
    .required('Главное фото продукта обязательно')
    .test(
      'fileFormat',
      'Допустимые форматы файлов: jpg, jpeg, png',
      ({ type }) => SUPPORTED_FORMATS.includes(type)
    ),
});
