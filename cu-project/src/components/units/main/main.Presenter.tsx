import { MainPageUIProps } from "../../../commons/types/types";
import Blank from "../../commons/Blank";
import * as S from "./main.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainUI(props: MainPageUIProps) {
  return (
    <S.Wrapper>
      <Blank height="70px" />
      <S.ContentsBox>
        <S.ServiceName
          onClick={props.moveToPage("/codingus")}
        >{`Blog >`}</S.ServiceName>
        <S.BlogList>
          <S.SliderBox {...props.blogSettings}>
            <S.ImgDiv>
              <img
                src="https://play-lh.googleusercontent.com/EW-thSba5WQ8okOXCJ-HyQ5J8auWfNU4urcm_n1TYOPv965-1GluUCfh50FkMQ1RKGo"
                style={{ width: "100%", height: "214px", objectFit: "cover" }}
              />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
          </S.SliderBox>
        </S.BlogList>
        <Blank height="10px" />
        <S.ServiceName onClick={props.moveToPage("/codingus")}>
          {`Stack Q&A >`}
        </S.ServiceName>
        <S.ContentsList>
          <S.SliderBox {...props.stackQnASettings}>
            <S.ImgDiv>
              <img
                src="https://play-lh.googleusercontent.com/EW-thSba5WQ8okOXCJ-HyQ5J8auWfNU4urcm_n1TYOPv965-1GluUCfh50FkMQ1RKGo"
                style={{ width: "100%", height: "214px", objectFit: "cover" }}
              />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
          </S.SliderBox>
        </S.ContentsList>
        <Blank height="10px" />
        <S.ServiceName onClick={props.moveToPage("/coachingus")}>
          {`Coaches >`}
        </S.ServiceName>
        <S.ContentsList>
          <S.SliderBox {...props.coachesSettings}>
            <S.ImgDiv>
              <img
                src="https://play-lh.googleusercontent.com/EW-thSba5WQ8okOXCJ-HyQ5J8auWfNU4urcm_n1TYOPv965-1GluUCfh50FkMQ1RKGo"
                style={{ width: "100%", height: "214px", objectFit: "cover" }}
              />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "214px" }} />
            </S.ImgDiv>
          </S.SliderBox>
        </S.ContentsList>
        <Blank height="10px" />
        <S.ServiceName onClick={props.moveToPage("/coachingus")}>
          {`Comments >`}
        </S.ServiceName>
        <S.ContentsList>
          <S.SliderBox {...props.stackQnASettings}>
            <S.ImgDiv>
              <img
                src="https://play-lh.googleusercontent.com/EW-thSba5WQ8okOXCJ-HyQ5J8auWfNU4urcm_n1TYOPv965-1GluUCfh50FkMQ1RKGo"
                style={{ width: "100%", height: "127px", objectFit: "cover" }}
              />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "127px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "127px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "127px" }} />
            </S.ImgDiv>
          </S.SliderBox>
        </S.ContentsList>
        <Blank height="10px" />
        <S.ServiceName onClick={props.moveToPage("/coachingus")}>
          {`Columns >`}
        </S.ServiceName>
        <S.ContentsList>
          <S.SliderBox {...props.stackQnASettings}>
            <S.ImgDiv>
              <img
                src="https://play-lh.googleusercontent.com/EW-thSba5WQ8okOXCJ-HyQ5J8auWfNU4urcm_n1TYOPv965-1GluUCfh50FkMQ1RKGo"
                style={{ width: "100%", height: "256px", objectFit: "cover" }}
              />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "256px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "256px" }} />
            </S.ImgDiv>
            <S.ImgDiv>
              <img src="" style={{ width: "100%", height: "256px" }} />
            </S.ImgDiv>
          </S.SliderBox>
        </S.ContentsList>
      </S.ContentsBox>
    </S.Wrapper>
  );
}
