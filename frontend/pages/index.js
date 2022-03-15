import React from "react";
import CenterCircle from "../components/CenterCircle";
import Lab from "../components/Lab";
import Navbar from "../components/Navbar";
import SlidingDoor from "../components/SlidingDoor";
import useHandleLabLogin from "../hooks/useHandleLabLogin";
import styles from "../styles/Home.module.css";
import { getFormattedTime } from "../utils/helper";

export default function Home() {
  const {
    isPasswordCorrect,
    leftDoor,
    rightDoor,
    handlePassword,
    errorMessage,
    isLabAvailable,
    activateTimer,
    labTime,
    exitLab,
  } = useHandleLabLogin();

  return (
    <div className={`${styles.homePage}`}>
      <Navbar />

      <SlidingDoor
        leftDoorRef={leftDoor}
        rightDoorRef={rightDoor}
        openDoor={isPasswordCorrect && isLabAvailable}
        timeLeft={Math.floor(labTime / 60)}
      />

      {activateTimer !== "activate" && (
        <CenterCircle
          handleSubmit={handlePassword}
          isLoginSuccess={isPasswordCorrect && isLabAvailable}
          errorMessage={errorMessage}
        />
      )}

      {isLabAvailable === false && (
        <div className={`${styles.labtimeExpiry}`}>
          0 hours left, Purchase hours for task continuation
        </div>
      )}

      {isLabAvailable && (
        <Lab time={getFormattedTime(labTime)} handleExit={exitLab} />
      )}
    </div>
  );
}
