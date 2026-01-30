import Header from "../header/Header";
import styles from "./body.module.css";

export default function Body() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}></div>
    </div>
  );
}
