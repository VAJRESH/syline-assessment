import styles from "../slidingDoor.module.css";

export default function TimeLeft({ timeLeft, totalTime }) {
  const dividerCount = 6;
  const innerFillHeight = (100 * timeLeft) / (totalTime * 60);
  return (
    <section>
      <div className={`${styles.barBackground}`}>
        {[...Array(dividerCount)].map((e, i) => (
          <div className={`${styles.divider}`} key={i}></div>
        ))}

        <div
          className={`${styles.innerFill}`}
          style={{
            height: `${innerFillHeight + 1}%`,
          }}
        ></div>
      </div>
      <p className={`${styles.hoursLeftText} text-bold text-primary`}>
        {timeLeft} minutes left
      </p>
      <p className={`text-bold`}>out of {totalTime} hour </p>
    </section>
  );
}
