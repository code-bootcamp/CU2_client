import { ICoachingUsLandingUIProps, ICodingUsLandingUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CodingUsLanding.Style";
import { AiOutlineArrowRight } from "react-icons/ai";

import "antd/dist/antd.css";

export default function CoachingUsLandingUI(props: ICodingUsLandingUIProps) {
  return (
    <S.Wrapper>
      <S.LandingBody>
        <S.CategoryTitle>관심 카테고리를 등록하세요</S.CategoryTitle>
        <Blank height="20px" />
        <S.Container>
          <S.CategoryBox>
            {props.corList.map((cor, index) => (
              <S.CorporationContatiner
                key={index}
                id={cor}
                onClick={props.onChangeCheckBox}
                isInterestList={props.interestList.includes(cor)}
              >
                <S.CorPicture />

                <S.CorporationContatinerFooter>
                  <S.CorTitle>{cor}</S.CorTitle>
                  <S.CorSubTitle>{cor} 설명글입니다.</S.CorSubTitle>
                </S.CorporationContatinerFooter>
              </S.CorporationContatiner>
            ))}
          </S.CategoryBox>
          <Blank height="50px" />
          <S.ContainerBtnBox onClick={props.onClickStart}>
            <S.GetStartBtn>
              시작하기
              <AiOutlineArrowRight
                style={{
                  color: "white",
                  width: "25px",
                  height: "25px",
                  textAlign: "center",
                  paddingBottom: "5px",
                  marginLeft: "2px",
                }}
              />
            </S.GetStartBtn>
          </S.ContainerBtnBox>
        </S.Container>
      </S.LandingBody>
    </S.Wrapper>
  );
}
