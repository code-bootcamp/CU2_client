import create from "zustand";
import { devtools } from "zustand/middleware";
import Router from "next/router";
const useBackground = create(
  devtools((set: any) => ({
    isLanding: () => () => {
      return Router.asPath === "/";
    },
  }))
);

export default useBackground;
