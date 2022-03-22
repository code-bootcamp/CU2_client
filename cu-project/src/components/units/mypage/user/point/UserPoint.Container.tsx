import { useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import UserPointUI from "./UserPoint.Presenter";

export default function UserPoint() {
  const [isModal, setIsModal] = useState(false);
  const { moveToPage } = useMoveToPage();

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <UserPointUI
      isModal={isModal}
      onClickModal={onClickModal}
      moveToPage={moveToPage}
    />
  );
}
