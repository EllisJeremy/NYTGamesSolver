import { create } from "zustand";
import type { GameEnum } from "../types/types";

type PopUpStoreType = {
  currentSolver: GameEnum;
  setCurrentSolver: (currentSolver: GameEnum) => void;
};

export const usePopupStore = create<PopUpStoreType>((set) => ({
  currentSolver: "wordle",
  setCurrentSolver: (currentSolver) => set({ currentSolver }),
}));
