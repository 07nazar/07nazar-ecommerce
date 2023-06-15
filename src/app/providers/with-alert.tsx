import { nanoid } from '@reduxjs/toolkit';
import { ComponentType, useState, useMemo } from 'react';

import { AlertContext, TypeNotification } from 'shared/lib/hooks/use-alert';
import { Alert } from 'shared/ui/alert';

export const withAlert = (WrappedComponent: ComponentType) => () => {
  const [notification, setNotification] = useState<TypeNotification | null>();

  const showAlert = ({ message, type }: TypeNotification): void => {
    setNotification({ message, type });
  };

  const alertContextValue = useMemo(() => ({ showAlert }), [showAlert]);

  return (
    <AlertContext.Provider value={alertContextValue}>
      <WrappedComponent />
      {notification && (
        <Alert
          type={notification.type}
          message={notification.message}
          id={nanoid()}
        />
      )}
    </AlertContext.Provider>
  );
};
