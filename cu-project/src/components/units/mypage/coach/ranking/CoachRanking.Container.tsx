import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachRankingUI from "./CoachRanking.Presenter";

export default function CoachRanking() {
  const onChangeDuration = (event) => {
    console.log(event.target.value);
  };

  const { moveToPage } = useMoveToPage();
  return (
    <CoachRankingUI
      onChangeDuration={onChangeDuration}
      moveToPage={moveToPage}
    />
  );
}
