import create from "zustand";
import { devtools } from "zustand/middleware";

const useCoachRate = create(
  devtools((set) => ({
    answerRate: 0,
    setAnswerRate: (rate: number) => set({ answerRate: rate }),
  }))
);

export default useCoachRate;
