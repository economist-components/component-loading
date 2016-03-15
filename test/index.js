import 'babel-polyfill';
import { mount, shallow } from 'enzyme';
import Loading from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme()).should();
describe('Loading', () => {
  describe('is a React component', () => {
    it('is compatible with React.Component', () => {
      Loading.should.be.a('function').and.respondTo('render');
    });
    it('renders a React element', () => {
      React.isValidElement(<Loading />).should.equal(true);
    });
    it('have a basic version', () => {
      const main = mount(<Loading />);
      main.should.have.exactly(1).descendants('.loading');
      main.find('.loading').should.have.exactly(1).descendants('.loading__inner');
    });
    it('could have a text', () => {
      const main = mount(<Loading loadingText="Loading something" />);
      const loadingTextNode = main.find('.loading__text');
      loadingTextNode.find('.loading__text-inner').should.have.text('Loading something');
    });
    it('could have an overlay element', () => {
      const main = mount(<Loading overlay />);
      main.should.have.exactly(1).descendants('.loading__overlay');
    });
    it('can be delayed', () => {
      const main = shallow(<Loading delay={101} />);
      main.props().wait.should.equal(101);
    });
  });
});
