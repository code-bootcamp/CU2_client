import styled from "@emotion/styled";

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

// body 영역
export const CommentsBody = styled.div`
  width: 800px;
  padding: 0 0 50px 0;

  & > p {
    font-size: 24px;
    font-weight: 400;
  }
  padding: 0 0 50px 0px;
`;

// coach question 영역
export const CoachQuestionContainer = styled.div``;
export const QuestionContainer = styled.div``;
export const QuestionPicture = styled.div`
  width: 100%;
  height: 400px;
  background-color: #c4c4c4;
`;
export const QuestionTitle = styled.div`
  display: flex;
  align-items: flex-start;
  p {
    font-size: 18px;
    width: calc(800px - 30px);
  }
`;
export const QuestionProfile = styled.div``;
export const QuestionContents = styled.div`
  font-size: 14px;
  padding: 20px 0 0 0px;
  font-weight: 300;
`;

// coach asnwer 영역

export const CoachAnswerContainer = styled.div`
  & > p {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    margin-top: -20px;
    color: #c4c4c4;
  }
`;
export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px solid #bdbdbd;
  margin: 30px 0;
  & > p {
    font-size: 21px;
    font-weight: 300;
  }
`;