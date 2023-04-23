import { useDispatch } from 'react-redux';

import type { AppDispatch } from 'app/store/types';

export const useAppDispatch: () => AppDispatch = useDispatch;
