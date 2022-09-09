import styled from 'styled-components';

export const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0 0 0 / 54%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDiv = styled.div`
  position: relative;
  width: 30em;
  height: 20em;
  background: #08394e;
  box-shadow: rgba(109, 203, 79, 0.8) 0px 30px 60px -12px,
    rgba(109, 203, 79, 0.8) 0px 30px 60px 12px,
    rgba(109, 203, 79, 0.8) 0px 18px 36px -18px,
    rgba(109, 203, 79, 0.8) 0px -18px 36px 18px;
  outline: 5px solid rgba(109, 203, 79, 0.3);
  border-radius: 15px;
  display: flex;
  row-gap: 2em;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  padding: 1.5em;
  color: rgba(109, 203, 79, 1);
`;

export const StyledHeading = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 2em;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: space-around;
`;
export const StyledBytton = styled.button`
  background-color: rgba(109, 203, 79, 1);
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.5em 1em;
  &:hover {
    color: rgba(109, 203, 79, 1);
    background-color: transparent;
    outline: 2px solid rgba(109, 203, 79, 1);
    box-shadow: rgba(109, 203, 79, 0.8) 0px 1px 10px 1px;
  }
`;
