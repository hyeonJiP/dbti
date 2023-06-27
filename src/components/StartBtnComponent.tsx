import { FC } from "react";
import styled from "styled-components";

interface BtnType {
  type: boolean;
}

interface StartBtnProps {
  type: boolean;
  text: string;
  onclick: () => void;
}

const Button = styled.div<BtnType>`
  width: 29.2rem;
  height: 7rem;
  border-radius: 1.5rem;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) =>
    props.type === true ? "#00462A" : props.theme.white};
  cursor: pointer;
  margin: 1.5rem;
  display: inline-flex;
  font-family: "Jalnan";
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  border: none;
`;
const StartBtnComponent: FC<StartBtnProps> = ({ type, text, onclick }) => {
  return (
    <Button type={type} onClick={onclick}>
      {text}
    </Button>
  );
};
export default StartBtnComponent;
