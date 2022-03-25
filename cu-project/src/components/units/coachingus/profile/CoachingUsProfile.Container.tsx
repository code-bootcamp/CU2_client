import { useEffect, useState } from "react";
import { ICoachingUsProfileProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import Loading from "../../../commons/Loading/Loading";
import CoachingUsProfileUI from "./CoachingUsProfile.Presenter";
import {} from "./CoachingUsProfile.Queries";

export default function CoachingUsProfile(props: ICoachingUsProfileProps) {
  const [isLoading, setIsLoading] = useState(true);

  const { moveToPage } = useMoveToPage();
  const coach = {
    id: 0,
    corName: "우아한 형제들",
    subCorName: "직군직군",
    profile: {
      picture: "이미지! 입니다!",
      name: "김태훈",
      tags: ["IT", "대기업", "네카라쿠배"],
      followers: 212,
      score: 1213,
    },
  };

  const columnList = [
    {
      id: 0,
      title: "형제들에서 알립니다!",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "손오공",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 1,
      title: "초기 컨텐츠 입니다.",
      contents:
        "내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~내용이 들어가지요오~~",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "아이폰",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CoachingUsProfileUI
      coach={coach}
      columnList={columnList}
      moveToPage={moveToPage}
    />
  );
}
