import { ICoachingUsLandingUIProps } from "../../../../commons/types/types";
import Blank from "../../../commons/Blank";
import * as S from "./CoachingUsLanding.Style";
import { AiOutlineArrowRight } from "react-icons/ai";
import CoachingUsSidebarLeft from "../sidebar/left/CoachingUsSidebar.Container";
import CoachingUsSidebarRight from "../sidebar/right/CoachingUsSidebar.Container";
import { Checkbox } from "antd";
import "antd/dist/antd.css";

export default function CoachingUsLandingUI(props: ICoachingUsLandingUIProps) {
  return (
    <S.Wrapper>
      <S.LeftSideBar>
        <CoachingUsSidebarLeft />
      </S.LeftSideBar>
      <S.LandingBody>
        <S.SearchBar />
        <Blank height="40px" />
        <S.Container>
          <S.CategoryTitle>관심 카테고리를 등록하세요</S.CategoryTitle>
          <Blank height="20px" />
          <S.CategoryBox>
            {props.corList.map((cor, index) => (
              <S.CorporationContatiner key={index}>
                <S.CorporationContatinerFooter>
                  <S.CorTitle>{cor}</S.CorTitle>
                  <S.CorSubTitle>
                    {cor} 설명글입니다.
                    <Checkbox id={cor} onChange={props.onChangeCheckBox} />
                  </S.CorSubTitle>
                </S.CorporationContatinerFooter>
              </S.CorporationContatiner>
            ))}
          </S.CategoryBox>
          <Blank height="20px" />
          <S.ContainerBtnBox onClick={props.onClickStart}>
            <S.GetStartBtn>
              Get Start
              <AiOutlineArrowRight
                style={{
                  color: "white",
                  fontSize: "15px",
                  height: "20px",
                  textAlign: "center",
                  paddingTop: "2px",
                  marginLeft: "2px",
                }}
              />
            </S.GetStartBtn>
          </S.ContainerBtnBox>
        </S.Container>
      </S.LandingBody>
      <S.RightSideBar>
        <CoachingUsSidebarRight />
      </S.RightSideBar>
    </S.Wrapper>
  );
}
