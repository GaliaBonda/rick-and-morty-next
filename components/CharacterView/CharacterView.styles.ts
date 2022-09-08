import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const StyledDiv = styled.div`
  display: flex;
  column-gap: 3em;
  background-color: #fff;
  padding: 2em 3em;
  border-radius: 20px;
  justify-content: center;
  flex-wrap: wrap;
  flex: ${(props: { big?: boolean }) => (props.big ? '0 1 100%' : '0 1 50%')};
`;
export const StyledHeading = styled.h1`
  flex: 1 0 100%;
  text-align: center;
  margin-bottom: 1.5em;
  text-transform: uppercase;
`;
export const StyledImg = styled.img`
  border-radius: 20px;
  margin-bottom: 2em;
`;
