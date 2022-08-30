import styled from 'styled-components';

export const StyledLi = styled.li`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background-color: #fff;
  padding: 2em;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  border-radius: 20px;
  max-width: 25em;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    cursor: pointer;
    transform: scale(1.01);
  }
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
export const StyledParagraph = styled.p`
  text-transform: uppercase;
  font-size: 1.5em;
  text-align: center;
`;
export const StyledImg = styled.img`
  border-radius: 20px;
`;
