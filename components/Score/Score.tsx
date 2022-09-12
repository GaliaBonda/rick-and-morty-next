import Image from 'next/image';
import React, { FC } from 'react';
import {
  StyledDiv,
  StyledHeading,
  StyledParagraph,
  StyledSpan,
  ImageContainer,
} from './Score.styles';

interface Props {
  score: number;
}

export const Score: FC<Props> = ({ score }) => {
  return (
    <div>
      <StyledHeading>Cool quizes are waiting</StyledHeading>
      <StyledDiv>
        <div>
          <StyledParagraph>
            Your current game score is: {score} point
            {score % 10 !== 1 ? 's' : ''}.
          </StyledParagraph>
          <StyledParagraph>
            Press "<StyledSpan>start</StyledSpan>" button to increase it
            &#10548;
          </StyledParagraph>
        </div>
        <ImageContainer>
          <Image
            src='/rick_and_morty_img.png'
            width={1024}
            height={1024}
            style={{ backgroundColor: 'transparent' }}
          />
        </ImageContainer>
      </StyledDiv>
    </div>
  );
};
