import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import UserRankingUI from "./UserRanking.Presenter";

export default function UserRanking() {
  const { moveToPage } = useMoveToPage();
  return <UserRankingUI moveToPage={moveToPage} />;
}
