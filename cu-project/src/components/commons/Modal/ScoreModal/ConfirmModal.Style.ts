import styled from "@emotion/styled";

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

export const Logo = styled.img`
  width: 100px;
  background-color: white;
  border: none;
  border-radius: 100%;
`;

export const ModalText = styled.div`
display: flex;
  font-size: 30px;
  p{
    color: red;
  }
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
