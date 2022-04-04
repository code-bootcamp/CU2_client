import React from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachingUsCoachUI from "./CoachingUsCoach.Presenter";

export default function CoachingUsCoachPage(props) {
  const { moveToPage } = useMoveToPage();

  const columnList = props.coachColumnsList?.slice(0, 2);

  return (
    <CoachingUsCoachUI
      moveToPage={moveToPage}
      columnList={columnList}
      setComponent={props.setComponent}
    />
  );
}
