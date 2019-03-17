import React from 'react';
import { FormGroup } from './form-group';
import { Input } from './input';
import { Label } from './label';

export const TextField = ({ label, validationStatus, ...textareaProps }) => {
  return (
    <FormGroup validationStatus={validationStatus}>
      {label && <Label>{label}</Label>}
      <Input {...textareaProps} />
    </FormGroup>
  );
};

export default TextField;
