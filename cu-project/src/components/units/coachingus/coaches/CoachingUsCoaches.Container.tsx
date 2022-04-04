import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthCoach } from "../../../commons/hooks/useAuthCoach";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsCoachUI from "./CoachingUsCoaches.Presenter";
import {
  FETCH_COACH_ORDER_LIST,
  FETCH_MY_USER,
} from "./CoachingUsCoaches.Queries";

export default function CoachingUsCoachPage() {
  const router = useRouter();
  const { isCoach } = useAuthCoach();
  const { moveToPage } = useMoveToPage();

  const [coachList, setCoachList] = useState([]);
  const [myRanking, setMyRanking] = useState(0);
  const [nextMember, setNextMember] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const { data } = useQuery(FETCH_MY_USER);
  const { data: coachRankingList } = useQuery(FETCH_COACH_ORDER_LIST);

  const coachTotalList = coachRankingList?.fetchUserOrderbyscore.filter(
    (el) => el.role === "COACH"
  );

  const result = coachRankingList?.fetchUserOrderbyscore
    .filter((el) => el.role === "COACH")
    .slice(0, 10);

  const period = ["Today", "Week", "Month", "Total"];

  const SendQuery = (tag) => {
    router.push({
      pathname: "/coachingus/coaches",
      query: { currentPeriod: tag },
    });
  };

  const isCurrentTag = router.query.currentPeriod;

  const myList = data?.fetchmyuser;

  const onLoadMore = () => {
    if (nextMember < coachTotalList?.length) {
      setCoachList([
        ...coachList,
        ...coachRankingList?.fetchUserOrderbyscore.slice(
          nextMember,
          nextMember + 10
        ),
      ]);
      setNextMember((prev) => prev + 10);
    }
  };
  // "▲"▼"

  const getMyRanking = () => {
    result?.forEach((el, index) => {
      if (el.id === myList?.id) {
        setMyRanking(index + 1);
      }
    });
    console.log("myList", myList);
  };

  useEffect(() => {
    if (coachTotalList?.length < nextMember) setIsActive(false);
    else {
      setIsActive(true);
    }
    if (result) setCoachList(result);
    getMyRanking();
  }, [data, coachRankingList]);

  const medal = [
    "/1-place-medal.png",
    "/2-place-medal.png",
    "/3-place-medal.png",
  ];

  return (
    <CoachingUsCoachUI
      period={period}
      SendQuery={SendQuery}
      isCurrentTag={isCurrentTag}
      coachList={coachList}
      myList={myList}
      onLoadMore={onLoadMore}
      medal={medal}
      moveToPage={moveToPage}
      isCoach={isCoach}
      myRanking={myRanking}
      router={router}
      isActive={isActive}
    />
  );
}
