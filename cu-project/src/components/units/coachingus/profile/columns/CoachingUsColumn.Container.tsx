import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachingUsColumnUI from "./CoachingUsColumn.Presenter";

export default function CoachingUsColumnPage(props) {
  const { moveToPage } = useMoveToPage();

  const columnList = props.coachColumnsList;

  console.log(props.coachColumnsList);
  return <CoachingUsColumnUI columnList={columnList} moveToPage={moveToPage} />;
}
