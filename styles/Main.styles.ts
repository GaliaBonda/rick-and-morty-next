import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2em;
  color: white;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3em;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;
