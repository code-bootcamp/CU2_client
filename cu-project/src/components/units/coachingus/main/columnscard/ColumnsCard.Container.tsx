import { ICoachingUsColumnsCardProps } from "../../../../../commons/types/types";
import ColumnsCardUI from "./ColumnsCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_COLUMN_LIST } from "./ColumnsCard.Queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  getImagesFromMD,
  getTextFromMD,
} from "../../../../../commons/libraries/mdUtils";

export default function ColumnsCardPage(props: ICoachingUsColumnsCardProps) {
  const { data } = useQuery(FETCH_COLUMN_LIST);
  const { moveToPage } = useMoveToPage();
  const [columnProps, setColumnProps] = useState([]);

  const columnList = data?.fetchRecommendColumnList;

  useEffect(() => {
    const columnListEdit = columnList?.map((el) => {
      return {
        plainText: getTextFromMD(el.contents),
        firstImg: getImagesFromMD(el.contents)[0],
      };
    });
    setColumnProps(columnListEdit);
  }, []);

  return (
    <ColumnsCardUI
      main={props.main}
      columnList={columnList}
      moveToPage={moveToPage}
      columnProps={columnProps}
    />
  );
}
