import { FC, useState } from "react";
import { ShowProps } from "../interface/interface";
import { questions } from "./contents/questions";

const QuizPage: FC<ShowProps> = ({ isShow }) => {
  const [questionIdx, setQuestionIdx] = useState(0);

  const test = questions[0].question;

  return (
    <>
      {questions[0].question.split("<br/>").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  );
};

export default QuizPage;
