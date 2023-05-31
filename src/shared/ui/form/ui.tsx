import { Field, Form, Formik, FormikValues } from 'formik';
import * as yup from 'yup';

import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { AppLink } from '../links';

export type TypeInputItem = {
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
};

type TypeBaseAuthFormProps<T> = {
  inputItems: TypeInputItem[];
  inputBoxClassNames?: string;
  initialValues: FormikValues & T;
  onSubmitHandler?: (values: T) => Promise<void>;
  formHeader: {
    title: string;
    subTitle: string;
  };
  buttonValue: string;
  formFooter: {
    footerBoxClassNames?: string;
    footerText?: string;
    footerLink?: {
      text: string;
      to: string;
    };
  };
  checkBoxAndLink?: {
    classNames?: string;
    checkBox?: {
      label: string;
    };
    link?: {
      to: string;
      text: string;
    };
  };
  validationSchema?: yup.AnyObjectSchema;
};

export const BaseAuthForm = <T,>({
  inputItems,
  initialValues,
  onSubmitHandler,
  formHeader,
  buttonValue,
  inputBoxClassNames = '',
  formFooter,
  checkBoxAndLink,
  validationSchema,
}: TypeBaseAuthFormProps<T>) => {
  const formClassNames =
    'flex flex-col max-w-[450px] w-full bg-white py-8 px-8 pb-7 shadow-sm rounded-md';

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitHandler || (() => {})}>
      {({ handleSubmit, errors, touched, handleChange, values }) => (
        <Form onSubmit={handleSubmit} className={formClassNames}>
          <div>
            <h1 className={'text-2xl font-semibold text-black mb-2'}>
              {formHeader.title}
            </h1>
            <p className={'text-sm text-gray-hot mb-8'}>
              {formHeader.subTitle}
            </p>
          </div>
          <div className={`${inputBoxClassNames}`}>
            {inputItems.map(input => (
              <div key={input.name} className={'mb-3'}>
                <Field
                  onChange={handleChange}
                  value={values[input.name]}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  className={input.className}
                />
                {errors && errors[input.name] && touched[input.name] && (
                  <div className={'text-red'}>
                    {errors[input.name] as string}
                  </div>
                )}
              </div>
            ))}
          </div>

          {checkBoxAndLink && (
            <div className={checkBoxAndLink.classNames || ''}>
              {checkBoxAndLink.checkBox && (
                <Checkbox>{checkBoxAndLink.checkBox.label}</Checkbox>
              )}
              {checkBoxAndLink.link && (
                <AppLink to={checkBoxAndLink.link.to} className={'text-blue'}>
                  {checkBoxAndLink.link.text}
                </AppLink>
              )}
            </div>
          )}

          <Button type={'submit'} className={'bg-blue mb-5 justify-center '}>
            {buttonValue}
          </Button>

          <div
            className={`${
              formFooter.footerBoxClassNames || ''
            } flex items-center justify-center gap-5`}>
            {formFooter.footerText && <p>{formFooter.footerText}</p>}
            {formFooter.footerLink && (
              <AppLink to={formFooter.footerLink.to} className={'text-blue'}>
                {formFooter.footerLink.text}
              </AppLink>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
