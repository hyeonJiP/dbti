import { FC } from "react";
import styled from "styled-components";
import styles from "./StartBtn.module.scss";

interface StartBtnProps {
  isActive: boolean;
  text: string;
  onclick: () => void;
}

const StartBtnComponent: FC<StartBtnProps> = ({ isActive, text, onclick }) => {
  return (
    <div
      className={`${styles.startBtn} ${isActive ? styles.active : ""}`}
      onClick={onclick}
    >
      {text}
    </div>
  );
};
export default StartBtnComponent;
