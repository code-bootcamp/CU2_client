import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
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

export const CommentsBody = styled.div`
  min-width: 800px;
  padding: 0 0 50px 0;
  & > p {
    font-size: 24px;
    font-weight: 400;
  }
  padding: 0 0 50px 0px;
`;

// body 영역
export const CommentsContainer = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  margin: 30px 0;
`;
export const CommentsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const CommentsTitleLeft = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 12px;
  & > h1 {
    display: flex;
    width: fit-content;
    align-items: center;
    font-size: 16px;
    margin-right: 5px;
  }

  & > p {
    font-size: 12px;
    font-weight: 300;
    color: #b4b4b4;
    margin-right: 10px;
    padding-top: 4px;
  }

  cursor: pointer;
`;
export const TitlePicture = styled.div`
  border-radius: 100%;
  height: 35px;
  width: 35px;
  background: gray;
`;

export const CommentsTitleRight = styled.div`
  color: #bdbdbd;
  font-size: 12px;
`;
export const CommentsContents = styled.div`
  width: 800px;
  padding: 20px 30px;
`;
export const ContentsQuestion = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 16px;
  color: #333333;

  cursor: pointer;
`;
export const ContentsAnwer = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 300;
  font-size: 14px;
  color: #333333;

  cursor: pointer;
`;
export const QuestionIcon = styled.div`
  width: 30px;
`;
export const QuestionText = styled.div`
  padding: 3px;
  min-width: calc(100% - 30px);
`;
export const ContentsInfo = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContentsInfoLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  width: 150px;
  border-radius: 10px;
  border: 1px solid #e9345a;
  color: #e9345a;
  text-align: center;
`;
export const ContentsInfoDislikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid #808080;
  color: #808080;
`;

export const AnswerSheet = styled.div`
  display: flex;
  flex-direction: column;
`;
