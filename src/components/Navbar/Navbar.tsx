import React from 'react';

import { ReactComponent as CartIcon } from '../../assets/icon-cart.svg';
import {
  Logo,
  Navbar,
  NavbarInteraction,
  NavbarList,
  UserAvatar,
  NavbarContainer,
  NavbarItem,
  MobileButton,
  NavbarBody,
} from './style';
import AvatarIcon from '../../assets/image-avatar.png';

const NavbarUI: React.FC<any> = () => {
  return (
    <Navbar>
      <NavbarBody>
        <NavbarContainer>
          <MobileButton />
          <Logo src={'./logo.svg'} href={'/'} />
          <NavbarList>
            <NavbarItem href={'#'}>Collections</NavbarItem>
            <NavbarItem href={'#'}>Men</NavbarItem>
            <NavbarItem href={'#'}>Women</NavbarItem>
            <NavbarItem href={'#'}>About</NavbarItem>
            <NavbarItem href={'#'}>Contact</NavbarItem>
          </NavbarList>
        </NavbarContainer>
        <NavbarInteraction>
          <CartIcon />
          <UserAvatar src={AvatarIcon} />
        </NavbarInteraction>
      </NavbarBody>
    </Navbar>
  );
};

export default NavbarUI;
