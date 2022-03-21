import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type IPage =
  | "/coachingus"
  | "/coachingus/coach"
  | "/coachingus/column"
  | "/coachingus/coach-register"
  | "/codingus"
  | "/login"
  | "/mypage"
  | "/register"
  | "/search";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");
  const [prevPage, setPrevPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  useEffect(() => {
    setPrevPage(router.asPath);
  }, []);

  return {
    moveToPage,
    visitedPage,
    prevPage,
  };
}
