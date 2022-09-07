import Link from 'next/link';
import React, { FC } from 'react';
import {
  StyledDiv,
  StyledHeading,
  StyledLink,
  StyledParagraph,
} from './EmptyResult.styles';

export const EmptyResult: FC = () => {
  return (
    <StyledDiv>
      <StyledHeading>Nothing found</StyledHeading>
      <StyledParagraph>
        Current search gave no results. Try using less restrictive filter
      </StyledParagraph>
      <Link href='/search'>
        <StyledLink>New search</StyledLink>
      </Link>
    </StyledDiv>
  );
};
