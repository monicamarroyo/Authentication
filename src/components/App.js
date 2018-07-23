import React from 'react';
import Header from './Header';

//we can extract our routes
//children comes from index.js and the Welcome.js component shows up below the header comoponent
export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
