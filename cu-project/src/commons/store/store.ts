import create, { State } from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "../types/generated/types";

const useStore = create(
  devtools((set: any) => ({
    isDark: false,
    toggleIsDark: () => set((state: any) => ({ isDark: !state.isDark })),
    userInfo: null,
    setUserInfo: (userInfo: IUser) =>
      set((_: any) =>  ({ userInfo: userInfo })),
  }))
);

export default useStore;
