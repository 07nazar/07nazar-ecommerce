import {
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

interface InputGroupProps {
  children: ReactNode[];
  className?: string;
}
// TODO Math.random() вызывет все равно ререндер, нужно как-то задать уникальные ключи
export const InputGroup: FC<InputGroupProps> = ({
  children,
  className = '',
}) => (
  <div className={`inline-flex h-10 ${className}`}>
    {children.map((child, index) => {
      if (isValidElement(child)) {
        const borderLeft = index === 0 ? 'rounded-l-md' : '';
        const borderRight = index === children.length - 1 ? 'rounded-r-md' : '';

        return cloneElement(child as ReactElement, {
          className: `${borderLeft} ${borderRight} ${
            child.props.className || ''
          }`,
          key: `input-group-${children.length}-${
            className?.length
          }-${Math.random()}`,
        });
      }
      return child;
    })}
  </div>
);
