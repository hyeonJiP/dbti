import { FC, useState } from "react";
import { ShowProps } from "../interface/interface";
import { questions } from "./contents/questions";
import { styled } from "styled-components";

const Wrapper = styled.div<ShowProps>`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuizPage: FC<ShowProps> = ({ isShow }) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answer, setAnswer] = useState<string[]>([]); // 결과 페이지
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isCalculatingResult, setCalculatingResult] = useState(false); // 계산중 페이지

  const test = questions[0].question;

  return (
    <>
      <Wrapper isShow={isShow}>
        {questions[0].question.split("<br/>").map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </Wrapper>
    </>
  );
};

export default QuizPage;
