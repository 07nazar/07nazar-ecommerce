import { ErrorMessage, useFormikContext } from 'formik';

import { UploadImage } from 'shared/ui/input';

export const ImagesUpload = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <div className={'flex w-full flex-col'}>
      <p>Images: </p>
      <div className={'flex w-full gap-6'}>
        <div className={'flex flex-col md:justify-evenly'}>
          <div className={'flex items-center gap-2'}>
            <p>Main photo: </p>
            <UploadImage setFieldValue={setFieldValue} name={'mainPhoto'} />
          </div>
          <ErrorMessage
            name={'mainPhoto'}
            render={msg => <p className={'text-red'}>{msg}</p>}
          />
        </div>
        <div className={'flex flex-col md:justify-evenly'}>
          <div className={'flex items-center gap-2'}>
            <p>Additional photos: </p>
            <UploadImage
              setFieldValue={setFieldValue}
              name={'additionalPhotos'}
              multiple
            />
          </div>
          <ErrorMessage
            name={'additionalPhotos'}
            render={msg => <p className={'text-red'}>{msg}</p>}
          />
        </div>
      </div>
    </div>
  );
};
