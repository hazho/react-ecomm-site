import cx from 'classnames';
import React from 'react';
import ReactTextarea from 'react-textarea-autosize';
// import { callAll } from '../lib/fn-lib';

export const Textarea = ({
  className,
  onChangeValue,
  onChange,
  minRows = 3,
  ...props
}) => {
  return (
    <ReactTextarea
      className={cx('form-control', className)}
      minRows={minRows}
      onChange={ev => {
        if (onChange) {
          onChange(ev);
        }
        if (onChangeValue) {
          onChangeValue(ev.target.value);
        }
      }}
      {...props}
    />
  );
};
