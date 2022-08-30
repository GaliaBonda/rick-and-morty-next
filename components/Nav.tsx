import React, { FC } from 'react';
import { StyledLink, StyledNav } from '../styles/Nav.styles';

interface Props {
  links: { link: string; title: string }[];
}

const Nav: FC<Props> = ({ links }) => {
  return (
    <StyledNav>
      {links.map((item, index) => {
        return (
          <StyledLink href={item.link} key={index}>
            <a>{item.title}</a>
          </StyledLink>
        );
      })}
    </StyledNav>
  );
};

export default Nav;
