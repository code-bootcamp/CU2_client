import { ICoachingUsCoachesCardProps } from "../../../../../commons/types/types";
import CoachesCardUI from "./CoachesCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
export default function CoachesCardPage(props: ICoachingUsCoachesCardProps) {
  const { moveToPage } = useMoveToPage();

  const coachesList = [
    {
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
    },
    {
      id: 1,
      corName: "배달의 민족",
      subCorName: "마케팅",
      profile: {
        picture: "이미지! 입니다!",
        name: "김재민",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 2,
      corName: "우아한 청년들",
      subCorName: "배달배달",
      profile: {
        picture: "이미지! 입니다!",
        name: "최  건",
        tags: ["배달", "하러", "가즈아"],
        followers: 112412,
        score: 2513,
      },
    },
  ];

  return <CoachesCardUI coachesList={coachesList} moveToPage={moveToPage} />;
}
