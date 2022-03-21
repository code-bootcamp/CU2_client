import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0 100px 50px 160px;
  display: flex;

  font-size: 14px;
`;

export const CoachingUs = styled.div`
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;

export const Coach = styled.div`
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;

export const Column = styled.div`
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isCurrent }) => (isCurrent ? "bold" : "normal")};
  cursor: pointer;
`;

export const CoachRegister = styled.div`
  min-width: 100px;
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
