import styles from "./centerCircle.module.css";

export default function CenterCircle({
  handleSubmit,
  isLoginSuccess,
  errorMessage,
}) {
  return (
    <>
      <section
        className={`${styles.loginCircle} ${
          isLoginSuccess ? styles.fadeAway : ""
        }`}
      >
        {!!errorMessage && (
          <div
            className={`${styles.backgroundSpinner} ${styles.errorGlow}`}
          ></div>
        )}
        {isLoginSuccess && (
          <div
            className={`${styles.backgroundSpinner} ${styles.successGlow}`}
          ></div>
        )}
        <img src="" alt="" />

        <form className={`${styles.formControl}`} onSubmit={handleSubmit}>
          <label htmlFor="password">Enter your pilearning password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*****"
          />
          <button type="submit">Enter Lab</button>
        </form>
      </section>
      {!!errorMessage && (
        <div className={`${styles.error}`}>{errorMessage}</div>
      )}
    </>
  );
}
