import Loading from './index';
import React from 'react';

export default (
  <div>
    <p>Default with no overlay</p>
    <Loading loadingText="the browser is loading new context" />
    <br />
    <div className="overlay">
      Just a test that is overlayed by the loader
      <Loading loadingText="The browser is loading new content" className="loading--overlay" />
    </div>
    <p>With 2 seconds of delay</p>
    <Loading delay={2000} loadingText="the browser is loading new context" />
  </div>
);

