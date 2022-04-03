import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";
import Blank from "../../commons/Blank";

const Wrapper = styled.div`
  min-width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.light};
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
  width: 712px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  > img {
    width: 100%;
  }
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
  width: 319px;
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
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${Color.medium};
  @media ${breakPoints.tablet} {
    margin-bottom: 30px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 30px;
  }
`;

const FixImg1 = styled.img`
  position: fixed;
  right: 350px;
  opacity: 0;
  animation: ${({ isPresent }) => isPresent && "fadeIn4 1s forwards 0.5s"};
  @keyframes fadeIn4 {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
const FixImg2 = styled.img`
  position: fixed;
  right: 370px;
  top: calc(100vh * 3 + 200px);
  opacity: 0;
  animation: ${({ isPresent }) => isPresent && "fadeIn4 2s forwards 0.5s"};
`;
const FixImg3 = styled.img`
  position: fixed;
  right: 300px;
  top: calc(100vh * 3 + 250px);
  opacity: 0;
  animation: ${({ isPresent }) => isPresent && "fadeIn4 4s forwards 0.5s"};
`;
const FixImg4 = styled.img`
  position: fixed;
  right: 370px;
  top: calc(100vh * 3 + 450px);
  opacity: 0;
  animation: ${({ isPresent }) => isPresent && "fadeIn4 2.5s forwards 0.5s"};
`;

export default function FifthPage() {
  const [ref, inView] = useInView();
  return (
    <Wrapper>
      <TitleBox>
        <Title ref={ref}>
          블로깅하고
          <br /> 피드백을 받으세요.
        </Title>
        <Contents>
          공부한 내용을 작성하고 작성에 대한 보상을 받으세요! 내 글이 누군가에게
          도움이 된다면 지속적인 피드백을 확인할 수 있어요.
        </Contents>
      </TitleBox>
      <Blank width="169px" />
      <ImageBox>
        <img src="/Group 838.png" />
      </ImageBox>

      <FixImg1 isPresent={inView} src="/Group 840.png" />
      <FixImg2 isPresent={inView} src="/Group 842.png" />
      <FixImg3 isPresent={inView} src="/Group 840.png" />
      <FixImg4 isPresent={inView} src="/Group 842.png" />
    </Wrapper>
  );
}
