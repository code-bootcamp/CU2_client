import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";
import { useInView } from "react-intersection-observer";
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
  padding: 0 10%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

const FirstImageElememt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const FirstImageBox = styled.img`
  width: 70%;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  opacity: 0;
  animation: ${({ isPresent }) => isPresent && "fadeIn2 3s forwards 0.5s"};
  @keyframes fadeIn2 {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const SecondImageElememt = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const SecondImageBox = styled.img`
  width: 70%;
  display: flex;
  justify-content: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
  opacity: 0;
  animation: ${({ isPresent }) => isPresent && "fadeIn3 3s forwards 0.5s"};
  @keyframes fadeIn3 {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
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
  margin: 0;
  text-align: center;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${Color.medium};
  text-align: center;
`;

const LeftBox = styled.div``;
const RightBox = styled.div``;

export default function ThirdPage() {
  const [ref, inView] = useInView();
  return (
    <Wrapper>
      <TitleBox>
        <Title>질문과 답변으로 지식을 쌓으세요 📚</Title>
        <Blank height="10px" />
        <SubTitle ref={ref}>
          혼자서 공부하면서 생기는 고민들은 현직 개발자에게 질문해보세요!{" "}
        </SubTitle>
        <Blank height="100px" />
        <FirstImageElememt>
          <FirstImageBox isPresent={inView} src="/Group 834.png" />
        </FirstImageElememt>
        <SecondImageElememt>
          <SecondImageBox isPresent={inView} src="/Group 836.png" />
        </SecondImageElememt>
      </TitleBox>
    </Wrapper>
  );
}
