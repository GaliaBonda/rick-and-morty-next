import React, { FC } from 'react';
import { StyledButton } from './Starter.styles';

interface Props {
  title: string;
  clickHandler: () => void;
  start: boolean;
}

export const Starter: FC<Props> = ({ title, clickHandler, start }) => {
  return (
    <StyledButton onClick={clickHandler} inputColor={start ? '' : 'red'}>
      {title}
    </StyledButton>
  );
};
