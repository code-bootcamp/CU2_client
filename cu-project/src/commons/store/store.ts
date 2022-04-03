import create from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "../types/generated/types";
interface IStoreProps {
  userInfo: IUser | null;
  setUserInfo: (userInfo: IUser) => void;
  accessToken: string;
  setAccessToken: (token: string) => void;
}
const useStore = create<IStoreProps>(
  devtools((set) => ({
    userInfo: null,
    setUserInfo: (userInfo: IUser) =>
      set({ userInfo: userInfo }),
    accessToken: "",
    setAccessToken: (token: string) =>
      set({accessToken: token}),
  }))
);

export default useStore;
