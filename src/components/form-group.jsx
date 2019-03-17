import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { getId } from '../lib/id';
import { FieldContext } from './field-context';

export const FormGroup = ({ validationStatus, className, ...props }) => {
  const [inputId, setInputId] = React.useState(getId());

  return (
    <FieldContext.Provider value={{ inputId, setInputId }}>
      <div
        className={cx(
          'form-group',
          validationStatus && `has-${validationStatus}`,
          className
        )}
        {...props}
      />
    </FieldContext.Provider>
  );
};

FormGroup.propTypes = {
  validationStatus: PropTypes.oneOf(['success', 'warning', 'error'])
};
