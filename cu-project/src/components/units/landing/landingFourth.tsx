import styled from "@emotion/styled";
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

export default function FifthPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>
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
        <img src="/fourth.png" />
      </ImageBox>
    </Wrapper>
  );
}
