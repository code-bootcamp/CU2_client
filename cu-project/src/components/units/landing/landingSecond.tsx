import styled from "@emotion/styled";
import Blank from "../../commons/Blank";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

const CategoryBox = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const CategoryName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #c4c4c4;
`;

const ServiceBox = styled.div`
  display: flex;
`;
const Service = styled.div``;
const ServiceIcon = styled.img`
  width: 60px;
  height: 60px;
`;
const ServiceName = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

const ServiceDesc = styled.div`
  width: 256px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */
  color: #bdbdbd;
`;
const ServiceButton = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 8px;
  width: 123px;
  height: 66px;
`;

export default function SecondPage() {
  return (
    <Wrapper>
      <CategoryBox>
        <CategoryName>CodingUs</CategoryName>
        <Blank height="57px" />
        <ServiceBox>
          <Service>
            <ServiceIcon src="" />
            <Blank height="24px" />
            <ServiceName>{`Stack Q&A`}</ServiceName>
            <Blank height="24px" />
            <ServiceDesc>
              국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
              대통령을 보좌하며
            </ServiceDesc>
            <Blank height="46px" />
            <ServiceButton>이동</ServiceButton>
          </Service>
          <Service>
            <ServiceIcon src="" />
            <Blank height="24px" />
            <ServiceName>Blog</ServiceName>
            <Blank height="24px" />
            <ServiceDesc>
              국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
              대통령을 보좌하며
            </ServiceDesc>
            <Blank height="46px" />
            <ServiceButton>이동</ServiceButton>
          </Service>
        </ServiceBox>
      </CategoryBox>
      <CategoryBox>
        <CategoryName>CoachingUs</CategoryName>
        <Blank height="57px" />
        <ServiceBox>
          <Service>
            <ServiceIcon src="" />
            <Blank height="24px" />
            <ServiceName>Coaches</ServiceName>
            <Blank height="24px" />
            <ServiceDesc>
              국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
              대통령을 보좌하며
            </ServiceDesc>
            <Blank height="46px" />
            <ServiceButton>이동</ServiceButton>
          </Service>
          <Service>
            <ServiceIcon src="" />
            <Blank height="24px" />
            <ServiceName>Comments</ServiceName>
            <Blank height="24px" />
            <ServiceDesc>
              국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
              대통령을 보좌하며
            </ServiceDesc>
            <Blank height="46px" />
            <ServiceButton>이동</ServiceButton>
          </Service>
          <Service>
            <ServiceIcon src="" />
            <Blank height="24px" />
            <ServiceName>Columns</ServiceName>
            <Blank height="24px" />
            <ServiceDesc>
              국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
              대통령을 보좌하며
            </ServiceDesc>
            <Blank height="46px" />
            <ServiceButton>이동</ServiceButton>
          </Service>
        </ServiceBox>
      </CategoryBox>
    </Wrapper>
  );
}
