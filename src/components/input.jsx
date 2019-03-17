import cx from 'classnames';
import React from 'react';
import { callAll } from '../lib/fn-lib';

export const Input = ({ className, onChangeValue, onChange, ...props }) => {
  return (
    <input
      className={cx('form-control', className)}
      onChange={callAll(
        onChange,
        onChangeValue && (ev => onChangeValue(ev.target.value))
      )}
      {...props}
    />
  );
};
