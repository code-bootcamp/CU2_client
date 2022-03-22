import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import UserPointUI from "./UserPoint.Presenter";

export default function UserPoint() {
  const { moveToPage } = useMoveToPage();
  return <UserPointUI moveToPage={moveToPage} />;
}
