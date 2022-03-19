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

const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BlogImg = styled.img`
  width: 227px;
  height: 313px;
  border: 1px solid;
  border-radius: 8px;
`;

const TitleBox = styled.div`
  width: 322px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
`;

const Contents = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #bdbdbd;
`;

export default function FourthPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>
          블로깅하고
          <br /> 피드백을 받으세요.
        </Title>
        <Blank height="32px" />
        <Contents>
          국회는 의장 1인과 부의장 2인을 선출한다. 국무위원은 국정에 관하여
          대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다.
        </Contents>
      </TitleBox>
      <Blank width="169px" />
      <ImageBox>
        <BlogImg src="" />
        <Blank width="16px" />
        <BlogImg src="" />
        <Blank width="16px" />
        <BlogImg src="" />
      </ImageBox>
    </Wrapper>
  );
}
