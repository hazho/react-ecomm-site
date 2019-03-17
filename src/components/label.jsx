import React from 'react';
import { FieldContext } from './field-context';

export const Label = props => {
  const { inputId } = React.useContext(FieldContext);

  return <label htmlFor={inputId} {...props} />;
};
