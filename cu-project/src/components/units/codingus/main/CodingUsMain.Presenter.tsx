import { ICodingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import CodingUsHistory from "../history/History.Container";
import { v4 as uuidv4 } from "uuid";
import * as S from "./CodingUsMain.Style";
import BestUserCard from "../card/bestUserCard/BestUserCard";
import BlogCard from "../card/blogCard/BlogCard01/BlogCard01";

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
        <S.RowWrapper style={{ justifyContent: "space-between"}}>
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
          <BlogCard blogData={props.blogItems[0]}/>
        <Blank height="26px" />
        <S.BlogItemWrapper>
          {new Array(3).fill(0).map((_, idx) => (
            <div />
          ))}
        </S.BlogItemWrapper>
      </S.RecomendBlogWrapper>
      <Blank height="210px" />
      <S.RecomendStackWrapper>
        <S.Label fontSize="36px" fontWeight="700">
          추천 Stack CodinuUs
        </S.Label>
        <Blank height="45px" />
        <S.Label fontSize="24px" color="#C4C4C4">
          많이 본 QA
        </S.Label>
        <Blank height="23px" />
        <S.StackItemWrapper>
          {new Array(6).fill(0).map((_, idx) => (
            <div
              key={idx}
              style={{ margin: "0px 0px 30px 0px" }}
              onClick={props.moveToPage(`/codingus/stack/${idx}`)}
            >
              <S.Label fontSize="24px" fontWeight="700">
                Q. 국회는 의장 1인과 부의장 2인을 선출한다?
              </S.Label>
              <Blank height="30px" />
              <S.Label
                fontSize="24px"
                color="#BDBDBD"
                style={{ width: "588px" }}
              >
                국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에
                관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을
                심의한다. 국가는 평생교육을 진흥하여야 한다.
              </S.Label>
            </div>
          ))}
        </S.StackItemWrapper>
      </S.RecomendStackWrapper>
    </S.CodingUsMain>
  );
}
