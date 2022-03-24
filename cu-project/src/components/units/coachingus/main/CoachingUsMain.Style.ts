import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CoachingUsMainBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  @media screen and (max-width: 1440px) {
    width: 1440px;
  }
`;
export const LandingBody = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const BodyForSidebar = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchBar = styled.div`
  height: 30px;
  width: 70%;
  border-radius: 20px;
  background-color: #afa9a9;
`;

// Sidebar 영역
export const LeftSideBar = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
  min-height: 100vh;
  position: absolute;
  left: 0;
`;
