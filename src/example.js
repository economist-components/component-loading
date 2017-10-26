import Loading from './index';
import React from 'react';

export default (
  <div>
    <p>Default with no overlay</p>
    <Loading loadingText="Overwrite default value of props loadingText" />
    <br />
    <div className="overlay" >
      Just a test that is overlayed by the loader
      <Loading className="loading--overlay" />
    </div>
    <p>With 2 seconds of delay</p>
    <Loading delay={2000} />
  </div>
);
