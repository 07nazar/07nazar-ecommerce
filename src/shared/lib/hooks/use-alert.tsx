import { createContext, useContext } from 'react';

export type TypeNotification = {
  message: string;
  type: 'success' | 'error' | 'warning';
};

type TypeAlertValue = {
  showAlert: ({ message, type }: TypeNotification) => void;
};

export const AlertContext = createContext<TypeAlertValue>({
  showAlert: () => {},
});

export const useAlert = () => useContext(AlertContext);
