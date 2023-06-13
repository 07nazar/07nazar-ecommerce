import { Field, Form, Formik } from 'formik';
import {
  useRef,
  FC,
  MutableRefObject,
  KeyboardEvent,
  ChangeEvent,
  ClipboardEvent,
} from 'react';

import { Button } from 'shared/ui/button';
import { TypeInputItem } from 'shared/ui/form';
import { AppLink } from 'shared/ui/links';

import {
  emailVerifySchema,
  onPasteInput,
  setNextInput,
  setPrevInput,
} from './model';

type TypeFormProps = {
  inputsData: TypeInputItem[];
};

export type TypeMyFormValues = {
  [key: string]: string;
};

const initialValues: TypeMyFormValues = {
  code1: '',
  code2: '',
  code3: '',
  code4: '',
  code5: '',
  code6: '',
};

export const EmailVerifyForm: FC<TypeFormProps> = ({ inputsData }) => {
  const inputRefs: Record<string, MutableRefObject<HTMLInputElement | null>> = {
    code1: useRef(null),
    code2: useRef(null),
    code3: useRef(null),
    code4: useRef(null),
    code5: useRef(null),
    code6: useRef(null),
  };

  const formClassNames =
    'flex flex-col max-w-[450px] w-full bg-white py-8 px-8 pb-7 shadow-sm rounded-md';

  return (
    <div className={'flex justify-center items-center h-full'}>
      <Formik
        onSubmit={values => console.log(values)}
        initialValues={initialValues}
        validationSchema={emailVerifySchema}>
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          values,
          setFieldValue,
          setValues,
        }) => (
          <Form onSubmit={handleSubmit} className={formClassNames}>
            <div>
              <h1 className={'text-2xl font-semibold text-black mb-2'}>
                Verify your email ✉️
              </h1>
              <p className={'text-sm text-gray-hot mb-8'}>
                Account activation link sent to your email address:
                john.doe@email.com Please follow the link inside to continue.
              </p>
            </div>

            <div className={'flex gap-2 mb-5'}>
              {inputsData.map((input, index) => (
                <div key={input.name} className={'mb-3'}>
                  <Field
                    value={values[input.name]}
                    name={input.name}
                    type={input.type}
                    innerRef={inputRefs[input.name]}
                    placeholder={input.placeholder}
                    className={input.className}
                    onPaste={(e: ClipboardEvent<HTMLInputElement>) =>
                      onPasteInput(e, setValues)
                    }
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                      setPrevInput(
                        e,
                        inputRefs,
                        index,
                        setFieldValue,
                        input.name
                      )
                    }
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setNextInput(e, inputRefs, index, handleChange);
                    }}
                  />
                  {errors && errors[input.name] && touched[input.name] && (
                    <div className={'text-red'}>
                      {errors[input.name] as string}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Button className={'bg-blue mb-5 flex justify-center'}>
              Submit
            </Button>

            <div className={'flex items-center justify-center gap-5'}>
              <p>Didn&apos;t get the mail?</p>
              <AppLink to={'/resend'}>Resend</AppLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
