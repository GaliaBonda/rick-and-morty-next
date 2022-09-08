import React, { ChangeEvent, FC, useState } from 'react';
import IQuiz from '../../types/IQuiz';
import { Character } from '../Character/Character';
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledDiv,
  FlexDiv,
  StyledParagraph,
} from './Quiz.styles';

interface Props extends IQuiz {
  nextQuiz: () => void;
}

export const Quiz: FC<Props> = ({ question, image, id, answer, nextQuiz }) => {
  const [quizCheck, setQuizCheck] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [resultShown, setResultShown] = useState(false);
  const checkQuiz = () => {
    setQuizCheck(
      Boolean(
        inputValue &&
          answer &&
          answer.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
    setResultShown(true);
  };
  const getNextQuiz = () => {
    setQuizCheck(false);
    setResultShown(false);
    setInputValue('');
    nextQuiz();
  };

  return (
    <>
      <FlexDiv>
        <StyledDiv>
          {!resultShown ? (
            <StyledLabel>{question}</StyledLabel>
          ) : (
            <StyledParagraph>
              {quizCheck ? `Correct, it is ` : `Wrong, it is `}
              {answer}
            </StyledParagraph>
          )}

          <StyledInput
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          {!resultShown ? (
            <StyledButton onClick={checkQuiz}>Check</StyledButton>
          ) : (
            <StyledButton onClick={getNextQuiz}>Next Quiz</StyledButton>
          )}
        </StyledDiv>
        {image && (
          <Character clickHandler={() => undefined} image={image} id={id} />
        )}
      </FlexDiv>
    </>
  );
};
