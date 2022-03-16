import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type IPage =
  | "/coachingus"
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
