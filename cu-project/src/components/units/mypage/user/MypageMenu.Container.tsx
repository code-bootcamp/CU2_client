import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
// import { useAuth } from "../../../commons/hooks/useAuth";
import { FETCH_MAINSTACK, FETCH_MY_USER } from "./Mypage.Queries";
import MypageMenuUI from "./MypageMenu.Presenter";

export default function MypageMenu() {
  const [isModal, setIsModal] = useState(false);
  const router = useRouter();
  const { data } = useQuery(FETCH_MY_USER);
  const { data: mainstack } = useQuery(FETCH_MAINSTACK);
  // useAuth
  console.log(mainstack);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const onClickMove = (path: string) => () => {
    router.push(`/${path}`);
  };

  return (
    <MypageMenuUI
      mainstack={mainstack}
      data={data}
      isModal={isModal}
      onClickMove={onClickMove}
      onClickModal={onClickModal}
    />
  );
}
