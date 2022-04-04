import RecCoachCardUI from "./RecCoachCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { ICoachingUsRecCoachCardProps } from "../../../../../commons/types/types";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import { FETCH_COACH_ORDER_LIST } from "./RecCoachCard.Queries";
import { useQuery } from "@apollo/client";

export default function RecCoachCardPage(props: ICoachingUsRecCoachCardProps) {
  const { moveToPage } = useMoveToPage();
  const [isStart, setIsStart] = useState(true);
  const { data } = useQuery(FETCH_COACH_ORDER_LIST);
  const [newList, setNewList] = useState([]);
  // console.log(data);

  const result = data?.fetchUserOrderbyscore
    .filter((el) => el.role === "COACH")
    .slice(0, 3);

  useEffect(() => {
    if (data) {
      setNewList(result);
    }
    console.log("result", result);
    setTimeout(() => {
      setIsStart(false);
    }, 2200);
  }, [data]);

  return (
    <RecCoachCardUI
      recommendCoachList={newList}
      isStart={isStart}
      moveToPage={moveToPage}
    />
  );
}
