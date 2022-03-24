import { BsSearch } from "react-icons/bs";
import Blank from "../../../../../commons/Blank";
import HorizontalLine from "../../../../../commons/Line/HorizontalLine";
import MypageMenu from "../../MypageMenu.Container";
import * as S from "./LikeQuestions.Style";
import WaitingItem from "../../../../codingus/qna/waitingItem/WaitingItem.Container";

export default function LikeQuestionsUI(props) {
  return (
    <S.AllWrapper>
      <MypageMenu />
      <S.Wrapper>
        <S.Box>{`마이페이지 > Good한 Q&A`}</S.Box>
        <Blank height="30px" />
        <S.BlogHeader>
          전체글 53
          <S.BlogHeaderRight>
            <S.SearchBar>
              <input type="text" placeholder="검색어를 입력해주세요" />
              <BsSearch />
            </S.SearchBar>
            <Blank width="20px"></Blank>
            <div>인기순 | 최신순</div>
          </S.BlogHeaderRight>
        </S.BlogHeader>
        <div style={{ width: "90%" }}>
          <HorizontalLine margin={20} />
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
