import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachpageMenuUI from "./CoachpageMenu.Presenter";

export default function CoachpageMenu() {
  const [isModal, setIsModal] = useState(false);
  const [isCoach, setIsCoach] = useState(true);
  const { moveToPage } = useMoveToPage();

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <CoachpageMenuUI
      isModal={isModal}
      isCoach={isCoach}
      moveToPage={moveToPage}
      onClickModal={onClickModal}
    />
  );
}
