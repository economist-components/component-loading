import Delay from 'react-delay';
import React from 'react';

export default class Loading extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      overlay: React.PropTypes.bool,
      loadingText: React.PropTypes.string,
      delay: React.PropTypes.number,
      loadContent: React.PropTypes.string.isRequired,
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const extraClassNames = this.props.className ? this.props.className.split(/\s+/g) : [];
    const els = [];
    if (this.props.loadContent) {
      els.push(<span className="loading__content" key="loading__content" role="status">{this.props.loadContent}
      </span>);
    }
    if (this.props.overlay) {
      els.push(<div className="loading__overlay" key="loading__overlay"></div>);
    }

    els.push(<div className="loading__inner" key="loading__inner"></div>);
    if (this.props.loadingText) {
      els.push(
        <div className="loading__text" key="loading__text">
          <div className="loading__text-inner">
            {this.props.loadingText}
          </div>
        </div>
      );
    }

    const maybeDelay = (children) => {
      if (typeof this.props.delay === 'number') {
        return (
          <Delay wait={this.props.delay}>
            {children}
          </Delay>
        );
      }
      return children;
    };
    return maybeDelay(
      <div className={[ 'loading' ].concat(extraClassNames).join(' ')}>
        {els}
      </div>
    );
  }
}
