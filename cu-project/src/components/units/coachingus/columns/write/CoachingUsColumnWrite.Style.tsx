import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 0 50px 300px;
`;

// SideBar 영역

export const LeftSideBar = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
  min-height: 100vh;
  position: absolute;
  left: 0;
`;
// body best columns 영역
export const ColumnsBody = styled.div`
  width: 800px;
  padding: 0 0 50px 0;
  & > p {
    font-size: 24px;
    font-weight: 400;
  }
`;

// write 부분
export const CoachingUsWrite = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  width: 90%;
  height: 100vh;
`;

export const RowWrapper = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled(RowWrapper)`
  justify-content: space-between;

  padding: 20px 0px 10px 0px;
  background-color: ${Color.white};
`;

export const TitleInput = styled.input`
  font-weight: 700;
  font-size: 48px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const TagWrapper = styled(RowWrapper)`
  width: 100%;
`;

export const TagList = styled(RowWrapper)``;

export const TagInput = styled.input`
  display: inherit;
  width: 100%;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  border: none;
  :focus {
    outline: none;
  }
`;
