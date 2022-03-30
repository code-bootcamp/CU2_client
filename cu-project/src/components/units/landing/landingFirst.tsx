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
  box-sizing: border-box;
  display: flex;
  background: url("/landingback.png");
  background-position: flex-start;
  background-size: cover;
  padding: 70px 100px 0 100px;
  @media ${breakPoints.tablet} {
    min-width: 100%;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
  }
`;

const ButtonBox = styled.div`
  padding-top: 660px;
  width: 100%;
  display: flex;
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
