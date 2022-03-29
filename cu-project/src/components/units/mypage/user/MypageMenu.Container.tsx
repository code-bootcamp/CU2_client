import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MypageMenuUI from "./MypageMenu.Presenter";

export default function MypageMenu() {
  const [isModal, setIsModal] = useState(false);
  const [isCoach, setIsCoach] = useState(true);
  const { moveToPage, currentPage } = useMoveToPage();


  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const getIsCurrentPage = (page: string) => {
    console.log(currentPage, page)
    return currentPage.endsWith(page);
  }

  return (
    <MypageMenuUI
      isModal={isModal}
      isCoach={isCoach}
      moveToPage={moveToPage}
      onClickModal={onClickModal}
      getIsCurrentPage={getIsCurrentPage}
    />
  );
}
