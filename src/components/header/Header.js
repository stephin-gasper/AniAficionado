import React from 'react';
import Logo from '../logo';
import {HeaderWrapper, LogoWrapper} from './Header.style';

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
  </HeaderWrapper>
);

export default Header;
