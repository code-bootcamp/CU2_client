import create from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "../types/generated/types";

const useStore = create(
  devtools((set: any) => ({
    isDark: false,
    toggleIsDark: () => set((state: any) => ({ isDark: !state.isDark })),
    userInfo: {},
    setUserInfo: (userInfo: IUser | undefined) =>
      set((_: any) => ({ userInfo: userInfo })),
    accessToken: null,
    setAccessToken: (token: string | null) =>
      set((_: any) => ({ accessToken: token })),
  }))
);

export default useStore;
