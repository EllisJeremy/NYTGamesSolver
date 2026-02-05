import ntyLogo from "../../../assets/NTY.svg";
import gamesSolverLogo from "../../../assets/gamesSolver.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={ntyLogo} />
      </div>
      <div className={styles.title}>
        <img src={gamesSolverLogo} />
      </div>
    </div>
  );
}
