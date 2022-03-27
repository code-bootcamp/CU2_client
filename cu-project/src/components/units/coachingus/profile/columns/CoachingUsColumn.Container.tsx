import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
import CoachingUsColumnUI from "./CoachingUsColumn.Presenter";

export default function CoachingUsColumnPage() {
  const { moveToPage } = useMoveToPage();
  const coachComments = [
    {
      id: 0,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents:
        "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
    {
      id: 1,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents: "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
    {
      id: 2,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents: "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
    {
      id: 3,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents: "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
  ];

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
  return (
    <CoachingUsColumnUI
      coachComments={coachComments}
      columnList={columnList}
      moveToPage={moveToPage}
    />
  );
}
