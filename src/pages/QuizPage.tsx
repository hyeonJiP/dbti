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

const Container = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Jalnan";
  font-size: 1.9rem;
  font-weight: light;
  margin: 0.5rem;
  text-align: center;
  color: black;
  margin-top: 3.9rem;
  margin-bottom: 8.4rem;
  line-height: 50px;
`;

const QuizPage: FC<ShowProps> = ({ isShow }) => {
  const [questionIdx, setQuestionIdx] = useState(0); // 질문 count
  const [answer, setAnswer] = useState<string[]>([]); // 선택된 문항 배열
  const [isQuizFinished, setIsQuizFinished] = useState(false); // 결과 페이지
  const [isCalculatingResult, setIsCalculatingResult] = useState(false); // 계산중 페이지

  const currentQuestion = questions[questionIdx]; // 질문 문항

  return (
    <>
      <Wrapper isShow={isShow}>
        <Container>
          <Text>
            {currentQuestion.question.split("<br/>").map((word, index) => (
              <p key={index}>{word}</p>
            ))}
          </Text>
        </Container>

        <button>버튼</button>
      </Wrapper>
    </>
  );
};

export default QuizPage;
