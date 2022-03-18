import { MainPageUIProps } from "../../../commons/types/types";
import Blank from "../../commons/Blank";
import * as S from "./main.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainUI(props: MainPageUIProps) {
  return (
    <S.Wrapper>
      <S.ContentsBox>
        {`Blog >`}
        <S.ContentsList>
          <S.SliderBox {...props.blogSettings}>
            <S.ImgDiv>
              <div style={{ backgroundColor: "yellow" }}>1</div>
            </S.ImgDiv>
          </S.SliderBox>
        </S.ContentsList>
        <Blank height="10px" />
        {`Stack Q&A >`}
        <S.ContentsList></S.ContentsList>
        <Blank height="10px" />
        {`Blog >`}
        <S.ContentsList></S.ContentsList>
        <Blank height="10px" />
        {`Coaches >`}
        <S.ContentsList></S.ContentsList>
        <Blank height="10px" />
        {`Comments >`}
        <S.ContentsList></S.ContentsList>
        <Blank height="10px" />
        {`Columns >`}
        <S.ContentsList></S.ContentsList>
      </S.ContentsBox>
    </S.Wrapper>
  );
}
