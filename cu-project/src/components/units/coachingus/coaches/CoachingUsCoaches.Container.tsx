import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsCoachUI from "./CoachingUsCoaches.Presenter";

export default function CoachingUsCoachPage() {
  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  const period = ["Today", "Week", "Month", "Total"];

  const SendQuery = (tag) => {
    router.push({
      pathname: "/coachingus/coaches",
      query: { currentPeriod: tag },
    });
  };
  const isCurrentTag = router.query.currentPeriod;
  useEffect(() => {
    console.log(router.query);
  });

  const [coachList, setCoachList] = useState([
    {
      id: 0,
      name: "Coaching1",
      picture: "이미지입니다!",
      score: 1401,
      Lv: 5,
      changeRating: 10,
      changeRanking: 2,
    },
    {
      id: 1,
      name: "Coaching12",
      picture: "이미지입니다!",
      score: 1352,
      Lv: 5,
      changeRating: -12,
      changeRanking: 1,
    },
    {
      id: 2,
      name: "Coaching13",
      picture: "이미지입니다!",
      score: 1339,
      Lv: 5,
      changeRating: 30,
      changeRanking: 0,
    },
    {
      id: 3,
      name: "Coaching14",
      picture: "이미지입니다!",
      score: 1301,
      Lv: 4,
      changeRating: 20,
      changeRanking: 4,
    },
    {
      id: 4,
      name: "Coaching15",
      picture: "이미지입니다!",
      score: 1289,
      Lv: 4,
      changeRating: -14,
      changeRanking: -4,
    },
    {
      id: 5,
      name: "Coaching16",
      picture: "이미지입니다!",
      score: 1271,
      Lv: 4,
      changeRating: 4,
      changeRanking: 2,
    },
    {
      id: 6,
      name: "Coaching17",
      picture: "이미지입니다!",
      score: 1241,
      Lv: 4,
      changeRating: -30,
      changeRanking: 4,
    },
    {
      id: 7,
      name: "Coaching18",
      picture: "이미지입니다!",
      score: 1201,
      Lv: 4,
      changeRating: 30,
      changeRanking: 4,
    },
    {
      id: 8,
      name: "Coaching19",
      picture: "이미지입니다!",
      score: 1161,
      Lv: 4,
      changeRating: 30,
      changeRanking: 4,
    },
    {
      id: 9,
      name: "Coaching101",
      picture: "이미지입니다!",
      score: 1141,
      Lv: 4,
      changeRating: 30,
      changeRanking: 4,
    },
    {
      id: 10,
      name: "Coaching112",
      picture: "이미지입니다!",
      score: 1101,
      Lv: 4,
      changeRating: 20,
      changeRanking: 4,
    },
  ]);

  const myList = {
    id: 0,
    name: "myScore",
    picture: "내 사진",
    score: 301,
    ranking: 125,
    Lv: 2,
    changeRating: 10,
    changeRanking: 2,
  };

  const onLoadMore = () => {
    setCoachList([
      ...coachList,
      ...new Array(10).fill(0).map((el, idx) => {
        return {
          id: 0,
          name: "myScore",
          picture: "내 사진",
          score: 301,
          Lv: 2,
          changeRating: 10,
          changeRanking: 2,
        };
      }),
    ]);
  };
  // "▲"▼"

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
    />
  );
}
