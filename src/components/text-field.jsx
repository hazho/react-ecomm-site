import React from 'react';
import { FormGroup } from './form-group';
import { Input } from './input';
import { getId } from '../lib/id';

export const TextField = ({
  label,
  id,
  validationStatus,
  ...textareaProps
}) => {
  const defaultId = React.useRef(getId());

  const idVal = id || defaultId.current;

  return (
    <FormGroup validationStatus={validationStatus}>
      {label && <label htmlFor={idVal}>{label}</label>}
      <Input id={idVal} {...textareaProps} />
    </FormGroup>
  );
};

export default TextField;
