import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 20px);
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #d7455d, #6917d2);
  /* background: linear-gradient(to bottom right, #413e98, #ab4db7); */
`;

export const CoachingRegisterContainer = styled.div`
  width: 900px;
  height: 500px;
  background-color: white;
  display: flex;
  box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.2),
    0 16px 20px 0 rgba(0, 0, 0, 0.19);
  animation: fadeIn 2s ease-in-out;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const RegisterContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;

  background-color: white;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const RegisterContainerRight = styled.div`
  width: 450px;
  height: 100%;
  background-image: url("/registerImg.png");
  background-size: 100%;
`;

// register

export const RegisterForm = styled.div`
  min-width: 400px;
  height: max-content;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
`;
export const FormTitle = styled.h1`
  all: unset;
  font-size: 24px;
  font-weight: 700;
  color: #bdbdbd;
`;
export const FormSubTitle = styled.p``;

export const FormInput = styled.input`
  all: unset;
  width: 70%;
  line-height: 20px;
  padding: 5px;
  transition: border 1s ease-in-out;

  border-bottom: ${({ isFull }) =>
    isFull ? "1px solid #bdbdbd" : "1px solid white"};

  :focus {
    auto: true;
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const CorGroup = styled.div`
  display: flex;
`;
export const CorGroupButton = styled.button`
  all: unset;
  background-color: ${({ isCurrent }) => (isCurrent ? "#ea345a" : "white")};
  color: ${({ isCurrent }) => (isCurrent ? "white" : "#ea345a")};

  border: 1px solid #ea345a;
  border-radius: 15px;
  padding: 5px 10px;

  :hover {
    background-color: #ea345a;
    color: white;
    border: 1px solid #ea345a;
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const GetOutButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 15px;
  padding: 5px 10px;
  width: 100px;
  :hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;
export const RegisterButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #ea345a;
  border: 1px solid #ea345a;
  border-radius: 15px;
  padding: 5px 10px;
  width: 100px;
  :hover {
    background-color: #ea345a;
    color: white;
    border: 1px solid #ea345a;
  }
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0;
`;

export const TagInput = styled.input`
  display: ${({ isFull }) => (isFull ? "none" : "flex")};
  height: 35px;
  padding-left: 5px;
  margin-left: 5px;
  border: none;
  :focus {
    outline: none;
    border: none;
  }
`;
export const TagItem = styled.div`
  margin: 0 5px 5px 5px;
  color: white;
  font-weight: normal;
  background: #ea345a;
  padding: 5px 15px;
  border-radius: 12px;

  cursor: pointer;
`;
