import styled from "@emotion/styled";
import Color from "../../../commons/styles/color";
import { breakPoints } from "../../../commons/styles/media";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";

interface IButtonProps {
  cate: boolean;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
  padding: 0 10%;
  @media ${breakPoints.tablet} {
    min-width: 100%;
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 70px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    /* padding-top: 120px; */
    min-width: 100%;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  text-align: center;
  color: #333333;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  @media ${breakPoints.tablet} {
    font-size: 48px;
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
    min-width: 100%;
    margin-bottom: 20px;
  }
`;

const SubTitle = styled.div`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #bdbdbd;
  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 28px;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 18px;
    text-align: center;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

const MoveButton = styled.button`
  border: 4px solid #333333;
  border-radius: 10px;
  width: 240px;
  height: 72px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #333333;
  margin-right: 30px;
  :hover {
    color: #ffffff;
    background-color: ${(props: IButtonProps) =>
      props.cate ? Color.main : Color.sub};
  }
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
      <TitleBox>
        <Title>내가 쓴 글이 스펙이 된다!</Title>
        <SubTitle>초보 개발자의 Self Study Solution, CU2</SubTitle>
      </TitleBox>
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
