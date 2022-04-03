import { IWatingItemProps } from "../../../../commons/types/types";
import QuestionCard01MyPageUI from "./QuestionCard01MyPage.Presenter";

export default function QuestionCard01MyPage(props: IWatingItemProps) {
  return (
    <QuestionCard01MyPageUI
      data={props.data}
      isAnswered={true}
      onClickAnswer={() => {}}
    />
  );
}
