import React from 'react';
import spinner from './spinner.gif';

// eslint-disable-next-line react/display-name
export default () => (
  <>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </>
);
