import { MainPageUIProps } from "../../../commons/types/types";
import * as S from "./main.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Blank from "../../commons/Blank";
import Slider from "react-slick";
import Card from "../codingus/main/Card/Card.container";
import { BsSearch } from "react-icons/bs";
import BlogCard from "../codingus/card/blogCard/BlogCard01/BlogCard01";

export default function MainUI(props: MainPageUIProps) {
  return (
    <S.Wrapper>
      <S.SliderBox {...props.settings}>
        <div>
          <S.SliderBanner>
            <div>
              <h1 style={{ color: "white", fontSize: "48px" }}>
                Self Study Solution
              </h1>
              <p
                style={{ color: "white", fontSize: "24px" }}
              >{`CU2만의 커뮤니티 서비스 'CodingUs'와 멘토링 서비스`}</p>
              <p
                style={{ color: "white", fontSize: "24px" }}
              >{`'CoachingUs'로 Self Study Solution을 경험하세요`}</p>
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
          <S.SearchBarBody placeholder="개발 공부하다가 궁금한 게 있다면 검색해보세요!" />
          <Blank width="12px" />
          <BsSearch style={{ fontSize: "18px", cursor: "pointer" }} />
        </S.SearchBarArea>
        <S.TagsBox>
          <S.Tag onClick={props.moveToPage("/search/프론트엔드")}>
            #프론트엔드
          </S.Tag>
          <S.Tag onClick={props.moveToPage("/search/백엔드")}>#백엔드</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/javascript")}>
            #Javascript
          </S.Tag>
          <S.Tag onClick={props.moveToPage("/search/html")}>#Html</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/css")}>#CSS</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/sql")}>#SQL</S.Tag>
          <S.Tag onClick={props.moveToPage("/search/nosql")}>#NoSQL</S.Tag>
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
          <Slider {...props.responsiveSettings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
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
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
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
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </S.ServiceBox>
      <Blank height="100px" />
      <S.ServiceBox>
        <S.ServiceHead>🔥 코치들의 코멘트</S.ServiceHead>
        <S.ServiceSubHead>
          <p>양질의 피드백을 경험하세요</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <Card />
        <Card />
      </S.ServiceBox>
      <Blank height="100px" />
      <S.ServiceBox>
        <S.ServiceHead>🔥 코치들의 칼럼</S.ServiceHead>
        <S.ServiceSubHead>
          <p>전문성이 더 한 콘텐츠를 읽어보세요</p>
          <p>{`전체보기 >`}</p>
        </S.ServiceSubHead>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
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
