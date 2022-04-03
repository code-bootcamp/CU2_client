import { MainPageUIProps } from "../../../commons/types/types";
import * as S from "./main.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Blank from "../../commons/Blank";
import Card from "../codingus/main/Card/Card.container";
import { BsSearch } from "react-icons/bs";
import BlogCard01MyPage from "../../commons/Card/BlogCard01/BlogCard01MyPage";
import QuestionCard01MyPage from "../../commons/Card/QuestionCard01/QuestionCard01MyPage.Container";
import { IStack } from "../../../commons/types/generated/types";
import CoachesCardPage from "../coachingus/main/coachescard/CoachesCard.Container";

export default function MainUI(props: MainPageUIProps) {
  return (
    <S.Wrapper>
      <S.SliderBox {...props.settings}>
        <div>
          <S.SliderBanner>
            <div>
              <h1>Self Study Solution</h1>
              <p>{`CU2만의 커뮤니티 서비스 'CodingUs'와 `}</p>
              <p>{`코칭 서비스 'CoachingUs'로 성장을 경험하세요`}</p>
            </div>
          </S.SliderBanner>
        </div>
      </S.SliderBox>
      <S.CodingUsBanner>
        <S.CodingUsBannerDiv>
          <S.CodingUsBannerTitle>
            <p>혼자 개발공부하기 어려운가요?</p>
            <h1>CodingUs에서 같이 공부해요!</h1>
          </S.CodingUsBannerTitle>
          <S.CodingUsButton onClick={props.moveToPage("/codingus")}>
            자세히 보기 <AiOutlineArrowRight />
          </S.CodingUsButton>
        </S.CodingUsBannerDiv>
      </S.CodingUsBanner>
      <Blank height="50px" />
      <S.SearchBox>
        <S.SearchBarArea>
          <S.SearchBarBody placeholder="개발의 모든 것, 검색해보세요!" />
          <Blank width="12px" />
          <BsSearch style={{ fontSize: "18px", cursor: "pointer" }} />
        </S.SearchBarArea>
        <S.TagsBox>
          <S.Tag onClick={props.moveToPage("/search/html")}>#Html</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/css")}>#CSS</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/javascript")}>
            #Javascript
          </S.Tag>
          <S.Tag onClick={props.moveToPage("/search/Java")}>#Java</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/sql")}>#SQL</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/C")}>#C</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/react")}>#React</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/python")}>#Python</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/vue")}>#Vue</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/angular")}>#Angular</S.Tag>
        </S.TagsBox>
      </S.SearchBox>
      <Blank height="100px" />
      <S.ServiceBox>
        <S.ServiceHead>🚀 오늘부터 시작해보세요!</S.ServiceHead>
        <S.ServiceSubHead>
          <p>블로그 쓰고 점수와 피드백을 받아봐요</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <S.ServiceBody>
          <S.SliderContentBox {...props.responsiveSettings}>
            {props.blogData?.fetchotherBlogorderbylikeAll
              .filter((el, index) => index < 8)
              .map((el) => (
                <div key={el.id}>
                  <BlogCard01MyPage data={el} />
                </div>
              ))}
          </S.SliderContentBox>
        </S.ServiceBody>
      </S.ServiceBox>
      <Blank height="50px" />
      <S.ServiceBox>
        <S.ServiceHead>🙋 공부하다가 막히는 게 있나요?</S.ServiceHead>
        <S.ServiceSubHead>
          <p>CodingUs들이 서로 물어보고 알려줘요!</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {props.stackData?.fetchotherStackorderbylike
            .filter((el: IStack, index: number) => index < 4)
            .map((el) => (
              <div key={el.id}>
                <QuestionCard01MyPage data={el} />
              </div>
            ))}
        </div>
      </S.ServiceBox>
      <Blank height="100px" />
      <S.CodingUsBanner>
        <S.CodingUsBannerDiv>
          <S.CodingUsBannerTitle>
            <p>취업에 관한 모든 궁금증들</p>
            <h1>CoachingUs에서 코치들에게 물어보세요!</h1>
          </S.CodingUsBannerTitle>
          <S.CodingUsButton onClick={props.moveToPage("/coachingus")}>
            자세히 보기 <AiOutlineArrowRight />
          </S.CodingUsButton>
        </S.CodingUsBannerDiv>
      </S.CodingUsBanner>
      <Blank height="100px" />
      <S.ServiceBox>
        <S.ServiceHead>🔥 CU2만의 베스트 코치들</S.ServiceHead>
        <S.ServiceSubHead>
          <p>자기소개서와 포트폴리오, 취업에 관한 모든 것들 다 물어보세요</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CoachesCardPage />
        </div>
      </S.ServiceBox>
      <Blank height="100px" />
      <S.ServiceBox>
        <S.ServiceHead>🔥 코치들의 코멘트</S.ServiceHead>
        <S.ServiceSubHead>
          <p>양질의 피드백을 경험하세요</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card />
          <Card />
        </div>
      </S.ServiceBox>
      <Blank height="100px" />
      <S.ServiceBox>
        <S.ServiceHead>🔥 코치들의 칼럼</S.ServiceHead>
        <S.ServiceSubHead>
          <p>전문성이 더 한 콘텐츠를 읽어보세요</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </S.ServiceBox>
    </S.Wrapper>
  );
}
