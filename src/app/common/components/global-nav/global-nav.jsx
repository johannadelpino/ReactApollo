import React from 'react';
import { AppRoutesConfig } from '../../../config/routes';
import { GlobalNavWrapper, GlobalNavLink } from './global-nav-style';

const GlobalNav = () => {
  const renderLinks = () => {
    return AppRoutesConfig.map((route, index) => (
      <GlobalNavLink key={index} href={'#' + route.path}>
        {route.linkName}
      </GlobalNavLink>
    ));
  };
  return <GlobalNavWrapper>{renderLinks()}</GlobalNavWrapper>;
};

GlobalNav.propTypes = {};

export default GlobalNav;
