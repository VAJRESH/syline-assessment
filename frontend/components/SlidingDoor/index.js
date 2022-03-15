import LabTask from "./LabTask";
import styles from "./slidingDoor.module.css";
import TimeLeft from "./TimeLeft";
import Title from "./Title";

export default function SlidingDoor({
  openDoor,
  leftDoorRef,
  rightDoorRef,
  timeLeft,
}) {
  return (
    <section className={`${styles.slidingDoor}`}>
      <div className={`${styles.cross}`}></div>

      <div
        className={`${styles.left} ${openDoor ? "openLeft" : ""}`}
        ref={leftDoorRef}
      >
        <Title />

        <section className={`${styles.userDetailsContainer}`}>
          <LabTask taskName={"Exercise"} taskDone={9} totalTask={84} />
          <LabTask taskName={"Projects"} taskDone={9} totalTask={84} />
          <LabTask
            taskName={"Time Spent"}
            taskDone={9}
            taskText={"hours till now"}
          />
        </section>
      </div>

      <div
        className={`${styles.right} ${openDoor ? "openRight" : ""}`}
        ref={rightDoorRef}
      >
        <TimeLeft timeLeft={timeLeft} totalTime={1} />
      </div>
    </section>
  );
}
