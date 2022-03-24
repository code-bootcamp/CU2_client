import { useEffect, useState } from "react";
import { ICoachingUsProfileProps } from "../../../../commons/types/types";
import Loading from "../../../commons/Loading/Loading";
import CoachingUsProfileUI from "./CoachingUsProfile.Presenter";
import {} from "./CoachingUsProfile.Queries";

export default function CoachingUsProfile(props: ICoachingUsProfileProps) {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return <CoachingUsProfileUI coach={coach} />;
}
