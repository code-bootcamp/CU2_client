import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import useStore from "../../../../commons/store/store";
import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MypageMenuUI from "./MypageMenu.Presenter";

const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      name
      nickname
      point
      role
      # mainstack
    }
  }
`;

export default function MypageMenu() {
  const [isModal, setIsModal] = useState(false);
  const [isCoach, setIsCoach] = useState(true);
  const { moveToPage, currentPage } = useMoveToPage();
  const userInfo = useStore((state) => state.userInfo);
  const { data } = useQuery(FETCH_MY_USER);

  useAuth();

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
      isCoach={isCoach}
      moveToPage={moveToPage}
      onClickModal={onClickModal}
      getIsCurrentPage={getIsCurrentPage}
    />
  );
}
