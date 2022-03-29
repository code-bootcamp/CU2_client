import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { useAuth } from "../../hooks/useAuth";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import LayoutHeaderPageUI from "./LayoutHeader.presenter";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeaderPage() {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const [isSearch, setIsSearch] = useState(true);
  const [select, setSelect] = useState("Total");

  const { moveToPage } = useMoveToPage();
  const currentPath = router.asPath;

  const [logoutUser] = useMutation(LOGOUT_USER);

  function onClickLogOut() {
    logoutUser();
    alert("로그아웃이 됐습니다.");
    window.location.reload();
  }

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    }
  }, [accessToken]);

  const handleFollow = useCallback(() => {
    if (currentPath.includes("search")) {
      if (window.pageYOffset === 0) setIsSearch(true);
    }

    if (window.pageYOffset > 0) setIsSearch(false);
  }, [isSearch]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, [isSearch]);

  useEffect(() => {
    if (currentPath.includes("search")) setIsSearch(true);
    if (!currentPath.includes("search")) setIsSearch(false);
  }, [router]);

  return (
    <LayoutHeaderPageUI
      moveToPage={moveToPage}
      currentPath={currentPath}
      isLogin={isLogin}
      onClickLogOut={onClickLogOut}
      setIsSearch={setIsSearch}
      isSearch={isSearch}
      setSelect={setSelect}
      select={select}
    />
  );
}
