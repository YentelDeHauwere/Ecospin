import React, { } from 'react';

import './LandingLayout.scss';

const LandingLayout = ({ children }) => {

  return (
    <div className="page">
      <main className="page-main">
        {children}
      </main>
    </div>
  )
};
export default LandingLayout;