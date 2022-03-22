import { useState } from "react";
import { IMyPageProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MyPageUI from "./Mypage.Presenter";
import {} from "./Mypage.Queries";

export default function MyPage(props: IMyPageProps) {
  const { moveToPage } = useMoveToPage();
  const [isModal, setIsModal] = useState(false);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <MyPageUI
      moveToPage={moveToPage}
      isModal={isModal}
      onClickModal={onClickModal}
    />
  );
}
