import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: -20px;
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
