import styled from "@emotion/styled";

export const CoachQuestionWrapper = styled.div``;

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
  width: 90px;
  height: 35px;
  font-size: 16px;
  font-weight: 200;
  color: ${({ isCategory }) => (!isCategory ? "white" : "black")};
  border: ${({ isCategory }) => (!isCategory ? "none" : "1px solid #c4c4c4")};
  background-color: ${({ isCategory }) => (!isCategory ? "#ea345a" : "white")};
`;
export const CategoryPortfolioBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 35px;
  font-size: 16px;
  font-weight: 200;
  color: ${({ isCategory }) => (isCategory ? "white" : "black")};
  border: ${({ isCategory }) => (isCategory ? "none" : "1px solid #c4c4c4")};
  background-color: ${({ isCategory }) => (isCategory ? "#ea345a" : "white")};
`;

export const QuestionTitle = styled.input`
  height: 40px;
  padding: 3px 10px;
`;
export const QuestionContents = styled.textarea`
  resize: none;
  height: 200px;
  padding: 10px;
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
  height: 40px;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 15px;
  background: #ea345a;

  :hover {
    background-color: black;
  }
`;
