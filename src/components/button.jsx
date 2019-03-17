import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export function Button({ color, size, className, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={cx(
        'btn',
        color && `btn-${color}`,
        size && `btn-${size}`,
        className
      )}
      {...props}
    />
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'default', 'success', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'lg', 'xs']),
  className: PropTypes.string
};
