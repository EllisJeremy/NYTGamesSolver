import SideBar from "../sideBar/SideBar";
import styles from "./body.module.css";

export default function Body() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.body}></div>
    </div>
  );
}
