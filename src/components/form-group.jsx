import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

export const FormGroup = ({ validationStatus, className, ...props }) => {
  return (
    <div
      className={cx(
        'form-group',
        validationStatus && `has-${validationStatus}`,
        className
      )}
      {...props}
    />
  );
};

FormGroup.propTypes = {
  validationStatus: PropTypes.oneOf(['success', 'warning', 'error'])
};
