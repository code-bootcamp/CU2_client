import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const FlexStart = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const FlexEnd = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const StackQnAImg = styled.img`
  width: 80%;
  height: 120px;
  border: 1px solid;
  border-radius: 8px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
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
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
    margin-bottom: 30px;
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
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
`;

export default function ThirdPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>
          질문과 답변으로
          <br /> 지식을 쌓으세요.
        </Title>
        <Contents>
          {`한국의 스택오버플로우! CU2의 유저들은 좋은 질문과 좋은 답변을 생산하는 중입니다. CodingUs Stack Q&A에서 물어보세요`}
        </Contents>
      </TitleBox>
    </Wrapper>
  );
}
