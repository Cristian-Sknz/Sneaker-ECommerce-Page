import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import MenuIcon from '../../assets/icon-menu.svg';

const StyledLogo = styled.img`
  width: 138px;
  height: 20px;
`;

type LogoProps = {
  src: string;
  href: string;
};

export const Logo = ({ src, href }: LogoProps) => {
  return (
    <a href={href}>
      <StyledLogo src={src}></StyledLogo>
    </a>
  );
};

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  @media screen and (min-width: 968px) {
    width: 50px;
    height: 50px;
  }
`;

export const Navbar = styled.nav`
  background: white;
  border-bottom: 2px solid #dbdbdb;
  padding: 1rem;
  transition: 0.5s;

  @media screen and (min-width: 968px) {
    padding: 2rem;
    transition: 0.5s;
  }
`;

export const NavbarBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
  max-width: 1170px;
  margin: 0 auto;
`;

export const MobileButton = styled.img`
  content: url(${MenuIcon});
  width: 20px;
  position: relative;
  display: block;
  margin: 0.5rem;

  @media screen and (min-width: 968px) {
    display: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarList = styled.ul`
  display: none;
  align-items: center;
  margin: 0 2rem;

  @media screen and (min-width: 968px) {
    display: flex;
  }
`;
export const NavbarItemStyled = styled.li`
  & a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    padding: 0 1rem;
    font-weight: 500;
    transition: color 250ms;
  }
  & a:hover {
    color: black;
    transition: color 250ms;
  }
`;

export const NavbarItem = (props: HTMLProps<HTMLAnchorElement>) => {
  return (
    <NavbarItemStyled>
      <a {...props}>{props.children}</a>
    </NavbarItemStyled>
  );
};

export const NavbarInteraction = styled.div`
  display: flex;
  align-items: center;
  & * {
    margin: 0 1rem;
    cursor: pointer;
  }
`;
