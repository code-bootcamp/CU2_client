import { useMoveToPage } from "../../../../commons/hooks/useMoveToPage";
// import { ICoachingUsCommentsProps } from "../../../../commons/types/types";
import CommentUI from "./Comment.Presenter";
import {} from "./Comment.Queries";
export default function CommentPage(props: ICoachingUsCommentsProps) {
  const { moveToPage } = useMoveToPage();
  const answerList = [
    {
      id: 0,
      title: "zz",
    },
  ];
  return <CommentUI moveToPage={moveToPage} answerList={answerList} />;
}
