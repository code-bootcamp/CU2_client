import { useQuery } from "@apollo/client";
import { useState } from "react";
import useStore from "../../../../commons/store/store";
// import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_MY_USER } from "./Mypage.Queries";
import MypageMenuUI from "./MypageMenu.Presenter";

export default function MypageMenu() {
  const [isModal, setIsModal] = useState(false);
  const { moveToPage, currentPage } = useMoveToPage();
  const userInfo = useStore((state) => state.userInfo);
  const { data } = useQuery(FETCH_MY_USER);
  // useAuth
  console.log(userInfo);
  console.log(data);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  const getIsCurrentPage = (page: string) => {
    return currentPage.endsWith(page);
  };

  return (
    <MypageMenuUI
      data={data}
      userInfo={userInfo}
      isModal={isModal}
      moveToPage={moveToPage}
      onClickModal={onClickModal}
      getIsCurrentPage={getIsCurrentPage}
    />
  );
}
