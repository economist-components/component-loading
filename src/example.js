import Loading from './index';
import React from 'react';


export default (
  <div>
    <p>Default with no overlay</p>
    <button>
      <a href="#" >
      <Loading loadContent="the browser is loading new context" />
     </a>
    </button>
    <Loading loadContent="the browser is loading new context" />
    <br />
    <div className="overlay">
      Just a test that is overlayed by the loader
      <Loading loadingText="We are loading something..." className="loading--overlay"
        loadContent="the browser is loading new context"
      />
    </div>
    <p>With 2 seconds of delay</p>
    <Loading delay={2000} loadContent="the browser is loading new context" />
  </div>
);

