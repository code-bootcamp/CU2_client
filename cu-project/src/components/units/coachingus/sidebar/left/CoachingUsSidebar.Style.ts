import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  width: 200px;
  height: fit-content;
  margin: 0px 10px 0px 10px;
  border-radius: 15px;
  background-color: #f6f5f5;

  position: sticky;
  top: 3%;
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
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #c4c4c4;
`;
export const SideBarText = styled.div``;

export const FavorList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 2rem;
  border-radius: 10px;
  color: black;
  border: 1px solid #c4c4c4;
  margin: 5px 0;
`;
