import { useState } from "react";
import UserPointUI from "./UserPoint.Presenter";

export default function UserPoint() {
  const [isModal, setIsModal] = useState(false);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  return <UserPointUI isModal={isModal} onClickModal={onClickModal} />;
}
