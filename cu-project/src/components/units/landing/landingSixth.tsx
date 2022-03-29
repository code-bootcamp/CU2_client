import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 10% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.tablet} {
    min-width: 100%;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
    flex-direction: column;
  }
`;

const CodingUsBox = styled.div`
  width: 40%;
  margin-bottom: 50px;
  @media ${breakPoints.tablet} {
    min-width: 100%;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
  }
`;
const CoachingUsBox = styled.div`
  width: 60%;
  margin-bottom: 50px;
  @media ${breakPoints.tablet} {
    min-width: 100%;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
  }
`;

const CategoryName = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: #c4c4c4;
  margin-bottom: 30px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 24px;
  }
`;

const ServiceBox = styled.div`
  width: 100%;
  display: flex;
`;
const Service = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    align-items: center;
  }
`;

const ServiceIcon = styled.img`
  width: 50%;
  margin-bottom: 30px;
  @media ${breakPoints.tablet} {
    width: 150px;
    height: 150px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }
`;
const ServiceName = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 20px;
  color: #000000;
  @media ${breakPoints.tablet} {
    font-size: 20px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;
const ServiceButton = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 123px;
  height: 66px;
  @media ${breakPoints.tablet} {
    width: 80px;
    height: 55px;
  }
  @media ${breakPoints.mobile} {
    width: 80px;
    height: 44px;
  }
`;

export default function SixthPage() {
  return (
    <Wrapper>
      <CodingUsBox>
        <CategoryName>CodingUs</CategoryName>
        <ServiceBox>
          <Service>
            <ServiceIcon src="/Group 414.png" />
            <ServiceName>Blog</ServiceName>
            <ServiceButton>보러가기</ServiceButton>
          </Service>
          <Service>
            <ServiceIcon src="/Group 414.png" />
            <ServiceName>{`Stack Q&A`}</ServiceName>
            <ServiceButton>보러가기</ServiceButton>
          </Service>
        </ServiceBox>
      </CodingUsBox>
      <CoachingUsBox>
        <CategoryName>CoachingUs</CategoryName>
        <ServiceBox>
          <Service>
            <ServiceIcon src="/Group 414.png" />
            <ServiceName>Coaches</ServiceName>
            <ServiceButton>보러가기</ServiceButton>
          </Service>
          <Service>
            <ServiceIcon src="/Group 414.png" />
            <ServiceName>Comments</ServiceName>
            <ServiceButton>보러가기</ServiceButton>
          </Service>
          <Service>
            <ServiceIcon src="/Group 414.png" />
            <ServiceName>Columns</ServiceName>
            <ServiceButton>보러가기</ServiceButton>
          </Service>
        </ServiceBox>
      </CoachingUsBox>
    </Wrapper>
  );
}
