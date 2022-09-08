import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { StyledHeader } from '../../assets/Global.styles';
import { Starter } from '../Starter/Starter';
import { StyledDiv, StyledParagraph } from './EmptyResult.styles';

export const EmptyResult: FC = () => {
  const router = useRouter();
  const clickHandle = () => {
    router.push('/search');
  };
  return (
    <StyledDiv>
      <StyledHeader>Nothing found</StyledHeader>
      <StyledParagraph>
        Current search gave no results. Try using less restrictive filter
      </StyledParagraph>
      <Starter title='New search' clickHandler={clickHandle} />
    </StyledDiv>
  );
};
