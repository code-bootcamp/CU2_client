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
  const rank = [3912, 4143, 1232];

  const imgUrl = [
    "https://storage.googleapis.com/cucutoo-dev-bucket/seol.jpeg",
    "https://storage.googleapis.com/cucutoo-dev-bucket/son.JPG",
    "https://storage.googleapis.com/cucutoo-dev-bucket/TaeHoon.jpeg",
  ];

  const result = data?.fetchUserOrderbyscore
    .filter((el) => el.role === "COACH")
    .slice(0, 3);

  useEffect(() => {
    if (data) {
      setNewList(result);
    }
    setTimeout(() => {
      setIsStart(false);
    }, 2200);
  }, [data]);

  return (
    <RecCoachCardUI
      recommendCoachList={newList}
      isStart={isStart}
      moveToPage={moveToPage}
      imgUrl={imgUrl}
      rank={rank}
    />
  );
}
