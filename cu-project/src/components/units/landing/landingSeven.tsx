import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
import Blank from "../../commons/Blank";
// import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 36px;
    font-weight: bold;
    color: ${Color.dark};
  }
  & p {
    font-size: 24px;
  }
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 385px;
    height: 424px;
    background-color: ${Color.main};
  }
`;

export default function SevenPage() {
  return (
    <Wrapper>
      <TitleBox>
        <h1>현직자의 이야기들을 들어보세요</h1>
        <Blank height="15px" />
        <p>유저에게는 전문적인 Tip을! 코치에게는 PR로 셀프브랜딩 기회를!</p>
      </TitleBox>
      <Blank height="45px" />
      <ContentsBox>
        <div />
        <Blank width="20px" />
        <div />
        <Blank width="20px" />
        <div />
      </ContentsBox>
    </Wrapper>
  );
}
