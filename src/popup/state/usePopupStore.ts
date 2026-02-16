import { create } from "zustand";
import type { GameEnum } from "../../types/gameEnum";

type PopUpStoreType = {
  currentSolver: GameEnum;
  setCurrentSolver: (currentSolver: GameEnum) => void;
};

export const usePopupStore = create<PopUpStoreType>((set) => ({
  currentSolver: "strands",
  setCurrentSolver: (currentSolver) => set({ currentSolver }),
}));
