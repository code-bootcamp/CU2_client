import Blank from "../../../../../commons/Blank";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./MyQuestions.Style";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import WaitingItem from "../../../../codingus/QnA/waitingItem/WaitingItem.Container";

export default function UserQuestionsUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <UserPageNav menu={"내 Q&A"} />
        <S.BlogHeader>
          <h2>내 질문 14 | 내 답변 2</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
        <div style={{ width: "90%" }}>
          {new Array(4).fill(0).map((el, idx) => (
            <div key={idx}>
              <WaitingItem
                data={{
                  stack: "스택",
                  tags: ["컴퓨터 부품", "JAVA"],
                  title: "모든 국민은 학문과 예술의 자유를 가진다.",
                  images: ["https://source.unsplash.com/random"],
                  commentCnt: 3,
                  createdAt: "2022-02-07T14:42:53.532Z",
                }}
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
