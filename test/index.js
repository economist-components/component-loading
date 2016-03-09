import 'babel-polyfill';
import Loading from '..';
import React from 'react/addons';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
chai.should();

describe('Loading', () => {
  describe('is a React component', () => {
    it('renders a React element', () => {
      React.isValidElement(<Loading />).should.equal(true);
    });
    it('have a basic version', () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(Loading, {}));
      const main = shallowRenderer.getRenderOutput();
      const inner = main.props.children[0];
      main.props.className.should.equal('loading');
      inner.props.className.should.equal('loading__inner');
    });
    it('could have a text', () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(Loading, { loadingText: 'Loading something' }));
      const main = shallowRenderer.getRenderOutput();
      const loadingText = main.props.children[1];
      loadingText.props.className.should.equal('loading__text');
      loadingText.props.children.props.children.should.equal('Loading something');
      loadingText.props.children.props.className.should.equal('loading__text-inner');
    });
    it('could have an overlay element', () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(Loading, { overlay: true }));
      const main = shallowRenderer.getRenderOutput();
      const loadingText = main.props.children[0];
      loadingText.props.className.should.equal('loading__overlay');
    });
    it('can be delayed', () => {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(React.createElement(Loading, { delay: 101 }));
      const main = shallowRenderer.getRenderOutput();
      main.props.children.props.className.should.equal('loading');
      main.props.wait.should.equal(101);
    });
  });
});
