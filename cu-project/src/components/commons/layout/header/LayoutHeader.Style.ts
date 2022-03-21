import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  height: 70px;
  background-color: #c4c4c4;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  position: fixed;
  top: 0;
`;

export const LeftHeader = styled.div``;
export const RightHeader = styled.div`
  display: flex;
`;

export const HeaderLogo = styled.div`
  font-weight: 700;
  font-size: 24px;
  background: linear-gradient(90deg, #e9345a 13.71%, #6002ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
export const HeaderCodingUs = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;
export const HeaderCoachingUs = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;

export const HeaderSign = styled.div`
  display: flex;
`;
export const SingIn = styled.div`
  min-width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;
export const SingUp = styled.div`
  min-width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;
export const HeaderMypage = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;

export const BoldLine = styled.div`
  width: 1%;
  animation: present 1s forwards;
  @keyframes present {
    0% {
      width: 1%;
      border-bottom: solid 3px black;
    }
    100% {
      width: 100%;
      border-bottom: solid 3px black;
    }
  }
`;
