import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

interface IButtonProps {
  cate: boolean;
}

const Wrapper = styled.div`
  min-width: 100vw;
  height: 100vh;
  margin: 0;
  padding-top: 50px;

  box-sizing: border-box;
  background-color: #303030;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    min-width: 100%;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
  }
`;

export const Logo = styled.img`
  width: 100px;
  border: none;
  border-radius: 100%;
  z-index: 3;
  position: fixed;
  top: 50px;
  left: 50px;
`;

const BackgroundImageFix = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  background-image: url("/landingback.png");
  background-size: cover;
`;

const ButtonBox = styled.div`
  width: 100%;
  position: relative;
  top: 100px;
  display: flex;
  border: none;
  padding-bottom: 200px;
  justify-content: center;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

const MoveButton = styled.button`
  border: none;
  border-radius: 10px;
  width: 240px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${(props: IButtonProps) => (props.cate ? Color.main : Color.white)};
  margin-right: 30px;
  background-color: ${(props: IButtonProps) =>
    props.cate ? Color.white : Color.main};
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export default function FirstPage() {
  const { moveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <Logo src="/CU2_LOGO.png" />
      <BackgroundImageFix />
      <ButtonBox>
        <MoveButton onClick={moveToPage("/codingus")} cate={true}>
          CodingUS
        </MoveButton>
        <MoveButton onClick={moveToPage("/coachingus")} cate={false}>
          CouchingUS
        </MoveButton>
      </ButtonBox>
    </Wrapper>
  );
}
