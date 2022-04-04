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

export const CoachQuestionWrapper = styled.div`
  padding-bottom: 50px;
`;

export const CoachQuestionTitle = styled.div`
  font-size: 24px;
  font-weight: normal;
`;

export const CoachQuestionSubTitle = styled.div`
  font-size: 16px;
  font-weight: lighter;
  color: #333333;
`;
export const CoachQuestionExample = styled.div`
  width: 100%;
  background-color: #f6f5f5;
  padding: 20px;

  h1 {
    font-size: 16px;
    font-weight: 600;
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
    display: flex;
  }
  p {
    font-size: 16px;
    font-weight: bolder;
    color: red;
  }
`;
export const ContainerQuestionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;

export const QuestionCategory = styled.div`
  width: 100%;
  display: flex;
`;
export const CategoryTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 35px;
  font-size: 16px;
  font-weight: 200;
  color: white;
  background-color: #333333;
`;
export const CategoryIntroduceBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 200;
  border-radius: 10px;
  padding: 8px 20px;
  color: ${({ isCategory }) => (!isCategory ? "black" : "white")};
  border: ${({ isCategory }) => (!isCategory ? "1px solid #c4c4c4" : "none")};
  background-color: ${({ isCategory }) => (!isCategory ? "white" : "#ea345a")};
`;

export const CategoryIntroduceBtn2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 200;
  border-radius: 10px;
  padding: 8px 20px;
  color: ${({ isCategory }) => (!isCategory ? "black" : "white")};
  border: ${({ isCategory }) => (!isCategory ? "1px solid #c4c4c4" : "none")};
  background-color: ${({ isCategory }) => (!isCategory ? "white" : "#ea345a")};
`;

export const CategoryPortfolioBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 200;
  border-radius: 10px;
  padding: 8px 20px;
  color: ${({ isCategory }) => (isCategory ? "white" : "black")};
  border: ${({ isCategory }) => (isCategory ? "none" : "1px solid #c4c4c4")};
  background-color: ${({ isCategory }) => (isCategory ? "#ea345a" : "white")};
`;

export const QuestionTitle = styled.input`
  height: 40px;
  padding: 3px 10px;
  border: 1px solid #c4c4c4;
  ::placeholder {
    color: #c4c4c4;
  }
`;
export const QuestionContents = styled.textarea`
  resize: none;
  min-height: 500px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  ::placeholder {
    color: #c4c4c4;
  }
`;
export const QuestionFilesBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  /* padding: 3px 10px; */
  border: 1px solid black;
`;
export const FileTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: white;
  width: 100px;
  height: 100%;
  background: black;
`;
export const FileInput = styled.input`
  width: 80%;
  border: none;
  padding: 0 10px;
`;
export const QuestionFilesF = styled.input`
  display: none;
`;
export const QuestionBtn = styled.button`
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background: #ea345a;

  :hover {
    background-color: black;
  }
`;
