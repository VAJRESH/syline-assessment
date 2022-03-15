import styles from "./lab.module.css";

export default function Lab({ time, handleExit }) {
  return (
    <section className={`${styles.lab}`}>
      <p>
        Time Left <time>{time}</time>
      </p>

      <button className={`${styles.exit}`} onClick={handleExit}>
        Exit Lab
      </button>
    </section>
  );
}
