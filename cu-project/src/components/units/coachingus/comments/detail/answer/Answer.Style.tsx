import styled from "@emotion/styled";

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
  align-items: center;
  font-size: 16px;

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
  padding: 20px 30px;
`;

export const ContentsAnwer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 300;
  font-size: 14px;
  color: #333333;

  cursor: pointer;
`;
export const QuestionTitle = styled.div`
  display: flex;
`;
export const QuestionIcon = styled.div`
  width: 30px;
`;
export const QuestionText = styled.div`
  min-width: calc(100%);
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
`;
export const QuestionText2 = styled.div`
  padding: 3px;
  min-width: calc(100%);
  font-size: 14px;
  margin-left: 35px;
`;
export const ContentsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 18px;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  :hover {
    background: #e9345a;
    color: white;
  }

  cursor: pointer;
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
  :hover {
    background: black;
    color: white;
  }
  cursor: pointer;
`;

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

// 답변 잠김 영역

export const LockAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: #c4c4c4;
`;
export const AnswerUnlockBtn = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  all: unset;
  background-color: #ea345a;
  border-radius: 15px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  padding: 10px 20px;

  :hover {
    background-color: white;
    color: black;
  }
`;

// 결제 modal 창

export const ModalWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  z-index: 10;
  position: fixed;
  left: 0%;
  top: 0%;
  opacity: 0.6;
  background: black;
`;

export const PointModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 40%;
  top: 20%;
  width: 350px;
  height: 450px;
  opacity: none;
  background: white;
  z-index: 11;
  border: 1px solid #c4c4c4;
  padding: 30px 0 10px 0;
  /* border-radius: 15px; */
  animation: modalOpen 1s ease-in-out;
  @keyframes modalOpen {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export const BtnStyle = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 100%;
  background: linear-gradient(90deg, #e9345a 13.71%, #6002ee 100%);
`;
export const ModalText = styled.div`
  font-size: 21px;
`;
export const ModalSubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  /* line-height: 5px; */
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 5px;
`;
export const ConfirmBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 50px;
  :hover {
    background-color: #ea345a;
  }
`;
export const refuseBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 50px;

  :hover {
    background-color: #ea345a;
  }
`;
