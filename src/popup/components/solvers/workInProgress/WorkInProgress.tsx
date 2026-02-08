import styles from "./workInProgress.module.css";

export default function WorkInProgress() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.shadow} />
        <div className={styles.caution} />
        <div className={styles.info}>Work in Progress</div>
        <div className={styles.shadow2} />
        <div className={styles.caution2} />
      </div>
    </div>
  );
}
