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
  padding: 0 10%;
  @media ${breakPoints.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const ImageBox = styled.div`
  width: 59%;
  display: flex;
  flex-direction: row;

  align-items: center;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  width: 39%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.tablet} {
    width: 100%;
    margin-bottom: 30px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
  @media ${breakPoints.tablet} {
    margin-bottom: 30px;
  }
  @media ${breakPoints.mobile} {
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
`;

const CommentsImg = styled.img`
  width: 32%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

const CommentsBigImg = styled.img`
  width: 36%;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

export default function FourthPage() {
  return (
    <Wrapper>
      <ImageBox>
        <CommentsImg src="/Group 414.png" />
        <CommentsBigImg src="/Group 414.png" />
        <CommentsImg src="/Group 414.png" />
      </ImageBox>
      <TitleBox>
        <Title>
          코치에게 자기소개서와
          <br /> 포트폴리오를 물어보세요
        </Title>
        <Contents>
          {`자기소개서와 포트폴리오를 어떻게 해야할 지 모르는 분들을 위해서 코치가
          피드백을 드립니다. CoachingUs Coaching & Comments, 코칭을 신청하세요`}
        </Contents>
      </TitleBox>
    </Wrapper>
  );
}
