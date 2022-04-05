import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../../commons/hooks/useAuth";
import {
  FETCH_COACH_USER,
  FETCH_MY_USER,
  FETCH_USER_ORDER_BY_SCORE,
} from "./Coachpage.Queries";
import CoachpageMenuUI from "./CoachpageMenu.Presenter";

export default function CoachpageMenu() {
  const router = useRouter();
  const { data: userData } = useQuery(FETCH_MY_USER);
  const { data: rankData } = useQuery(FETCH_USER_ORDER_BY_SCORE);
  const { data } = useQuery(FETCH_COACH_USER, {
    variables: { userId: userData?.fetchmyuser.id },
  });
  // useAuth();

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const onClickMove = (path: string) => () => {
    router.push(`/${path}`);
  };

  return (
    <CoachpageMenuUI
      data={data}
      userData={userData}
      rankData={rankData}
      onClickMove={onClickMove}
      onClickModal={onClickModal}
    />
  );
}
