import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 0;
`;

export const LandingBody = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.div`
  height: 30px;
  width: 70%;
  border-radius: 20px;
  background-color: #afa9a9;
`;

export const ContainerCoaches = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-height: 200px;
  border-radius: 20px;
  padding: 30px 25px;
`;
export const ContainerColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-height: 200px;
  border-radius: 20px;
  padding: 30px 25px;
`;

// Sidebar 영역
export const LeftSideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 300px;
`;

export const RightSideBar = styled.div`
  height: 100%;
  min-width: 300px;
`;
