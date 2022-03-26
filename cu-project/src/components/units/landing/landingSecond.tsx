import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  @media ${breakPoints.tablet} {
    min-width: 100%;
    flex-direction: column;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media ${breakPoints.tablet} {
    min-width: 100%;
    flex-direction: row;
    img:nth-of-type(3) {
      display: none;
    }
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
    flex-direction: row;
    img:nth-of-type(2),
    img:nth-of-type(3) {
      display: none;
    }
  }
`;

const BlogImg = styled.img`
  width: 30%;
  border: 1px solid;
  border-radius: 8px;
  @media ${breakPoints.tablet} {
    width: 40%;
    flex-direction: row;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
    flex-direction: row;
  }
`;

const TitleBox = styled.div`
  width: 30%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    min-width: 100%;
    margin-bottom: 30px;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  width: 100%;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 30px;
  @media ${breakPoints.tablet} {
    flex-direction: row;
  }
  @media ${breakPoints.mobile} {
    font-size: 24px;
    flex-direction: row;
    white-space: normal;
  }
`;

const Contents = styled.p`
  width: 100%;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #bdbdbd;
  @media ${breakPoints.tablet} {
    min-width: 100%;
    flex-direction: row;
  }
  @media ${breakPoints.mobile} {
    font-size: 14px;
    flex-direction: row;
  }
`;

export default function SecondPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>
          블로깅하고
          <br /> 피드백을 받으세요.
        </Title>
        <Contents>
          {`여러분이 쓴 모든 블로그 포스트는 '좋아요'와 '싫어요'로 평가를 받게 됩니다.
          양질의 글을 쓰고 좋은 평가를 받아보세요. CodingUs Blog에서 포스팅을 시작하세요`}
        </Contents>
      </TitleBox>
      <ImageBox>
        <BlogImg src="/Group 414.png" />
        <BlogImg src="" />
        <BlogImg src="" />
      </ImageBox>
    </Wrapper>
  );
}
