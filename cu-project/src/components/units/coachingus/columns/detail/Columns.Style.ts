import styled from "@emotion/styled";
import Color from "../../../../../commons/styles/color";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 0 50px 0px;
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

export const CoachSidebar = styled.div`
  min-height: 100vh;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
export const AddSideBar = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
`;

// body 영역 // detail 영역
export const ColumnBody = styled.div`
  width: 800px;
  padding: 0 0 50px 0;

  & > p {
    font-size: 24px;
    font-weight: 400;
  }
  padding: 0 0 50px 0px;
`;

export const BlogDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media screen and (max-width: 1440px) {
    width: 1440px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
`;
export const BlogDetailLayout = styled(RowWrapper)`
  justify-content: center;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
`;

export const BtnLabel = styled.div`
  color: ${Color.medium};
  font-size: 16px;
  :hover {
    cursor: pointer;
  }
`;

export const RightIndex = styled.div`
  width: 600px;
`;
