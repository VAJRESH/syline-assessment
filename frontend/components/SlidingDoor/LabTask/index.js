import styles from "../slidingDoor.module.css";

export default function LabTask({
  taskName,
  taskDone,
  taskText = "completed out of",
  totalTask = "",
  imgUrl,
}) {
  return (
    <div className={`${styles.labTask}`}>
      <img src={imgUrl} alt="" />

      <div>
        <p className={`${styles.taskTitle}`}>{taskName}</p>
        <p>
          <span className={`${styles.taskCount} text-primary`}>{taskDone} </span>
          {taskText} {totalTask}
        </p>
      </div>
    </div>
  );
}
