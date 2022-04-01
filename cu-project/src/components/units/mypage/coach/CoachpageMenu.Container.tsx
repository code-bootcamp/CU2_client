import { useQuery } from "@apollo/client";
import { useState } from "react";
import useStore from "../../../../commons/store/store";
import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_COACH_USER } from "./Coachpage.Queries";
import CoachpageMenuUI from "./CoachpageMenu.Presenter";

export default function CoachpageMenu() {
  const [isModal, setIsModal] = useState(false);
  const userInfo = useStore((state) => state.userInfo);
  const { moveToPage, currentPage } = useMoveToPage();
  const { data } = useQuery(FETCH_COACH_USER, {
    variables: { userId: userInfo?.id },
  });
  // useAuth();
  console.log(data);
  console.log(userInfo);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  const getIsCurrentPage = (page: string) => {
    console.log(currentPage, page);
    return currentPage.endsWith(page);
  };
  return (
    <CoachpageMenuUI
      data={data}
      // userInfo={userInfo}
      isModal={isModal}
      moveToPage={moveToPage}
      onClickModal={onClickModal}
      getIsCurrentPage={getIsCurrentPage}
    />
  );
}
