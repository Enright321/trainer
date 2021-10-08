import React from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router';

const TopScroll = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(TopScroll);
