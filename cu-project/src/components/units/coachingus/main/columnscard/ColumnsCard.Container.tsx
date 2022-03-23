import { ICoachingUsColumnsCardProps } from "../../../../../commons/types/types";
import ColumnsCardUI from "./ColumnsCard.Presenter";
import {} from "../CoachingUsMain.Queries";
import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";

export default function ColumnsCardPage(props: ICoachingUsColumnsCardProps) {
  const { moveToPage } = useMoveToPage();
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
    {
      id: 2,
      title:
        "하드코딩이 되어있습니다하드코딩이 되어있습니다하드코딩이 되어있습니다하드코딩이 되어있습니다하드코딩이 되어있습니다",
      contents:
        "내용이 들어가지요오~~내용이 내용이 들어가지요오~~내용이하드코딩이 되어있습니다하드코딩이 되어있습니다하드코딩이 되어있습니다하드코딩이 되어있습니다하드코딩이 되어있습니다 ",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "갤럭시",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
    {
      id: 3,
      title: "초기 컨텐츠 입니다. 하드코딩이 되어있습니다.",
      contents: "내용내용",
      picture: "이미지입니다!",
      profile: {
        picture: "이미지! 입니다!",
        name: "김태훈",
        tags: ["IT", "개발직군아님"],
        followers: 203312,
        score: 3123,
      },
    },
  ];

  return <ColumnsCardUI columnList={columnList} moveToPage={moveToPage} />;
}
