import styles from "./header.module.css";
import SelectGameButton from "../SelectGameButton/SelectGameButton";

export default function Header() {
  return (
    <div className={styles.container}>
      <SelectGameButton imageAddress="" backgroundColor="yellow" />
    </div>
  );
}
