import create from "zustand";
import { devtools } from "zustand/middleware";

const useBackground = create(
  devtools((set: any) => ({
    isLanding: false,
    setIsLanding: (landing: string) =>
      set((_: any) => ({ isLanding: landing })),
  }))
);

export default useBackground;
