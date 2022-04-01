import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
import Blank from "../../commons/Blank";
// import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  min-width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${Color.light};
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
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 285px;
    height: 285px;
    border-radius: 50%;
    border: 1px solid;
  }
`;

const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 32px;
  & h3 {
    font-size: 24px;
  }
  & p {
    font-size: 18px;
  }
`;

export default function SixthPage() {
  return (
    <Wrapper>
      <TitleBox>
        <h1>현직자에게 궁금한 것들을 물어보세요</h1>
        <Blank height="15px" />
        <p>원하는 회사, 원하는 직무의 코치들에게 취업 코칭을 받아보세요</p>
      </TitleBox>
      <Blank height="45px" />
      <ContentsBox>
        <ContentBox>
          <img src="/fifth1.png" />
          <Blank height="20px" />
          <ContentDesc>
            <p>배달의 민족 | 프론트엔드 6년차</p>
            <h3>백진상</h3>
          </ContentDesc>
        </ContentBox>
        <Blank width="20px" />
        <ContentBox>
          <img src="/fifth1.png" />
          <Blank height="20px" />
          <ContentDesc>
            <p>배달의 민족 | 프론트엔드 6년차</p>
            <h3>백진상</h3>
          </ContentDesc>
        </ContentBox>
        <Blank width="20px" />
        <ContentBox>
          <img src="/fifth1.png" />
          <Blank height="20px" />
          <ContentDesc>
            <p>배달의 민족 | 프론트엔드 6년차</p>
            <h3>백진상</h3>
          </ContentDesc>
        </ContentBox>
        <Blank width="20px" />
        <ContentBox>
          <img src="/fifth1.png" />
          <Blank height="20px" />
          <ContentDesc>
            <p>배달의 민족 | 프론트엔드 6년차</p>
            <h3>백진상</h3>
          </ContentDesc>
        </ContentBox>
      </ContentsBox>
    </Wrapper>
  );
}
