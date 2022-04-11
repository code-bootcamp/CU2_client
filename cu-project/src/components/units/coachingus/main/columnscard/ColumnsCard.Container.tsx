import { ICoachingUsColumnsCardProps } from "../../../../../commons/types/types";
import ColumnsCardUI from "./ColumnsCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_COLUMN_LIST } from "./ColumnsCard.Queries";
import { useQuery } from "@apollo/client";

export default function ColumnsCardPage(props: ICoachingUsColumnsCardProps) {
  const { data } = useQuery(FETCH_COLUMN_LIST);
  const { moveToPage } = useMoveToPage();

  const columnList = data?.fetchRecommendColumnList;

  console.log("columnList", columnList);
  const imgUrl = [
    "https://storage.googleapis.com/cucutoo-dev-bucket/gql.png",
    "https://storage.googleapis.com/cucutoo-dev-bucket/program1.jpeg",
    "https://storage.googleapis.com/cucutoo-dev-bucket/react.jpeg",
  ];

  return (
    <ColumnsCardUI
      main={props.main}
      columnList={columnList}
      moveToPage={moveToPage}
      imgUrl={imgUrl}
    />
  );
}
