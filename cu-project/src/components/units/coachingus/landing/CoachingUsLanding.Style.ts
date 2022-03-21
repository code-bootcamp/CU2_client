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

// Body 영역
export const LandingBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-height: 200px;
  border-radius: 20px;
  background-color: #f6f5f5;
  padding: 30px 25px;
`;
export const SearchBar = styled.div`
  height: 30px;
  width: 70%;
  border-radius: 20px;
  background-color: #afa9a9;
`;
export const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CorporationContatiner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 220px;
  height: 220px;
  min-height: 150px;
  margin: 20px 10px 0px 10px;
  border-radius: 15px;
  background-color: white;
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
export const CorporationContatinerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 35%;
  border-radius: 0 0 15px 15px;
  padding: 5px 10px 5px 10px;
  background-color: #bbbbbb;
`;
export const ContainerBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  cursor: pointer;
`;
export const GetStartBtn = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  padding: 3px 10px 5px 10px;
  background-color: black;
  color: white;
`;

// SideBar 영역

export const LeftSideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 300px;
`;

export const RightSideBar = styled.div`
  height: 100%;
  min-width: 300px;
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
