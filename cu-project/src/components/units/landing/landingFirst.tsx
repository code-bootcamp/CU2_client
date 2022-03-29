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
  background-color: #333333;
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
  padding-bottom: 70px;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    min-width: 100%;
    align-items: center;
    padding-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  text-align: center;
  color: ${Color.white};
  padding-bottom: 30px;
  @media ${breakPoints.tablet} {
    font-size: 48px;
  }
  @media ${breakPoints.mobile} {
    font-size: 28px;
    min-width: 100%;
    padding-bottom: 20px;
  }
`;

const TripTitle = styled.div`
  color: ${Color.medium};
  font-size: 18px;
  line-height: 34px;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  color: ${Color.white};
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
      <TitleBox>
        <Title>내가 쓴 글이 스펙이 된다!</Title>
        <TripTitle>자기주도학습을 하면서 공부한 내용을 작성하고</TripTitle>
        <SubTitle>작성에 대한 보상으로 점수를 획득해보세요!</SubTitle>
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
