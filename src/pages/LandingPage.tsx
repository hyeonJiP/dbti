import styled from "styled-components";
import QuizPage from "./QuizPage";
import { FC, useState } from "react";
import { ShowProps } from "../interface/interface";
import StartBtnComponent from "../components/StartBtn";
import styles from "./LandingPage.module.scss";

const LandingPage: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isQuizShow, setIsQuizShow] = useState<boolean>(false);

  const onClickStartBtn = () => {
    setIsShow(false);
    setIsQuizShow(true);
  };

  return (
    <>
      <div className={`${styles.landingPage} ${isShow ? styles.ishow : ""}`}>
        <div className={styles.container}>
          <p className={styles.title}>나와 어울리는 개발자 유형 찾기</p>
          <div className={styles.intro}> 내안의 개발자 본능을 찾아서</div>
          <div className={styles.startImg}></div>
          <StartBtnComponent
            isActive={true}
            text={"시작하기"}
            onclick={onClickStartBtn}
          />
        </div>
        <div className={styles.landingData}>
          <div className={styles.landingBtn}>
            <div className={styles.dataTilte}>참여자 수</div>
            <div className={styles.dataNumber}>countNum</div>
          </div>
        </div>
      </div>
      {/* <QuizPage isShow={isQuizShow} /> */}
    </>
  );
};

export default LandingPage;
