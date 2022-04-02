import Blank from "../../../../../commons/Blank";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./LikeQuestions.Style";
import { UserPageNav } from "../../../../../commons/Mypage/MypageNav";
import { MyPageSearchBar } from "../../../../../commons/Mypage/MypageSearchBar";
import QuestionCard01 from "../../../../../commons/Card/QuestionCard01/QuestionCard01.Container";

export default function LikeQuestionsUI(props) {
  return (
    <S.AllWrapper>
      <S.Web>
        <MypageMenu />
      </S.Web>
      <S.Wrapper>
        <UserPageNav menu={"Good한 Q&A"} />
        <S.BlogHeader>
          <h2>질문 14 | 답변 2</h2>
          <MyPageSearchBar />
        </S.BlogHeader>
        <Blank height="30px" />
        <div style={{ width: "90%" }}>
          {new Array(4).fill(0).map((el, idx) => (
            <div key={idx}>
              <QuestionCard01
                data={{
                  id: "asdasdsadsadasdsadsa",
                  title: "이것이 궁금해요~~~~~!!!",
                  contents:
                    "JAVA,컴퓨터부품![contents]궁금해요~~~~알려주세요~~~~~~~",
                  createdAt: "2022-02-07T14:42:53.532Z",
                  stacktag: [{ tag: "JavaScript" }],
                }}
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
