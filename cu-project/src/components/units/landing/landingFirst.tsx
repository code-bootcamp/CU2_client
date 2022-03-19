import styled from "@emotion/styled";
import Blank from "../../commons/Blank";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f5;
  padding: 0 10%;
`;

const TitleBox = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #333333;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SubTitle = styled.p`
  width: 666px;
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #bdbdbd;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const MoveButton = styled.button`
  border: 4px solid #333333;
  border-radius: 10px;
  width: 240px;
  height: 72px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #333333;
`;

export default function FirstPage() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>내가 쓴 글이 스펙이 된다!</Title>
        <Blank height="46px" />
        <SubTitle>
          글 내용입니다글 내용입니다글 내용입니다글 내용입니다글 내용입니다글
          내용입니다
        </SubTitle>
      </TitleBox>
      <Blank height="118px" />
      <ButtonBox>
        <MoveButton>CodingUS</MoveButton>
        <Blank width="32px" />
        <MoveButton>CouchingUS</MoveButton>
      </ButtonBox>
    </Wrapper>
  );
}
