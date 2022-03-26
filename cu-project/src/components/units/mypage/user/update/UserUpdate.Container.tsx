import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import UserEditUI from "./UserUpdate.Presenter";

export default function UserUpdate() {
  const { moveToPage } = useMoveToPage();
  return <UserEditUI moveToPage={moveToPage} />;
}
