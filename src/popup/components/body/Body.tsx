import SideBar from "../sideBar/SideBar";
import styles from "./body.module.css";
import Header from "../header/Header";
import { usePopupStore } from "../../state/usePopupStore";
import { AnimatePresence, motion } from "framer-motion";
import { colors } from "../../utils/styles";
import WordleTitle from "../wordle/wordleTitle";

export default function Body() {
  const { currentSolver } = usePopupStore();
  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.body}>
          <AnimatePresence mode="wait">
            <motion.div
              className={styles.tile}
              style={{ backgroundColor: colors[currentSolver] }}
              key={currentSolver}
              initial={{ y: 400, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 400, scale: 0.92 }}
              transition={{ duration: 0.3 }}
            >
              {currentSolver === "wordle" && <WordleTitle />}
              <button className={styles.solve}>Solve</button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
