import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f5f5;
  padding: 0 10%;
  @media ${breakPoints.tablet} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageBox = styled.div`
  width: 69%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    img:nth-of-type(3) {
      display: none;
    }
  }
`;

const TitleBox = styled.div`
  width: 29%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  margin-bottom: 30px;
  @media ${breakPoints.tablet} {
    margin-bottom: 20px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`;

const Contents = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #bdbdbd;
  @media ${breakPoints.tablet} {
    margin-bottom: 30px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
`;

const ColumnImg = styled.img`
  width: 32%;
  @media ${breakPoints.mobile} {
    width: 49%;
  }
`;

export default function FifthPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>
          현직자 코치들의
          <br /> 이야기를 들어보세요
        </Title>
        <Contents>
          코치들의 생생한 직무 이야기와 기술 지식들이 모여있는 곳! CoachingUs
          Columns에서 확인하세요
        </Contents>
      </TitleBox>
      <ImageBox>
        <ColumnImg src="/Group 414.png" />
        <ColumnImg src="/Group 414.png" />
        <ColumnImg src="/Group 414.png" />
      </ImageBox>
    </Wrapper>
  );
}
