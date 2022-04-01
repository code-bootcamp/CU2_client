import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: -20px;
  margin-left: -1px;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 100px;
  border: none;
  border-radius: 100%;
  z-index: 3;
  position: absolute;
  top: 50px;
  left: 50px;
  animation: firstFadeIn 1s ease-in-out;
  cursor: pointer;
`;
