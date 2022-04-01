import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  width: 90%;
  > h1 {
    padding-bottom: 20px;
    border-bottom: 1px solid ${Color.medium};
  }
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: ${Color.medium};
  padding-bottom: 10px;
  > span {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

interface IMyPageNavProps {
  menu: string;
}

export function UserPageNav(props: IMyPageNavProps) {
  const { moveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <Nav>
        <span onClick={moveToPage("/mypage/user")}>유저페이지</span>
        {`>${props.menu}`}
      </Nav>
      <h1>{props.menu}</h1>
    </Wrapper>
  );
}

export function CoachPageNav(props: IMyPageNavProps) {
  const { moveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <Nav>
        <span onClick={moveToPage("/mypage/coach")}>코치페이지</span>
        {`>${props.menu}`}
      </Nav>
      <h1>{props.menu}</h1>
    </Wrapper>
  );
}
