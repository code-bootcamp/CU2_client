// import { ICoachingUsMainUIProps } from "../../../../commons/types/types";
import Blank from "../../../../commons/Blank";
import * as S from "./CoachingUsSidebar.Style";

export default function CoachingUsSidebarUIUI(props) {
  return (
    <S.SideBarContainer>
      <S.SideBarContainerHeader>관심 카테고리</S.SideBarContainerHeader>
      <S.SideBarContainerBody>
        {props.favorList ? (
          <>
            {props.favorList.split(",").map((favor, index) => (
              <S.FavorList key={index}>{favor}</S.FavorList>
            ))}{" "}
          </>
        ) : (
          <S.SideBarText>
            <Blank height="20px" />
            <p>관심카테고리를</p>
            <p>설정해주세요!</p>
          </S.SideBarText>
        )}
      </S.SideBarContainerBody>
    </S.SideBarContainer>
  );
}
