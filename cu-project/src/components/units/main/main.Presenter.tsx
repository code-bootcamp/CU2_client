import { MainPageUIProps } from "../../../commons/types/types";
import * as S from "./main.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import SearchBar from "../commons/search/searchBar/SearchBar.Container";
import Blank from "../../commons/Blank";
import Slider from "react-slick";
import Card from "../codingus/main/Card/Card.container";

export default function MainUI(props: MainPageUIProps) {
  return (
    <S.Wrapper>
      <S.SliderBox {...props.settings}>
        <div>
          <S.SliderBanner>
            <p style={{ color: "white", fontSize: "48px" }}>We are</p>
            <p style={{ color: "white", fontSize: "48px" }}>CodingUs</p>
            <p style={{ color: "white", fontSize: "48px" }}>CoachingUs</p>
            <button>자세히 보기</button>
          </S.SliderBanner>
        </div>
      </S.SliderBox>
      <S.CodingUsBanner>
        <S.CodingUsBannerTitle>
          <p>혼자 개발공부하기 어려운가요?</p>
          <h1>CodingUs에서 같이 공부해요!</h1>
        </S.CodingUsBannerTitle>
        <S.CodingUsButton onClick={props.moveToPage("/codingus")}>
          자세히 보기 <AiOutlineArrowRight />
        </S.CodingUsButton>
      </S.CodingUsBanner>
      <Blank height="100px" />
      <S.SearchBox>
        <SearchBar />
        <S.TagsBox>
          <S.Tag>#Front-End</S.Tag>
          <S.Tag>#Back-End</S.Tag>
          <S.Tag>#Javascript</S.Tag>
          <S.Tag>#Html</S.Tag>
          <S.Tag>#Css</S.Tag>
          <S.Tag>#SQL</S.Tag>
          <S.Tag>#NoSQL</S.Tag>
          <S.Tag>#React</S.Tag>
          <S.Tag>#Python</S.Tag>
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
      <S.CodingUsBanner>
        <S.CodingUsBannerTitle>
          <p>취업에 관한 모든 궁금증들</p>
          <h1>CoachingUs에서 코치들에게 물어보세요!</h1>
        </S.CodingUsBannerTitle>
        <S.CodingUsButton onClick={props.moveToPage("/coachingus")}>
          자세히 보기 <AiOutlineArrowRight />
        </S.CodingUsButton>
      </S.CodingUsBanner>
    </S.Wrapper>
  );
}
