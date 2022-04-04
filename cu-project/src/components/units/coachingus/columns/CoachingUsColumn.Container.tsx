import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useAuthCoach } from "../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsColumnUI from "./CoachingUsColumn.Presenter";
import {
  FETCH_RECOMMEND_COLUMN_LIST,
  FETCH_COLUMN_LIST,
} from "./CoachingUsColumn.Queries";

export default function CoachingUsColumnPage() {
  const { isCoach } = useAuthCoach();
  const { data } = useQuery(FETCH_RECOMMEND_COLUMN_LIST);
  const { data: totalColumns } = useQuery(FETCH_COLUMN_LIST);

  const [totalColumn, setTotalColumn] = useState([]);
  const [nextPage, setNextPage] = useState(10);
  const [isActive, setIsActive] = useState(true);

  console.log(data);

  const { moveToPage } = useMoveToPage();
  const columnBestList = data?.fetchRecommendColumnList.slice(0, 3);

  const columnList = totalColumns?.fetchColumnList;

  const onLoadMore = () => {
    if (columnList && isActive) {
      setTotalColumn([...columnList?.slice(0, nextPage + 10)]);
      setNextPage((prev) => prev + 10);
    }
    if (columnList?.length < nextPage) setIsActive(false);
    else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (columnList) {
      setTotalColumn([...columnList?.slice(0, 10)]);
    }
  }, [totalColumns]);

  return (
    <CoachingUsColumnUI
      columnBestList={columnBestList}
      moveToPage={moveToPage}
      totalColumn={totalColumn}
      onLoadMore={onLoadMore}
      isActive={isActive}
      isCoach={isCoach}
    />
  );
}
