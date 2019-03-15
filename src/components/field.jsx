import PropTypes from 'prop-types';
import cx from 'classnames';
import React from 'react';

/**
 * `Field` is a component that provides contextual styling
 * of other form elements within it.
 *
 * Props not specified will be spreaded to the underlying `div` element.
 */
export function Field({ status, className, ...props }) {
  return (
    <div
      className={cx('form-group', status && `has-${status}`, className)}
      {...props}
    />
  );
}

Field.propTypes = {
  /**
   * validation status of the field, which will styles related form elements
   * within it accordingly
   */
  status: PropTypes.oneOf(['warning', 'error', 'success'])
};

export default Field;
