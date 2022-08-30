import Link from 'next/link';
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
          <Link href={item.link} key={index}>
            <StyledLink>{item.title}</StyledLink>
          </Link>
        );
      })}
    </StyledNav>
  );
};

export default Nav;
