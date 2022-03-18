import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import LayoutHeaderPageUI from "./LayoutHeader.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeaderPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  const currentPath = router.asPath;

  console.log(isLogin, data?.fetchUserLoggedIn?.name);

  const [logoutUser] = useMutation(LOGOUT_USER);

  function onClickLogOut() {
    logoutUser();
    alert("로그아웃이 됐습니다.");
    window.location.reload();
  }

  useEffect(() => {
    setIsLogin(data?.fetchUserLoggedIn?.name !== undefined);
  }, []);

  return (
    <LayoutHeaderPageUI
      moveToPage={moveToPage}
      currentPath={currentPath}
      isLogin={!isLogin}
      onClickLogOut={onClickLogOut}
    />
  );
}
