import { ICoachingUsCommentsProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsCommentsUI from "./CoachingUsComments.Presenter";
import {} from "./CoachingUsComments.Queries";
export default function CoachingUsCommentsPage(
  props: ICoachingUsCommentsProps
) {
  const { moveToPage } = useMoveToPage();
  const commentsList = [
    {
      id: 0,
      mento: {
        name: "김태훈",
        cor: "배달의 민족",
      },
      question: "질문입니당 질문이에요! 질문할게요!",
      answer: "멘토님 답변입니다앙~멘토님 답변입니다앙~멘토님 답변입니다앙~",
      createdAt: "2022-03-14",
      likes: 32,
      disLiske: 7,
    },
    {
      id: 1,
      mento: {
        name: "김태훈",
        cor: "배달의 민족",
      },
      question: "질문입니당 질문이에요! 질문할게요!",
      answer: "멘토님 답변입니다앙~멘토님 답변입니다앙~멘토님 답변입니다앙~",
      createdAt: "2022-03-14",
      likes: 32,
      disLiske: 7,
    },
    {
      id: 2,
      mento: {
        name: "김태훈",
        cor: "배달의 민족",
      },
      question: "질문입니당 질문이에요! 질문할게요!",
      answer: "멘토님 답변입니다앙~멘토님 답변입니다앙~멘토님 답변입니다앙~",
      createdAt: "2022-03-14",
      likes: 32,
      disLiske: 7,
    },
    {
      id: 3,
      mento: {
        name: "김태훈",
        cor: "배달의 민족",
      },
      question: "질문입니당 질문이에요! 질문할게요!",
      answer: "멘토님 답변입니다앙~멘토님 답변입니다앙~멘토님 답변입니다앙~",
      createdAt: "2022-03-14",
      likes: 32,
      disLiske: 7,
    },
    {
      id: 4,
      mento: {
        name: "김태훈",
        cor: "배달의 민족",
      },
      question: "질문입니당 질문이에요! 질문할게요!",
      answer: "멘토님 답변입니다앙~멘토님 답변입니다앙~멘토님 답변입니다앙~",
      createdAt: "2022-03-14",
      likes: 32,
      disLiske: 7,
    },
    {
      id: 5,
      mento: {
        name: "김태훈",
        cor: "배달의 민족",
      },
      question: "질문입니당 질문이에요! 질문할게요!",
      answer: "멘토님 답변입니다앙~멘토님 답변입니다앙~멘토님 답변입니다앙~",
      createdAt: "2022-03-14",
      likes: 32,
      disLiske: 7,
    },
  ];

  return (
    <CoachingUsCommentsUI commentsList={commentsList} moveToPage={moveToPage} />
  );
}
