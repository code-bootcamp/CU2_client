import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  getImagesFromMD,
  getTextFromMD,
} from "../../../../commons/libraries/mdUtils";
import { IBlog } from "../../../../commons/types/generated/types";
import { useAuthCoach } from "../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsColumnUI from "./CoachingUsColumn.Presenter";
import {
  FETCH_COLUMN_LIST,
  FETCH_RECOMMEND_COLUMN_LIST,
} from "./CoachingUsColumn.Queries";

export default function CoachingUsColumnPage() {
  const { isCoach } = useAuthCoach();
  const { data } = useQuery(FETCH_RECOMMEND_COLUMN_LIST);
  const [columnProps, setColumnProps] = useState([]);
  const { data: totalColumns } = useQuery(FETCH_COLUMN_LIST);

  const [isOrderByPopular, setIsOrderByPopular] = useState(true);
  const [blogList, setBlogList] = useState<{ blog: IBlog; isLike: boolean }[]>(
    []
  );
  const [bestColumnProps, setBestColumnProps] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [totalColumn, setTotalColumn] = useState([]);

  const { moveToPage } = useMoveToPage();
  const columnBestList = data?.fetchRecommendColumnList.slice(0, 3);

  const columnList = totalColumns?.fetchColumnList;

  useEffect(() => {
    if (columnList) {
      setTotalColumn([...columnList?.slice(0, 10)]);
    }
    const columnListEdit = columnList?.map((el) => {
      return {
        plainText: getTextFromMD(el.contents),
        firstImg: getImagesFromMD(el.contents)[0],
      };
    });

    setColumnProps(columnListEdit);
    console.log("columnProps", columnProps);
  }, [totalColumns]);

  return (
    <CoachingUsColumnUI
      columnBestList={columnBestList}
      moveToPage={moveToPage}
      totalColumn={totalColumn}
      blogList={blogList}
      isOrderByPopular={isOrderByPopular}
      isCoach={isCoach}
      bestColumnProps={bestColumnProps}
      columnProps={columnProps}
    />
  );
}
