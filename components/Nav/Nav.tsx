import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { StyledBackBtn, StyledLink, StyledNav } from './Nav.styles';

interface Props {
  links: { link: string; title: string }[];
}

export const Nav: FC<Props> = ({ links }) => {
  const router = useRouter();
  return (
    <StyledNav>
      {router?.asPath !== '/' && (
        <StyledBackBtn onClick={() => router.back()}>
          <svg
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 490 490'
          >
            <path
              d='M245,490c135.1,0,245-109.9,245-245S380.1,0,245,0S0,109.9,0,245S109.9,490,245,490z M245,34.3
             c116.2,0,210.7,94.5,210.7,210.7S361.2,455.7,245,455.7S34.3,361.2,34.3,245S128.8,34.3,245,34.3z'
            />
            <path
              d='M259.8,329.2c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5c6.7-6.7,6.7-17.6,0-24.3l-60-60l60-60c6.7-6.7,6.7-17.6,0-24.3
             s-17.6-6.7-24.3,0l-72.1,72.1c-3.2,3.2-5,7.6-5,12.1s1.8,8.9,5,12.1L259.8,329.2z'
            />
          </svg>
        </StyledBackBtn>
      )}
      {links.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <StyledLink data-testid='test-link'>{item.title}</StyledLink>
          </Link>
        );
      })}
    </StyledNav>
  );
};
