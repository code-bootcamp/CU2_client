import { useState } from "react";
import useStore from "../../../../commons/store/store";
// import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MypageMenuUI from "./MypageMenu.Presenter";

export default function MypageMenu() {
  const [isModal, setIsModal] = useState(false);
  const { moveToPage, currentPage } = useMoveToPage();
  const userInfo = useStore((state) => state.userInfo);

  // useAuth

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const getIsCurrentPage = (page: string) => {
    return currentPage.endsWith(page);
  };

  return (
    <MypageMenuUI
      userInfo={userInfo}
      isModal={isModal}
      moveToPage={moveToPage}
      onClickModal={onClickModal}
      getIsCurrentPage={getIsCurrentPage}
    />
  );
}
