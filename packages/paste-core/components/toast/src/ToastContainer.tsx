import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {ToastPortal} from './ToastPortal';
import {ToastContainerProps, ToastContainerPropTypes} from './types';

const ToastContainer: React.FC<ToastContainerProps> = ({children, ...props}) => {
  return (
    <ToastPortal {...props}>
      <Stack orientation="vertical" spacing="space40">
        {children}
      </Stack>
    </ToastPortal>
  );
};

ToastContainer.displayName = 'ToastContainer';

if (process.env.NODE_ENV === 'development') {
  ToastContainer.propTypes = ToastContainerPropTypes;
}

export {ToastContainer};