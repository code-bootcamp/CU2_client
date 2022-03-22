import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MypageMenuUI from "./MypageMenu.Presenter";

export default function MypageMenu() {
  // const isSelect = true;
  const [isCoach, setIsCoach] = useState(false);
  const { moveToPage } = useMoveToPage();

  // const onClickSelect = () => {
  //   setIseSelect(true);
  // };

  return (
    <MypageMenuUI
      // isSelect={isSelect}
      isCoach={isCoach}
      moveToPage={moveToPage}
    />
  );
}
