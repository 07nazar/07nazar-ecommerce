import { ChangeEvent, FC } from 'react';
import { MdCloudUpload } from 'react-icons/all';

type UploadImageProps = {
  name: string;
  setFieldValue: (field: string, value: File | FileList) => void;
  multiple?: boolean;
};
export const UploadImage: FC<UploadImageProps> = ({
  name,
  setFieldValue,
  multiple = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      if (multiple) {
        return setFieldValue(name, e.currentTarget.files);
      }
      return setFieldValue(name, e.currentTarget.files[0]);
    }

    return null;
  };

  return (
    <label
      htmlFor={`upload-image-${name}`}
      className={
        'flex cursor-pointer flex-col items-center rounded-md bg-white p-2 uppercase tracking-wide text-blue/70 ring-1 ring-blue/50 duration-300 hover:bg-blue hover:text-white'
      }>
      <MdCloudUpload size={26} />
      <span className={'whitespace-nowrap'}>
        Select a {multiple ? 'files' : 'file'}
      </span>
      <input
        id={`upload-image-${name}`}
        className={'hidden'}
        onChange={handleChange}
        multiple={multiple}
        type={'file'}
        name={name}
        accept={'image/*'}
      />
    </label>
  );
};
