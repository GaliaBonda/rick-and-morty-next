import React, { FC } from 'react';
import {
  ButtonsWrapper,
  OverlayDiv,
  StyledDiv,
  StyledHeading,
  StyledBytton,
} from './Modal.styles';

interface Props {
  acceptHandler: () => void;
  refuseHandler: () => void;
  title: string;
}

export const Modal: FC<Props> = ({ title, acceptHandler, refuseHandler }) => {
  const handleClick = (accept: boolean) => {
    if (accept) {
      acceptHandler();
    } else {
      refuseHandler();
    }
  };
  return (
    <OverlayDiv>
      <StyledDiv>
        <StyledHeading>{title}</StyledHeading>
        <ButtonsWrapper>
          <StyledBytton onClick={() => handleClick(true)}>Yes</StyledBytton>
          <StyledBytton onClick={() => handleClick(false)}>No</StyledBytton>
        </ButtonsWrapper>
      </StyledDiv>
    </OverlayDiv>
  );
};
