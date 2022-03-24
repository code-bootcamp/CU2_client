import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const SideBarContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 18px;
  width: 100%;
  height: 20%;
  border-radius: 15px 15px 0 0;
  padding: 5px 10px 5px 10px;

  border-bottom: 2px solid black;
`;

export const SideBarContainerBody = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #c4c4c4;
`;
