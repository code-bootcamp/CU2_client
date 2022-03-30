import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
// import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 36px;
    font-weight: bold;
    color: ${Color.dark};
  }
  & p {
    font-size: 24px;
  }
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBox = styled.div`
  max-width: 742px;
  min-width: 672px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentDesc = styled.div`
  max-width: 454px;
  min-width: 429px;
  display: flex;
  flex-direction: column;
  line-height: 32px;
  & h3 {
    font-size: 24px;
  }
  & p {
    font-size: 18px;
  }
`;

export default function FifthPage() {
  return (
    <Wrapper>
      <TitleBox>
        <h1>코칭 서비스를 소개할게요</h1>
        <p>
          CoachingUs는 개발자로의 시작, 전환을 위한 취업 지원 콘텐츠를
          제공합니다
        </p>
      </TitleBox>
      <ContentsBox>
        <ContentBox>
          <img src="/fifth1.png" />
          <ContentDesc>
            <h3>User</h3>
            <p>
              코치들에게 자기소개서나 포트폴리오 등 취업 코칭을 신청하세요!
              코치들이 작성한 칼럼을 읽고 전문적인 인사이트를 얻어보세요!
            </p>
          </ContentDesc>
        </ContentBox>
        <ContentBox>
          <img src="/fifth2.png" />
          <ContentDesc>
            <h3>Coach</h3>
            <p>
              매일 1시간 후배들의 코칭을 진행하며 부수입을 창출해보세요! 칼럼을
              작성하여 본인을 PR해보세요!
            </p>
          </ContentDesc>
        </ContentBox>
      </ContentsBox>
    </Wrapper>
  );
}
