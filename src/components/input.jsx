import cx from 'classnames';
import React from 'react';
import { callAll } from '../lib/fn-lib';
import { FieldContext } from './field-context';

export const Input = ({ className, onChangeValue, onChange, ...props }) => {
  const { inputId, setInputId } = React.useContext(FieldContext);

  React.useEffect(() => {
    if (props.id && props.id !== inputId) {
      setInputId(props.id);
    }
  }, [props.id]);

  return (
    <input
      id={inputId}
      className={cx('form-control', className)}
      onChange={callAll(
        onChange,
        onChangeValue && (ev => onChangeValue(ev.target.value))
      )}
      {...props}
    />
  );
};
