import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 70px);
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 10px;
  background: linear-gradient(to bottom right, #d7455d, #6917d2);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  /* justify-content: space-between; */
  background-color: white;
  /* padding: 20px 40px; */
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 14px 18px 0 rgba(0, 0, 0, 0.2),
    0 16px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FindCategory = styled.div`
  width: 100%;
  display: flex;
`;
export const FindCategoryId = styled.div`
  border-bottom: ${({ isFindCategory }) =>
    isFindCategory ? "3px solid #d7455d" : "none"};
  color: ${({ isFindCategory }) => (isFindCategory ? "#d7455d" : "none")};
  font-weight: ${({ isFindCategory }) => (isFindCategory ? "600" : "300")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 5px;
  cursor: pointer;
`;
export const FindCategoryPassword = styled.div`
  border-bottom: ${({ isFindCategory }) =>
    isFindCategory ? "none" : "3px solid #6917d2"};
  color: ${({ isFindCategory }) => (isFindCategory ? "none" : "#6917d2")};
  font-weight: ${({ isFindCategory }) => (isFindCategory ? "300" : "600")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 5px;
  cursor: pointer;
`;

export const Contents = styled.div`
  padding: 5px 20px;
  height: 100%;
`;
export const FindLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  & > button {
    all: unset;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    color: white;
    letter-spacing: 2px;
    border-radius: 5px;
    background: linear-gradient(90deg, #e9345a 0%, #6002ee 100%);

    :hover {
      animation: hoverBtn 0.3s linear;
      background: linear-gradient(90deg, #e9345a 100%, #6002ee 100%);
    }
    cursor: pointer;
  }
`;

export const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputBox = styled.input`
  all: unset;
  background-color: white;
  letter-spacing: 2px;
  padding: 10px;
  z-index: 2;
  font-size: 14px;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  ::placeholder {
    font-size: 14px;
  }
`;
export const InputBox2 = styled.input`
  all: unset;
  background-color: white;
  letter-spacing: 2px;
  padding: 10px;
  z-index: 2;
  font-size: 14px;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  ::placeholder {
    font-size: 14px;
  }
`;

export const AuthBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AuthBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border: 1px solid #b4b4b4;
  border-radius: 5px;

  padding: 0px 0 0 10px;
  ::placeholder {
    font-size: 14px;
  }
  & > button {
    all: unset;
    color: white;
    padding: 8px;
    border-radius: 3px;
    font-size: 14px;
    background: linear-gradient(90deg, #e9345a 0%, #6002ee 100%);
    :hover {
      animation: hoverBtn 0.3s linear;
      background: linear-gradient(90deg, #e9345a 100%, #6002ee 100%);
    }
    cursor: pointer;
  }
`;
export const InputAuthBox = styled.input`
  all: unset;
  background-color: white;
  letter-spacing: 2px;
  /* padding: 10px 10px; */
  height: 100%;
  z-index: 2;
  font-size: 14px;

  ::placeholder {
    font-size: 14px;
  }
`;
export const InputAuthBox2 = styled.input`
  all: unset;
  background-color: white;
  letter-spacing: 2px;
  /* padding: 10px 10px; */
  height: 100%;
  z-index: 2;
  font-size: 14px;

  ::placeholder {
    font-size: 14px;
  }
`;
