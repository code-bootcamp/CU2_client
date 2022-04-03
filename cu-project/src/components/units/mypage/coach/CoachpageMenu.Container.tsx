import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import useStore from "../../../../commons/store/store";
import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_COACH_USER, FETCH_MY_USER } from "./Coachpage.Queries";
import CoachpageMenuUI from "./CoachpageMenu.Presenter";

export default function CoachpageMenu() {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const { moveToPage, currentPage } = useMoveToPage();
  const { data: userData } = useQuery(FETCH_MY_USER);
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
      isModal={isModal}
      onClickMove={onClickMove}
      onClickModal={onClickModal}
    />
  );
}
