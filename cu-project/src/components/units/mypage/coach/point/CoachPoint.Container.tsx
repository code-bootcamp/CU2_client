import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

import CoachPointUI from "./CoachPoint.Presenter";
import { FETCH_MY_POINT_HISTORY } from "./CoachPoint.Queries";

export default function CoachPoint() {
  const { data: pointData } = useQuery(FETCH_MY_POINT_HISTORY);
  const [isModal, setIsModal] = useState(false);
  const { moveToPage } = useMoveToPage();

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <CoachPointUI
      isModal={isModal}
      pointData={pointData}
      onClickModal={onClickModal}
      moveToPage={moveToPage}
    />
  );
}
