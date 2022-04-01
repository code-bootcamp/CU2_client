import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import Color from "../../../commons/styles/color";
import Blank from "../../commons/Blank";
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
  & div {
    width: 385px;
    height: 424px;
    background-color: ${Color.main};
  }
`;

const MoveButton = styled.div`
  width: 300px;
  height: 70px;
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  opacity: 0;

  animation: ${({ isPresent }) => isPresent && "fadeIn5 3s forwards"};
  @keyframes fadeIn5 {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export default function SevenPage() {
  const router = useRouter();
  const [ref, inView] = useInView();
  return (
    <Wrapper>
      <TitleBox>
        <h1>현직자의 이야기들을 들어보세요</h1>
        <Blank height="5px" />
        <p>유저에게는 전문적인 Tip을! 코치에게는 PR로 셀프브랜딩 기회를!</p>
      </TitleBox>
      <Blank height="25px" />
      <ContentsBox ref={ref}>
        <div />
        <Blank width="20px" />
        <div />
        <Blank width="20px" />
        <div />
      </ContentsBox>
      <Blank height="50px" />
      <MoveButton onClick={() => router.push("/main")} isPresent={inView}>
        메인페이지
      </MoveButton>
    </Wrapper>
  );
}
