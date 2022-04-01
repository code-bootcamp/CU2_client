import { useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachPointUI from "./CoachPoint.Presenter";

export default function CoachPoint() {
  const [isModal, setIsModal] = useState(false);
  const { moveToPage } = useMoveToPage();

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <CoachPointUI
      isModal={isModal}
      onClickModal={onClickModal}
      moveToPage={moveToPage}
    />
  );
}
