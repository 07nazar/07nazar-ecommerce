import {useSelector} from 'react-redux';

type SliceState<T extends SliceNames> = RootState[T];

type SliceSelector<T extends SliceNames, U> = (state: SliceState<T>) => U;

/**
 *
 * @param sliceName принимает имя среза в виде строки
 * @param selector функция которая обращается к этому срезу и получает данные
 */
export const useSliceSelector = <T extends SliceNames, U>(
  sliceName: T,
  selector: SliceSelector<T, U>
): U =>
  useSelector((state: RootState) => {
    if (!(sliceName in state)) {
      throw new Error(
        `Reducer ${String(sliceName)} is not registered for the given slice`
      );
    }

    return selector(state[sliceName]);
  });
