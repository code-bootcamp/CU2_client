import { useEffect, useState } from "react";
import {
  getImagesFromMD,
  getTextFromMD,
} from "../../../../../commons/libraries/mdUtils";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachingUsColumnUI from "./CoachingUsColumn.Presenter";

export default function CoachingUsColumnPage(props) {
  const { moveToPage } = useMoveToPage();
  const [columnProps, setColumnProps] = useState([]);

  const columnList = props.coachColumnsList;

  useEffect(() => {
    const columnListEdit = columnList?.map((el) => {
      return {
        plainText: getTextFromMD(el?.contents),
        firstImg: getImagesFromMD(el?.contents)[0],
      };
    });

    setColumnProps(columnListEdit);
  }, [props.coachColumnsList]);

  return (
    <CoachingUsColumnUI
      columnList={columnList}
      moveToPage={moveToPage}
      columnProps={columnProps}
    />
  );
}
