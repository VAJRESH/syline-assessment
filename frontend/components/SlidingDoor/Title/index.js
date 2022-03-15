import styles from "../slidingDoor.module.css";

export default function Title() {
  return (
    <article className={`${styles.titleContainer}`}>
      <h1 className={`${styles.title} text-white`}>Java</h1>
      <p>
        This course is provisioned by <span className={`text-bold text-white`}>Nexxt Labs</span>
      </p>
      <ul className={`${styles.list} text-primary`}>
        <li>Labs</li>
        <li>Exercises</li>
        <li>Do It Yourself</li>
      </ul>
    </article>
  );
}
