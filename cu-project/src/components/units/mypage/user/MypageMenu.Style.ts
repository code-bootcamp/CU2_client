import styled from "@emotion/styled";
import Color from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 270px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TopMenu = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
`;

export const MyPageButton = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.isSelect === true ? "black" : "#F6F5F5"};
  color: ${(props) => (props.isSelect === true ? "white" : "#333333")};
  padding: 10px 5px;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ProfileBox = styled.div``;
export const ProfileImg = styled.img``;
export const ProfileHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & div {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const ProfileBody = styled.div``;

export const ProfileContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    color: #808080;
  }
  & button {
    font-size: 12px;
    border: none;
    background-color: transparent;
    :hover {
      cursor: pointer;
    }
  }
  & p {
    :hover {
      cursor: pointer;
    }
  }
`;

export const MainStack = styled.div`
  width: 120px;
  height: 36px;
  color: #333333;
  background-color: #f6f5f5;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  text-align: center;
  line-height: 36px;
`;

export const ChargeButton = styled.button`
  width: 50px;
  height: 32px;
  color: #333333;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  background-color: #f6f5f5;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const UserInfoEditBox = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    height: 45px;
    border: none;
    border-radius: 8px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & p {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
  }
  & button {
    border: none;
    font-size: 18px;
    background-color: transparent;
    & img {
      margin-right: 10px;
    }
    :hover {
      cursor: pointer;
    }
  }
`;
