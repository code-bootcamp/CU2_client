import Blank from "../../../../../commons/Blank";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./LikeQuestions.Style";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";

import QuestionCard01MyPage from "../../../../../commons/Card/QuestionCard01/QuestionCard01MyPage.Container";

export default function LikeQuestionsUI(props) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"Good한 Q&A"} />
        <S.BlogHeader>
          <h2>전체 {props.data?.fetchStackmylike.length} 개</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
        <Blank height="30px" />
        <div style={{ width: "90%" }}>
          {props.data?.fetchStackmylike.length === 0 && (
            <div style={{ textAlign: "center" }}>데이터 없음 </div>
          )}
          {props.data?.fetchStackmylike.map((el) => (
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
