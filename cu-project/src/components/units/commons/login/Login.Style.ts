import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  height: calc(100vh - 20px);
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 70px; */
  background: linear-gradient(to bottom right, #d7455d, #6917d2);
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  z-index: 2;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 50px 40px 20px 40px;
  border-radius: 15px;
`;

export const Logo = styled.img`
  width: 100px;
  background-color: white;
  border: none;
  border-radius: 100%;
  z-index: 3;
  transition: transform 1s;
  :hover {
    transform: rotate(720deg);
  }
  position: relative;
  top: 50px;
`;

export const InputLabelText = styled.div`
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
`;
export const RegisterInput = styled.input`
  all: unset;
  background-color: white;
  letter-spacing: 2px;
  padding: 10px 10px;
  z-index: 2;
  font-size: 14px;
  border-radius: 5px;
  ::placeholder {
    font-size: 14px;
  }
`;

export const LoginBtn = styled.button`
  all: unset;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  color: white;
  letter-spacing: 2px;
  border-radius: 5px;
  background: linear-gradient(90deg, #e9345a 0%, #6002ee 100%);
  :hover {
    animation: hoverBtn 0.3s linear;
    background: linear-gradient(90deg, #e9345a 100%, #6002ee 100%);
  }

  @keyframes hoverBtn {
    0% {
      background: linear-gradient(90deg, #e9345a 0%, #6002ee 100%);
    }
    4% {
      background: linear-gradient(90deg, #e9345a 4%, #6002ee 100%);
    }
    6% {
      background: linear-gradient(90deg, #e9345a 6%, #6002ee 100%);
    }
    8% {
      background: linear-gradient(90deg, #e9345a 8%, #6002ee 100%);
    }
    10% {
      background: linear-gradient(90deg, #e9345a 10%, #6002ee 100%);
    }
    12% {
      background: linear-gradient(90deg, #e9345a 12%, #6002ee 100%);
    }
    14% {
      background: linear-gradient(90deg, #e9345a 14%, #6002ee 100%);
    }
    16% {
      background: linear-gradient(90deg, #e9345a 16%, #6002ee 100%);
    }
    18% {
      background: linear-gradient(90deg, #e9345a 18%, #6002ee 100%);
    }
    20% {
      background: linear-gradient(90deg, #e9345a 20%, #6002ee 100%);
    }
    22% {
      background: linear-gradient(90deg, #e9345a 22%, #6002ee 100%);
    }
    24% {
      background: linear-gradient(90deg, #e9345a 24%, #6002ee 100%);
    }
    26% {
      background: linear-gradient(90deg, #e9345a 26%, #6002ee 100%);
    }
    28% {
      background: linear-gradient(90deg, #e9345a 28%, #6002ee 100%);
    }
    30% {
      background: linear-gradient(90deg, #e9345a 30%, #6002ee 100%);
    }
    32% {
      background: linear-gradient(90deg, #e9345a 32%, #6002ee 100%);
    }
    34% {
      background: linear-gradient(90deg, #e9345a 34%, #6002ee 100%);
    }
    36% {
      background: linear-gradient(90deg, #e9345a 36%, #6002ee 100%);
    }
    38% {
      background: linear-gradient(90deg, #e9345a 38%, #6002ee 100%);
    }
    32% {
      background: linear-gradient(90deg, #e9345a 32%, #6002ee 100%);
    }
    34% {
      background: linear-gradient(90deg, #e9345a 34%, #6002ee 100%);
    }
    36% {
      background: linear-gradient(90deg, #e9345a 36%, #6002ee 100%);
    }
    38% {
      background: linear-gradient(90deg, #e9345a 38%, #6002ee 100%);
    }
    32% {
      background: linear-gradient(90deg, #e9345a 32%, #6002ee 100%);
    }
    34% {
      background: linear-gradient(90deg, #e9345a 34%, #6002ee 100%);
    }
    36% {
      background: linear-gradient(90deg, #e9345a 36%, #6002ee 100%);
    }
    38% {
      background: linear-gradient(90deg, #e9345a 38%, #6002ee 100%);
    }
    40% {
      background: linear-gradient(90deg, #e9345a 40%, #6002ee 100%);
    }
    42% {
      background: linear-gradient(90deg, #e9345a 42%, #6002ee 100%);
    }
    44% {
      background: linear-gradient(90deg, #e9345a 44%, #6002ee 100%);
    }
    46% {
      background: linear-gradient(90deg, #e9345a 46%, #6002ee 100%);
    }
    48% {
      background: linear-gradient(90deg, #e9345a 48%, #6002ee 100%);
    }
    50% {
      background: linear-gradient(90deg, #e9345a 50%, #6002ee 100%);
    }
    52% {
      background: linear-gradient(90deg, #e9345a 52%, #6002ee 100%);
    }
    54% {
      background: linear-gradient(90deg, #e9345a 54%, #6002ee 100%);
    }
    56% {
      background: linear-gradient(90deg, #e9345a 56%, #6002ee 100%);
    }
    58% {
      background: linear-gradient(90deg, #e9345a 58%, #6002ee 100%);
    }
    60% {
      background: linear-gradient(90deg, #e9345a 60%, #6002ee 100%);
    }
    62% {
      background: linear-gradient(90deg, #e9345a 62%, #6002ee 100%);
    }
    64% {
      background: linear-gradient(90deg, #e9345a 64%, #6002ee 100%);
    }
    66% {
      background: linear-gradient(90deg, #e9345a 66%, #6002ee 100%);
    }
    68% {
      background: linear-gradient(90deg, #e9345a 68%, #6002ee 100%);
    }
    70% {
      background: linear-gradient(90deg, #e9345a 70%, #6002ee 100%);
    }
    72% {
      background: linear-gradient(90deg, #e9345a 72%, #6002ee 100%);
    }
    74% {
      background: linear-gradient(90deg, #e9345a 74%, #6002ee 100%);
    }
    76% {
      background: linear-gradient(90deg, #e9345a 76%, #6002ee 100%);
    }
    78% {
      background: linear-gradient(90deg, #e9345a 78%, #6002ee 100%);
    }
    80% {
      background: linear-gradient(90deg, #e9345a 80%, #6002ee 100%);
    }
    82% {
      background: linear-gradient(90deg, #e9345a 82%, #6002ee 100%);
    }
    84% {
      background: linear-gradient(90deg, #e9345a 84%, #6002ee 100%);
    }
    86% {
      background: linear-gradient(90deg, #e9345a 86%, #6002ee 100%);
    }
    88% {
      background: linear-gradient(90deg, #e9345a 88%, #6002ee 100%);
    }
    90% {
      background: linear-gradient(90deg, #e9345a 90%, #6002ee 100%);
    }
    92% {
      background: linear-gradient(90deg, #e9345a 92%, #6002ee 100%);
    }
    94% {
      background: linear-gradient(90deg, #e9345a 94%, #6002ee 100%);
    }
    96% {
      background: linear-gradient(90deg, #e9345a 96%, #6002ee 100%);
    }
    98% {
      background: linear-gradient(90deg, #e9345a 98%, #6002ee 100%);
    }
    100% {
      background: linear-gradient(90deg, #e9345a 100%, #6002ee 100%);
    }
  }
`;

export const FindBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #c4c4c4;
  font-weight: lighter;
  font-size: 14px;
  width: 100%;
`;
export const FindPasswordBtn = styled.div`
  :hover {
    color: white;
    font-weight: normal;
  }
  cursor: pointer;
`;
export const FindIDBtn = styled.div`
  :hover {
    color: white;
    font-weight: normal;
  }
  cursor: pointer;
`;
export const SocialLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ececec;
  letter-spacing: 2px;
  width: 300px;
  height: 40px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ececec;
  z-index: 2;

  cursor: pointer;

  :hover {
    border: 1px solid black;
    color: white;
    background-color: black;
  }
`;
