import Delay from 'react-delay';
import React from 'react';

function maybeDelay(children, delay) {
  if (typeof delay === 'number') {
    return (
      <Delay wait={delay}>
        {children}
      </Delay>
    );
  }
  return children;
}

function Loading({ className, delay, loadingText, overlay }) {
  const extraClassNames = className ? className.split(/\s+/g) : [];
  const els = [];
  if (overlay) {
    els.push(<div className="loading__overlay" key="loading__overlay" />);
  }

  els.push(<div className="loading__inner" key="loading__inner" />);

  if (loadingText) {
    els.push(
      <div className="loading__text" key="loading__text">
        <div className="loading__text-inner">
          {loadingText}
        </div>
      </div>
    );
  }

  return maybeDelay(
    <div className={[ 'loading' ].concat(extraClassNames).join(' ')}>
      {els}
    </div>,
    delay
  );
}

if (process.env.NODE_ENV !== 'production') {
  Loading.propTypes = {
    className: React.PropTypes.string,
    overlay: React.PropTypes.bool,
    loadingText: React.PropTypes.string,
    delay: React.PropTypes.number,
  };
}

export default Loading;
