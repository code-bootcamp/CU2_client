import create from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set: any) => ({
    isDark: false,
    toggleIsDark: () => set((state: any) => ({ isDark: !state.isDark })),
  }))
);

export default useStore;
