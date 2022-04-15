import { IUser } from "../../../../commons/types/generated/types";
import Blank from "../../../commons/Blank";
import CodingUsNavbar from "./navbar";
import * as S from "./Sidebar.Style";
import SidebarUserInfo from "./userInfo";
export default function CodingUsSidebarUI(props: {userInfo: IUser | undefined}) {
  return (
    <S.SidebarWrapper>
      <CodingUsNavbar />
      <Blank height="40px" />
      <SidebarUserInfo userInfo = {props.userInfo}/>
    </S.SidebarWrapper>
  );
}

