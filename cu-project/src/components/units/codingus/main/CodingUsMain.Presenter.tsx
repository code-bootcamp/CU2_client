import { ICodingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import CodingUsHistory from "../history/History.Container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CodingUsMain.Style";
import BestUserCard from "../card/bestUserCard/BestUserCard";
import BlogCard from "../../../commons/Card/BlogCard01/BlogCard01";
import QnACard from "../card/qnaCard/QnACard";
import { dummyData } from "./CodingUsMain.Container";
export default function CodingUsMainUI(props: ICodingUsMainUIProps) {
  return (
    <S.CodingUsMain>
      <S.WriteButton onClick={props.moveToPage("/codingus/write")}>
        <img src="/write-button.png" />
        글쓰기
      </S.WriteButton>
      <S.SearchWrapper>
        <S.SearchInput placeholder="검색"></S.SearchInput>
        <S.SearchBtn></S.SearchBtn>
      </S.SearchWrapper>
      <Blank height="60px" />
      <CodingUsHistory
        historyData={{
          작성글: 10,
          GOOD: 24,
          BAD: 2,
          채택: 0,
          댓글: 13,
        }}
        title="CodingMaster 님의 7일간 활동"
      />
      <Blank height="88px" />
      <S.BestUserWrapper>
        <S.RowWrapper
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <S.Label fontSize="24px" fontWeight="bold">
            우수 활동자를 소개합니다.
          </S.Label>
          <S.Label
            fontSize="18px"
            fontWeight="300"
            style={{ cursor: "pointer" }}
            onClick={props.moveToPage("/codingus/ASD")}
          >
            {"더보기 >"}
          </S.Label>
        </S.RowWrapper>
        <Blank height="24px" />
        <S.BestUserItemWrapper>
          {props.bestUserItems.map((el) => (
            <BestUserCard
              key={uuidv4()}
              data={el}
              onClickBlogItem={props.onClickItem}
              onClickFollow={props.onClickFollow}
              onClickLike={props.onClickLike}
            />
          ))}
        </S.BestUserItemWrapper>
      </S.BestUserWrapper>
      <Blank height="179px" />
      <S.RecomendBlogWrapper>
        <S.RowWrapper style={{ justifyContent: "space-between" }}>
          <S.Label fontSize="24px" fontWeight="700">
            이런 블로그 어때요?
          </S.Label>
          <S.Label
            fontSize="18px"
            fontWeight="300"
            style={{ cursor: "pointer" }}
            onClick={props.moveToPage("/codingus/ASD")}
          >
            {"더보기 >"}
          </S.Label>
        </S.RowWrapper>
        <Blank height="26px" />
        <S.BlogItemWrapper>
          {props.blogRecommendItems?.map((el) => (
            <div key={uuidv4()}>
              <BlogCard data={dummyData}  />
              <Blank height="40px"/>
            </div>
          ))}
        </S.BlogItemWrapper>
      </S.RecomendBlogWrapper>
      <Blank height="200px" />
      <S.RecomendStackWrapper>
        <S.Label fontSize="24px" fontWeight="700">
          추천 Stack CodinuUs
        </S.Label>
        <Blank height="17px" />
        <S.StackItemWrapper>
          {props.bestQuestions.map((el, idx) => (
            <QnACard key={uuidv4()} {...el}/>
          ))}
        </S.StackItemWrapper>
      </S.RecomendStackWrapper>
    </S.CodingUsMain>
  );
}
