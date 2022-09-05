import React, { FC } from 'react';
import {
  StyledInfo,
  StyledSpan,
  StyledParagraph,
} from './CharacterInfo.styles';

interface Props {
  gender: string;
  species: string;
  status: string;
}

const CharacterInfo: FC<Props> = ({ gender, species, status }) => {
  const about = [
    { title: 'Gender:', info: gender },
    { title: 'Species:', info: species },
    { title: 'Status:', info: status },
  ];

  return (
    <StyledInfo>
      {about.map((item, index) => {
        return (
          <StyledParagraph key={index}>
            <StyledSpan>{item.title}</StyledSpan> {item.info}
          </StyledParagraph>
        );
      })}
    </StyledInfo>
  );
};

export default CharacterInfo;
