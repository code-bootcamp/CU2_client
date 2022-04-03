import Blank from "../../../../../commons/Blank";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./MyQuestions.Style";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import QuestionCard01MyPage from "../../../../../commons/Card/QuestionCard01/QuestionCard01MyPage.Container";
import {
  IQuestionCardMyPage01,
  IUserQuestionsUI,
} from "../../../../../../commons/types/types";

export default function UserQuestionsUI(props: IUserQuestionsUI) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"내 Q&A"} />
        <S.BlogHeader>
          <h2>내 질문 {props.data?.fetchmyStack.length}개</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
        <Blank height="30px" />
        <div style={{ width: "90%" }}>
          {props.data?.fetchmyStack.map((el: IQuestionCardMyPage01) => (
            <div key={el.id}>
              <QuestionCard01MyPage
                data={el}
                isAnswered={true}
                onClickAnswer={() => {}}
              />
              <Blank height="30px" />
            </div>
          ))}
        </div>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
