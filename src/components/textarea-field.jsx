import React from 'react';
import { FormGroup } from './form-group';
import { Textarea } from './textarea';
import { getId } from '../lib/id';

export const TextareaField = ({
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
      <Textarea id={idVal} {...textareaProps} />
    </FormGroup>
  );
};
