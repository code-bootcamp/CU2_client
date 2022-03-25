import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type IPage =
  // coachingUs
  | "/coachingus"
  | "/coachingus/coach"
  | "/coachingus/column"
  | "/coachingus/coach-register"

  // codingUs
  | "/codingus"
  | "/codingus/blog"
  | "/codingus/stack"
  | "/codingus/us"

  // login
  | "/login"
  | "/login/find"

  // main
  | "/"

  // mypage
  | "/mypage"

  // register
  | "/register"

  // search
  | "/search";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");
  const [prevPage, setPrevPage] = useState("/");
  const currentPage = router.asPath;

  const moveToPage = (page: string) => () => {
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
    currentPage
  };
}
