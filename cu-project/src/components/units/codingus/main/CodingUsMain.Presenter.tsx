import { ICodingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import CodingUsHistory from "../history/History.Container";
import CodingUsSidebar from "../sidebar/Sidebar.Container";
import * as S from "./CodingUsMain.Style";

const bestUserItems = [
  {
    name: "carzyUs",
    ranking: 2,
    contents:
      "국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여 대통령을 보좌하며",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "CodingMaster",
    ranking: 1,
    contents:
      "국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여 대통령을 보좌하며",
    image: "https://source.unsplash.com/random",
  },
  {
    name: "Hello",
    ranking: 3,
    contents:
      "국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여 대통령을 보좌하며",
    image: "https://source.unsplash.com/random",
  },
];
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
            <S.Label fontSize="36px" fontWeight="bold">
              우수 활동자
            </S.Label>
            <S.Label
              fontSize="24px"
              fontWeight="300"
              style={{ cursor: "pointer" }}
              onClick={props.moveToPage("/codingus/ASD")}
            >
              {"더보기 >"}
            </S.Label>
          </S.RowWrapper>
          <Blank height="44px" />
          <S.BestUserItemWrapper>
            {bestUserItems.map((el) => (
              <S.BestUserItem
                key={el.ranking}
                onClick={props.moveToPage(`/codingus/${el.name}`)}
              >
                <S.BestUserHeader>
                  <img src={`/${el.ranking}-place-medal.png`} />
                  <Blank width="20px" />
                  <S.Label fontSize="32px" fontWeight="bold">
                    {el.name}
                  </S.Label>
                </S.BestUserHeader>
                <Blank height="24px" />
                <S.Label
                  fontSize="18px"
                  color="#BDBDBD"
                  style={{ lineHeight: "32px" }}
                >
                  {el.contents}
                </S.Label>
                <Blank height="24px" />
                <div style={{ height: "264px" }}>
                  <S.BestUserImage src={el.image} />
                </div>
                <S.RowWrapper style={{ justifyContent: "center" }}>
                  <S.MiniBtn />
                  <Blank width="22px" />
                  <S.MiniBtn />
                </S.RowWrapper>
              </S.BestUserItem>
            ))}
          </S.BestUserItemWrapper>
        </S.BestUserWrapper>
        <Blank height="272px" />
        <S.RecomendBlogWrapper>
          <S.Label fontSize="36px" fontWeight="700">
            추천 블로그
          </S.Label>
          <Blank height="29px" />
          <S.BlogItemWrapper>
            {new Array(3).fill(0).map((_, idx) => (
              <S.Card
                key={idx}
                onClick={props.moveToPage(`/codingus/blog/${idx}`)}
              >
                <S.CardImage src="https://source.unsplash.com/random"></S.CardImage>
                <S.CardContents>
                  <Blank width="10px" />
                  <S.RowWrapper>
                    {new Array(2).fill(0).map((_, idx) => (
                      <>
                        <S.CardTag key={"0" + idx}>{`tag${idx + 1}`}</S.CardTag>
                        <Blank width="10px" />
                      </>
                    ))}
                  </S.RowWrapper>
                  <Blank height="24px" />
                  <S.Label fontWeight="700" fontSize="36px">
                    Title
                  </S.Label>
                  <Blank height="40px" />
                  <S.Label
                    fontSize="18px"
                    color="#BDBDBD"
                    style={{ lineHeight: "32px", height: "96px" }}
                  >
                    국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에
                    관하여 대통령을 보좌하며
                  </S.Label>
                  <Blank height="19px" />
                  <S.RowWrapper style={{ justifyContent: "center" }}>
                    <S.MiniBtn />
                    <Blank width="22px" />
                    <S.MiniBtn />
                  </S.RowWrapper>
                </S.CardContents>
              </S.Card>
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
