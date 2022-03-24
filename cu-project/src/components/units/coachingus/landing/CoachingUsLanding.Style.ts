import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 100px 0 50px 0;
`;

// Body 영역
export const LandingBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 1920px;
  @media screen and (max-width: 1440px) {
    min-width: 1440px;
  }
`;

export const CategoryTitle = styled.div`
  width: 55%;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 2px solid black;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border-radius: 20px;
`;

export const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CorporationContatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 220px;
  height: 200px;
  min-height: 150px;
  margin: 20px 10px 0px 10px;
  border-radius: 15px;
  background-color: ${({ isfavorList }) =>
    isfavorList ? "#ea345a" : "#f6f5f5"};
  color: ${({ isfavorList }) => (isfavorList ? "white" : "black")};
  :hover {
    background-color: #ea345a;
    color: white;
  }
  cursor: pointer;
`;
export const CorTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export const CorSubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: lighter;
`;
export const CorPicture = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  background-color: #c4c4c4;
`;

export const CorporationContatinerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 35%;
  border-radius: 0 0 15px 15px;
  padding: 5px 10px 5px 10px;
  /* background-color: #f6f5f5; */
`;
export const ContainerBtnBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`;
export const GetStartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: lighter;
  cursor: pointer;
  width: 180px;
  height: 40px;
  font-size: 20px;
  font-weight: 400;
  padding-top: 5px;
  color: white;
  background: #ea345a;
`;

// SideBar 영역

export const LeftSideBar = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
  min-height: 100vh;
  position: absolute;
  left: 0;
`;

export const RightSideBar = styled.div`
  display: flex;
  min-width: 300px;
  min-height: 100vh;
`;

export const SideBarContainer = styled.div`
  width: 200px;
  height: 200px;
  min-height: 200px;
  margin: 0px 10px 0px 10px;
  border-radius: 15px;
  background-color: #f6f5f5;

  position: fixed;
  top: 3%;
`;
