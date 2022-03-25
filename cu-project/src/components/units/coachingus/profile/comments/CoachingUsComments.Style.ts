import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding-top: 100px;
  display: flex;
`;

// coach card 영역
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

export const CoachProfileBody = styled.div`
  width: 800px;
  padding: 0 0 50px 0;
`;

// 따로 나눌 부분
export const CoachCommentsWrapper = styled.div``;

export const CoachCommentsTitle = styled.div`
  font-size: 21px;
  font-weight: normal;
`;
export const commentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 30px 0;
  height: 200px;
  border: 1px solid #c4c4c4;
  border-radius: 15px;
  width: 800px;
`;
export const WrapperLeft = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoachCommentsContents = styled.div`
  width: 100%;
`;
export const commentTitle = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 30px;
  width: 100%;
`;
export const commentContents = styled.div`
  font-size: 14px;
  font-weight: 300;
  padding-left: 35px;
`;

export const WrapperRight = styled.div`
  width: 250px;
  height: 100%;
`;
export const ContentsPicture = styled.div`
  background: black;
  width: 100%;
  height: 100%;
`;

// 끝

export const CommentsInfo = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 200;
`;
export const CommentsInfoHits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
`;
export const CommentsInfoLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
`;
