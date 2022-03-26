import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import UserRankingUI from "./UserRanking.Presenter";

export default function UserRanking() {
  const onChangeDuration = (event) => {
    console.log(event.target.value);
  };

  const { moveToPage } = useMoveToPage();
  return (
    <UserRankingUI
      onChangeDuration={onChangeDuration}
      moveToPage={moveToPage}
    />
  );
}
