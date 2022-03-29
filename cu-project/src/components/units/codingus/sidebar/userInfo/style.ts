import styled from "@emotion/styled";
import { AiOutlineDown } from "react-icons/ai";
import Color from "../../../../../commons/styles/color";

interface IUserInfoProps {
  width?: string;
  height?: string;
}

export const Wrapper = styled.div`
  width: ${(props: IUserInfoProps) => (props.width ? props.width : "285px")};
  border: 1px solid #c4c4c4;
  border-radius: 8px;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfoHeader = styled(RowWrapper)`
  padding: 21px 21px 21px 21px;
  border-bottom: 1px solid ${Color.medium};
`;

export const UserInfo = styled.div``;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Color.medium};
`;

export const Point = styled(RowWrapper)``;

export const UserInfoBody = styled.div`
  padding: 0px 21px 40px 21px;
`;

export const Toggle = styled(RowWrapper)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  justify-content: space-between;
`;

export const DropDownIcon = styled(AiOutlineDown)`
  margin: 0px 21px 0px 0px;
  am :hover {
    cursor: pointer;
  }
`;

export const StackLabel = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #bdbdbd;
  :hover {
    cursor: pointer;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginLabel = styled(RowWrapper)`
  width: 100%;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  :hover{
      cursor: pointer;
  }
`;
