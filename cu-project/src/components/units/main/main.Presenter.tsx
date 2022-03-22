import { MainPageUIProps } from "../../../commons/types/types";
import Blank from "../../commons/Blank";
import * as S from "./main.Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainUI(props: MainPageUIProps) {
  return (
    <S.Wrapper>
      <S.SliderBox {...props.settings}>
        <div>
          <S.Box1>
            <p style={{ color: "white", fontSize: "48px" }}>We are</p>
            <Blank height="10px" />
            <p style={{ color: "white", fontSize: "48px" }}>CodingUs</p>
            <Blank height="10px" />
            <p style={{ color: "white", fontSize: "48px" }}>CoachingUs</p>
            <Blank height="10px" />
            <button>자세히 보기</button>
          </S.Box1>
        </div>
      </S.SliderBox>
      <S.Box2>dd</S.Box2>
      <S.Box3></S.Box3>
    </S.Wrapper>
  );
}
