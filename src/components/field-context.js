import React from 'react';

export const FieldContext = React.createContext({
  inputId: undefined,
  setInputId: function noop() {}
});
