import { useEffect, useState } from "react";
import { getLoggenInUser } from "../../../../commons/libraries/getLoggedInUser";
import useStore from "../../../../commons/store/store";
import { IUser } from "../../../../commons/types/generated/types";
import { useGetUserInfo } from "../../../commons/hooks/useGetUserInfo";
import CodingUsSidebarUI from "./Sidebar.Presenter";

export default function CodingUsSidebar () {
    const accessToken = useStore((state) => state.accessToken);
    const [userInfo, setUserInfo] = useState<IUser>();
    useGetUserInfo();
    useEffect(() => {
      if (!accessToken) return;
      const getUserInfo = async () => {
        const userInfo = await getLoggenInUser(accessToken);
        setUserInfo(userInfo);
      };
      getUserInfo();
    }, [accessToken]);
    return (
        <CodingUsSidebarUI userInfo={userInfo}/>
    );
}