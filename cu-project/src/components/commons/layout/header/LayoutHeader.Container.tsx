import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
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
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();
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

  return (
    <LayoutHeaderPageUI
      moveToPage={moveToPage}
      currentPath={currentPath}
      isLogin={isLogin}
      onClickLogOut={onClickLogOut}
    />
  );
}
