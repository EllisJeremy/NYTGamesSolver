import SideBar from "../sideBar/SideBar";
import styles from "./body.module.css";
import Header from "../header/Header";

export default function Body() {
  return (
    <div className={styles.container}>
      <Header />
      <SideBar />
      <div className={styles.body}></div>
    </div>
  );
}
