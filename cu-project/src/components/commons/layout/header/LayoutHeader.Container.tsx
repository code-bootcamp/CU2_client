import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { LOGOUT } from "./LayoutHeader.Queries";
import useStore from "../../../../commons/store/store";
import { useAuth } from "../../hooks/useAuth";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import LayoutHeaderPageUI from "./LayoutHeader.presenter";

export default function LayoutHeaderPage() {
  const accessToken = useStore((state) => state.accessToken);
  const SearchRef = useRef(null);
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [select, setSelect] = useState("Total");

  const { moveToPage } = useMoveToPage();
  const currentPath = router.asPath;

  const [logoutUser] = useMutation(LOGOUT);

  const SendQuery = (category, keyword) => {
    router.push({
      pathname: `/search/`,
      query: { category: category, keyword: keyword },
    });
  };

  const onChangeKeyPress = (e) => {
    if (e.key === "Enter") {
      SearchRef.current?.click();
    }
  };

  const onChangeSearch = (e) => {
    setKeyword(e.target.value);
  };

  const onClickSearch = () => {
    SendQuery(select, keyword);
  };

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

  function onClickLogOut() {
    logoutUser();
    alert("로그아웃이 됐습니다.");
    window.location.reload();
  }

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
      onChangeKeyPress={onChangeKeyPress}
      onChangeSearch={onChangeSearch}
      SearchRef={SearchRef}
      onClickSearch={onClickSearch}
      router={router}
    />
  );
}
