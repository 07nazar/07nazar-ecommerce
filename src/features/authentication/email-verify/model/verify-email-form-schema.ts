import * as yup from 'yup';

export const emailVerifySchema = yup.object().shape({
  code1: yup.string().required(''),
  code2: yup.string().required(''),
  code3: yup.string().required(''),
  code4: yup.string().required(''),
  code5: yup.string().required(''),
  code6: yup.string().required(''),
});
