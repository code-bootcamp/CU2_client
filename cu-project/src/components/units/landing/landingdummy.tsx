import styled from "@emotion/styled";
import Blank from "../../commons/Blank";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
  padding: 0 10%;
`;

const Title = styled.h2`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
`;

const CoachingCategory = styled.div`
  display: flex;
`;

const CoachingBox = styled.div`
  width: 468px;
  display: flex;
  flex-direction: column;
`;

const CoachingImg = styled.img`
  width: 468px;
  height: 220px;
  border: 1px solid;
  border-radius: 8px;
`;

const Contents = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #bdbdbd;
`;

export default function FifthPage() {
  return (
    <Wrapper>
      <Title>코칭 서비스를 소개할게요</Title>
      <Blank height="59px" />
      <CoachingCategory>
        <CoachingBox>
          <CoachingImg src="" />
          <Blank height="21px" />
          <Contents>
            국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
            대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다.
          </Contents>
        </CoachingBox>
        <Blank width="20px" />
        <CoachingBox>
          <CoachingImg src="" />
          <Blank height="21px" />
          <Contents>
            국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
            대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다.
          </Contents>
        </CoachingBox>
      </CoachingCategory>
    </Wrapper>
  );
}
