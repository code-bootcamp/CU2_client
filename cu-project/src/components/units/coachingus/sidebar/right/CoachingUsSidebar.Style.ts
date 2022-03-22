import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  width: 200px;
  height: 200px;
  min-height: 200px;
  margin: 0px 10px 0px 10px;
  border-radius: 15px;
  background-color: #f6f5f5;

  position: sticky;
  top: 15%;
`;

export const SideBarContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 20%;
  border-radius: 15px 15px 0 0;
  padding: 5px 10px 5px 10px;
`;

export const SideBarContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  color: #c4c4c4;
`;
