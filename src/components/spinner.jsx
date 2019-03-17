import React from 'react';
import './spinner.css';

function useDelayEffect(timeout, effect, dependencies = []) {
  React.useEffect(() => {
    const timerId = setTimeout(() => {
      effect();
    }, timeout);

    return function() {
      clearTimeout(timerId);
    };
  }, dependencies);
}

/**
 * Spinner is used to indicate busy status, e.g. waiting for API response
 */
export function Spinner({ delayTimeout = 500 }) {
  const [show, setShow] = React.useState(false);

  useDelayEffect(delayTimeout, () => {
    setShow(true);
  });

  return show ? (
    <div className="spinner" role="progressbar">
      <div className="spinner-inner">
        <svg viewBox="22 22 44 44">
          <circle fill="none" cx="44" cy="44" r="16" strokeWidth="4" />
        </svg>
      </div>
    </div>
  ) : null;
}

export default Spinner;
