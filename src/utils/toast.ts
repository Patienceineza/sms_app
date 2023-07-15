/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement, JSXElementConstructor, ReactNode } from 'react';
import { ToastContentProps, toast } from 'react-toastify';

export const showErrorMessage = (message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
  toast.error(message, {
    position: 'top-right',
    pauseOnHover: true,
  });
};

export const showSuccessMessage = (message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ((props: ToastContentProps<unknown>) => ReactNode) | null | undefined) => {
  toast.success(message, {
    position: 'top-right',
    pauseOnHover: true,
  });
};
