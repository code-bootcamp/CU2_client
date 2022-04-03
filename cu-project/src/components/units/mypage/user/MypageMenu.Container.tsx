import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../../commons/hooks/useAuth";
import {
  FETCH_MAINSTACK,
  FETCH_MY_USER,
  FETCH_USER_ORDER_BY_SCORE,
} from "./Mypage.Queries";
import MypageMenuUI from "./MypageMenu.Presenter";

export default function MypageMenu() {
  useAuth();
  const [isModal, setIsModal] = useState(false);
  const router = useRouter();
  const { data } = useQuery(FETCH_MY_USER);
  const { data: mainstack } = useQuery(FETCH_MAINSTACK);
  const { data: rankData } = useQuery(FETCH_USER_ORDER_BY_SCORE);

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
      rankData={rankData}
      isModal={isModal}
      onClickMove={onClickMove}
      onClickModal={onClickModal}
    />
  );
}
